import cx from "clsx";
import { ReactNode, useState } from "react";
import { SidebarItemsGroup } from "./Sidebar.Group";
import { SidebarItem } from "./Sidebar.Item";

export interface SidebarProps {
  children: ReactNode;
}

export function Sidebar({ children }: SidebarProps): ReactNode {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-state={isHovered ? "expanded" : "collapsed"}
      className={cx(
        "bg-[#1c1c1c] transition-all ease-in-out duration-300 group py-2 group z-10 h-full w-14 data-[state=expanded]:w-[13rem] data-[state=expanded]:shadow-xl transition-width flex flex-col justify-between",
        isHovered && "w-[200px]"
      )}
      onMouseEnter={(e) => {
        setIsHovered(true);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
      }}
    >
      <ul className="flex flex-col gap-y-1 justify-start px-2">{children}</ul>
    </div>
  );
}

Sidebar.Item = SidebarItem;
Sidebar.Group = SidebarItemsGroup;
