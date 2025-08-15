"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";

interface ContentDisplayProps {
  content: string;
  isHeaderButton?: boolean;
}

export function ContentDisplay({ content, isHeaderButton = false }: ContentDisplayProps) {
  const handleDownload = () => {
    const blob = new Blob([content], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (isHeaderButton) {
    return (
        <Button onClick={handleDownload} size="sm">
          <Download className="mr-2 h-4 w-4" />
          Download Code
        </Button>
    );
  }

  return (
    <Tabs defaultValue="preview" className="h-full w-full">
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="preview" className="mt-4 h-[calc(100%-60px)]">
        <iframe
          srcDoc={content}
          title="Webpage Preview"
          className="h-full w-full rounded-md border bg-white"
          sandbox="allow-scripts"
        />
      </TabsContent>
      <TabsContent value="code" className="mt-4 h-[calc(100%-60px)]">
        <div className="h-full w-full rounded-md border bg-muted p-4">
          <pre className="h-full w-full overflow-auto text-sm">
            <code className="font-code">{content}</code>
          </pre>
        </div>
      </TabsContent>
    </Tabs>
  );
}
