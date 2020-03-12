import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { Dropdown } from "semantic-ui-react";

function CategoryDropdown({ name, label, defaultValue, onChange, error }) {
  const { isFetching, categories } = useSelector(state => ({
    isFetching: state.categories.isFetching,
    categories: state.categories.items,
    errorMessage: state.categories.errorMessage,
  }));

  // Methods
  function handleChange(event, { value }) {
    if (typeof onChange === "function") {
      onChange(event, { name, value });
    }
  }

  // Multiselector settings
  const categoryOptions = categories.map(category => ({
    key: category.id,
    text: category.displayName,
    color: category.labelColor,
    value: category.id,
  }));

  const renderOptionsLabel = (option) => ({
    color: option.color,
    content: option.text,
  });

  return (
    <div className={classNames("field", { error })}>
      {label && <label>{label}</label>}
      <Dropdown
        multiple
        selection
        fluid
        defaultValue={defaultValue}
        loading={isFetching}
        options={categoryOptions}
        renderLabel={renderOptionsLabel}
        onChange={handleChange}
      />
    </div>
  )
}


CategoryDropdown.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  error: PropTypes.bool,
}

export default CategoryDropdown;