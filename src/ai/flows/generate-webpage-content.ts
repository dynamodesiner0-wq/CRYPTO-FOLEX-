'use server';
/**
 * @fileOverview A webpage content generation AI agent.
 *
 * - generateWebpageContent - A function that handles the webpage content generation process.
 * - GenerateWebpageContentInput - The input type for the generateWebpageContent function.
 * - GenerateWebpageContentOutput - The return type for the generateWebpageContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWebpageContentInputSchema = z.object({
  prompt: z
    .string()
    .describe("A description of the desired webpage, including the type of website, headings, paragraph content, and desired customizations."),
});
export type GenerateWebpageContentInput = z.infer<typeof GenerateWebpageContentInputSchema>;

const GenerateWebpageContentOutputSchema = z.object({
  webpageContent: z.string().describe('The generated webpage content in HTML format.'),
});
export type GenerateWebpageContentOutput = z.infer<typeof GenerateWebpageContentOutputSchema>;

export async function generateWebpageContent(input: GenerateWebpageContentInput): Promise<GenerateWebpageContentOutput> {
  return generateWebpageContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWebpageContentPrompt',
  input: {schema: GenerateWebpageContentInputSchema},
  output: {schema: GenerateWebpageContentOutputSchema},
  prompt: `You are an expert web developer specializing in generating webpage content.

You will use the following information to generate the HTML content for the webpage. Format the output as a complete HTML document, including the <html>, <head>, and <body> tags.

Description: {{{prompt}}}`,
});

const generateWebpageContentFlow = ai.defineFlow(
  {
    name: 'generateWebpageContentFlow',
    inputSchema: GenerateWebpageContentInputSchema,
    outputSchema: GenerateWebpageContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
