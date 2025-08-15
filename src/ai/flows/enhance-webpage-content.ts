// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview A flow to enhance webpage content based on user instructions.
 *
 * - enhanceWebpageContent - A function that enhances webpage content.
 * - EnhanceWebpageContentInput - The input type for the enhanceWebpageContent function.
 * - EnhanceWebpageContentOutput - The return type for the enhanceWebpageContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceWebpageContentInputSchema = z.object({
  content: z
    .string()
    .describe('The AI-generated webpage content to be enhanced.'),
  instructions: z
    .string()
    .describe(
      'Specific instructions or keywords to guide the AI in revising the content.'
    ),
});
export type EnhanceWebpageContentInput =
  z.infer<typeof EnhanceWebpageContentInputSchema>;

const EnhanceWebpageContentOutputSchema = z.object({
  enhancedContent: z
    .string()
    .describe('The revised webpage content based on the given instructions.'),
});
export type EnhanceWebpageContentOutput =
  z.infer<typeof EnhanceWebpageContentOutputSchema>;

export async function enhanceWebpageContent(
  input: EnhanceWebpageContentInput
): Promise<EnhanceWebpageContentOutput> {
  return enhanceWebpageContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceWebpageContentPrompt',
  input: {schema: EnhanceWebpageContentInputSchema},
  output: {schema: EnhanceWebpageContentOutputSchema},
  prompt: `You are an AI assistant specializing in enhancing webpage content.

  Based on the user's instructions, revise the provided content to improve its relevance and quality.

  Content to enhance: {{{content}}}
  Instructions: {{{instructions}}}

  Enhanced Content:`, // Ensure the AI returns only the enhanced content
});

const enhanceWebpageContentFlow = ai.defineFlow(
  {
    name: 'enhanceWebpageContentFlow',
    inputSchema: EnhanceWebpageContentInputSchema,
    outputSchema: EnhanceWebpageContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
