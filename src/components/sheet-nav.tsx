import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";

export default function SheetNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <ul className="flex flex-col gap-2 h-full">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/investment-philosophy">Investment Philosophy</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/writeups">Writeups</a>
            <div className="pl-4 border-l-2 flex flex-col gap-2 pt-2">
              <a href="/writeups/monday-commentaries">Monday Commentaries</a>
              {/* <a href="/writeups/insights">Insights</a> */}
              <a href="/writeups/introductory-letter">Introductory Letter</a>
            </div>
          </li>

          <li>
            <a href="">Policy</a>
            <div className="pl-4 flex flex-col gap-2 pt-2 border-l-2">
              <a href="/policy/charity">Charity</a>
              <a href="/policy/terms-and-conditions">Terms and Conditions</a>
              <a href="/policy/privacy-policy">Privacy Policy</a>
            </div>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
