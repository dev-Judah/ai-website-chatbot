import { RAGChat, upstash } from "@upstash/rag-chat";
import { redis } from "./redis";

// rag chat openai alternative, set up
export const ragChat = new RAGChat({
  model: upstash("meta-llama/Meta-Llama-3-8B-Instruct"), // model used
  redis: redis,
});
