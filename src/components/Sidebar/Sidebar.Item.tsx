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
        "group/item relative flex h-10 w-10 items-center rounded text-[#7e7e7e] transition-all duration-200 hover:bg-[#343434] hover:text-white group-data-[state=expanded]:w-full group-data-[state=collapsed]:justify-center group-data-[state=expanded]:-space-x-2",
        isActive && "bg-[#343434] text-white",
      )}
      href="/"
    >
      <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded">
        {icon}
      </span>
      <span className="absolute left-7 min-w-[128px] text-sm text-[#7e7e7e] opacity-0 transition-all group-hover/item:text-white group-data-[state=expanded]:left-12 group-data-[state=expanded]:opacity-100">
        {children}
      </span>
    </a>
  );
}
