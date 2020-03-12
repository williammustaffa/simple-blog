import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import TextEditor from "../TextEditor";
import CategoryDropdown from "../CategoryDropdown";
import extractContentFromHtmlString from "../../utils/extractContentFromHtmlString";
import Post from "../../store/models/Post";

function PostForm(props = {}) {
  const { post = new Post(), onSubmit } = props;

  const { register, handleSubmit, errors, setValue, triggerValidation } = useForm({
    defaultValues: {
      id: post.id || "new",
      title: post.title || "",
      imageUrl: post.imageUrl || "",
      content: post.content || "",
      categories: post.categories || [],
    }
  });

  // Component did mount
  useEffect(() => {
    // Register validation
    function validateCategories(categories) {
      return Array.isArray(categories) && !!categories.length;
    }

    function validatePostContent(content) {
      const textContent = extractContentFromHtmlString(content);

      // Should have at least a text content
      return textContent.length > 0;
    };

    register({ name: "id" }, { required: false });
    register({ name: "title" }, { required: true });
    register({ name: "imageUrl" }, { required: false });
    register({ name: "content" }, { required: true, validate: validatePostContent });
    register({ name: "categories" }, { required: true, validate: validateCategories });
  }, [register]);

  function getError(fieldName) {
    return !!errors[fieldName];
  };

  async function updateFormField(e, { name, value }) {
    setValue(name, value);
    await triggerValidation({ name });
  }

  function onFormSubmit(data) {
    if (typeof onSubmit === "function") {
      onSubmit(data);
    }
  }

  // Map categories to 1D array
  const defaultCategoriesValue = post.categories
    .map(category => category.id);
    
  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
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
  )
}

PostForm.propTypes = {
  post: PropTypes.object,
  onSubmit: PropTypes.func,
}

export default PostForm;