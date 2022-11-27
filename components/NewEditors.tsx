import {
  BoldExtension,
  CalloutExtension,
  ItalicExtension,
} from "remirror/extensions";
import {
  useRemirror,
  Remirror,
  EditorComponent,
  useActive,
  useCommands,
} from "@remirror/react";
import "remirror/styles/all.css";

const Menu = () => {
  const { toggleBold, toggleItalic, focus } = useCommands();
  const active = useActive();

  return (
    <div className="flex">
      <button
        onClick={() => {
          toggleBold();
          focus();
        }}
        className={`inline-flex items-center rounded-md border border-transparent  px-3 py-2 text-sm f leading-4  shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
          active.bold()
            ? "bg-white text-indigo-600 hover:border hover:border-indigo-600"
            : "bg-indigo-600 text-white hover:bg-indigo-700"
        }`}
      >
        B
      </button>
      <button
        onClick={() => {
          toggleItalic();
          focus();
        }}
        className={`inline-flex items-center rounded-md border border-transparent  px-3 py-2 text-sm f leading-4  shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
          active.italic()
            ? "bg-white text-indigo-600 hover:border hover:border-indigo-600"
            : "bg-indigo-600 text-white hover:bg-indigo-700"
        }`}
      >
        I
      </button>
    </div>
  );
};

export default function NewEditor() {
  const { manager, state } = useRemirror({
    extensions: () => [
      new BoldExtension(),
      new ItalicExtension(),
      new CalloutExtension({ defaultType: "warn" }),
    ],

    // Set the initial content.
    content: "<p>I love <b>Remirror</b></p>",

    // Place the cursor at the start of the document. This can also be set to
    // `end`, `all` or a numbered position.
    selection: "all",

    // Set the string handler which means the content provided will be
    // automatically handled as html.
    // `markdown` is also available when the `MarkdownExtension`
    // is added to the editor.
    stringHandler: "html",
  });

  return (
    <div className="remirror-theme">
      {/* the className is used to define css variables necessary for the editor */}
      <Remirror manager={manager} initialContent={state}>
        <Menu />
        <EditorComponent />
      </Remirror>
    </div>
  );
}
