import Link from "next/link";
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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/investment-philosophy">Investment Philosophy</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
          <li>
            <Link href="/writeups">Writeups</Link>
            <div className="pl-4 border-l-2 flex flex-col gap-2 pt-2">
              <Link href="/writeups/commentaries">Commentaries</Link>
              {/* <Link href="/writeups/insights">Insights</Link> */}
              <Link href="/writeups/introductory-letter">
                Introductory Letter
              </Link>
            </div>
          </li>

          <li>
            <Link href="">Policy</Link>
            <div className="pl-4 flex flex-col gap-2 pt-2 border-l-2">
              <Link href="/policy/charity">Charity</Link>
              <Link href="/policy/terms-and-conditions">
                Terms and Conditions
              </Link>
              <Link href="/policy/privacy-policy">Privacy Policy</Link>
            </div>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
