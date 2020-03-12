import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { Dropdown } from "semantic-ui-react";
import { fetchCategories } from "../../store/actions";

function CategoriesItem() {
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  const { isFetching, categories, errorMessage } = useSelector(state => ({
    isFetching: state.categories.isFetching,
    categories: state.categories.items,
    errorMessage: state.categories.errorMessage,
  }));

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const renderCategoryItem = (category)  => (
    <Dropdown.Item key={category.id}>{category.displayName}</Dropdown.Item>
  );

  return (
    <Dropdown item text='Categories' loading={isFetching}>
      <Dropdown.Menu>
        {categories.map(renderCategoryItem)}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CategoriesItem;