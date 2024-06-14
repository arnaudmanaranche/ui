import { ReactNode } from "react";

export interface SidebarItemsGroupProps {
  children: ReactNode[];
}

function SidebarItemsGroupSeparator() {
  return <div className="shrink-0 h-[1px] w-full my-1 bg-[#2e2e2e]" />;
}

export function SidebarItemsGroup({ children }: SidebarItemsGroupProps) {
  return (
    <>
      <SidebarItemsGroupSeparator />
      {children}
      <SidebarItemsGroupSeparator />
    </>
  );
}
