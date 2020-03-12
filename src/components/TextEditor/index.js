import React, { useState } from "react";
import PropTypes from "prop-types";
import RichTextEditor from "react-rte";
import toolbarConfig from "./toolbarConfig";

import "./style.css";

function TextEditor({ name, onChange, initialState, label }) {
  const [editorState, setEditorState] = useState(
    initialState ?
    RichTextEditor.createValueFromString(initialState, 'html') :
    RichTextEditor.createEmptyValue(),
  );

  function onEditorChange(content) {
    setEditorState(content);

    if (onChange) {
      onChange(null, {
        name,
        value: content.toString("html"),
      });
    }
  }

  return (
    <div className="field">
      {label && <label>{label}</label>}
      <RichTextEditor
        className="custom-editor-style"
        editorClassName="custom-editor-box-style"
        toolbarConfig={toolbarConfig}
        value={editorState}
        onChange={onEditorChange}
      />
    </div>
  )
}

TextEditor.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  initialState: PropTypes.string,
}

export default TextEditor;