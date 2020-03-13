import moment from "moment";

class Comment {
  constructor(payload = {}) {
    this.id = payload.id || "";
    this.author = payload.author || "";
    this.creationDate = moment(payload.creationDate).format('MMMM DD, YYYY');;
    this.content = payload.content || [];
  }
}

export default Comment;