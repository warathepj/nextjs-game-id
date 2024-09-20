// components/main-menu.tsx
"use client"
import Link from 'next/link';
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "./ui/drawer"
import { MenuIcon } from "lucide-react"

const MainMenu = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return isDesktop ? (
    <div>Desktop Menu</div>
  ) : (
    <div>
      <Drawer direction="bottom">
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>some drawer content is here

          {/* //when click components/main-menu.tsx */}
          <Link href="/render-shopping-bag">
            {/* <DrawerTrigger> */}
            <DrawerClose>
              render-shopping-bag
      </DrawerClose>
            {/* </DrawerTrigger> */}
          </Link>
          <Link href="/">
            {/* <DrawerTrigger> */}
            <DrawerClose>
              หน้าหลัก
      </DrawerClose>
            {/* </DrawerTrigger> */}
          </Link>
          <Link href="/product">
            {/* <DrawerTrigger> */}
            <DrawerClose>

              สินค้า
      </DrawerClose>
            {/* </DrawerTrigger> */}
          </Link>
          <Link href="/how-to-buy">
            <DrawerTrigger>
              วิธีการซื้อ
            </DrawerTrigger>
          </Link>
          <Link href="/upload-slip">
            <DrawerTrigger>
              แจ้งชำระเงิน
            </DrawerTrigger>
          </Link>
          <Link href="/blog">
            <DrawerTrigger>
              บทความ
            </DrawerTrigger>
          </Link>
          <Link href="/contact">
            <DrawerTrigger>
              ติดต่อเรา
            </DrawerTrigger>
          </Link>
          {/* hide Drawer */}
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default MainMenu