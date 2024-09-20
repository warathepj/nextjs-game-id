// "use client"
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell } from "lucide-react"

interface NotificationBadgeProps {
  count: number
}

export default function NotificationBadge({ count }: NotificationBadgeProps = { count: 0 }) {

  return (
    <Button variant="outline" size="icon" className="relative">
      <Link 
                className="hover:cursor-pointer"

        href="/shopping-bag">
        <ShoppingBag/>

        </Link>
      {/* <Bell className="h-[1.2rem] w-[1.2rem]" /> */}
      {count > 0 && (
        <Badge 
          variant="destructive" 
          className="absolute -top-2 -right-2 px-2 py-1 text-xs min-w-[20px] h-5 flex items-center justify-center"
        >
          {count > 99 ? '99+' : count}
        </Badge>
      )}
      <span className="sr-only">Notifications</span>
    </Button>
  )
}