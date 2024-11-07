import Main from "@/components/main";
import Link from "next/link";

export default function Home() {
  return (
    <Main>
      <div className="max-w-screen-lg text-center items-center flex flex-col gap-5">
        <h1>
          Concentrated and Valued Holdings based in the Heart of Scotland.
        </h1>
        <Link className="underline" href="/writeups/commentaries" prefetch>
          Commentaries
        </Link>
      </div>
    </Main>
  );
}
