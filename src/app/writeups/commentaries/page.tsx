import Main from "@/components/main";
import Articles from "@/components/articles";

export default function Commentaries() {
  return (
    <Main className="items-start pt-10">
      <div
        className="max-w-screen-lg w-[1024px] text-center items-center flex flex-col prose gap-10"
        id="feed"
      >
        <h1>Commentaries.</h1>
        <Articles />
      </div>
    </Main>
  );
}
