"use client"
import * as React from "react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Home, LayoutGrid, Briefcase, Menu } from "lucide-react"
import Image from "next/image"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="flex">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
               <Image src="https://i.postimg.cc/Nj9QDFMr/IMG-20250815-212508-948.jpg" alt="CRYPTO FOLEX Logo" width={32} height={32} className="h-8 w-8" />
               <span className="font-bold text-lg">CRYPTO FOLEX</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link href="/dashboard" className="w-full">
                  <SidebarMenuButton>
                    <Home />
                    <span>Home</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/dashboard/services" className="w-full">
                  <SidebarMenuButton>
                    <Briefcase />
                    <span>Services</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/dashboard/about" className="w-full">
                  <SidebarMenuButton>
                    <LayoutGrid />
                    <span>About</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="p-4">
             <SidebarTrigger className="md:hidden">
                <Menu />
              </SidebarTrigger>
            {children}
          </div>
        </SidebarInset>
      </div>
  )
}
