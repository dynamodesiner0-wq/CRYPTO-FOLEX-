"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <main className="flex-1">
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
                  <AvatarImage
                    src="https://placehold.co/100x100.png"
                    alt="Son Heroic"
                    data-ai-hint="person silhouette"
                  />
                  <AvatarFallback>SH</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Son Heroic</h3>
                  <p className="text-muted-foreground">
                    Founder of (CRYPTO FOLEX Agency)
                  </p>
                  <div className="mt-1 flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
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
