"use client";

import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";
import { useDropzone } from "react-dropzone";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createArticle } from "@/lib/actions";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const ENFORCE_FILES = true;

export default function CreateArticleDialog() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Dialog open state
  const [open, setOpen] = useState(false);

  // Controlled state
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const coverImageDropzone = useDropzone({ multiple: false });
  const fileDropzone = useDropzone({ multiple: false });

  // Create article
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const files = new FormData();
      files.append("file", fileDropzone.acceptedFiles[0]);
      files.append("coverImage", coverImageDropzone.acceptedFiles[0]);

      await createArticle(title, description, date, files);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Could not create article. Check console and try again.",
        variant: "default",
      });
      console.log(error);
    },
    onSuccess: async () => {
      toast({
        title: "Article Created",
        description: "The article has been created successfully.",
        variant: "default",
      });
      await queryClient.invalidateQueries({
        exact: true,
        queryKey: ["articles"],
      });
    },
    onSettled: () => {
      setOpen(false);
      setTitle("");
      setDescription("");
      setDate(new Date());
    },
  });

  const onSubmit = () => {
    if (!title || !description || !date) {
      return;
    }

    if (ENFORCE_FILES) {
      if (coverImageDropzone.acceptedFiles.length === 0) {
        toast({
          title: "Cover image required",
          description: "Please upload a cover image.",
          variant: "default",
        });
        return;
      }

      if (fileDropzone.acceptedFiles.length === 0) {
        toast({
          title: "Article file required",
          description: "Please upload an article file.",
          variant: "default",
        });
        return;
      }
    }

    mutate();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>New Article</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create an article</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-2">
          <Input
            required
            placeholder="Title"
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            required
            placeholder="Description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(d) => setDate(d ?? new Date())}
                initialFocus
                required
              />
            </PopoverContent>
          </Popover>

          <div
            {...coverImageDropzone.getRootProps()}
            className={cn(
              "border-dashed border h-20 relative focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              coverImageDropzone.isDragActive && "bg-accent transition-colors"
            )}
          >
            <Input
              name="coverImage"
              required
              {...coverImageDropzone.getInputProps()}
            />
            <p className="text-sm text-muted-foreground absolute top-2 left-2">
              Cover Image
            </p>

            {coverImageDropzone.acceptedFiles.length > 0 && (
              <p className="text-sm text-muted-foreground absolute bottom-2 left-2">
                {coverImageDropzone.acceptedFiles[0].name}
              </p>
            )}
          </div>

          <div
            {...fileDropzone.getRootProps()}
            className={cn(
              "border-dashed border h-20 relative focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              fileDropzone.isDragActive && "bg-accent transition-colors"
            )}
          >
            <Input name="file" required {...fileDropzone.getInputProps()} />
            <p className="text-sm text-muted-foreground absolute top-2 left-2">
              Article File
            </p>
            {fileDropzone.acceptedFiles.length > 0 && (
              <p className="text-sm text-muted-foreground absolute bottom-2 left-2">
                {fileDropzone.acceptedFiles[0].name}
              </p>
            )}
          </div>

          <DialogFooter className="flex gap-2 w-full">
            <Button
              type="button"
              onClick={() => setOpen(false)}
              className="flex-1"
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={onSubmit}
              className="flex-1"
              disabled={isPending}
            >
              {isPending && (
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
              {isPending ? "Uploading..." : "Create Article"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
