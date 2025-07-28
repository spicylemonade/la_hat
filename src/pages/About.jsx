import { motion } from 'framer-motion'
import { Leaf, Heart, Home, Award, Coffee, MapPin, Clock, Phone, Mail } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Premium Quality',
      description: 'We source only the finest matcha and coffee beans, ensuring every cup meets our high standards.'
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      title: 'Vietnamese Heritage',
      description: 'Our coffee traditions are rooted in Vietnamese culture, bringing authentic flavors to every brew.'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Crafted with Love',
      description: 'Every drink is prepared with care and attention to detail, creating moments of joy in your day.'
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Warm Atmosphere',
      description: 'We believe in creating a welcoming space where friends gather and memories are made.'
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
              About Lá & Hạt
            </h1>
            <p className="text-xl text-toast/80 max-w-3xl mx-auto">
              Where traditional Vietnamese coffee culture meets the art of premium matcha, 
              creating a unique experience in every cup.
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
              <h2 className="text-4xl font-headline text-matcha mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-toast/80">
                <p>
                  Lá & Hạt was born from a simple dream: to create a bridge between the rich coffee 
                  traditions of Vietnam and the serene art of Japanese matcha preparation.
                </p>
                <p>
                  Our name, meaning "Leaves & Seeds," represents the foundation of our craft.
                </p>
                <p>
                  We believe that great drinks come from great ingredients, prepared with traditional 
                  techniques and served with genuine care. Every cup tells a story of heritage, 
                  quality, and the simple joy of sharing good drinks with good people.
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
            <h2 className="text-4xl font-headline text-matcha mb-4">Our Values</h2>
            <p className="text-lg text-toast/80 max-w-2xl mx-auto">
              The principles that guide everything we do, from sourcing ingredients to serving our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <h2 className="text-4xl font-headline text-matcha mb-6">Visit Us</h2>
            <div className="card-soft p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-matcha" />
                  <h3 className="font-headline text-toast mb-1">Location</h3>
                  <p className="text-toast/70">Imperia An Phu Apartment</p>
                  <p className="text-toast/70">District 2, HCMC</p>
                </div>
                <div>
                  <Clock className="w-8 h-8 mx-auto mb-2 text-matcha" />
                  <h3 className="font-headline text-toast mb-1">Hours</h3>
                  <p className="text-toast/70">Daily: 7:00 AM - 9:00 PM</p>
                </div>
                <div>
                  <Phone className="w-8 h-8 mx-auto mb-2 text-matcha" />
                  <h3 className="font-headline text-toast mb-1">Contact</h3>
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
                Contact Us on Zalo
              </motion.a>
              <motion.a
                href="mailto:lavahat.hcm.q2@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-strawberry hover:bg-strawberry/80 text-toast font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </motion.a>
            </div>
            <div className="mt-4 text-center">
              <p className="text-matcha font-semibold">Grand Opening Special!</p>
              <p className="text-toast/70">10% off for delivery around District 2</p>
              <p className="text-sm text-toast/60">Follow @lavahat.hcm.q2 for updates</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 