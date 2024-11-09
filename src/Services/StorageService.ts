import { Contact } from "../models/Contact";

export class StorageService {
  // Load contacts from localStorage
  static loadContacts(): Contact[] {
    const contacts = localStorage.getItem("contacts");
    return contacts ? JSON.parse(contacts) : []; // Return parsed contacts or an empty array
  }

  // Save contacts to localStorage
  static saveContacts(contacts: Contact[]): void {
    localStorage.setItem("contacts", JSON.stringify(contacts)); // Store contacts as a JSON string
  }
}
