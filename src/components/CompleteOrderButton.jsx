import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, ChevronUp } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import CheckoutModal from './CheckoutModal'

export default function CompleteOrderButton() {
  const { cartItems, getTotalItems, isCheckoutOpen, setIsCheckoutOpen } = useCart()
  const totalItems = getTotalItems()

  if (totalItems === 0) return null

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsCheckoutOpen(true)}
          className="bg-matcha hover:bg-matcha/90 text-cream font-semibold py-4 px-6 rounded-full shadow-lg flex items-center gap-3 transition-all duration-300"
        >
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            <motion.div
              key={totalItems}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-strawberry text-cream text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
            >
              {totalItems}
            </motion.div>
          </div>
          <span>Hoàn Tất Đơn Hàng</span>
          <ChevronUp className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {/* Checkout Modal */}
      <CheckoutModal />
    </>
  )
} 