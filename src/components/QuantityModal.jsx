import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, ShoppingCart } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

export default function QuantityModal({ isOpen, onClose, item, selectedSize }) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(item, selectedSize, quantity)
    setQuantity(1) // Reset quantity
    onClose()
  }

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1))
  }

  const totalPrice = (parseFloat(item.prices[selectedSize].replace('$', '')) * quantity).toFixed(2)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-cream rounded-2xl p-6 w-full max-w-md shadow-2xl"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-headline text-matcha">Thêm Vào Đơn Hàng</h2>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-matcha/10 transition-colors"
              >
                <X className="w-6 h-6 text-matcha" />
              </button>
            </div>

            {/* Product Info */}
            <div className="bg-strawberry/10 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-toast mb-2">{item.name}</h3>
              <p className="text-sm text-toast/70 mb-2">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-matcha">Size: {selectedSize}</span>
                <span className="text-lg font-bold text-matcha">{item.prices[selectedSize]} mỗi ly</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-toast mb-3">Số Lượng</label>
              <div className="flex items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={decrementQuantity}
                  className="w-10 h-10 rounded-full bg-matcha/20 text-matcha hover:bg-matcha/40 flex items-center justify-center transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </motion.button>
                
                <div className="w-16 h-10 bg-white rounded-xl flex items-center justify-center border-2 border-matcha/20">
                  <span className="text-xl font-bold text-matcha">{quantity}</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={incrementQuantity}
                  className="w-10 h-10 rounded-full bg-matcha/20 text-matcha hover:bg-matcha/40 flex items-center justify-center transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Total Price */}
            <div className="bg-matcha/10 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-toast">Tổng Cộng:</span>
                <span className="text-2xl font-bold text-matcha">${totalPrice}</span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="w-full btn-matcha flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Thêm Vào Đơn Hàng
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 