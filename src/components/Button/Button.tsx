import useLongPress from "./useLongPress";

export interface ButtonProps {
  longPressDelay?: number;
  onLongPressCompleted: () => void;
}

export function Button({
  longPressDelay = 750,
  onLongPressCompleted,
}: ButtonProps) {
  const { width, ...otherHandlers } = useLongPress({
    longPressDelay,
    onLongPressCompleted,
  });

  return (
    <button
      {...otherHandlers}
      className="relative flex items-center justify-center overflow-x-hidden rounded-md border bg-neutral-50 px-4 py-2 transition-all hover:border-neutral-200 hover:bg-neutral-100"
      style={{
        userSelect: "none",
        transform: "none",
      }}
    >
      <div
        className="absolute left-0 h-full bg-red-500/75 transition-width duration-1000"
        style={{
          width: `${width}%`,
        }}
      ></div>
      <div className="flex items-center gap-2 text-primary">
        <span className="text-xs sm:text-sm">
          Long press to confirm deleting
        </span>
      </div>
    </button>
  );
}
