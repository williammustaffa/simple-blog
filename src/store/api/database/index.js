import localStorageDB from "localstoragedb";

const database = new localStorageDB("simpleBlog", localStorage);

// Create mocked data if its not initialized
if (database.isNew()) {
  database.createTableWithData("categories", require("./categories.json"));
  database.createTableWithData("profiles", require("./profiles.json"));
  database.createTableWithData("posts", require("./posts.json"));

  database.commit();
}

export default database;