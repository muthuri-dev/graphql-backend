"use client";
import React from "react";
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

export default function page() {
  const editor: BlockNoteEditor = useBlockNote({});
  return (
    <div className="w-full content-center mt-24">
      <BlockNoteView editor={editor} theme={"light"} className="mr-24 ml-24 " />
    </div>
  );
}
