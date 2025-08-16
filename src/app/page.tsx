
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Twitter, Check, Star, Send, Briefcase, Menu, Users, RadioTower, Link as LinkIcon, MessageSquare, Mic, Video, Pin, Package, ArrowRight } from "lucide-react";
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
  ];

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "Team" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "/pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];
  
  const services = [
      { title: "Community Promotion", description: "Expand your reach and engage with a thriving community of crypto enthusiasts." },
      { title: "Web Development", description: "Create a stunning and functional website that showcases your project's potential." },
      { title: "Search Engine Optimization", description: "Improve your search engine rankings and attract organic traffic to your platform." },
      { title: "Content Writing", description: "Craft compelling narratives and educational content to build your brand's authority." },
      { title: "Graphics Designing", description: "Develop a strong visual identity with professional graphics and marketing materials." },
      { title: "Strategic Partnerships", description: "Forge valuable connections and collaborations to accelerate your growth." },
  ]

  const socialLinks = [
    { href: "https://t.me/cryptofolex", label: "Telegram Group", icon: <Send size={20} /> },
    { href: "https://t.me/Cryptofolex1", label: "Telegram Channel", icon: <RadioTower size={20} /> },
    { href: "https://www.binance.com/en/live/u/72409192", label: "Binance Live", icon: <Video size={20} /> },
    { href: "https://x.com/Folex00", label: "X (Twitter)", icon: <Twitter size={20} /> },
  ];
  
  const communityImages = [
    "https://i.postimg.cc/fbLKPVpD/IMG-20250816-003019-105.jpg",
    "https://i.postimg.cc/RZGdG7Pg/IMG-20250816-003038.jpg",
    "https://i.postimg.cc/W1sSMW7D/IMG-20250816-003057.jpg",
  ];

  const footerSocials = [
      { href: "https://x.com/Folex00", label: "Twitter", icon: <Twitter /> },
      { href: "https://www.binance.com/en/live/u/72409192", label: "Binance live", icon: <Briefcase /> },
      { href: "https://t.me/cryptofolex", label: "Telegram Chat", icon: <Send /> },
      { href: "https://t.me/Cryptofolex1", label: "Telegram News", icon: <RadioTower /> },
  ];

  const footerSitemap = [
      { href: "#about", label: "About Us" },
      { href: "#services", label: "Services" },
      { href: "#team", label: "Our Team" },
      { href: "/pricing", label: "Pricing" },
      { href: "#contact", label: "Contact Us" },
  ];

  const footerResources = [
      { href: "https://www.binance.com/live/video?roomId=2266094", label: "AMA Recaps" },
      { href: "#", label: "Announcements" },
  ];


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
               <Image src="https://i.postimg.cc/Nj9QDFMr/IMG-20250815-212508-948.jpg" alt="CRYPTO FOLEX Logo" width={36} height={36} className="h-9 w-9 rounded-full" />
               <span>CRYPTO FOLEX</span>
            </Link>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">{link.label}</Link>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-4">
            <Button asChild>
                <Link href="/#contact">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm bg-background p-6">
                <SheetHeader>
                   <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
                       <Image src="https://i.postimg.cc/Nj9QDFMr/IMG-20250815-212508-948.jpg" alt="CRYPTO FOLEX Logo" width={32} height={32} className="h-8 w-8 rounded-full" />
                       <span>CRYPTO FOLEX</span>
                    </Link>
                </SheetHeader>
                <div className="flex flex-col h-full">
                    <nav className="flex flex-col gap-4 py-6 border-t">
                        {navLinks.map((link) => (
                          <SheetClose asChild key={link.href}>
                             <Link href={link.href} className="text-lg py-2 text-muted-foreground hover:text-foreground">{link.label}</Link>
                          </SheetClose>
                        ))}
                    </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-24 md:py-32 lg:py-40 animate-fade-in">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl animate-slide-in-up">
                Your Premier Web3 Media Powerhouse
              </h1>
              <p className="mx-auto max-w-xl text-lg text-muted-foreground md:mx-0 animate-slide-in-up animation-delay-300">
                From community engagement to strategic partnerships, we provide the fuel for your project's journey to the moon. Relax, we handle it all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-in-up animation-delay-500">
                <Button size="lg" asChild>
                    <Link href="/pricing">View Pricing</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link href="/#contact">Book a Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in animation-delay-700">
              <Image 
                src="https://i.postimg.cc/15trXhCz/image-search-1755280175089.webp" 
                alt="Web3 Media Powerhouse" 
                width={550} 
                height={550} 
                className="rounded-full shadow-2xl"
                data-ai-hint="abstract illustration"
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-20 lg:py-24 bg-muted/40 animate-fade-in">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-in-up">
                    <Image src="https://i.postimg.cc/2SrhPssG/IMG-20250815-225706-773.jpg" alt="Mark Crimo, Founder" width={800} height={800} className="rounded-lg shadow-xl" data-ai-hint="person working" />
                </div>
                <div className="space-y-6 animate-slide-in-up animation-delay-200">
                    <div className="inline-block bg-primary text-primary-foreground font-semibold py-1 px-3 rounded-full text-sm">
                      5+ Years of Experience
                    </div>
                    <h2 className="text-3xl font-bold">Mark Crimo, Founder of CRYPTO FOLEX</h2>
                     <blockquote className="text-lg text-muted-foreground border-l-4 border-primary pl-4">
                        "In the ever-changing world of cryptocurrency, success requires adaptability, perseverance, and collaboration. At CRYPTO FOLEX, we're not just shaping the future - we're writing the playbook."
                    </blockquote>
                    <p className="text-muted-foreground">
                        At CRYPTO FOLEX, we're more than just a marketing agency - we're a community of passionate individuals dedicated to shaping the future of decentralized finance. From facilitating AMA sessions to forging strategic partnerships, we're committed to amplifying your project's visibility and success.
                    </p>
                </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 lg:py-24 animate-fade-in">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold">All-in-One Crypto Growth Platform</h2>
              <p className="mt-4 text-muted-foreground">
                We offer a comprehensive suite of services designed to elevate your project at every stage of its lifecycle.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                  <Card key={service.title} className="bg-card border-2 border-transparent hover:border-primary transition-all duration-300 animate-slide-in-up" style={{animationDelay: `${i * 150}ms`}}>
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="ama-intro" className="py-20 lg:py-24 bg-muted/40 animate-fade-in">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Crypto Folex AMA Sessions</h2>
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                    <div className="animate-slide-in-up">
                      <h3 className="text-xl font-semibold">What is an AMA?</h3>
                      <p className="mt-2 text-muted-foreground">
                        An AMA (Ask Me Anything) is a live session where you present your project, address community questions, and share your vision to build trust and drive engagement.
                      </p>
                    </div>
                     <div className="animate-slide-in-up animation-delay-200">
                      <h3 className="text-xl font-semibold">AMA Formats</h3>
                      <ul className="mt-2 list-disc list-inside space-y-2 text-muted-foreground">
                        <li>X (Twitter) Space Voice AMA</li>
                        <li>Telegram Video, Voice, or Text AMA</li>
                        <li>Binance Live Video AMA</li>
                        <li>Discord Video, Voice, or Text AMA</li>
                      </ul>
                    </div>
                </div>
                 <div className="space-y-8">
                    <div className="animate-slide-in-up animation-delay-400">
                      <h3 className="text-xl font-semibold">Why Choose Us?</h3>
                      <p className="mt-2 text-muted-foreground">
                        Verified by Binance and a top 3 streamer on Binance Live, we've hosted over 800 AMAs since 2021, building a massive, engaged community ready to hear about your project.
                      </p>
                    </div>
                    <div className="animate-slide-in-up animation-delay-600">
                        <Button asChild>
                            <Link href="/pricing">Explore AMA Packages <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                 </div>
            </div>
          </div>
        </section>
        
        <section id="team" className="py-20 lg:py-24 animate-fade-in">
          <div className="container mx-auto max-w-6xl space-y-12 text-center">
            <h2 className="text-center text-3xl font-bold">Meet Our Leadership</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="animate-slide-in-up">
                <CardContent className="flex flex-col items-center gap-4 p-6 pt-8">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://i.postimg.cc/2SrhPssG/IMG-20250815-225706-773.jpg" alt="Mark Crimo" data-ai-hint="person" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">Mark Crimo</h3>
                    <p className="font-semibold text-primary">Founder & CEO</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-slide-in-up animation-delay-200">
                <CardContent className="flex flex-col items-center gap-4 p-6 pt-8">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://i.postimg.cc/26b01p8v/IMG-20250815-231059-726.jpg" alt="Mikey Marco" data-ai-hint="person" />
                    <AvatarFallback>MM</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">Mikey Marco</h3>
                    <p className="font-semibold text-primary">Co-Founder</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-slide-in-up animation-delay-400">
                <CardContent className="flex flex-col items-center gap-4 p-6 pt-8">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://i.postimg.cc/zBKfDBWg/IMG-20250815-230231-790.jpg" alt="Chris Hendrikso" data-ai-hint="person" />
                    <AvatarFallback>CH</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">Chris Hendrikso</h3>
                    <p className="font-semibold text-primary">Marketing Manager</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-slide-in-up">
                <CardContent className="flex flex-col items-center gap-4 p-6 pt-8">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://i.postimg.cc/bYb92987/IMG-20250815-233551-808.jpg" alt="Rupok" data-ai-hint="person" />
                    <AvatarFallback>R</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">Rupok</h3>
                    <p className="font-semibold text-primary">CMO</p>
                  </div>
                </CardContent>
              </Card>
               <Card className="animate-slide-in-up animation-delay-200">
                <CardContent className="flex flex-col items-center gap-4 p-6 pt-8">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://i.postimg.cc/rFXghYQy/IMG-20250815-233546-893.jpg" alt="Homo sapiens" data-ai-hint="person" />
                    <AvatarFallback>HS</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">Homo sapiens</h3>
                    <p className="font-semibold text-primary">Host</p>
                  </div>
                </CardContent>
              </Card>
               <Card className="animate-slide-in-up animation-delay-400">
                <CardContent className="flex flex-col items-center gap-4 p-6 pt-8">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://i.postimg.cc/pLj3P7Cv/IMG-20250816-092829-742.jpg" alt="Martijn" data-ai-hint="person" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">Martijn</h3>
                    <p className="font-semibold text-primary">Marketing Team</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 lg:py-24 bg-muted/40 animate-fade-in">
          <div className="container">
             <h2 className="text-center text-3xl font-bold">Loved by the Best in Crypto</h2>
             <p className="text-center text-muted-foreground mt-2 mb-10 max-w-2xl mx-auto">Real stories from our satisfied partners who have achieved exceptional results with our strategic guidance.</p>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="animate-slide-in-up">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="https://placehold.co/100x100.png" alt="Client 1" data-ai-hint="person"/>
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-bold">Alex Johnson</h3>
                      <p className="text-sm text-muted-foreground">CEO, NFT Project</p>
                      <p className="mt-4 text-muted-foreground">"CRYPTO FOLEX transformed our community engagement. Their strategies are top-notch and delivered measurable results."</p>
                    </div>
                     <div className="flex items-center gap-0.5">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                     </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-slide-in-up animation-delay-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="https://placehold.co/100x100.png" alt="Client 2" data-ai-hint="person"/>
                      <AvatarFallback>SL</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-bold">Samantha Lee</h3>
                      <p className="text-sm text-muted-foreground">Founder, DeFi Protocol</p>
                       <p className="mt-4 text-muted-foreground">"The best in the business for crypto marketing. Their team is knowledgeable, responsive, and dedicated to our success."</p>
                    </div>
                    <div className="flex items-center gap-0.5">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                     </div>
                  </div>
                 
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section id="partners" className="py-20 animate-fade-in">
          <div className="container">
            <h2 className="text-center text-3xl font-bold">Our Partners</h2>
            <p className="text-center text-muted-foreground mt-2 mb-10 max-w-2xl mx-auto">
              We are proud to collaborate with leading projects and exchanges in the crypto space.
            </p>
            <div className="relative mt-10 animate-slide-in-up">
              <div className="flex justify-center items-center">
                 <Image
                    src="https://i.postimg.cc/VsZ5mdJd/IMG-20250816-000252-563.png"
                    alt="Our Partners"
                    width={1000}
                    height={500}
                    className="rounded-lg"
                    data-ai-hint="partner logos"
                 />
              </div>
            </div>
          </div>
        </section>
        
        <section id="contact" className="py-20 lg:py-24 animate-fade-in bg-muted/40">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6 animate-slide-in-up">
                <h2 className="text-3xl font-bold">Ready to Elevate Your Project?</h2>
                <p className="text-muted-foreground">
                  Let's talk. Fill out the form and our team will get back to you shortly to discuss how we can achieve your goals.
                </p>
                <div className="space-y-4">
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
              <Card className="animate-slide-in-up animation-delay-200">
                <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                    <CardDescription>We're excited to hear about your project.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <Input placeholder="Your Name" />
                        <Input type="email" placeholder="Your Email" />
                        <Textarea placeholder="Tell us about your project" />
                        <Button type="submit" className="w-full" size="lg">Send Message</Button>
                    </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-background border-t">
        <div className="container py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                     <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
                       <Image src="https://i.postimg.cc/Nj9QDFMr/IMG-20250815-212508-948.jpg" alt="CRYPTO FOLEX Logo" width={32} height={32} className="h-8 w-8 rounded-full" />
                       <span>CRYPTO FOLEX</span>
                    </Link>
                    <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4">Sitemap</h4>
                    <ul className="space-y-2">
                        {footerSitemap.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="text-muted-foreground hover:text-primary">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold text-lg mb-4">Resources</h4>
                    <ul className="space-y-2">
                         {footerResources.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="text-muted-foreground hover:text-primary" target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4">Connect</h4>
                    <ul className="space-y-2">
                        {footerSocials.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                                    {link.icon}
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
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

    