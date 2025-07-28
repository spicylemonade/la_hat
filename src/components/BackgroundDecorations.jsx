import { motion } from 'framer-motion'
import { Coffee, Circle, Droplets, Zap } from 'lucide-react'
import { BobaTeaIcon, BobaShakeIcon, MatchaBobaIcon } from './BobaIcons'

export default function BackgroundDecorations() {
  // Generate random positions for decorative elements - more visible and varied with custom boba icons
  const decorations = [
    { id: 1, icon: BobaTeaIcon, top: '8%', left: '12%', size: 'w-6 h-6', delay: 0, rotation: 15 },
    { id: 2, icon: Circle, top: '22%', left: '88%', size: 'w-4 h-4', delay: 0.5, rotation: -20 },
    { id: 3, icon: MatchaBobaIcon, top: '38%', left: '5%', size: 'w-7 h-7', delay: 1, rotation: 45 },
    { id: 4, icon: Coffee, top: '52%', left: '93%', size: 'w-5 h-5', delay: 1.5, rotation: -30 },
    { id: 5, icon: BobaShakeIcon, top: '68%', left: '8%', size: 'w-5 h-5', delay: 2, rotation: 60 },
    { id: 6, icon: Droplets, top: '82%', left: '85%', size: 'w-6 h-6', delay: 2.5, rotation: -45 },
    { id: 7, icon: BobaTeaIcon, top: '12%', left: '68%', size: 'w-5 h-5', delay: 3, rotation: 25 },
    { id: 8, icon: Circle, top: '32%', left: '28%', size: 'w-7 h-7', delay: 3.5, rotation: -10 },
    { id: 9, icon: MatchaBobaIcon, top: '58%', left: '42%', size: 'w-6 h-6', delay: 4, rotation: 35 },
    { id: 10, icon: Coffee, top: '78%', left: '38%', size: 'w-6 h-6', delay: 4.5, rotation: -25 },
    { id: 11, icon: BobaShakeIcon, top: '3%', left: '48%', size: 'w-5 h-5', delay: 5, rotation: 50 },
    { id: 12, icon: Circle, top: '92%', left: '62%', size: 'w-4 h-4', delay: 5.5, rotation: -15 },
    { id: 13, icon: BobaTeaIcon, top: '18%', left: '82%', size: 'w-5 h-5', delay: 6, rotation: 40 },
    { id: 14, icon: Droplets, top: '45%', left: '75%', size: 'w-6 h-6', delay: 6.5, rotation: -35 },
    { id: 15, icon: MatchaBobaIcon, top: '65%', left: '22%', size: 'w-5 h-5', delay: 7, rotation: 20 },
    { id: 16, icon: Circle, top: '88%', left: '15%', size: 'w-5 h-5', delay: 7.5, rotation: -40 },
    { id: 17, icon: BobaShakeIcon, top: '28%', left: '58%', size: 'w-7 h-7', delay: 8, rotation: 30 },
    { id: 18, icon: Coffee, top: '72%', left: '68%', size: 'w-4 h-4', delay: 8.5, rotation: -20 },
    { id: 19, icon: BobaTeaIcon, top: '48%', left: '12%', size: 'w-4 h-4', delay: 9, rotation: 15 },
    { id: 20, icon: MatchaBobaIcon, top: '85%', left: '45%', size: 'w-6 h-6', delay: 9.5, rotation: -30 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {decorations.map((decoration) => {
        const Icon = decoration.icon
        return (
          <motion.div
            key={decoration.id}
            initial={{ opacity: 0, scale: 0, rotate: decoration.rotation }}
            animate={{ 
              opacity: [0, 0.7, 0.5, 0.6, 0.4],
              scale: [0, 1.3, 0.7, 1.1, 0.8],
              rotate: [decoration.rotation, decoration.rotation + 180, decoration.rotation + 360]
            }}
            transition={{
              duration: 12,
              delay: decoration.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              top: decoration.top,
              left: decoration.left,
            }}
          >
            <Icon 
              className={`${decoration.size} text-toast/60`}
              style={{ 
                filter: 'blur(0.6px)',
                transform: `rotate(${decoration.rotation}deg)`
              }}
            />
          </motion.div>
        )
      })}
      
      {/* Additional floating boba particles - more visible */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={`boba-${index}`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0.25, 0.4, 0.2],
            y: [0, -30, 10, -20, 0],
            x: [0, Math.random() * 20 - 10, Math.random() * 15 - 7.5, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            delay: index * 0.6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-3 h-3 bg-toast/45 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: '0 0 4px rgba(139, 94, 60, 0.2)'
          }}
        />
      ))}

      {/* Large scattered background blobs */}
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={`blob-${index}`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.15, 0.08, 0.12, 0.05],
            scale: [0.8, 1.2, 0.9, 1.1, 1]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: index * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bg-toast/15 rounded-full"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            width: `${40 + Math.random() * 60}px`,
            height: `${40 + Math.random() * 60}px`,
            filter: 'blur(2px)'
          }}
        />
      ))}
    </div>
  )
} 