import { useState } from "react";
import css from "./TagsMenu.module.css";

function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton} onClick={toggle}>
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          {/* список тегів */}
          <li className={css.menuItem}>
            <a
              href={`url до сторінки за відповідним тегом`}
              className={css.menuLink}
            >
              Назва тегу
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default TagsMenu;
