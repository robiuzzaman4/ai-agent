import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";

export async function Chat(prompt: string) {
  const openai = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const { text } = await generateText({
    model: openai("o1-mini"),
    prompt: prompt,
  });

  //   console.log("chat", text);

  return text;
}
