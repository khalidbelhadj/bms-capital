"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteArticle } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";

export default function DeleteArticleButton({
  articleId,
}: {
  articleId: number;
}) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const [open, setOpen] = useState(false);

  const { mutate, isPending: isDeletePending } = useMutation({
    mutationFn: async () => {
      await deleteArticle(articleId);
    },
    onSuccess: async () => {
      toast({
        title: "Article Deleted",
        description: "Article has been deleted.",
        variant: "default",
      });

      await queryClient.invalidateQueries({
        exact: true,
        queryKey: ["articles"],
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Could not delete article. Check console and try again.",
        variant: "default",
      });
      console.log(error);
    },
    onSettled: () => {
      setOpen(false);
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="ml-auto" variant="destructive">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Article</DialogTitle>
        </DialogHeader>
        Are you sure you want to delete this article?
        <DialogFooter className="flex p-2 gap-2">
          <Button className="flex-1" variant="outline">
            Cancel
          </Button>
          <Button
            onClick={() => mutate()}
            className="flex-1"
            variant="destructive"
            disabled={isDeletePending}
          >
            {isDeletePending && (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            {isDeletePending ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
