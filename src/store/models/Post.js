import moment from "moment";
import Profile from "./Profile";
import Comment from "./Comment";
import Category from "./Category";
import buildPostUrl from "utils/buildPostUrl";

class Post {
  constructor(payload = {}) {
    this.id = payload.id || "";
    this.imageUrl = payload.imageUrl || "";
    this.author = new Profile(payload.author);
    this.creationDate = moment(payload.creationDate).format("DD/MM/YYYY") || "";
    this.title = payload.title|| "";
    this.content = payload.content || "";
    this.categories = (payload.categories || [])
      .map(category => new Category(category));
    this.comments = (payload.comments || [])
      .map(comment => new Comment(comment));
    this.likes = payload.likes || [];
    this.url = buildPostUrl(payload);
    this.roles = payload.roles || [];
  }
}

export default Post;