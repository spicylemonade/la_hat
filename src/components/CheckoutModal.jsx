import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, Send } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import { processOrder } from '../services/emailService'

export default function CheckoutModal() {
  const { 
    cartItems, 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    updateQuantity, 
    removeFromCart, 
    getTotalPrice,
    clearCart 
  } = useCart()
  
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [customerAddress, setCustomerAddress] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!customerName.trim() || !customerPhone.trim() || !customerAddress.trim()) {
      alert('Vui lòng điền họ tên, số điện thoại và địa chỉ')
      return
    }

    if (cartItems.length === 0) {
      alert('Giỏ hàng của bạn đang trống')
      return
    }

    setIsSubmitting(true)
    
    try {
      await processOrder({
        customerName: customerName.trim(),
        customerPhone: customerPhone.trim(),
        customerAddress: customerAddress.trim(),
        cartItems,
        totalPrice: getTotalPrice()
      })
      
      // Reset form and close modal
      setCustomerName('')
      setCustomerPhone('')
      setCustomerAddress('')
      clearCart()
      setIsCheckoutOpen(false)
    } catch (error) {
      console.error('Order submission failed:', error)
      alert('Không thể gửi đơn hàng. Vui lòng thử lại.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (isSubmitting) return
    setIsCheckoutOpen(false)
  }

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-cream rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-headline text-matcha">Hoàn Tất Đơn Hàng</h2>
              <button
                onClick={handleClose}
                className="p-1 rounded-full hover:bg-matcha/10 transition-colors"
                disabled={isSubmitting}
              >
                <X className="w-6 h-6 text-matcha" />
              </button>
            </div>

            {/* Order Items */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-toast mb-4">Tóm Tắt Đơn Hàng</h3>
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl p-4 flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-toast">{item.name}</h4>
                      <p className="text-sm text-toast/70">Size: {item.size}</p>
                      <p className="text-sm font-semibold text-matcha">{item.unitPrice} mỗi ly</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-matcha/20 text-matcha hover:bg-matcha/40 flex items-center justify-center transition-colors"
                          disabled={isSubmitting}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        
                        <span className="w-8 text-center font-semibold text-matcha">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-matcha/20 text-matcha hover:bg-matcha/40 flex items-center justify-center transition-colors"
                          disabled={isSubmitting}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      {/* Price */}
                      <div className="w-16 text-right font-bold text-matcha">
                        {item.price}
                      </div>
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 rounded-full bg-strawberry/20 text-strawberry hover:bg-strawberry/40 flex items-center justify-center transition-colors"
                        disabled={isSubmitting}
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Total */}
              <div className="bg-matcha/10 rounded-xl p-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-toast">Tổng Cộng:</span>
                  <span className="text-2xl font-bold text-matcha">${getTotalPrice()}</span>
                </div>
              </div>
            </div>

            {/* Customer Details Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-semibold text-toast mb-4">Thông Tin Liên Hệ</h3>
              
              <div>
                <label className="block text-sm font-semibold text-toast mb-2">
                  Họ Tên *
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-matcha/30 focus:border-matcha focus:outline-none focus:ring-2 focus:ring-matcha/20 transition-all"
                  placeholder="Nhập họ tên của bạn"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-toast mb-2">
                  Số Điện Thoại *
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full p-3 rounded-xl border border-matcha/30 focus:border-matcha focus:outline-none focus:ring-2 focus:ring-matcha/20 transition-all"
                  placeholder="Nhập số điện thoại của bạn"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-toast mb-2">
                  Địa Chỉ *
                </label>
                <input
                  type="text"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full p-3 rounded-xl border border-matcha/30 focus:border-matcha focus:outline-none focus:ring-2 focus:ring-matcha/20 transition-all"
                  placeholder="Nhập địa chỉ của bạn"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 py-3 px-4 rounded-xl border border-matcha/30 text-matcha hover:bg-matcha/10 transition-colors"
                  disabled={isSubmitting}
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || cartItems.length === 0}
                  className="flex-1 btn-matcha flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-toast/30 border-t-toast rounded-full animate-spin"></div>
                      Đang Đặt Hàng...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Đặt Hàng
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-4 text-xs text-toast/60 text-center">
              Chi tiết đơn hàng sẽ được gửi email đến quán. Chúng tôi sẽ liên hệ về thanh toán và giao hàng.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 