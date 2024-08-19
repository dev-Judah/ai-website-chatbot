The @upstash/rag-chat package makes it easy to develop powerful retrieval-augmented generation (RAG) chat applications with minimal setup and configuration.

Features:

Next.js compatibility with streaming support
Ingest entire websites, PDFs and more out of the box
Built-in Vector store for your knowledge base
(Optional) built-in Redis compatibility for fast chat history management
(Optional) built-in rate limiting
(Optional) disableRag option to use it as LLM + chat history
(Optional) Analytics via Helicone and Langsmith
Getting started
Installation
Install the package using your preferred package manager:

npm i @upstash/rag-chat
Quick start
Set up your environment variables:
UPSTASH_VECTOR_REST_URL="XXXXX"
UPSTASH_VECTOR_REST_TOKEN="XXXXX"


# if you use OpenAI compatible models
OPENAI_API_KEY="XXXXX"

# or if you use Upstash hosted models
QSTASH_TOKEN="XXXXX"

# Optional: For Redis-based chat history (default is in-memory)
UPSTASH_REDIS_REST_URL="XXXXX"
UPSTASH_REDIS_REST_TOKEN="XXXXX"
Initialize and use RAGChat:
import { RAGChat } from "@upstash/rag-chat";

const ragChat = new RAGChat();

const response = await ragChat.chat("Tell me about machine learning");
console.log(response);
Basic Usage
import { RAGChat, openai } from "@upstash/rag-chat";

export const ragChat = new RAGChat({
  model: openai("gpt-4-turbo"),
});

await ragChat.context.add({
  type: "text",
  data: "The speed of light is approximately 299,792,458 meters per second.",
});

await ragChat.context.add({
  type: "pdf",
  fileSource: "./data/physics_basics.pdf",
});
const response = await ragChat.chat("What is the speed of light?");

console.log(response.output);
Docs
Checkout the documentation for integrations and advanced options.
