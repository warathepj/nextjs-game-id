import { Card, CardContent, CardTitle } from "@/components/ui/card"

export default function Component() {
    const data = [
        {
            title: "1. สั่งซื้อไอดีเกมส์",
            content: "ใช้อีเมล์ในการสั่งซื้อ"
        },
        {
            title: "2. ชำระเงิน",
            content: "คำสั่งซื้อและข้อมูลการชำระเงินจะถูกส่งไปยังอีเมลที่ท่านระบุ"
        },
        {
            title: "3. แจ้งการชำระเงินของท่าน",
            content: "อัปโหลดหลักฐานการชำระเงินที่หน้า หลังจากทีมงานตรวจสอบการชำระเงินแล้วจะส่งไอดีเกมส์พร้อมพาสเวิร์ดไปให้ตามอีเมล์ที่แจ้งไว้ ภายใน 1 ชั่วโมง"
        },
    ]
  return (
    <Card className="w-full max-w-4xl mx-auto p-6">
      <CardTitle className="text-2xl font-bold mb-6">ขั้นตอนการสั่งซื้อไอดีเกมส์</CardTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <Card key={item.title} className="w-full">
            <CardTitle className="text-xl font-semibold p-4">{item.title}</CardTitle>
            <CardContent>
              <p className="text-muted-foreground">
                {item.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Card>
  )
}