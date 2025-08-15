"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle, Play } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
  return (
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
  );
}
