// components/IdCard.tsx
// "use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

//check this typescript code 
// components/ProductCard.tsx
const IdCard = ({ name, path, description }) => {
  return (
    <Card className="w-[350px] hover:w-[370px] mb-4">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <img src={path} alt="" />
    </Card>
  )
}

export default IdCard