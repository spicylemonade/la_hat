import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Phone, Mail } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import menuData from '../data/menu.json'

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Tất Cả Đồ Uống' },
    { id: 'matcha', name: 'Matcha Cao Cấp (Natsu)' },
    { id: 'coffee', name: 'Cà Phê Espresso Đậm Đà' }
  ]

  const getFilteredItems = () => {
    if (selectedCategory === 'all') {
      return [
        ...menuData.categories.matcha.items,
        ...menuData.categories.coffee.items
      ]
    }
    return menuData.categories[selectedCategory]?.items || []
  }

  const filteredItems = getFilteredItems()

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-strawberry/5 to-skyPastel/10">
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-matcha/10 to-strawberry/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-headline text-matcha mb-4">
              Thực Đơn
            </h1>
            <p className="text-xl text-toast/80 max-w-2xl mx-auto">
              Khám phá bộ sưu tập đồ uống cao cấp của chúng tôi, từ cà phê truyền thống Việt Nam đến những sáng tạo matcha đặc biệt
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-16 bg-cream/95 backdrop-blur-sm border-b border-matcha/20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-matcha text-toast shadow-lg'
                    : 'bg-matcha/20 text-matcha hover:bg-matcha/40 hover:shadow-md'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard item={item} />
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 mx-auto mb-4 text-toast/50" />
              <h3 className="text-2xl font-headline text-toast mb-2">Không tìm thấy đồ uống</h3>
              <p className="text-toast/70">Hãy thử chọn danh mục khác</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Order CTA Section */}
      <section className="py-16 bg-gradient-to-r from-matcha/10 to-strawberry/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-headline text-matcha mb-4">
              Sẵn Sàng Đặt Hàng?
            </h2>
            <p className="text-lg text-toast/80 mb-4">
              Liên hệ với chúng tôi qua Zalo hoặc email để đặt hàng và trải nghiệm ly cà phê hoàn hảo
            </p>
            <p className="text-sm text-matcha font-semibold mb-8">
              Khai trương: 10% giảm giá giao hàng trong Quận 2! Theo dõi @lavahat.hcm.q2
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:0906615103"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-matcha flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Đặt Hàng Qua Zalo
              </motion.a>
              <motion.a
                href="mailto:la.hat.vietnam@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-strawberry hover:bg-strawberry/80 text-toast font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Gửi Email Cho Chúng Tôi
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 