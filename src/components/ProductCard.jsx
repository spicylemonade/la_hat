import { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee } from 'lucide-react'
import QuantityModal from './QuantityModal'

export default function ProductCard({ item }) {
  const [selectedSize, setSelectedSize] = useState('M')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.03, 
        rotate: [0, -1, 0, 1, 0],
        boxShadow: "0 20px 40px rgba(166, 220, 164, 0.2)"
      }}
      transition={{ 
        duration: 0.3,
        rotate: { duration: 0.5, ease: "easeInOut" }
      }}
      className="card-soft p-6 flex flex-col items-center text-center h-full"
    >
      {/* Product Image Placeholder */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="w-32 h-32 bg-gradient-to-br from-matcha/20 to-strawberry/20 rounded-full flex items-center justify-center mb-4 overflow-hidden"
      >
        <Coffee className={`w-12 h-12 ${item.name.includes('Matcha') ? 'text-matcha/70' : 'text-toast/70'}`} />
      </motion.div>

      {/* Product Info */}
      <h3 className="font-headline text-xl text-toast mb-2">{item.name}</h3>
      <p className="text-sm text-toast/70 mb-4 flex-grow">{item.description}</p>

      {/* Size Selection */}
      <div className="flex space-x-2 mb-4">
        {Object.keys(item.prices).map((size) => (
          <motion.button
            key={size}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedSize(size)}
            className={`w-8 h-8 rounded-full text-xs font-semibold transition-all duration-200 ${
              selectedSize === size
                ? 'bg-matcha text-toast shadow-md'
                : 'bg-matcha/20 text-matcha hover:bg-matcha/40'
            }`}
          >
            {size}
          </motion.button>
        ))}
      </div>

      {/* Price */}
      <motion.div
        key={selectedSize}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-2xl font-bold text-matcha mb-4"
      >
        {item.prices[selectedSize]}
      </motion.div>

      {/* Order Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className="btn-matcha w-full"
      >
        Đặt Hàng
      </motion.button>

      {/* Quantity Modal */}
      <QuantityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={item}
        selectedSize={selectedSize}
      />
    </motion.div>
  )
} 