export var UserModel = (function () {
    function UserModel(email, password, firstName, lastName, role, approved) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.approved = approved;
    }
    return UserModel;
}());
//# sourceMappingURL=user.model.js.map