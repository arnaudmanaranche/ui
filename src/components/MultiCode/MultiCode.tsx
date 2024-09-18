import clsx from "clsx";
import { useState, type ReactNode } from "react";
import { useCopyCode } from "./useCopyCode";

interface Item {
  nav: string;
  content: string;
}

export interface MultiCodeProps {
  items: Array<Item>;
}

export function MultiCode({ items }: MultiCodeProps): ReactNode {
  const [activeItem, setActiveItem] = useState(items[0]);
  const { copyCode, isCopied } = useCopyCode();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = (item: Item) => {
    if (isTransitioning || activeItem?.nav === item.nav) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setActiveItem(item);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  if (!activeItem) return null;

  return (
    <div className="shadow-multicode flex flex-col overflow-hidden rounded-md bg-[#f9fafb]">
      <nav className="shadow-multicode-inset group flex h-12 items-center justify-between bg-white px-4">
        <ul className="flex w-full items-center space-x-3">
          {items.map((item) => (
            <li
              key={item.nav}
              className={clsx(
                "cursor-pointer font-thin",
                activeItem.nav === item.nav && "font-normal",
              )}
              onClick={() => handleClick(item)}
            >
              {item.nav}
            </li>
          ))}
        </ul>
        {isCopied ? (
          <div className="flex items-center justify-center opacity-100 transition-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#848281"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </div>
        ) : (
          <div
            className="cursor-pointer opacity-0 transition-opacity group-hover:opacity-100"
            onClick={() => {
              copyCode(activeItem.content);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 9.5V7C14 5.89543 13.1046 5 12 5H7C5.89543 5 5 5.89543 5 7V12C5 13.1046 5.89543 14 7 14H9.5"
                stroke="#848281"
                strokeWidth="1"
              ></path>
              <rect
                x="10"
                y="10"
                width="9"
                height="9"
                rx="2"
                stroke="#848281"
                strokeWidth="1"
              ></rect>
            </svg>
          </div>
        )}
      </nav>
      <div className="flex h-[49px] w-full items-center overflow-y-hidden px-4">
        {items.map(
          (item) =>
            activeItem.nav === item.nav && (
              <div
                key={item.nav}
                className="animate-fadeInRight overflow-hidden font-thin"
              >
                {item.content}
              </div>
            ),
        )}
      </div>
    </div>
  );
}
