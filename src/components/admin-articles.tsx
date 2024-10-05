"use client";

import React from "react";

import useArticles from "@/hooks/use-articles";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMutation } from "@tanstack/react-query";
import { deleteArticle } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { queryClient } from "@/components/providers";
import Article from "@/components/article";

export default function AdminArticles() {
  const { toast } = useToast();
  const { data: articles } = useArticles();

  const { mutate } = useMutation({
    mutationFn: async (id: number) => {
      await deleteArticle(id);
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
      setOpenId(null);
    },
  });

  const [openId, setOpenId] = React.useState<number | null>(null);

  return (
    <div className="flex flex-col gap-5 w-full">
      {articles?.map((article) => (
        <div key={"admin-" + article.id} className="bg-white">
          <div className="border-b-0 border p-2 flex gap-2">
            <Button
              variant="outline"
              onClick={() =>
                alert(
                  "Edit not implemented yet, contact developer for updates."
                )
              }
            >
              Edit
            </Button>
            <Dialog
              open={openId === article.id}
              onOpenChange={(value) => setOpenId(value ? article.id : null)}
            >
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
                    onClick={() => mutate(article.id)}
                    className="flex-1"
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <Article article={article} />
        </div>
      ))}
    </div>
  );
}
