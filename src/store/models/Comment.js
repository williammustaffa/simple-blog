class Comment {
  constructor(payload) {
    this.id = payload.id || payload.id;
    this.post = payload.post;
    this.author = payload.author;
    this.content = payload.content || [];
    this.ratings = payload.ratings || [];
  }
}

export default Comment;