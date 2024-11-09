import { Contact } from "../models/Contact";

export class ContactService {
  private storageKey = "contacts"; // Key used to store contacts in localStorage

  // Get all contacts from localStorage
  getContacts(): Contact[] {
    const contacts = localStorage.getItem(this.storageKey);
    return contacts ? JSON.parse(contacts) : []; // Return parsed contacts or an empty array
  }

  // Save contacts to localStorage
  saveContacts(contacts: Contact[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(contacts));
  }

  // Add a new contact
  addContact(contact: Contact): void {
    const contacts = this.getContacts(); // Get existing contacts
    contacts.push(contact); // Add new contact
    this.saveContacts(contacts); // Save updated contacts
  }

  // Update an existing contact
  updateContact(updatedContact: Contact): void {
    const contacts = this.getContacts().map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact // Replace the updated contact
    );
    this.saveContacts(contacts); // Save updated contacts
  }

  // Delete a contact by its ID
  deleteContact(id: string): void {
    const contacts = this.getContacts().filter((contact) => contact.id !== id); // Remove contact by ID
    this.saveContacts(contacts); // Save updated contacts
  }
}
