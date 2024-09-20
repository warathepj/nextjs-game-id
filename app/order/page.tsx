"use client"
import BagCard from '@/components/BagCard'
import EmailSubmit from '@/components/email-submit'

const Order = () => {
  return (
    <div>Order
        <BagCard route="order"/>
        <EmailSubmit/>
    </div>
  )
}

export default Order