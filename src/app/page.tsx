import Main from "@/components/main";

export default function Home() {
  return (
    <Main>
      <div className="max-w-screen-lg text-center items-center flex flex-col gap-10">
        <h1>
          Concentrated and Valued Holdings based in the Heart of Scotland.
        </h1>
        <div className="flex gap-5">
          <a className="underline" href="/writeups/monday-commentaries">
            Monday Commentaries
          </a>
        </div>
      </div>
    </Main>
  );
}
