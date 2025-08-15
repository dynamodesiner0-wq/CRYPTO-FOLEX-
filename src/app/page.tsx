"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { PlayCircle, Play, Users, FileText, MessagesSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a className="flex items-center space-x-2" href="/">
              <Image src="https://i.postimg.cc/Nj9QDFMr/IMG-20250815-212508-948.jpg" alt="CRYPTO FOLEX Logo" width={32} height={32} className="h-8 w-8" />
              <span className="font-bold">CRYPTO FOLEX</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center">
              <Button variant="ghost" asChild>
                <Link href="/">Home</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/about">About</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/services">Services</Link>
              </Button>
              <Button variant="ghost">Contact</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
              Your Premier Web3 Media Powerhouse
              <span className="ml-2 h-2 w-2 rounded-full bg-primary"></span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
              All you need to grow your business, in one place
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Generate engagement and sales with our expert team, who have
              worked with the biggest project. Relax, we handle it all for you.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Button size="lg">View Pricing</Button>
            <Button size="lg" variant="outline">
              <PlayCircle className="mr-2 h-5 w-5" />
              Get Started
            </Button>
          </div>
        </section>
        <section className="container flex flex-col items-center justify-center gap-8 py-10 md:py-16">
          <div className="flex flex-col items-center gap-4">
            <Button className="w-full max-w-xs" size="lg">VIEW PRICING</Button>
            <Button variant="ghost" className="group w-full max-w-xs items-center" size="lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-300 group-hover:bg-yellow-400">
                    <Play className="h-6 w-6 text-black"/>
                </span>
                <span className="ml-4 font-semibold text-lg">GET STARTED</span>
            </Button>
          </div>
          <div className="relative mt-8">
            <Image 
                src="https://placehold.co/400x400.png" 
                alt="Woman with laptop" 
                width={400} 
                height={400}
                data-ai-hint="woman laptop"
                className="rounded-full"
            />
            <div className="absolute -top-4 right-4 h-12 w-12 text-primary">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor" className="h-full w-full">
                    <path d="M50 0L61.2 38.8L100 50L61.2 61.2L50 100L38.8 61.2L0 50L38.8 38.8L50 0Z"/>
                </svg>
            </div>
             <div className="absolute -bottom-8 -left-8 h-20 w-20 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="4" >
                    <path d="M10,90 C30,20 70,20 90,90" />
                </svg>
             </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 md:py-8">
        <div className="container grid items-center gap-4 md:grid-cols-2">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} CRYPTO FOLEX. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 md:justify-end">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Icons.twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Icons.github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
