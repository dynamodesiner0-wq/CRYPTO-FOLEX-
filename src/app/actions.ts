'use server';

import { generateWebpageContent } from '@/ai/flows/generate-webpage-content';
import { z } from 'zod';

const formSchema = z.object({
  websiteType: z.string().min(1, 'Website type is required.'),
  headings: z.string().min(1, 'At least one heading is required.'),
  paragraphs: z.string().min(1, 'Paragraph content is required.'),
  customizations: z.string().optional(),
});

export async function generateContentAction(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, error: 'Invalid fields.' };
  }

  const { websiteType, headings, paragraphs, customizations } = validatedFields.data;

  const prompt = `
    Please generate a complete, modern, and visually appealing webpage with the following specifications.
    The output should be a single HTML file with inline CSS for styling.

    1.  **Website Type:** A ${websiteType} website.
    2.  **Main Headings:** The page should include the following headings: ${headings}.
    3.  **Content:** The body should contain paragraphs discussing: ${paragraphs}.
    4.  **Customizations & Style:** Incorporate the following style and elements: ${customizations || 'A clean, professional design with a balanced layout. Use a modern color palette and readable fonts.'}.
    5.  **Structure:** Generate a full HTML document including <!DOCTYPE html>, <html>, <head>, and <body> tags.
        - Inside the <head>, include a <title> tag relevant to the content.
        - Use semantic HTML tags like <header>, <main>, <section>, <article>, <nav>, and <footer> where appropriate.
        - Ensure the webpage is responsive and looks good on both desktop and mobile devices.
    6.  **CSS:** All CSS should be included within a <style> tag in the <head> of the document. Do not use external stylesheets.
  `;

  try {
    const result = await generateWebpageContent({ prompt });
    return { success: true, data: result.webpageContent };
  } catch (error) {
    console.error('AI generation failed:', error);
    return { success: false, error: 'Failed to generate webpage content. Please try again.' };
  }
}
