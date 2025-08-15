"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { generateContentAction } from "@/app/actions";
import { WandSparkles } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

const formSchema = z.object({
  websiteType: z.string().min(3, {
    message: "Website type must be at least 3 characters.",
  }),
  headings: z.string().min(5, {
    message: "Headings must be at least 5 characters.",
  }),
  paragraphs: z.string().min(10, {
    message: "Paragraphs content must be at least 10 characters.",
  }),
  customizations: z.string().optional(),
});

type ContentFormProps = {
  setIsLoading: (isLoading: boolean) => void;
  setGeneratedHtml: (html: string | null) => void;
  isLoading: boolean;
};

export function ContentForm({
  setIsLoading,
  setGeneratedHtml,
  isLoading,
}: ContentFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      websiteType: "",
      headings: "",
      paragraphs: "",
      customizations: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedHtml(null);

    try {
      const result = await generateContentAction(values);
      if (result.success) {
        setGeneratedHtml(result.data);
      } else {
        toast({
          variant: "destructive",
          title: "Generation Failed",
          description: result.error,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "An unexpected error occurred",
        description: "Please check the console for more details.",
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ScrollArea className="h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-full flex-col p-4"
        >
          <div className="flex-1 space-y-6">
            <FormField
              control={form.control}
              name="websiteType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website Type</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Portfolio, Blog, E-commerce" {...field} />
                  </FormControl>
                  <FormDescription>
                    What kind of website are you building?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="headings"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Headings</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Welcome, About Me, My Projects"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    List the main headings for your page.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="paragraphs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Paragraph Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the content for your paragraphs..."
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    What should the AI write about?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customizations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Customizations</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Use a dark theme, add a contact form, make it playful"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Any specific design or content requests?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-8 pt-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              <WandSparkles className="mr-2 h-4 w-4" />
              {isLoading ? "Generating..." : "Generate Website"}
            </Button>
          </div>
        </form>
      </Form>
    </ScrollArea>
  );
}
