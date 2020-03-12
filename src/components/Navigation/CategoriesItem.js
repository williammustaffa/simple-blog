import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { Dropdown } from "semantic-ui-react";
import { fetchCategories } from "../../store/actions";

function CategoriesItem() {
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  const { categories } = useSelector(state => ({
    isFetching: state.categories.isFetching,
    categories: state.categories.items,
    errorMessage: state.categories.errorMessage,
  }));

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  console.log("PRAIA", categories);

  return (
    <Dropdown item text='Categories'>
      <Dropdown.Menu>
        <Dropdown.Item>Funny</Dropdown.Item>
        <Dropdown.Item>Politics</Dropdown.Item>
        <Dropdown.Item>Technology</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CategoriesItem;