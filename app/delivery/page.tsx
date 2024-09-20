"use client"
import BagCard from '@/components/BagCard'
import { useAppSelector } from '@/app/redux/hooks';
import { Card, CardContent } from "@/components/ui/card"
const Delivery = () => {
  const email = useAppSelector((state) => state.email.value);

  return (
    <div>Delivery
        <BagCard route="order"/>
        <Card>
            <CardContent>
                <p>
            เจ้าหน้าที่จะตรวจสอบการชำระเงินของคุณ และส่ง ID เกมส์
            พร้อมพาสเวิร์ดของคุณไปที่อีเมล {email} ภายใน 1 ชั่วโมง
                </p>
            </CardContent>
        </Card>
        <p>
            </p>
            <br />
            <p>
            </p>
    </div>
  )
}

export default Delivery