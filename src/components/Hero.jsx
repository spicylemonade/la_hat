import { motion } from 'framer-motion'
import { Coffee } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-strawberry/10 to-skyPastel/20">
      {/* Animated blobs */}
      <div className="blob-bg">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-matcha/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-strawberry/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-skyPastel/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-headline text-matcha mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Lá & Hạt
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-toast mb-8 max-w-2xl mx-auto"
          >
            Đồ uống matcha cao cấp và cà phê truyền thống Việt Nam trong không gian ấm cúng, thân thiện
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
          >
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(166, 220, 164, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-matcha inline-block"
            >
              Khám Phá Thực Đơn
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-transparent border-2 border-matcha text-matcha font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:bg-matcha hover:text-toast"
            >
              Câu Chuyện Của Chúng Tôi
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating matcha cups */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-16 h-16 hidden lg:block"
        >
          <div className="w-16 h-16 bg-matcha/30 rounded-full flex items-center justify-center">
            <Coffee className="w-8 h-8 text-matcha" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 left-10 w-12 h-12 hidden lg:block"
        >
          <div className="w-12 h-12 bg-strawberry/30 rounded-full flex items-center justify-center">
            <Coffee className="w-6 h-6 text-toast" />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 