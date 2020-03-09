import Post from "./Post";

class Comment {
  constructor(payload = {}) {
    this.id = payload.id || "";
    this.author = payload.author || "";
    this.creationDate = payload.creationDate || "";
    this.post = payload.post || new Post();
    this.content = payload.content || [];
    this.ratings = payload.ratings || [];
  }
}

export default Comment;