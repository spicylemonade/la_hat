import emailjs from '@emailjs/browser'

const COMPANY_EMAIL = "la.hat.vietnam@gmail.com"

// EmailJS Configuration - Your actual keys
const EMAILJS_SERVICE_ID = "service_1bzz4eu"
const EMAILJS_TEMPLATE_ID = "template_cofqepf"  // You'll need to get this from EmailJS
const EMAILJS_PUBLIC_KEY = "HJ2mCzhirfIzKwodq"

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
    
    // Normalize phone number for display
    const normalizePhone = (phone) => {
      const digits = phone.replace(/\D/g, '')
      if (digits.length === 10) return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`
      if (digits.length === 11 && digits.startsWith('1')) {
        const cleaned = digits.slice(1)
        return `(${cleaned.slice(0,3)}) ${cleaned.slice(3,6)}-${cleaned.slice(6)}`
      }
      return phone
    }

    const customerPhone = normalizePhone(orderData.customerPhone)
    const customerAddress = orderData.customerAddress || ''

    // Create the subject and full message content
    const emailSubject = `🍵 New La Hat Order #${orderId} from ${orderData.customerName}`
    const emailMessage = `NEW ORDER RECEIVED!\n\nOrder ID: #${orderId}\nTime: ${new Date().toLocaleString()}\n\nCUSTOMER DETAILS:\nName: ${orderData.customerName}\nPhone: ${customerPhone}\nAddress: ${customerAddress}\n\nORDER DETAILS:\n${itemsList}\n\nTOTAL: $${orderData.totalPrice}\n\nPlease prepare this order and contact the customer about payment and pickup/delivery.\n\n---\nLa Hat Order System`

    // Check if we have the template ID
    if (EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID_HERE") {
      // For now, just show what would be emailed
      console.log('=== EMAIL THAT WOULD BE SENT ===')
      console.log(`📧 TO: ${COMPANY_EMAIL}`)
      console.log(`📧 SUBJECT: ${emailSubject}`)
      console.log(`📧 BODY:`)
      console.log(emailMessage)
      console.log('=== END EMAIL PREVIEW ===')

      alert(`Order #${orderId} received!\n\n⚠️ To actually send emails, please provide your Template ID from EmailJS.\n\nCheck the browser console to see the email content that would be sent.`)
      
      return {
        success: true,
        orderId,
        emailSent: false,
        needsTemplateId: true
      }
    }

    // Prepare email template parameters to match your template
    const templateParams = {
      title: emailSubject,           // Goes into {{title}} for subject
      message: emailMessage,         // Goes into {{message}} for main content
      name: `La Hat order from ${orderData.customerName}`, // Updated from name
      email: orderData.customerPhone, // You can use this for reply-to if needed
      address: customerAddress
    }

    console.log('Sending email with EmailJS...', templateParams)

    // Send email using EmailJS
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    console.log('Email sent successfully:', result)

    // Show success message
    alert(`Order #${orderId} received!\n\nOrder details have been emailed to ${COMPANY_EMAIL}.\nYou will be contacted soon about payment and pickup.\n\nThank you for your order! 🍵`)

    return {
      success: true,
      orderId,
      emailSent: true,
      emailResult: result
    }
  } catch (error) {
    console.error('Order processing failed:', error)
    alert('Failed to send order email. Please try again or call the restaurant directly.')
    throw error
  }
} 