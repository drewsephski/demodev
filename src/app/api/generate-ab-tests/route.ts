import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";

export const runtime = "edge";

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemPrompt = `You are a world-class Conversion Rate Optimization (CRO) specialist. You think in terms of user psychology, friction, and motivation, referencing frameworks like Robert Cialdini's Principles of Persuasion and the Fogg Behavior Model. I will provide you with a URL, a conversion goal, and a target audience. Your task is to generate 3 A/B test ideas.

For each idea, you MUST provide the following structure in Markdown:

**1. Observation:** What is a potential point of friction or a missed opportunity on the page?

**2. Hypothesis:** Formulate a clear hypothesis in the format: 'By changing **[element]** to **[new version]**, we can increase **[metric]** because it will **[psychological reason]**.'

**3. Variant B - The Challenger:** Provide the exact copy, or a detailed description of the design change, for the new version.

**4. Success Metric:** Define the primary metric to track (e.g., 'form submission rate', 'button click-through rate').

After providing the 3 ideas, add a final section titled **Expert Summary**. In this section, briefly explain the overarching psychological theme that connects your suggestions (e.g., 'reducing friction', 'increasing social proof'). Then, give each idea a priority score based on its likely impact and implementation effort (e.g., Idea 1: High Impact / Low Effort).`;

  const result = streamText({
    model: openrouter("x-ai/grok-4-fast:free"),
    system: systemPrompt,
    messages,
  });

  return result.toTextStreamResponse();
}
