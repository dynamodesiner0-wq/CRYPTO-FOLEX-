"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Users, FileText, MessagesSquare, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ServicesPage() {
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
                <Link href="/services">Services</Link>
              </Button>
              <Button variant="ghost">Contact</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-10 md:py-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
              Our Services
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              We offer a wide range of services to help you grow your business.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="items-center text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4">Social Media Growth</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We help you grow your social media presence and engage with your audience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4">Content Creation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We create high-quality content that resonates with your audience and drives results.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <MessagesSquare className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4">Community Management</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We build and manage a strong community around your brand.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="container py-10 md:py-16">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
                    5 Years of Experience
                </h1>
            </div>
            
            <p className="text-center text-lg text-muted-foreground">
                "In the ever-changing world of cryptocurrency, success requires
                adaptability, perseverance, and collaboration. At CRYPTO FOLEX, we're not just
                shaping the future – we're writing the playbook."
            </p>
            
            <div className="flex justify-center">
                <Card className="max-w-md">
                    <CardContent className="flex items-center gap-4 p-6">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src="https://placehold.co/100x100.png" alt="Son Heroic" data-ai-hint="person silhouette" />
                            <AvatarFallback>SH</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="text-xl font-bold">Son Heroic</h3>
                            <p className="text-muted-foreground">Founder of (CRYPTO FOLEX Agency)</p>
                            <div className="flex items-center gap-1 mt-1">
                                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                <span className="font-semibold">5 star</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
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
