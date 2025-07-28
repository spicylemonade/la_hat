import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const addToCart = (item, size, quantity) => {
    const cartItem = {
      id: Date.now() + Math.random(), // Simple ID generation
      name: item.name,
      description: item.description,
      size,
      quantity,
      price: item.prices[size],
      unitPrice: item.prices[size],
      item: item
    }
    
    setCartItems(prev => [...prev, cartItem])
  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    
    setCartItems(prev => prev.map(item => 
      item.id === id 
        ? { ...item, quantity, price: (parseFloat(item.unitPrice.replace('$', '')) * quantity).toFixed(2) + '$' }
        : item
    ))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''))
      return total + price
    }, 0).toFixed(2)
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    isCheckoutOpen,
    setIsCheckoutOpen
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
} 