
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Video, Pin, Package, Menu, Twitter, Send, Briefcase, RadioTower, Link as LinkIcon, Mic, MessageSquare } from "lucide-react";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";

function PricingPageContent() {
    const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#team", label: "Team" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#ama-banners", label: "AMA Banners" },
    { href: "/#community", label: "Community" },
    { href: "/#partners", label: "Our Partners" },
    { href: "/pricing", label: "Pricing" },
    { href: "/#contact", label: "Contact" },
  ];

  const mobileNavLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#team", label: "Team" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#ama-banners", label: "AMA Banners" },
    { href: "/#community", label: "Community" },
    { href: "/#partners", label: "Our Partners" },
    { href: "/pricing", label: "Pricing" },
    { href: "/#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://t.me/cryptofolex", label: "Telegram Group", icon: <Send size={20} /> },
    { href: "https://t.me/Cryptofolex1", label: "Telegram Channel", icon: <Send size={20} /> },
    { href: "https://www.binance.com/en/live/u/72409192", label: "Binance Live", icon: <Briefcase size={20} /> },
    { href: "https://x.com/Folex00", label: "X", icon: <Twitter size={20} /> },
  ];

  const footerSocials = [
      { href: "#", label: "Linktree", icon: <LinkIcon /> },
      { href: "https://x.com/Folex00", label: "Twitter", icon: <Twitter /> },
      { href: "https://www.binance.com/en/live/u/72409192", label: "Binance live", icon: <Briefcase /> },
      { href: "https://t.me/cryptofolex", label: "Telegram chat", icon: <Send /> },
      { href: "https://t.me/Cryptofolex1", label: "Telegram news", icon: <RadioTower /> },
  ];

  const footerSitemap = [
      { href: "/#team", label: "Our Team" },
      { href: "/#faq", label: "FAQ" },
      { href: "/#testimonials", label: "Customer Feedback" },
      { href: "/#about", label: "Services" },
      { href: "/pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
  ];

  const footerResources = [
      { href: "#", label: "AMA RECAPS" },
      { href: "#", label: "AMA ANNOUNCEMENT" },
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
                        {mobileNavLinks.map((link) => (
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
        <section id="pricing" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Pricing Plans</h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                Choose the perfect plan for your project's needs. We offer a range of services to help you connect with your community.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              <Card className="flex flex-col col-span-1">
                <CardHeader className="items-center">
                   <p className="text-sm font-semibold text-muted-foreground uppercase">Telegram</p>
                   <div className="bg-primary/10 rounded-full p-3 my-2">
                      <MessageSquare className="h-8 w-8 text-primary"/>
                   </div>
                  <CardTitle>$250</CardTitle>
                  <CardTitle>Text AMA</CardTitle>
                  <CardDescription className="text-center">Share your project features and potentials to maximum attendees.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="font-semibold mb-3">What's included</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Talk with community using text message</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Up to 5,000 attendees</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>40 min to 1 hour session</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>AMA Recap</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Blockchain Express Full support</span></li>
                    </ul>
                  </div>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="flex flex-col col-span-1">
                <CardHeader className="items-center">
                   <p className="text-sm font-semibold text-muted-foreground uppercase">Telegram / X</p>
                   <div className="bg-primary/10 rounded-full p-3 my-2">
                      <Mic className="h-8 w-8 text-primary"/>
                   </div>
                  <CardTitle>$350</CardTitle>
                  <CardTitle>Voice / Space AMA</CardTitle>
                   <CardDescription className="text-center">Share your project features and potentials to maximum attendees.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="font-semibold mb-3">What's included</p>
                     <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Talk with community using voice message</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Up to 15,000 attendees</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>40 min to 1 hour session</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>AMA Recap</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Blockchain Express Full support</span></li>
                    </ul>
                  </div>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="flex flex-col col-span-1">
                <CardHeader className="items-center">
                   <p className="text-sm font-semibold text-muted-foreground uppercase">Binance</p>
                   <div className="bg-primary/10 rounded-full p-3 my-2">
                      <Video className="h-8 w-8 text-primary"/>
                   </div>
                   <CardTitle>$450</CardTitle>
                  <CardTitle>Voice / Video AMA</CardTitle>
                  <CardDescription className="text-center">Best way to communicate with individuals in Binance.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div>
                     <p className="font-semibold mb-3">What's included</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Talk with community using voice or video chat in Binance</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Up to 30000+ Attendees at a time</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>1 Hour Session</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Professional Host</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>AMA Recap</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Blockchain Express Full support</span></li>
                    </ul>
                  </div>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="flex flex-col col-span-1">
                <CardHeader className="items-center">
                   <p className="text-sm font-semibold text-muted-foreground uppercase">Binance & X</p>
                   <div className="bg-primary/10 rounded-full p-3 my-2">
                      <Video className="h-8 w-8 text-primary"/>
                   </div>
                  <CardTitle>$600</CardTitle>
                  <CardTitle>Simultaneously Binance & X live AMA</CardTitle>
                   <CardDescription className="text-center">Best way to communicate with individuals in Binance and X.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="font-semibold mb-3">What's included</p>
                     <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Talk with community using voice or video chat in binance & X</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Up to 50000+ Attendees at a time</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>1 Hour Session</span></li>
                       <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Post AMA News Sharing</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>AMA Recap</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>High support</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Blockchain Express Full support</span></li>
                    </ul>
                  </div>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="flex flex-col col-span-1">
                <CardHeader className="items-center">
                  <p className="text-sm font-semibold text-muted-foreground uppercase">Advertisement</p>
                  <div className="bg-primary/10 rounded-full p-3 my-2">
                     <Pin className="h-8 w-8 text-primary"/>
                  </div>
                  <CardTitle>Pin Post</CardTitle>
                  <CardDescription className="text-center">Pinned post for maximum visibility.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-4xl font-bold text-center my-4">$120</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Limitless time pin</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Post in X (Twitter)</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Post in Telegram group</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Post in Telegram channel</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Blockchain Express Full support</span></li>
                    </ul>
                  </div>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col col-span-1">
                <CardHeader className="items-center">
                  <p className="text-sm font-semibold text-muted-foreground uppercase">Custom</p>
                  <div className="bg-primary/10 rounded-full p-3 my-2">
                     <Package className="h-8 w-8 text-primary"/>
                  </div>
                  <CardTitle>Others Service</CardTitle>
                  <CardDescription className="text-center">Custom packages tailored to your specific project needs.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>VC, IDO</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Launchpad</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Giveaway event</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Airdrop promotion</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Unlimited Kols post</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Any type promotion</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Social media growth</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Long-term collaboration</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Any type customs service</span></li>
                      <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /><span>Blockchain Express Full support</span></li>
                    </ul>
                  </div>
                  <Button className="w-full mt-6">Contact Us</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-background border-t">
        <div className="container py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Social Links</h4>
                    <ul className="space-y-2">
                        {footerSocials.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                                    {link.icon}
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Sitemap</h4>
                    <ul className="space-y-2">
                        {footerSitemap.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="text-muted-foreground hover:text-foreground">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Resources</h4>
                    <ul className="space-y-2">
                         {footerResources.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="text-muted-foreground hover:text-foreground">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mt-8 border-t pt-8 text-center text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} CRYPTO FOLEX. All rights reserved.</p>
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

  return isClient ? <PricingPageContent /> : null;
}

    