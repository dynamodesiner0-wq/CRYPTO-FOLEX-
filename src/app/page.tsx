"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Twitter, Facebook, Linkedin, Instagram, Youtube, Check, Star, Send } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold">
               <Image src="https://i.postimg.cc/Nj9QDFMr/IMG-20250815-212508-948.jpg" alt="CRYPTO FOLEX Logo" width={32} height={32} className="h-8 w-8" />
               <span>CRYPTO FOLEX</span>
            </Link>
          </div>
          <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
            <Link href="#services" className="transition-colors hover:text-foreground/80">Services</Link>
            <Link href="#testimonials" className="transition-colors hover:text-foreground/80">Testimonials</Link>
            <Link href="#founder" className="transition-colors hover:text-foreground/80">Founder</Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">Contact</Link>
          </nav>
          <div className="flex flex-1 items-center justify-end gap-2">
            <Button>Get a Quote</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 text-center">
          <div className="container">
            <h1 className="text-4xl font-extrabold tracking-tighter md:text-6xl">
              Your Premier Web3 Media Powerhouse
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Generate engagement and sales with our expert team, who have worked with the biggest projects. Relax, we handle it all for you.
            </p>
            <Button size="lg" className="mt-6">Get Started</Button>
          </div>
        </section>

        <section id="services" className="py-20 bg-muted/40">
          <div className="container">
            <h2 className="text-center text-3xl font-bold">Our Services</h2>
            <p className="text-center text-muted-foreground mt-2 mb-10">We offer a wide range of services to help you grow your business.</p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Social Media Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We help you grow your social media presence and engage with your audience.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Content Creation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We create high-quality content that resonates with your audience and drives results.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Community Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We build and manage a strong community around your brand.</p>
                </CardContent>
              </Card>
                 <Card>
                <CardHeader>
                  <CardTitle>KOL & Influencer Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Connect with key opinion leaders and influencers to amplify your brand's reach.</p>
                </CardContent>
              </Card>
                 <Card>
                <CardHeader>
                  <CardTitle>PR & Media Outreach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Secure media coverage and build relationships with journalists and publications.</p>
                </CardContent>
              </Card>
                 <Card>
                <CardHeader>
                  <CardTitle>Crypto Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Specialized marketing strategies tailored for the unique crypto landscape.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section id="testimonials" className="py-20">
          <div className="container">
             <h2 className="text-center text-3xl font-bold">What Our Clients Say</h2>
             <p className="text-center text-muted-foreground mt-2 mb-10">Real stories from our satisfied partners.</p>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://placehold.co/100x100.png" alt="Client 1" data-ai-hint="person"/>
                      <AvatarFallback>C1</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">Alex Johnson</h3>
                      <p className="text-sm text-muted-foreground">CEO, NFT Project</p>
                    </div>
                     <div className="ml-auto flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                     </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">"CRYPTO FOLEX transformed our community engagement. Their strategies are top-notch and delivered measurable results."</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://placehold.co/100x100.png" alt="Client 2" data-ai-hint="person"/>
                      <AvatarFallback>C2</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">Samantha Lee</h3>
                      <p className="text-sm text-muted-foreground">Founder, DeFi Protocol</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                     </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">"The best in the business for crypto marketing. Their team is knowledgeable, responsive, and dedicated to our success."</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section id="founder" className="py-20 bg-muted/40">
            <div className="container mx-auto max-w-3xl space-y-8 text-center">
                 <h2 className="text-center text-3xl font-bold">Meet the Founder</h2>
                <div className="flex justify-center">
                    <Card className="max-w-md">
                        <CardContent className="flex flex-col items-center gap-4 p-6">
                            <Avatar className="h-32 w-32">
                                <AvatarImage src="https://i.postimg.cc/2SrhPssG/IMG-20250815-225706-773.jpg" alt="Mark Crimo" data-ai-hint="person" />
                                <AvatarFallback>MC</AvatarFallback>
                            </Avatar>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold">Mark Crimo</h3>
                                <p className="text-muted-foreground">The Founder</p>
                            </div>
                            <Link href="https://t.me/Markcrimo6" target="_blank" rel="noopener noreferrer">
                                <Button>
                                    <Send className="mr-2 h-4 w-4" />
                                    Contact on Telegram
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p className="mt-2 text-muted-foreground">
                  Ready to elevate your project? Let's talk. Fill out the form and we'll get back to you shortly.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Dedicated expert team</span>
                  </div>
                   <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Proven results with top projects</span>
                  </div>
                   <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Comprehensive marketing solutions</span>
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary/5 py-8">
        <div className="container text-center text-muted-foreground">
            <div className="flex justify-center gap-4 mb-4">
              <Link href="#" className="hover:text-foreground"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-foreground"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-foreground"><Linkedin size={20} /></Link>
              <Link href="#" className="hover:text-foreground"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-foreground"><Youtube size={20} /></Link>
            </div>
          <p>&copy; {new Date().getFullYear()} CRYPTO FOLEX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
