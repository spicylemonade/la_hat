import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Store, Sparkles, Leaf } from 'lucide-react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import menuData from '../data/menu.json'

export default function Home() {
  // Get a few featured items from each category
  const featuredItems = [
    ...menuData.categories.matcha.items.slice(0, 2),
    ...menuData.categories.coffee.items.slice(0, 1),
    ...menuData.categories.tea.items.slice(1, 2),
  ]

  return (
    <div>
      <Hero />
      
      {/* Featured Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-b from-cream to-strawberry/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-headline text-matcha mb-4">
              Đồ Uống Đặc Trưng
            </h2>
            <p className="text-xl text-toast/80 max-w-2xl mx-auto">
              Khám phá những đồ uống đặc trưng Matcha cao cấp Nhật Bản (Natsu) và cà phê espresso đậm đà của chúng tôi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard item={item} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-matcha text-lg px-8 py-4"
              >
                Xem Toàn Bộ Thực Đơn
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-skyPastel/20 via-cream to-matcha/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-headline text-matcha mb-6">
                Câu Chuyện Của Chúng Tôi
              </h2>
              <p className="text-lg text-toast/80 mb-6">
                Sinh ra từ niềm đam mê văn hóa cà phê Việt Nam đích thực và nghệ thuật matcha, 
                Lá & Hạt mang đến sự kết hợp tuyệt vời của cả hai thế giới trong một không gian ấm cúng, thân thiện.
              </p>
              <p className="text-lg text-toast/80 mb-8">
                Mỗi ly đồ uống được pha chế tận tâm, sử dụng nguyên liệu cao cấp và kỹ thuật truyền thống 
                được truyền lại qua nhiều thế hệ.
              </p>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-matcha text-matcha font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:bg-matcha hover:text-toast"
                >
                  Tìm Hiểu Thêm
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Placeholder for cafe image */}
              <div className="bg-gradient-to-br from-matcha/30 to-strawberry/30 rounded-2xl p-8 text-center">
                <Store className="w-16 h-16 mx-auto mb-4 text-toast/70" />
                <p className="text-toast/70">Không gian ấm cúng đang chờ đón bạn</p>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 w-16 h-16 bg-skyPastel/40 rounded-full flex items-center justify-center"
              >
                <Sparkles className="w-8 h-8 text-skyPastel" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-strawberry/40 rounded-full flex items-center justify-center"
              >
                <Leaf className="w-6 h-6 text-matcha" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 