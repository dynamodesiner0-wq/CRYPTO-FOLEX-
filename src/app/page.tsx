
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Twitter, Check, Star, Send, Briefcase, Menu, Users, RadioTower, Link as LinkIcon, MessageSquare, Mic, Video, Pin, Package, ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

function LandingPageContent() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "Team" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "/pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
      { title: "Community Promotion", description: "Expand your reach and engage with a thriving community of crypto enthusiasts.", icon: Users },
      { title: "Web Development", description: "Create a stunning and functional website that showcases your project's potential.", icon: LinkIcon },
      { title: "Search Engine Optimization", description: "Improve your search engine rankings and attract organic traffic to your platform.", icon: RadioTower },
      { title: "Content Writing", description: "Craft compelling narratives and educational content to build your brand's authority.", icon: MessageSquare },
      { title: "Graphics Designing", description: "Develop a strong visual identity with professional graphics and marketing materials.", icon: Mic },
      { title: "Easy & Emergency Solutions Anytime", description: "Forge valuable connections and collaborations to accelerate your growth.", icon: Briefcase },
  ]

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
  
  const amaBanners = [
      { src: 'https://i.postimg.cc/jSjfv6tK/IMG-20250821-092657-169.jpg', alt: 'AMA Banner 1' },
      { src: 'https://i.postimg.cc/TY0mrN8C/IMG-20250821-092659-204.jpg', alt: 'AMA Banner 2' },
      { src: 'https://i.postimg.cc/9FCZw5kD/IMG-20250821-092701-429.jpg', alt: 'AMA Banner 3' },
      { src: 'https://i.postimg.cc/tRhFgCB0/IMG-20250821-092702-531.jpg', alt: 'AMA Banner 4' },
      { src: 'https://i.postimg.cc/Znh3L1KD/IMG-20250821-092704-110.jpg', alt: 'AMA Banner 5' },
      { src: 'https://i.postimg.cc/90t9gJDX/IMG-20250821-092704-650.jpg', alt: 'AMA Banner 6' },
      { src: 'https://i.postimg.cc/Pq91CLGH/IMG-20250821-092706-723.jpg', alt: 'AMA Banner 7' },
      { src: 'https://i.postimg.cc/Y9FYYpkW/IMG-20250821-092707-894.jpg', alt: 'AMA Banner 8' },
      { src: 'https://i.postimg.cc/KYRncPHQ/IMG-20250821-092709-790.jpg', alt: 'AMA Banner 9' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-background/80 border-b border-border/40 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container flex h-20 items-center">
          <div className="mr-4 flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
               <Image src="https://i.postimg.cc/Nj9QDFMr/IMG-20250815-212508-948.jpg" alt="CRYPTO FOLEX Logo" width={40} height={40} className="h-10 w-10 rounded-full" />
               <span className="text-xl">CRYPTO FOLEX</span>
            </Link>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex ml-auto">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">{link.label}</Link>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-4 md:ml-8">
            <Button asChild className="hidden md:flex">
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
                   <SheetTitle className="sr-only">Menu</SheetTitle>
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
        <section className="relative py-32 md:py-48 lg:py-60 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-0"></div>
          <div className="absolute inset-0 bg-[url(https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png)] opacity-10"></div>
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="text-center md:text-left">
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in">
                    <span className="block">All you need to grow your</span>
                    <span className="block text-primary">business, in one place</span>
                  </h1>
                  <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg text-muted-foreground md:text-xl animate-fade-in animation-delay-300">
                    From community engagement to strategic partnerships, we provide the fuel for your project's journey to the moon. Relax, we handle it all.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in animation-delay-500">
                    <Button size="lg" asChild>
                        <Link href="/pricing">View Pricing</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/#contact">Book a Consultation</Link>
                    </Button>
                  </div>
              </div>
              <div className="flex justify-center animate-fade-in animation-delay-700 md:flex">
                <Image src="https://i.postimg.cc/jSPQHS8C/image-search-1755280175089.webp" alt="Hero Image" width={500} height={500} className="rounded-full shadow-2xl" data-ai-hint="woman tech" />
              </div>
            </div>
          </div>
        </section>

        <section id="founder" className="py-20 lg:py-24">
          <div className="container">
            <div className="bg-secondary rounded-lg p-8 md:p-12 shadow-lg">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="flex justify-center md:justify-start">
                        <Avatar className="h-40 w-40 border-4 border-primary">
                            <AvatarImage src="https://i.postimg.cc/2SrhPssG/IMG-20250815-225706-773.jpg" alt="Mark Crimo, Founder" />
                            <AvatarFallback>MC</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="md:col-span-2 text-center md:text-left space-y-4">
                        <h3 className="text-3xl font-bold">Mark Crimo, Founder of CRYPTO FOLEX 5 star Agency</h3>
                        <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-6">
                           "In the ever-changing world of cryptocurrency, success requires adaptability, perseverance, and collaboration. At CRYPTO FOLEX, we're not just shaping the future - we're writing the playbook."
                        </blockquote>
                    </div>
                </div>
            </div>
          </div>
        </section>
        
        <section id="about" className="py-20 lg:py-32">
          <div className="container">
            <div className="grid items-center">
                <div className="space-y-6 text-center">
                    <div className="inline-block bg-primary/10 text-primary font-semibold py-1 px-3 rounded-full text-sm">
                      About Crypto Folex
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold">We help investors across the world learn about exciting new crypto investments.</h2>
                     <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        At Crypto Folex, we're more than just a marketing agency - we're a community of passionate individuals dedicated to shaping the future of decentralized finance. From facilitating AMA sessions to forging strategic partnerships, we're committed to amplifying the visibility and success of projects within the crypto space.
                    </p>
                    <div className="max-w-3xl mx-auto space-y-4">
                      <h3 className="text-2xl font-bold pt-8">Why Choose Crypto Folex?</h3>
                      <p className="text-lg text-muted-foreground">
                        Crypto Folex is verified by Binance and one of the top 3 streamers on Binance Live. Since 2021, we have hosted over 800 AMAs. Our extensive collaboration with various projects over the years has helped us build an enthusiastic and engaged community from scratch. Now, it's your turn to leverage this strength and skyrocket your visibility in the crowded crypto space.
                      </p>
                    </div>
                </div>
            </div>
          </div>
        </section>
        
        <section id="services" className="py-20 lg:py-32 bg-secondary">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">All-in-One Crypto Growth Platform</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                We offer a comprehensive suite of services designed to elevate your project at every stage of its lifecycle.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                  <Card key={service.title} className="bg-background border-2 border-transparent hover:border-primary transition-all duration-300 group">
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                       <Link href="/#contact" className="inline-flex items-center text-primary font-semibold mt-4 group-hover:underline">
                        Learn More <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="ama-intro" className="py-20 lg:py-32">
          <div className="container max-w-5xl mx-auto">
             <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Types of AMAs We Provide</h2>
             </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-10">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary">AMA Formats</h3>
                      <ul className="mt-4 space-y-3 text-muted-foreground text-lg">
                        <li className="flex items-start gap-3"><span className="text-primary font-bold mt-1">1.</span>X Space Voice AMA</li>
                        <li className="flex items-start gap-3"><span className="text-primary font-bold mt-1">2.</span>Telegram Video, Voice, or Text AMA</li>
                        <li className="flex items-start gap-3"><span className="text-primary font-bold mt-1">3.</span>Binance Live Video AMA</li>
                        <li className="flex items-start gap-3"><span className="text-primary font-bold mt-1">4.</span>Discord Video, Voice, or Text AMA</li>
                      </ul>
                       <p className="mt-4 text-muted-foreground text-lg">
                        Select the platform that best suits your target audience.
                      </p>
                    </div>
                </div>
                 <div>
                    <Card className="p-8 bg-secondary shadow-lg space-y-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-primary">Structure of the AMA</h3>
                        <p className="mt-2 text-muted-foreground text-lg">
                          The one-hour session is divided into two segments:
                        </p>
                      </div>
                      <div>
                          <h4 className="font-semibold text-lg">1. Project Introduction</h4>
                          <p className="mt-1 text-muted-foreground">Kick off the session with 5 introductory questions from the host, giving the audience an overall insight into your project.</p>
                      </div>
                       <div>
                          <h4 className="font-semibold text-lg">2. Live Q&A with the Audience</h4>
                          <p className="mt-1 text-muted-foreground">Engage with the audience directly, clear their doubts, and understand their expectations from the project.</p>
                      </div>
                    </Card>
                 </div>
            </div>
          </div>
        </section>
        
        <section id="team" className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto max-w-6xl space-y-16 text-center">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Leadership</h2>
               <p className="mt-4 text-muted-foreground text-lg">
                The experts driving your project's success.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background">
                <CardContent className="flex flex-col items-center gap-4 p-6 pt-8">
                  <Avatar className="h-28 w-28 border-4 border-primary">
                    <AvatarImage src="https://i.postimg.cc/2SrhPssG/IMG-20250815-225706-773.jpg" alt="Mark Crimo" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">Mark Crimo</h3>
                    <p className="font-semibold text-primary">Founder & CEO</p>
                    <div className="flex items-center justify-center mt-2">
                       <Link href="https://t.me/Markcrimo6" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                         <Send className="h-5 w-5" />
                       </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardContent className="flex flex-col items-center gap-4 p-6 pt-8">
                  <Avatar className="h-28 w-28 border-4 border-primary">
                    <AvatarImage src="https://i.postimg.cc/26b01p8v/IMG-20250815-231059-726.jpg" alt="Mikey Marco" />
                    <AvatarFallback>MM</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">Mikey Marco</h3>
                    <p className="font-semibold text-primary">Co-Founder</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardContent className="flex flex-col items-center gap-4 p-6 pt-8">
                  <Avatar className="h-28 w-28 border-4 border-primary">
                    <AvatarImage src="https://i.postimg.cc/zBKfDBWg/IMG-20250815-230231-790.jpg" alt="Chris Hendrikso" />
                    <AvatarFallback>CH</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">Chris Hendrikso</h3>
                    <p className="font-semibold text-primary">Marketing Manager</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardContent className="flex flex-col items-center gap-4 p-6 pt-8">
                  <Avatar className="h-28 w-28 border-4 border-primary">
                    <AvatarImage src="https://i.postimg.cc/bYb92987/IMG-20250815-233551-808.jpg" alt="Rupok" />
                    <AvatarFallback>R</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">Rupok</h3>
                    <p className="font-semibold text-primary">CMO</p>
                  </div>
                </CardContent>
              </Card>
               <Card className="bg-background">
                <CardContent className="flex flex-col items-center gap-4 p-6 pt-8">
                  <Avatar className="h-28 w-28 border-4 border-primary">
                    <AvatarImage src="https://i.postimg.cc/rFXghYQy/IMG-20250815-233546-893.jpg" alt="Homo sapiens" />
                    <AvatarFallback>HS</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">Homo sapiens</h3>
                    <p className="font-semibold text-primary">Host</p>
                  </div>
                </CardContent>
              </Card>
               <Card className="bg-background">
                <CardContent className="flex flex-col items-center gap-4 p-6 pt-8">
                  <Avatar className="h-28 w-28 border-4 border-primary">
                    <AvatarImage src="https://i.postimg.cc/pLj3P7Cv/IMG-20250816-092829-742.jpg" alt="Martijn" />
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

        <section id="testimonials" className="py-20 lg:py-32">
          <div className="container">
             <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Loved by the Best in Crypto</h2>
              <p className="text-center text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">Real stories from our satisfied partners who have achieved exceptional results with our strategic guidance.</p>
             </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-secondary p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-0.5 mb-4">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                   </div>
                  <p className="text-muted-foreground text-lg mb-6">"CRYPTO FOLEX transformed our community engagement. Their strategies are top-notch and delivered measurable results."</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src="https://placehold.co/100x100.png" alt="Client 1" />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-lg">Alex Johnson</h3>
                      <p className="text-sm text-muted-foreground">CEO, NFT Project</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-secondary p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-0.5 mb-4">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                   </div>
                   <p className="text-muted-foreground text-lg mb-6">"The best in the business for crypto marketing. Their team is knowledgeable, responsive, and dedicated to our success."</p>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src="https://placehold.co/100x100.png" alt="Client 2" />
                      <AvatarFallback>SL</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-lg">Samantha Lee</h3>
                      <p className="text-sm text-muted-foreground">Founder, DeFi Protocol</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section id="partners" className="py-20 bg-secondary">
          <div className="container">
            <h2 className="text-center text-3xl font-bold">PREVIOUS AMA BANNERS</h2>
            <div className="relative mt-12 flex justify-center">
              <Carousel className="w-full max-w-4xl" opts={{ loop: true }}>
                <CarouselContent>
                  {amaBanners.map((banner, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex items-center justify-center p-0 overflow-hidden rounded-lg">
                            <Image
                              src={banner.src}
                              alt={banner.alt}
                              width={1000}
                              height={500}
                              className="object-contain w-full"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        
        <section id="contact" className="py-20 lg:py-32">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">Ready to Elevate Your Project?</h2>
                <p className="text-muted-foreground text-lg">
                  Let's talk. Fill out the form and our team will get back to you shortly to discuss how we can achieve your goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-lg">
                    <Check className="h-6 w-6 text-primary" />
                    <span>Dedicated expert team</span>
                  </div>
                   <div className="flex items-center gap-3 text-lg">
                    <Check className="h-6 w-6 text-primary" />
                    <span>Proven results with top projects</span>
                  </div>
                   <div className="flex items-center gap-3 text-lg">
                    <Check className="h-6 w-6 text-primary" />
                    <span>Comprehensive marketing solutions</span>
                  </div>
                </div>
              </div>
              <Card className="bg-secondary">
                <CardHeader>
                    <CardTitle className="text-2xl">Get in Touch</CardTitle>
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
      <footer className="bg-secondary border-t border-border/20">
        <div className="container py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                     <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
                       <Image src="https://i.postimg.cc/Nj9QDFMr/IMG-20250815-212508-948.jpg" alt="CRYPTO FOLEX Logo" width={32} height={32} className="h-8 w-8 rounded-full" />
                       <span className="text-xl">CRYPTO FOLEX</span>
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
