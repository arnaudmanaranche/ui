import { useState } from "react";

export function useCopyCode() {
  const [isCopied, setIsCopied] = useState(false);

  const copyCode = async (text: string) => {
    const blob = new Blob([text], {
      type: "text/plain",
    });

    const data = [new ClipboardItem({ [blob.type]: blob })];

    try {
      await navigator.clipboard.write(data);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 5000);
    } catch (error) {
      setIsCopied(false);
    }
  };

  return { copyCode, isCopied };
}
