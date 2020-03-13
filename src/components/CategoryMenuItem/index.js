import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { Dropdown } from "semantic-ui-react";

function CategoryMenuItem() {
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  const { isFetching, categories } = useSelector(state => ({
    isFetching: state.categories.isFetching,
    categories: state.categories.items,
    errorMessage: state.categories.errorMessage,
  }));

  const renderCategoryItem = (category)  => (
    <Dropdown.Item key={category.id} onClick={navigateTo(`/search?category=${category.id}`)}>
      {category.displayName}
    </Dropdown.Item>
  );

  return (
    <Dropdown item text="Categories" loading={isFetching}>
      <Dropdown.Menu>
        {categories.map(renderCategoryItem)}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CategoryMenuItem;