import CreateArticleDialog from "@/components/create-article-dialog";
import AdminArticles from "@/components/admin-articles";
import AdminArticlesSkelton from "@/components/admin-articles-skelton";
import ArticlesHydration from "@/components/articles-hydration";
import Main from "@/components/main";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { login, signout } from "@/lib/actions";
import { createClient } from "@/utils/supabase/server";
import { Suspense } from "react";

export default async function AdminPage() {
  const client = createClient();
  const {
    data: { user },
  } = await client.auth.getUser();

  if (user == null) {
    return (
      <Main>
        <Login />
      </Main>
    );
  }

  return (
    <Main className="items-start pt-10">
      <div className="flex flex-col max-w-screen-lg gap-10 w-[1024px]">
        <div className="flex items-center gap-2">
          <h1 className="text-center">Admin.</h1>
          <form className="ml-auto">
            <Button variant="outline" formAction={signout}>
              Sign out
            </Button>
          </form>
          <CreateArticleDialog />
        </div>
        <div
          className="max-w-screen-lg text-center items-center flex flex-col prose gap-10"
          id="feed"
        >
          <Suspense fallback={<AdminArticlesSkelton />}>
            <ArticlesHydration>
              <AdminArticles />
            </ArticlesHydration>
          </Suspense>
        </div>
      </div>
    </Main>
  );
}

function Login() {
  return (
    <Card className="rounded-none w-[20rem]">
      <CardHeader>
        <CardTitle>Log In</CardTitle>
        <CardDescription>
          Log in or sign up to use the admin page. Only authorised users are
          able to sign up.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <form className="flex flex-col bg-white gap-2 w-full">
          <Input
            placeholder="Email"
            id="email"
            name="email"
            type="email"
            required
          />
          <Input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            required
          />
          <div>
            <Button className="w-full" formAction={login}>
              Log in
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
