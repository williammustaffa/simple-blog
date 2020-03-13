import Profile from "./Profile";

class Post {
  constructor(payload = {}) {
    this.id = payload.id || "";
    this.imageUrl = payload.imageUrl || "";
    this.author = new Profile(payload.author);
    this.creationDate = payload.creationDate || "";
    this.title = payload.title|| "";
    this.content = payload.content || "";
    this.categories = payload.categories || [];
    this.comments = payload.comments || [];
    this.likes = payload.likes || [];
  }
}

export default Post;