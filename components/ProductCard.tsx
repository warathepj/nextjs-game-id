// components/ProductCard.tsx
// "use client"

import {
  Card,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

//check this typescript code 
// components/ProductCard.tsx
const ProductCard = ({ name, path }) => {
  return (
    <Card className="w-[350px] hover:w-[370px] mb-4">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <img src={path} alt="" />
    </Card>
  )
}

export default ProductCard