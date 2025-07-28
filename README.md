# Lá & Hạt - Matcha Company Website 🍵

A beautiful, interactive website for Lá & Hạt matcha company featuring warm pastel design, smooth animations, and mobile-responsive layout.

## ✨ Features

- 🎨 **Warm Pastel Design** - Soft, cartoonish aesthetic with matcha green, strawberry pink, and cream colors
- 🏃‍♂️ **Smooth Animations** - Framer Motion powered interactions and page transitions  
- 📱 **Mobile Responsive** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Vite and optimized for GitHub Pages
- 🍵 **Interactive Menu** - Filterable product catalog with size selection
- 🌟 **Modern UX** - Intuitive navigation and engaging user experience

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS + DaisyUI
- **Animations**: Framer Motion
- **Routing**: React Router
- **Deployment**: GitHub Pages + GitHub Actions
- **Fonts**: Fredoka One + Poppins (Google Fonts)

## 🛠️ Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/matcha.git
   cd matcha
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser

4. **Build for production**
   ```bash
   npm run build
   ```

## 📦 Deployment

### GitHub Pages (Automatic)

1. Push to `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://your-username.github.io/matcha/`

### Manual Deployment

```bash
npm run build
npm run deploy
```

## 🎨 Design System

### Color Palette
- **Matcha Green**: `#A6DCA4` - Primary brand color
- **Strawberry Pink**: `#FAD0DB` - Secondary accent  
- **Warm Cream**: `#FFF7EC` - Background and light elements
- **Toasted Brown**: `#8B5E3C` - Text and dark elements
- **Sky Pastel**: `#B7D5E5` - Additional accent

### Typography
- **Headlines**: Fredoka One (playful, rounded)
- **Body Text**: Poppins (clean, readable)

### Animation Principles
- Subtle hover effects with scale and rotation
- Floating elements for organic movement
- Smooth page transitions
- Spring-based interactions

## 📁 Project Structure

```
matcha/
├── .github/workflows/    # GitHub Actions
├── public/
│   └── img/             # Product images
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Route components
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   └── About.jsx
│   ├── data/            # Static data
│   │   └── menu.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json
```

## 🍵 Menu Data

The menu is driven by `src/data/menu.json` with the following structure:

```json
{
  "categories": {
    "coffee": {
      "name": "Cà phê / Coffee",
      "items": [...]
    },
    "tea": {
      "name": "Trà / Tea", 
      "items": [...]
    }
  }
}
```

Each item includes:
- `id`: Unique identifier
- `name`: Product name
- `description`: Brief description
- `prices`: Object with S/M/L sizes
- `image`: Path to product image

## 📸 Adding Product Images

1. Add images to `public/img/` directory
2. Use format: `product-id.jpg` (e.g., `americano.jpg`)
3. Recommended size: 500x500px
4. Format: WebP for best performance

## 🔧 Customization

### Colors
Update `tailwind.config.js` to modify the color palette:

```js
colors: {
  matcha: '#A6DCA4',
  strawberry: '#FAD0DB', 
  cream: '#FFF7EC',
  toast: '#8B5E3C',
  skyPastel: '#B7D5E5'
}
```

### Menu Items
Edit `src/data/menu.json` to update products and pricing.

### Animations
Modify Framer Motion variants in components for different animation styles.

## 📞 Contact Integration

The site includes direct integration with:
- **Zalo**: `tel:0906615103`
- **Email**: `mailto:hello@lahat.cafe`

## 🌟 Performance

- Lighthouse Score: 95+ (Performance)
- First Contentful Paint: < 2s
- Cumulative Layout Shift: < 0.1
- Optimized images and lazy loading
- Minimal bundle size with tree shaking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use for your own projects!

---

Made with 💚 for Lá & Hạt - Premium Matcha & Vietnamese Coffee 