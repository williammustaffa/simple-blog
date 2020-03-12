import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import RichTextEditor from "react-rte";
import toolbarConfig from "./toolbarConfig";

import "./style.scss";

function TextEditor({ name, label, defaultValue, onChange, error }) {
  const [editorState, setEditorState] = useState(
    !!defaultValue ?
    RichTextEditor.createValueFromString(defaultValue, "html") :
    RichTextEditor.createEmptyValue(),
  );

  function onEditorChange(content) {
    setEditorState(content);

    if (onChange) {
      const value = content.toString("html");
      onChange(null, { name, value });
    }
  }

  return (
    <div className={classNames("field", { error })}>
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
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  error: PropTypes.bool,
}

export default TextEditor;