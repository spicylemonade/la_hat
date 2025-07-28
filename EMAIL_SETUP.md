# 📧 Super Simple Email Setup (3 Minutes)

Your ordering system is ready! Right now it shows what emails **would** be sent. Let's make it **actually send** them to `gebytienyi@gmail.com`.

## 🎯 What We're Doing
We'll use **EmailJS** to send emails directly from your website. No server needed - perfect for GitHub Pages!

## 🔧 Step 1: Create EmailJS Account
1. Go to: https://www.emailjs.com/
2. Click **"Sign Up"**
3. Use your Gmail account to sign up: `gebytienyi@gmail.com`
4. Verify your email

## 🔧 Step 2: Add Email Service
1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"**
4. Click **"Connect Account"** and authorize with `gebytienyi@gmail.com`
5. **Copy the Service ID** (looks like: `service_xyz123`)

## 🔧 Step 3: Create Email Template
1. Click **"Email Templates"**
2. Click **"Create New Template"**
3. Set Template Name: `La Hat Order`
4. Replace the template content with this:

**Subject:** `🍵 New La Hat Order #{{order_id}}`

**Content:**
```
NEW ORDER RECEIVED!

Order ID: #{{order_id}}
Time: {{order_time}}

CUSTOMER DETAILS:
Name: {{customer_name}}
Phone: {{customer_phone}}

ORDER DETAILS:
{{order_items}}

TOTAL: ${{total_price}}

Please prepare this order and contact the customer about payment and pickup/delivery.

---
La Hat Order System
```

5. **Save** and copy the **Template ID** (looks like: `template_abc456`)

## 🔧 Step 4: Get Your Keys
1. Go to **"Account"** → **"General"**
2. Copy your **Public Key** (looks like: `user_def789`)

## 🔧 Step 5: Update Your Website
1. Install EmailJS in your project:
```bash
npm install @emailjs/browser
```

2. In your `src/services/emailService.js` file, replace the entire file with this:

```javascript
import emailjs from '@emailjs/browser'

const COMPANY_EMAIL = "gebytienyi@gmail.com"

// EmailJS Configuration - Replace with YOUR keys from steps above
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID_HERE"    // From step 2
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID_HERE"  // From step 3  
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE"    // From step 4

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

export function generateOrderId() {
  const timestamp = Date.now()
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  return `LH${timestamp.toString().slice(-6)}${random}`
}

function formatCartItemsForEmail(cartItems) {
  return cartItems.map(item => 
    `• ${item.name} (${item.size}) x${item.quantity} - ${item.price}`
  ).join('\n')
}

export async function processOrder(orderData) {
  try {
    const orderId = generateOrderId()
    const itemsList = formatCartItemsForEmail(orderData.cartItems)
    
    // Normalize phone number
    const normalizePhone = (phone) => {
      const digits = phone.replace(/\D/g, '')
      if (digits.length === 10) return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`
      if (digits.length === 11 && digits.startsWith('1')) {
        const cleaned = digits.slice(1)
        return `(${cleaned.slice(0,3)}) ${cleaned.slice(3,6)}-${cleaned.slice(6)}`
      }
      return phone
    }

    const templateParams = {
      order_id: orderId,
      order_time: new Date().toLocaleString(),
      customer_name: orderData.customerName,
      customer_phone: normalizePhone(orderData.customerPhone),
      order_items: itemsList,
      total_price: orderData.totalPrice,
      to_email: COMPANY_EMAIL
    }

    // Send email using EmailJS
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    // Show success message
    alert(`Order #${orderId} received!\n\nOrder details have been emailed to the restaurant.\nYou will be contacted soon about payment and pickup.\n\nThank you for your order! 🍵`)

    return {
      success: true,
      orderId,
      emailSent: true
    }
  } catch (error) {
    console.error('Order processing failed:', error)
    alert('Failed to send order email. Please try again or call the restaurant directly.')
    throw error
  }
}
```

**Don't forget to replace:**
- `YOUR_SERVICE_ID_HERE` with your Service ID from step 2
- `YOUR_TEMPLATE_ID_HERE` with your Template ID from step 3  
- `YOUR_PUBLIC_KEY_HERE` with your Public Key from step 4

## 🎉 Test It!
1. Save your files
2. Run `npm install @emailjs/browser`
3. Go to your website
4. Place a test order
5. Check your email at `gebytienyi@gmail.com` - you should get the order! 📧

## 🚀 Deploy to GitHub Pages
Once it works locally, just push to GitHub and enable GitHub Pages - it will work there too!

## 💰 Cost
EmailJS is **FREE** for up to 200 emails per month - perfect for your business!

---

**Need help?** The browser console will show any error messages. 