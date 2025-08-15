"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

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
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Services</Button>
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
