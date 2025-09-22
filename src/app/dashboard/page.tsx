"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const suggestionPrompts = [
  {
    title: "E-commerce Checkout",
    url: "https://example-shop.com/checkout",
    goal: "Reduce cart abandonment rate by 15%",
    audience: "First-time online shoppers who are hesitant about security.",
  },
  {
    title: "SaaS Sign-up Page",
    url: "https://saas-app.com/signup",
    goal: "Increase free trial sign-ups by 20%",
    audience: "Busy project managers looking for a quick and easy solution.",
  },
  {
    title: "Blog Newsletter Form",
    url: "https://my-awesome-blog.com/subscribe",
    goal: "Double the monthly newsletter subscriber growth",
    audience: "Loyal readers who enjoy deep-dive content.",
  },
];

export default function DashboardPage() {
  const { messages, append, isLoading } = useChat({
    api: "/api/generate-ab-tests",
  });

  const [url, setUrl] = useState("");
  const [goal, setGoal] = useState("");
  const [audience, setAudience] = useState("");

  const handleSuggestionClick = (prompt: (typeof suggestionPrompts)[0]) => {
    setUrl(prompt.url);
    setGoal(prompt.goal);
    setAudience(prompt.audience);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = `Here is the information for the A/B test ideas:\n- URL: ${url}\n- Conversion Goal: ${goal}\n- Target Audience: ${audience}`;
    append({ role: "user", content: userMessage });
  };

  const lastAssistantMessage = messages
    .filter((m) => m.role === "assistant")
    .pop();

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>A/B Test Idea Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">
              Or try one of these examples:
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestionPrompts.map((prompt) => (
                <Button
                  key={prompt.title}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSuggestionClick(prompt)}
                  disabled={isLoading}
                >
                  {prompt.title}
                </Button>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url">Website URL</Label>
              <Input
                id="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="goal">Conversion Goal</Label>
              <Textarea
                id="goal"
                placeholder="e.g., Increase newsletter signups, reduce cart abandonment"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="audience">Target Audience</Label>
              <Textarea
                id="audience"
                placeholder="e.g., Tech-savvy millennials, small business owners"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Generating..." : "Generate Ideas"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {lastAssistantMessage && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Generated Ideas</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert">
            <ReactMarkdown>{lastAssistantMessage.content}</ReactMarkdown>
          </CardContent>
        </Card>
      )}
    </>
  );
}
