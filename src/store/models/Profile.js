 class Profile {
  constructor(payload = {}) {
    this.id = payload.id || "";
    this.username = payload.username || "";
    this.firstName = payload.firstName || "";
    this.lastName = payload.lastName || "";
    this.description = payload.description || "";
    this.birthDate = payload.birthDate|| "";
    this.email = payload.email || "";
    this.registrationDate = payload.registrationDate || "";
  }
}

export default Profile;