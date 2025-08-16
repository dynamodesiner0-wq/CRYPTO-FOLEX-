
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Video, Pin, Package, Menu, Twitter, Send, Briefcase, RadioTower, Link as LinkIcon, Mic, MessageSquare, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";

function PricingPageContent() {
    const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#team", label: "Team" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/pricing", label: "Pricing" },
    { href: "/#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://t.me/cryptofolex", label: "Telegram Group", icon: <Send size={20} /> },
    { href: "https://t.me/Cryptofolex1", label: "Telegram Channel", icon: <RadioTower size={20} /> },
    { href: "https://www.binance.com/en/live/u/72409192", label: "Binance Live", icon: <Video size={20} /> },
    { href: "https://x.com/Folex00", label: "X (Twitter)", icon: <Twitter size={20} /> },
  ];

  const footerSocials = [
      { href: "https://x.com/Folex00", label: "Twitter", icon: <Twitter /> },
      { href: "https://www.binance.com/en/live/u/72409192", label: "Binance live", icon: <Briefcase /> },
      { href: "https://t.me/cryptofolex", label: "Telegram Chat", icon: <Send /> },
      { href: "https://t.me/Cryptofolex1", label: "Telegram News", icon: <RadioTower /> },
  ];

  const footerSitemap = [
      { href: "/#about", label: "About Us" },
      { href: "/#services", label: "Services" },
      { href: "/#team", label: "Our Team" },
      { href: "/pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact Us" },
  ];

  const footerResources = [
      { href: "https://www.binance.com/live/video?roomId=2266094", label: "AMA Recaps" },
      { href: "#", label: "Announcements" },
  ];

  const pricingPlans = [
    {
      platform: "Telegram",
      icon: MessageSquare,
      price: "$250",
      title: "Text AMA",
      description: "Share your project features and potentials to maximum attendees.",
      features: [
        "Talk with community using text message",
        "Up to 5,000 attendees",
        "40 min to 1 hour session",
        "AMA Recap",
        "Full support",
      ]
    },
    {
      platform: "Telegram / X",
      icon: Mic,
      price: "$350",
      title: "Voice / Space AMA",
      description: "Share your project features and potentials to maximum attendees.",
      features: [
        "Talk with community using voice message",
        "Up to 15,000 attendees",
        "40 min to 1 hour session",
        "AMA Recap",
        "Full support",
      ]
    },
    {
      platform: "Binance",
      icon: Video,
      price: "$450",
      title: "Voice / Video AMA",
      description: "Best way to communicate with individuals in Binance.",
      features: [
        "Voice or video chat in Binance",
        "Up to 30,000+ Attendees",
        "1 Hour Session",
        "Professional Host",
        "AMA Recap",
        "Full support",
      ]
    },
    {
      platform: "Binance & X",
      icon: Video,
      price: "$600",
      title: "Simultaneous Live AMA",
      description: "Best way to communicate with individuals in Binance and X.",
      features: [
        "Voice or video chat in Binance & X",
        "Up to 50,000+ Attendees",
        "1 Hour Session",
        "Post AMA News Sharing",
        "AMA Recap",
        "High priority support",
      ]
    },
    {
      platform: "Advertisement",
      icon: Pin,
      price: "$120",
      title: "Pin Post",
      description: "Pinned post for maximum visibility.",
      features: [
        "Limitless time pin",
        "Post in X (Twitter)",
        "Post in Telegram group",
        "Post in Telegram channel",
        "Full support",
      ]
    },
    {
      platform: "Custom",
      icon: Package,
      price: "Contact Us",
      title: "Custom Package",
      description: "Tailored to your specific project needs.",
      features: [
        "VC, IDO, Launchpad intros",
        "Giveaway & Airdrop promotion",
        "Unlimited Kols post",
        "Social media growth",
        "Long-term collaboration",
        "And much more...",
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
        <section id="pricing" className="py-20 lg:py-24">
          <div className="container">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Pricing Plans</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose the perfect plan for your project's needs. We offer a range of services to help you connect with your community and achieve your goals.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {pricingPlans.map((plan, i) => (
                  <Card key={plan.title} className="flex flex-col animate-slide-in-up" style={{ animationDelay: `${i * 100}ms`}}>
                    <CardHeader className="items-center text-center">
                       <div className="bg-primary/10 rounded-full p-3 my-2">
                          <plan.icon className="h-8 w-8 text-primary"/>
                       </div>
                       <p className="text-sm font-semibold text-muted-foreground uppercase">{plan.platform}</p>
                      <CardTitle className="text-2xl">{plan.title}</CardTitle>
                      <CardDescription className="text-center h-10">{plan.description}</CardDescription>
                      <div className="text-4xl font-bold pt-4">{plan.price}</div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <ul className="space-y-3 text-muted-foreground text-sm">
                        {plan.features.map(feature => (
                          <li key={feature} className="flex items-center gap-3"><Check className="h-5 w-5 text-green-500 shrink-0" /><span>{feature}</span></li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6" asChild>
                        <Link href="/#contact">
                            {plan.price === "Contact Us" ? "Contact Us" : "Get Started"}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
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

  return isClient ? <PricingPageContent /> : null;
}

    