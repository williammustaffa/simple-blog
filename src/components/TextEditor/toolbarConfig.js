const toolbarConfig = {
  // Optionally specify the groups to display (displayed in the order listed).
  display: [
    "INLINE_STYLE_BUTTONS",
    "BLOCK_TYPE_BUTTONS",
    "LINK_BUTTONS",
    "BLOCK_TYPE_DROPDOWN",
    "HISTORY_BUTTONS"
  ],
  INLINE_STYLE_BUTTONS: [
    { label: "Bold", style: "BOLD", className: "editor-inline-button" },
    { label: "Italic", style: "ITALIC", className: "editor-inline-button"},
    { label: "Underline", style: "UNDERLINE", className: "editor-inline-button" }
  ],
  BLOCK_TYPE_DROPDOWN: [
    { label: "Normal", style: "unstyled", className: "editor-inline-button"},
    { label: "Heading Large", style: "header-one", className: "editor-inline-button" },
    { label: "Heading Medium", style: "header-two", className: "editor-inline-button" },
    { label: "Heading Small", style: "header-three", className: "editor-inline-button"}
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: "UL", style: "unordered-list-item", className: "editor-inline-button"},
    { label: "OL", style: "ordered-list-item", className: "editor-inline-button"}
  ]
};

export default toolbarConfig;