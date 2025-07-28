import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-toast text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h3 className="text-3xl font-headline text-matcha mb-4">Lá & Hạt</h3>
              <p className="text-cream/80 mb-4">
                Đồ uống matcha cao cấp và cà phê truyền thống Việt Nam, được pha chế tận tâm và phục vụ trong không gian ấm cúng.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h4 className="text-xl font-headline text-strawberry mb-4">Liên Hệ</h4>
              <div className="space-y-2 text-cream/80">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Zalo: 0906615103
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  la.hat.vietnam@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Imperia An Phu, Quận 2, TP.HCM
                </p>
              </div>
            </motion.div>

            {/* Hours & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center md:text-left"
            >
              <h4 className="text-xl font-headline text-skyPastel mb-4">Theo Dõi</h4>
              <div className="space-y-2 text-cream/80 mb-4">
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Hàng Ngày: 7:00 AM - 9:00 PM
                </p>
                <p className="flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  @lavahat.hcm.q2
                </p>
                <p className="text-sm text-cream/60">
                  Khuyến mãi khai trương: 10% giảm giá giao hàng Q2!
                </p>
              </div>
              
              {/* Order Buttons */}
              <div className="space-y-2">
                <motion.a
                  href="tel:0906615103"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-matcha hover:bg-matcha/80 text-toast font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Đặt Hàng Qua Zalo
                </motion.a>
                <motion.a
                  href="mailto:la.hat.vietnam@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-strawberry hover:bg-strawberry/80 text-toast font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Gửi Email
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-cream/20 py-6 text-center text-cream/60"
        >
          <p>&copy; {currentYear} Lá & Hạt. Tạo ra với 💚 tại Việt Nam.</p>
        </motion.div>
      </div>
    </footer>
  )
} 