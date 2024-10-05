"use client";

import { useRef, type FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export default function Subscribe() {
  const { toast } = useToast();

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const emailInput = formRef.current.querySelector("input[type=email]");
    if (!emailInput) throw new Error("Email input not found");

    const email = (emailInput as HTMLInputElement).value;
    if (email.trim().length === 0) return;

    try {
      const res = await fetch(`/api/subscribe/`, {
        method: "POST",
        body: JSON.stringify({
          email,
        }),
      });
      const json = await res.json();
      if (json === "member-exists") {
        toast({
          title: "Already Subscribed",
          description: "You are already subscribed.",
          variant: "default",
        });
        return;
      }

      toast({
        title: "Subscribed",
        description: "Thank you for subscribing!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not subscribe. Please try again.",
        variant: "destructive",
      });
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-2 min-w-[25rem] max-sm:min-w-0">
      <div className="text-sm text-neutral-400">
        Subscribe to our Weekly Commentaries
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        id="subscribe-form"
        className="h-9 flex w-full"
      >
        <input
          className="bg-neutral-200 h-full flex-grow p-2 m-0 focus-within:outline-none rounded-none"
          type="email"
          placeholder="Email Address"
        />
        <Button className="rounded-none">Subscribe</Button>
      </form>
    </div>
  );
}
