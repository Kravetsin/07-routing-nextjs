"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";
import TagsMenu from "../TagsMenu/TagsMenu";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link
              className={
                pathname === "/" ? `${css.active}` : `${css.none_active}`
              }
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <TagsMenu />
          </li>
        </ul>
      </nav>
    </header>
  );
}
