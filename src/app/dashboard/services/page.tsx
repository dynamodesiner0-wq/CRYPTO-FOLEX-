"use client";

import * as React from "react";
import { Users, FileText, MessagesSquare, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ServicesPage() {
  return (
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
  );
}
