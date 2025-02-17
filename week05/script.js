class UserManager {
    constructor() {
        this.users = []; // Array to store user details
    }

    // Validate user input
    validateUser(name, email, birthDate) {
        if (typeof name !== "string" || name.trim() === "") {
            throw new Error("Invalid name! It must be a non-empty string.");
        }
        if (!email.includes("@")) {
            throw new Error("Invalid email! It must contain '@'.");
        }
        if (isNaN(new Date(birthDate))) {
            throw new Error("Invalid birth date! Must be a valid date.");
        }
    }

    // Add a new user
    addUser(name, email, birthDate) {
        try {
            this.validateUser(name, email, birthDate);
            let age = this.calculateAge(birthDate);
            this.users.push({ name, email, birthDate, age });
            console.log(`User added: ${name} (Age: ${age})`);
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    }

    // Calculate age from birth date
    calculateAge(birthDate) {
        let birth = new Date(birthDate);
        let today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        let monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--; // Adjust for birthdays not yet reached
        }
        return age;
    }

    // Display all users
    displayUsers() {
        if (this.users.length === 0) {
            console.log("No users found.");
            return;
        }
        console.log("User List:");
        this.users.forEach((user, index) => {
            console.log(`${index + 1}. ${user.name.toUpperCase()} - ${user.email} (Age: ${user.age})`);
        });
    }
}

// Example Usage
const userManager = new UserManager();
userManager.addUser("Alice", "alice@example.com", "2000-05-15");
userManager.addUser("Bob", "bobexample.com", "1998-10-10"); // Invalid email
userManager.addUser("Charlie", "charlie@example.com", "invalid-date"); // Invalid date
userManager.displayUsers();
