class Category {
  constructor(payload = {}) {
    this.id = payload.id || "";
    this.displayName = payload.displayName || "";
  }
}

export default Category;