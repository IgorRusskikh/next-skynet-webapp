interface CopyOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const copyToClipboard = async (
  text: string,
  options?: { onSuccess?: () => void }
) => {
  try {
    await navigator.clipboard.writeText(text);
    options?.onSuccess?.();
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};

const fallbackCopyTextToClipboard = (text: string) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("Копирование не удалось");
    }
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
    throw err;
  } finally {
    document.body.removeChild(textArea);
  }
};
