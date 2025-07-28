import { motion } from 'framer-motion'
import { Leaf, Heart, Home, Award, Coffee, MapPin, Clock, Phone, Mail } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Chất Lượng Cao Cấp',
      description: 'Chúng tôi chỉ chọn matcha và cà phê hạt tốt nhất, đảm bảo mỗi ly đều đạt tiêu chuẩn cao.'
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      title: 'Di Sản Việt Nam',
      description: 'Truyền thống cà phê của chúng tôi có nguồn gốc từ văn hóa Việt Nam, mang đến hương vị đích thực trong từng ly.'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Pha Chế Tận Tâm',
      description: 'Mỗi ly đồ uống được chuẩn bị cẩn thận và tỉ mỉ, tạo nên những khoảnh khắc vui vẻ trong ngày của bạn.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-strawberry/5 to-skyPastel/10">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-matcha/10 to-strawberry/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-headline text-matcha mb-6">
              Về Lá & Hạt
            </h1>
            <p className="text-xl text-toast/80 max-w-3xl mx-auto">
              Nơi văn hóa cà phê truyền thống Việt Nam gặp gỡ nghệ thuật pha chế matcha cao cấp, 
              tạo nên trải nghiệm độc đáo trong từng ly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-headline text-matcha mb-6">Câu Chuyện Của Chúng Tôi</h2>
              <div className="space-y-4 text-lg text-toast/80">
                <p>
                  Lá & Hạt ra đời từ một giấc mơ đơn giản: tạo nên cầu nối giữa truyền thống cà phê 
                  phong phú của Việt Nam và nghệ thuật pha chế matcha thanh tịnh của Nhật Bản.
                </p>
                <p>
                  Tên gọi của chúng tôi, có nghĩa là "Lá & Hạt," đại diện cho nền tảng của nghề thủ công này.
                </p>
                <p>
                  Chúng tôi tin rằng những ly đồ uống tuyệt vời đến từ nguyên liệu tuyệt vời, được pha chế 
                  bằng kỹ thuật truyền thống và phục vụ với sự chăm sóc chân thành. Mỗi ly đều kể một câu chuyện 
                  về di sản, chất lượng, và niềm vui đơn giản khi chia sẻ đồ uống ngon với những người tốt.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Placeholder for story image */}
              <div className="bg-gradient-to-br from-matcha/20 to-strawberry/20 rounded-2xl p-12 text-center">
                <Leaf className="w-20 h-20 mx-auto mb-6 text-matcha" />
                <p className="text-xl text-toast/70 font-headline">From leaf to cup</p>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 w-20 h-20 bg-skyPastel/30 rounded-full flex items-center justify-center"
              >
                <Coffee className="w-8 h-8 text-toast" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-6 -right-6 w-16 h-16 bg-matcha/30 rounded-full flex items-center justify-center"
              >
                <Coffee className="w-6 h-6 text-matcha" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-strawberry/10 to-skyPastel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-headline text-matcha mb-4">Những Giá Trị Cốt Lõi</h2>
            <p className="text-lg text-toast/80 max-w-2xl mx-auto">
              Những nguyên tắc để hướng dẫn mọi việc chúng tôi làm, từ lựa chọn nguyên liệu đến phục vụ cộng đồng
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-soft p-8 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-matcha mb-4 flex justify-center"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-headline text-toast mb-3">{value.title}</h3>
                <p className="text-toast/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-headline text-matcha mb-6">Đến Thăm Chúng Tôi</h2>
            <div className="card-soft p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-matcha" />
                  <h3 className="font-headline text-toast mb-1">Vị Trí</h3>
                  <p className="text-toast/70">Imperia An Phu Apartment</p>
                  <p className="text-toast/70">Quận 2, TP.HCM</p>
                </div>
                <div>
                  <Clock className="w-8 h-8 mx-auto mb-2 text-matcha" />
                  <h3 className="font-headline text-toast mb-1">Giờ Mở Cửa</h3>
                  <p className="text-toast/70">Hàng Ngày: 7:00 AM - 9:00 PM</p>
                </div>
                <div>
                  <Phone className="w-8 h-8 mx-auto mb-2 text-matcha" />
                  <h3 className="font-headline text-toast mb-1">Liên Hệ</h3>
                  <p className="text-toast/70">Zalo: 0906615103</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:0906615103"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-matcha flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Liên Hệ Với Chúng Tôi Trên Zalo
              </motion.a>
                              <motion.a
                  href="mailto:la.hat.vietnam@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-strawberry hover:bg-strawberry/80 text-toast font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Gửi Email
                </motion.a>
            </div>
            <div className="mt-4 text-center">
              <p className="text-matcha font-semibold">Khuyến Mãi Đặc Biệt!</p>
              <p className="text-toast/70">10% giảm giá cho giao hàng trong Quận 2</p>
              <p className="text-sm text-toast/60">Theo dõi @lavahat.hcm.q2 để cập nhật</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 