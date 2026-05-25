"use client";

import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="pixel-button inline-flex items-center gap-2 border border-[#9b5cff]/60 px-5 py-3 text-sm font-semibold text-[#c6a9ff]"
    >
      <ClipboardDocumentIcon className="h-4 w-4" />
      <span className="pixel-text" data-text="Copy command">
        <span className="pixel-text__label">{copied ? "Copied" : "Copy command"}</span>
      </span>
    </button>
  );
}
