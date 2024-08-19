"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { MountainIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
export default function Home() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    console.log(url);
    if (url !== "") router.push(`/${url}`);
  };
  return (
    <main className="flex flex-col min-h-screen relative">
      <header className="px-4 md:px-6 py-5 absolute h-fit   w-full flex items-center border-b z-10">
        <div className="flex items-center">
          <MountainIcon className="size-6" />
          <span className="text-lg font-bold ml-2">Acme AI Chatbot</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <section className="w-full flex justify-center items-center py-6 md:py-6 h-screen lg:py-6 xl:py-6">
        <div className="container px-4 md:px-6 h-full">
          <div className="flex flex-col h-full justify-center items-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl xl:text-6xl/none">
                Chat with any Website <br /> with Our AI Chatbot
              </h1>
              <p className="max-w-[600px] text-center text-muted-foreground md:text-xl">
                Talk with any website, ask questions and if the answers are on
                the website, our chatbot will find it.
              </p>
            </div>
            <div className="w-full max-w-md space-y-4">
              <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
                <Input
                  type="url"
                  placeholder="Enter your website URL"
                  className="max-w-lg flex-1 w-full"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <Button type="submit">Get Started</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                Sign up to get started with our AI chatbot.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
