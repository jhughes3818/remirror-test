import React, { useCallback } from "react";
import { useHelpers, useRemirrorContext } from "@remirror/react";
import { WysiwygEditor } from "@remirror/react-editors/wysiwyg";

const SAMPLE_DOC = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      attrs: { dir: null, ignoreBidiAutoUpdate: null },
      content: [{ type: "text", text: "Loaded content" }],
    },
  ],
};

function LoadButton() {
  const { setContent } = useRemirrorContext();
  const handleClick = useCallback(() => setContent(SAMPLE_DOC), [setContent]);

  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleClick}
      className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 my-2 mr-2"
    >
      Load
    </button>
  );
}

function SaveButton() {
  const { getJSON } = useHelpers();
  const handleClick = useCallback(
    () => alert(JSON.stringify(getJSON())),
    [getJSON]
  );

  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleClick}
      className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 my-2 ml-2"
    >
      Save
    </button>
  );
}

const Basic: React.FC = () => {
  return (
    <WysiwygEditor placeholder="Start typing...">
      <LoadButton />
      <SaveButton />
    </WysiwygEditor>
  );
};

export default Basic;
