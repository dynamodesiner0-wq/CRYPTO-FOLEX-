
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Twitter, Facebook, Linkedin, Instagram, Youtube, Check, Star, Send, Badge } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  const amaBanners = [
    { src: "https://i.postimg.cc/zfNt227Y/IMG-20250815-230700-438.jpg", alt: "AMA Banner 1" },
    { src: "https://i.postimg.cc/8CwHKpsL/IMG-20250815-230653-749.jpg", alt: "AMA Banner 2" },
    { src: "https://i.postimg.cc/B66CRr1k/IMG-20250815-230655-423.jpg", alt: "AMA Banner 3" },
    { src: "https://i.postimg.cc/tg9kNZRX/IMG-20250815-230656-846.jpg", alt: "AMA Banner 4" },
    { src: "https://i.postimg.cc/vZrXnLsq/IMG-20250815-230658-412.jpg", alt: "AMA Banner 5" },
    { src: "https://i.postimg.cc/MKj96Jr8/IMG-20250815-230701-181.jpg", alt: "AMA Banner 6" },
    { src: "https://i.postimg.cc/L8KNhQrg/IMG-20250815-230702-512.jpg", alt: "AMA Banner 7" },
    { src: "https://i.postimg.cc/y6GfC8jP/IMG-20250815-230704-161.jpg", alt: "AMA Banner 8" },
    { src: "https://i.postimg.cc/QCvSQfCP/IMG-20250815-230705-599.jpg", alt: "AMA Banner 9" },
  ];

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
            <Link href="#team" className="transition-colors hover:text-foreground/80">Team</Link>
            <Link href="#ama-banners" className="transition-colors hover:text-foreground/80">AMA Banners</Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">Contact</Link>
          </nav>
          <div className="flex flex-1 items-center justify-end gap-2">
            <Button>Get a Quote</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20">
          <div className="container grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-4xl font-extrabold tracking-tighter md:text-6xl">
                Your Premier Web3 Media Powerhouse
              </h1>
              <p className="mx-auto max-w-xl text-lg text-muted-foreground md:mx-0">
                Generate engagement and sales with our expert team, who have worked with the biggest projects. Relax, we handle it all for you.
              </p>
              <Button size="lg" className="mt-6">Get Started</Button>
            </div>
            <div className="flex justify-center">
              <Image 
                src="https://i.postimg.cc/15trXhCz/image-search-1755280175089.webp" 
                alt="Web3 Media Powerhouse" 
                width={500} 
                height={500} 
                className="rounded-lg shadow-xl"
                data-ai-hint="abstract illustration"
              />
            </div>
          </div>
        </section>

        <section id="team" className="py-20 bg-muted/40">
          <div className="container mx-auto max-w-6xl space-y-12 text-center">
            <h2 className="text-center text-3xl font-bold">Meet Our Team</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              <Card>
                <CardContent className="flex flex-col items-center gap-6 p-6">
                  <Avatar className="h-40 w-40">
                    <AvatarImage src="https://i.postimg.cc/2SrhPssG/IMG-20250815-225706-773.jpg" alt="Mark Crimo" data-ai-hint="person" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold">Mark Crimo</h3>
                    <p className="font-semibold text-primary">The Founder</p>
                    <div className="inline-block bg-primary/10 text-primary font-bold py-1 px-3 rounded-full">
                      5 Years of Experience
                    </div>
                    <blockquote className="text-muted-foreground italic border-l-4 border-primary/50 pl-4 py-2 text-left">
                      "In the ever-changing world of cryptocurrency, success requires adaptability, perseverance, and collaboration. At CRYPTO FOLEX, we're not just shaping the future - we're writing the playbook."
                    </blockquote>
                    <Link href="https://t.me/Markcrimo6" target="_blank" rel="noopener noreferrer">
                      <Button>
                        <Send className="mr-2 h-4 w-4" />
                        Contact on Telegram
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center gap-6 p-6">
                  <Avatar className="h-40 w-40">
                    <AvatarImage src="https://i.postimg.cc/26b01p8v/IMG-20250815-231059-726.jpg" alt="Mikey Marco" data-ai-hint="person" />
                    <AvatarFallback>MM</AvatarFallback>
                  </Avatar>
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold">Mikey Marco</h3>
                    <p className="font-semibold text-primary">Co_Founder</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center gap-6 p-6">
                  <Avatar className="h-40 w-40">
                    <AvatarImage src="https://i.postimg.cc/zBKfDBWg/IMG-20250815-230231-790.jpg" alt="Chris Hendrikso" data-ai-hint="person" />
                    <AvatarFallback>CH</AvatarFallback>
                  </Avatar>
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold">Chris Hendrikso</h3>
                    <p className="font-semibold text-primary">Marketing Manager</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center gap-6 p-6">
                  <Avatar className="h-40 w-40">
                    <AvatarImage src="https://i.postimg.cc/bYb92987/IMG-20250815-233551-808.jpg" alt="Rupok" data-ai-hint="person" />
                    <AvatarFallback>R</AvatarFallback>
                  </Avatar>
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold">Rupok</h3>
                    <p className="font-semibold text-primary">CMO</p>
                  </div>
                </CardContent>
              </Card>
               <Card>
                <CardContent className="flex flex-col items-center gap-6 p-6">
                  <Avatar className="h-40 w-40">
                    <AvatarImage src="https://i.postimg.cc/rFXghYQy/IMG-20250815-233546-893.jpg" alt="Homo sapiens" data-ai-hint="person" />
                    <AvatarFallback>HS</AvatarFallback>
                  </Avatar>
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold">Homo sapiens</h3>
                    <p className="font-semibold text-primary">Host</p>
                  </div>
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
                  <CardTitle>KOL &amp; Influencer Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Connect with key opinion leaders and influencers to amplify your brand's reach.</p>
                </CardContent>
              </Card>
                 <Card>
                <CardHeader>
                  <CardTitle>PR &amp; Media Outreach</CardTitle>
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

        <section id="ama-banners" className="py-20">
          <div className="container">
            <h2 className="text-center text-3xl font-bold">PREVIOUS AMA BANNERS</h2>
            <p className="text-center text-muted-foreground mt-2 mb-10">Check out some of our previous AMA banners.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {amaBanners.map((banner, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                    data-ai-hint="banner"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="contact" className="py-20 bg-muted/40">
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

    