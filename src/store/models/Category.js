class Category {
  constructor(payload = {}) {
    this.id = payload.id || "";
    this.displayName = payload.displayName || "";
    this.labelColor = payload.labelColor || "grey";
  }
}

export default Category;