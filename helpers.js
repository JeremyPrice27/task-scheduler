class User {
  /**
   * Initializes the User class.
   * @param {string} username The username of the user.
   */
  constructor(username) {
    this.username = username;
  }

  /**
   * Returns the current username.
   * @returns {string} The username.
   */
  getUsername() {
    return this.username;
  }

  /**
   * Sets a new username.
   * @param {string} newUsername The new username to set.
   */
  setUsername(newUsername) {
    this.username = newUsername;
  }
}

/**
 * Represents a chat user with additional warning functionality.
 * Extends the User class.
 */
class ChatUser extends User {
  /**
   * Initializes the ChatUser class.
   * @param {string} username The username of the chat user.
   */
  constructor(username) {
    // Call the parent User class constructor
    super(username);
    // Initialize the specific property for ChatUser
    this.warning = 0;
  }

  /**
   * Increments the user's warning count by 1.
   */
  giveWarning() {
    this.warning++;
  }

  /**
   * Returns the current warning count.
   * @returns {number} The number of warnings.
   */
  getWarningCount() {
    return this.warning;
  }
}

// --- Example Usage ---

// Create a standard User
const regularUser = new User('JohnDoe');
console.log(`User: ${regularUser.getUsername()}`); // Output: User: JohnDoe
regularUser.setUsername('JDoe');
console.log(`User updated: ${regularUser.getUsername()}`); // Output: User updated: JDoe

console.log('---');

// Create a ChatUser
const chatUser = new ChatUser('Alice_C');
console.log(`ChatUser: ${chatUser.getUsername()}`); // Output: ChatUser: Alice_C
console.log(`Warnings: ${chatUser.getWarningCount()}`); // Output: Warnings: 0

chatUser.giveWarning();
console.log(`Warnings after 1st warning: ${chatUser.getWarningCount()}`); // Output: Warnings after 1st warning: 1

chatUser.giveWarning();
chatUser.giveWarning();
console.log(`Warnings after total warnings: ${chatUser.getWarningCount()}`); // Output: Warnings after total warnings: 3

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function getSecondLargest(arr) {
    const sortArray = [...new Set(arr)];
    sortArray.sort((a, b) => b - a);
    return sortArray[1];
}

function isPositive(a) {
    if (a > 0) {
        return "YES";
    } else if (a === 0) {
        throw new Error("Zero Error");
    } else {
        throw new Error("Negative Error");
    }
}

function reverseString(s) {
    console.log(s.split("").reverse().join(""));
}
