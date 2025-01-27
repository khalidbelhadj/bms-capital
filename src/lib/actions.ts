"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getFileUrl(id: number) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _cookies = cookies(); // This disables caching??
  const client = createClient();
  const fileUrl = await client.storage
    .from("articles-files")
    .createSignedUrl(id.toString(), 1000 * 60 * 60 * 24);

  return fileUrl.data?.signedUrl ?? null;
}

export async function getArticle(id: number) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _cookies = cookies(); // This disables caching??
  const client = createClient();
  const article = await client.from("articles").select().eq("id", id);

  return article.data?.[0] ?? null;
}

export async function getAllArticles() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _cookies = cookies(); // This disables caching??

  const client = createClient();

  const rawArticles = (await client.from("articles").select("*")).data ?? [];

  const articles = [];

  for (const article of rawArticles) {
    const coverImageUrl = await client.storage
      .from("articles-cover-images")
      .getPublicUrl(article.id.toString());

    articles.push({
      ...article,
      coverImageUrl: coverImageUrl.data.publicUrl ?? "",
    });
  }

  articles.sort(
    (a, b) =>
      new Date(b.date ?? Date.now()).getTime() -
      new Date(a.date ?? Date.now()).getTime()
  );

  return articles;
}

export async function createArticle(
  title: string,
  description: string,
  date: Date,
  files: FormData
) {
  const client = createClient();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _cookies = cookies(); // This disables caching??

  // Create article
  const article = await client
    .from("articles")
    .insert({
      title,
      description,
      date: date.toISOString(),
    })
    .select();

  if (article.error || !article.data.length) {
    console.log(article.error);
    throw new Error("Failed to create article");
  }

  // Get signed urls
  const fileRes = await client.storage
    .from("articles-files")
    .upload(article.data[0].id.toString(), files.get("file") as File);

  if (fileRes.error) {
    await client.from("articles").delete().eq("id", article.data[0].id);
    throw new Error("Failed to upload article file");
  }

  const coverImageRes = await client.storage
    .from("articles-cover-images")
    .upload(article.data[0].id.toString(), files.get("coverImage") as File);

  if (coverImageRes.error) {
    await client.from("articles").delete().eq("id", article.data[0].id);
    throw new Error("Failed to upload cover image");
  }
}

export async function updateArticle(
  articleId: number,
  title: string,
  description: string,
  date: Date,
  files: FormData
) {
  console.log(articleId, title, description, date);
  const client = createClient();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _cookies = cookies(); // This disables caching??

  // Update article
  const { error } = await client
    .from("articles")
    .update({
      title,
      description,
      date: date.toISOString(),
    })
    .eq("id", articleId);

  if (error) {
    console.log(error);
    throw new Error("Failed to update article");
  }

  // Update images
  const newFile = files.get("file") as File | string;
  if (newFile !== "undefined") {
    const fileRes = await client.storage
      .from("articles-files")
      .upload(articleId.toString(), newFile);

    if (fileRes.error) {
      throw new Error("Failed to upload article file");
    }
  }

  const newCoverImage = files.get("coverImage") as File | string;
  if (newCoverImage !== "undefined") {
    const coverImageRes = await client.storage
      .from("articles-cover-images")
      .upload(articleId.toString(), newCoverImage);

    if (coverImageRes.error) {
      throw new Error("Failed to upload cover image");
    }
  }
}

export async function deleteArticle(id: number) {
  const client = createClient();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _cookies = cookies(); // This disables caching??
  const articleRes = await client.from("articles").delete().eq("id", id);
  if (articleRes.error) {
    throw new Error("Failed to delete article");
  }

  const articleFileRes = await client.storage
    .from("articles-files")
    .remove([id.toString()]);
  if (articleFileRes.error) {
    throw new Error("Failed to delete article file");
  }

  const coverImageRes = await client.storage
    .from("articles-cover-images")
    .remove([id.toString()]);
  if (coverImageRes.error) {
    throw new Error("Failed to delete cover image");
  }
}

export async function login(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    throw new Error("Failed to log in");
  }

  redirect("/writeups/admin");
}

export async function signout() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error("Failed to sign out");
  }

  redirect("/writeups/admin");
}
