import clsx from "clsx";
import { ReactNode } from "react";

export interface SidebarItemProps {
  icon: ReactNode;
  children: ReactNode;
  isActive?: boolean;
}

export function SidebarItem({ icon, children, isActive }: SidebarItemProps) {
  return (
    <a
      role="button"
      className={clsx(
        "relative h-10 w-10 group-data-[state=expanded]:w-full transition-all duration-200 flex items-center rounded group-data-[state=collapsed]:justify-center group-data-[state=expanded]:-space-x-2 hover:text-white hover:bg-[#343434] group/item text-[#7e7e7e]",
        isActive && "text-white bg-[#343434]"
      )}
      href="/"
    >
      <span className="absolute left-0 top-0 flex rounded h-10 w-10 items-center justify-center">
        {icon}
      </span>
      <span className="min-w-[128px] text-sm text-[#7e7e7e] group-hover/item:text-white absolute left-7 group-data-[state=expanded]:left-12 opacity-0 group-data-[state=expanded]:opacity-100 transition-all">
        {children}
      </span>
    </a>
  );
}
