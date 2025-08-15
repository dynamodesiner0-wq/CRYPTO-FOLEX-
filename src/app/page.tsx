
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Twitter, Check, Star, Send, Briefcase, Menu, Users, RadioTower } from "lucide-react";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";

function LandingPageContent() {
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
    { src: "https://i.postimg.cc/fbLKPVpD/IMG-20250816-003019-105.jpg", alt: "AMA Banner 10" },
    { src: "https://i.postimg.cc/RZGdG7Pg/IMG-20250816-003038.jpg", alt: "AMA Banner 11" },
    { src: "https://i.postimg.cc/W1sSMW7D/IMG-20250816-003057.jpg", alt: "AMA Banner 12" },
  ];

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#team", label: "Team" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#ama-banners", label: "AMA Banners" },
    { href: "#community", label: "Community" },
    { href: "#partners", label: "Our Partners" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://t.me/cryptofolex", label: "Telegram Group", icon: <Send size={20} /> },
    { href: "https://t.me/Cryptofolex1", label: "Telegram Channel", icon: <Send size={20} /> },
    { href: "https://www.binance.com/en/live/u/72409192", label: "Binance Live", icon: <Briefcase size={20} /> },
    { href: "https://x.com/Folex00", label: "X", icon: <Twitter size={20} /> },
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
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground/80">{link.label}</Link>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-2">
            <Button className="hidden md:inline-flex">Get a Quote</Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm bg-background p-6">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between pb-4 border-b">
                     <Link href="/" className="flex items-center gap-2 font-bold">
                       <Image src="https://i.postimg.cc/Nj9QDFMr/IMG-20250815-212508-948.jpg" alt="CRYPTO FOLEX Logo" width={32} height={32} className="h-8 w-8" />
                       <span>CRYPTO FOLEX</span>
                    </Link>
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon">
                         <Menu className="h-6 w-6" />
                         <span className="sr-only">Close Menu</span>
                       </Button>
                    </SheetClose>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    <nav className="flex flex-col gap-4 py-6">
                        <h3 className="font-semibold text-lg">Sitemap</h3>
                        {navLinks.map((link) => (
                          <SheetClose asChild key={link.href}>
                             <Link href={link.href} className="text-muted-foreground hover:text-foreground">{link.label}</Link>
                          </SheetClose>
                        ))}
                    </nav>
                    <div className="py-6 border-t">
                      <h3 className="font-semibold text-lg mb-4">Social Links</h3>
                      <div className="flex flex-col gap-4">
                        {socialLinks.map((link) => (
                           <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
                             {link.icon}
                             <span>{link.label}</span>
                           </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                   <div className="mt-auto">
                      <Button className="w-full">Get a Quote</Button>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
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

        <section id="about" className="py-20 bg-muted/40">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold">About Us</h2>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                We help investors across the world learn about exciting new crypto investments.
              </p>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                At CRYPTO FOLEX, we're more than just a marketing agency - we're a community of passionate individuals dedicated to shaping the future of decentralized finance. From facilitating AMA sessions to forging strategic partnerships, we're committed to amplifying the visibility and success of projects within the crypto space.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Community Promotion</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Web Development</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Search Engine Optimization</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Content Writing</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Graphics Designing</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Easy &amp; Emergency Solutions Anytime</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="ama-intro" className="py-20">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center">Introducing Crypto Folex AMA Sessions</h2>
            <div className="mt-10">
              <h3 className="text-2xl font-semibold">What is an AMA?</h3>
              <p className="mt-4 text-muted-foreground">
                An AMA (Ask Me Anything) is a 1-hour long live session between you and our audience. It's an interactive session where you can:
              </p>
              <ol className="mt-6 list-decimal list-inside space-y-4 text-muted-foreground">
                <li>Present your unique selling points to a large audience.</li>
                <li>Address and clear any doubts that the community may have, which could be hindering their decision to buy your product.</li>
                <li>Explain the vision the project is following and future potential of your project.</li>
                <li>Convey the value you provide to your customers through a friendly and engaging conversation.</li>
              </ol>
            </div>
             <div className="mt-10">
              <h3 className="text-2xl font-semibold">Types of AMAs We Provide:</h3>
              <ol className="mt-6 list-decimal list-inside space-y-4 text-muted-foreground">
                <li>X Space Voice AMA</li>
                <li>Telegram Video, Voice, or Text AMA</li>
                <li>Binance Live Video AMA</li>
                <li>Discord Video, Voice, or Text AMA</li>
              </ol>
               <p className="mt-4 text-muted-foreground">
                Select the platform that best suits your target audience.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-semibold">Structure of the AMA:</h3>
              <p className="mt-4 text-muted-foreground">
                The one-hour session is divided into two segments:
              </p>
              <ol className="mt-6 list-decimal list-inside space-y-4 text-muted-foreground">
                <li>Project Introduction: Kick off the session with 5 introductory questions from the host, giving the audience an overall insight into your project.</li>
                <li>Live Q&amp;A with the Audience: Engage with the audience directly, clear their doubts, and understand their expectations from the project.</li>
              </ol>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-semibold">Why Choose Crypto Folex?</h3>
              <p className="mt-4 text-muted-foreground">
                Crypto Folex is verified by Binance and one of the top 3 streamers on Binance Live. Since 2021, we have hosted over 800 AMAs. Our extensive collaboration with various projects over the years has helped us build an enthusiastic and engaged community from scratch. Now, it's your turn to leverage this strength and skyrocket your visibility in the crowded crypto space.
              </p>
            </div>
          </div>
        </section>
        
        <section id="team" className="py-20">
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
                    <p className="text-muted-foreground text-sm">Binance Affiliate Binance feed creator &amp; Streamer | Kols Manager Me 50 Channel Admin🚸</p>
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

        <section id="testimonials" className="py-20 bg-muted/40">
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
        
        <section id="ama-banners" className="py-20">
          <div className="container">
            <h2 className="text-center text-3xl font-bold">PREVIOUS AMA BANNERS</h2>
            <p className="text-center text-muted-foreground mt-2 mb-10">Check out some of our previous AMA banners.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {amaBanners.map((banner, index) => (
                <div key={banner.src} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
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

        <section id="community" className="py-20 bg-muted/40">
          <div className="container">
            <h2 className="text-center text-3xl font-bold">OUR COMMUNITY</h2>
            <p className="text-center text-muted-foreground mt-2 mb-10">
              Join our vibrant community of crypto enthusiasts.
            </p>
            <div className="flex justify-center">
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[140px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-background">
                  <div className="flex flex-col h-full">
                    <div className="bg-primary/10 p-4 flex items-center gap-4 border-b">
                      <Avatar>
                         <AvatarImage src="https://i.postimg.cc/Nj9QDFMr/IMG-20250815-212508-948.jpg" alt="Community Logo" />
                         <AvatarFallback>CF</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold">CRYPTO FOLEX</h3>
                        <p className="text-xs text-muted-foreground">Public Group</p>
                      </div>
                    </div>
                    <div className="p-4 bg-primary/5 text-sm border-b flex justify-around">
                        <div className="text-center">
                            <p className="font-bold text-lg">197K</p>
                            <p className="text-xs text-muted-foreground">Members</p>
                        </div>
                         <div className="text-center">
                            <p className="font-bold text-lg">1.2K</p>
                            <p className="text-xs text-muted-foreground">Online</p>
                        </div>
                    </div>
                    <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                      <div className="flex items-start gap-2.5">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="https://i.postimg.cc/2SrhPssG/IMG-20250815-225706-773.jpg" alt="Mark Crimo" />
                            <AvatarFallback>MC</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Mark Crimo</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">New AMA announcement soon! 🔥</p>
                        </div>
                      </div>
                       <div className="flex items-start gap-2.5">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="https://i.postimg.cc/26b01p8v/IMG-20250815-231059-726.jpg" alt="Mikey Marco" />
                            <AvatarFallback>MM</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Mikey Marco</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">Welcome to all new members!</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 mt-auto border-t">
                      <Link href="https://t.me/cryptofolex" target="_blank" rel="noopener noreferrer">
                         <Button className="w-full">Join Group</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="py-20 bg-muted/40">
          <div className="container">
            
            <div className="flex justify-center mt-10">
              <Image
                src="https://i.postimg.cc/VsZ5mdJd/IMG-20250816-000252-563.png"
                alt="Our Partners"
                width={1200}
                height={600}
                className="rounded-lg shadow-lg"
                data-ai-hint="partner logos"
              />
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
          <div className="mb-4">
            <p className="text-lg font-semibold">Our all socials :⬇️💖</p>
          </div>
          <div className="flex justify-center gap-4 mb-4 flex-wrap">
            {socialLinks.map((link) => (
              <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground flex items-center gap-2">
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
          <p>&copy; {new Date().getFullYear()} CRYPTO FOLEX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


export default function Page() {
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? <LandingPageContent /> : null;
}

    