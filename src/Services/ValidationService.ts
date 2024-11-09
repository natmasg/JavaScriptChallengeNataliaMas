export class ValidationService {
  // Validate email using regex pattern
  static isValidEmail(email: string): boolean {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email); // Check if email matches the pattern
  }

  // Validate if the name is not empty
  static isValidName(name: string): boolean {
    return name.trim().length > 0; // Ensure the name is not just whitespace
  }
}
