"use client";
import Main from "@/components/main";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <Main>
      <Card className="rounded-none w-[20rem]">
        <CardHeader>
          <CardTitle>404: Page Not Found</CardTitle>
          <CardDescription>
            This page does not exist. Please go back or go to the home page.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full flex gap-2 items-center">
          <Button onClick={router.back} className="flex-1" variant="outline">
            Go Back
          </Button>
          <Button onClick={() => router.push("/")} className="flex-1">
            Go To Home Page
          </Button>
        </CardContent>
      </Card>
    </Main>
  );
}
