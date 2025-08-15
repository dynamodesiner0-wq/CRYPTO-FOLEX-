"use client";

import * as React from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ContentForm } from "@/components/content-form";
import { ContentDisplay } from "@/components/content-display";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FileCode, BotMessageSquare } from "lucide-react";

export default function Home() {
  const [generatedHtml, setGeneratedHtml] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Icons.logo className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-semibold">Web Weaver</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Describe your ideal website, and let our AI bring it to life.
            </p>
          </SidebarHeader>
          <Separator />
          <SidebarContent className="p-0">
            <ContentForm
              setIsLoading={setIsLoading}
              setGeneratedHtml={setGeneratedHtml}
              isLoading={isLoading}
            />
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="flex h-full flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur-sm sm:px-6">
              <SidebarTrigger className="md:hidden" />
              <div className="flex-1">
                {generatedHtml && (
                  <h2 className="text-lg font-semibold">Generated Webpage</h2>
                )}
              </div>
              <div>
                {generatedHtml && !isLoading && (
                  <ContentDisplay content={generatedHtml} isHeaderButton={true} />
                )}
              </div>
            </header>
            <main className="flex-1 overflow-auto p-4 md:p-6">
              {isLoading && (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <BotMessageSquare className="h-16 w-16 animate-bounce text-primary" />
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Weaving your website...
                  </h2>
                  <p className="max-w-md text-muted-foreground">
                    Our AI is currently crafting your webpage. This may take a few
                    moments. Please wait.
                  </p>
                </div>
              )}
              {!isLoading && !generatedHtml && (
                <div className="flex h-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed bg-muted/50 p-8 text-center">
                  <div className="rounded-full border-8 border-dashed border-primary/20 bg-primary/10 p-6">
                    <FileCode className="h-16 w-16 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Your Webpage Awaits
                  </h2>
                  <p className="max-w-md text-muted-foreground">
                    Fill out the form on the left to generate your custom
                    website content. Your preview will appear here.
                  </p>
                </div>
              )}
              {!isLoading && generatedHtml && (
                <ContentDisplay content={generatedHtml} isHeaderButton={false} />
              )}
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
