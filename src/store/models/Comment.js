import moment from "moment";

class Comment {
  constructor(payload = {}) {
    this.id = payload.id || "";
    this.author = payload.author || "";
    this.creationDate = moment(payload.creationDate).format("MMMM Do YYYY, h:mm:ss a");;
    this.content = payload.content || [];
  }
}

export default Comment;