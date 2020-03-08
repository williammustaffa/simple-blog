 class Author {
  constructor(payload) {
    this.id = payload.id;
    this.firstName = payload.firstName;
    this.lastName = payload.lastName;
    this.descriptions = payload.description;
    this.birthDate = payload.birthDate;
    this.email = payload.email;
  }
}

export default Author;