import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Form, Header } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import TextEditor from "../../components/TextEditor";
import CategoryDropdown from "../../components/CategoryDropdown";
import { fetchPost } from "../../store/actions";

import "./style.scss";
import Spinner from "../../components/Spinner";

function EditPostView(props) {
  const { id } = props.match.params;

  const { isFetching, post } = useSelector(state => ({
    isFetching: state.post.isFetching,
    post: state.post.item,
    errorMessage: state.post.errorMessage,
  }));

  const { register, handleSubmit, errors, setValue, triggerValidation } = useForm();

  const dispatch = useDispatch();

  // Component did mount
  useEffect(() => {
    // Register validation
    function validateCategories(categories) {
      return Array.isArray(categories) && !!categories.length;
    }

    register({ name: "title" }, { required: true });
    register({ name: "imageUrl" }, { required: false });
    register({ name: "content" }, { required: true });
    register({ name: "categories" }, { required: true, validate: validateCategories });

    // Request post data
    dispatch(fetchPost(id));
  }, [register, id]);

  function getError(fieldName) {
    return !!errors[fieldName];
  };

  async function updateFormField(e, { name, value }) {
    setValue(name, value);
    await triggerValidation({ name });
  }

  function onSubmit(data) {
    console.log('Create post', data);
  }

  // Map categories to 1D array
  const defaultCategoriesValue = post.categories
    .map(category => category.id);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={10} computer={10}>
          <Header as="h1" textAlign="center" style={{ marginBottom: "2em" }}>Create post</Header>
          <Form onSubmit={handleSubmit(onSubmit)} loading={isFetching}>
            <Form.Input
              fluid
              defaultValue={post.title}
              name="title"
              onChange={updateFormField}
              error={getError("title")}
              label="Title"
            />
           <Form.Input
              fluid
              defaultValue={post.imageUrl}
              name="imageUrl"
              onChange={updateFormField}
              label="Image URL (optional)"
            />
            <TextEditor
              name="content"
              defaultValue={post.content}
              onChange={updateFormField}
              error={getError("content")}
              label="Post Content"
            />
            <CategoryDropdown 
              defaultValue={defaultCategoriesValue}
              name="categories"
              onChange={updateFormField}
              error={getError("categories")}
              label="Categories"
            />
            <Form.Button fluid color="red" style={{ marginTop: "2em" }}>Publish</Form.Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default EditPostView;