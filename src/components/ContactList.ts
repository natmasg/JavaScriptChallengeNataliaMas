import { ContactService } from "../Services/ContactService";
import { FormView } from "./ContactForm";

export class ListView {
  constructor(private container: HTMLElement, private contactService: ContactService) {}

  render() {
    this.container.innerHTML = `
      <section>
        <h2>Contacts</h2>
        <input type="text" id="search" placeholder="Search contacts..." />
        <button id="add-contact">Add Contact</button>
        <ul id="contact-list"></ul>
      </section>
    `;

    this.addEventListeners(); // Add event listeners
    this.renderContactList(); // Show the contact list
  }

  private renderContactList(filter: string = "") {
    // Filter and display contacts based on the search filter
    const contacts = this.contactService
      .getContacts()
      .filter((contact) =>
        `${contact.firstName} ${contact.lastName} ${contact.email}`
          .toLowerCase()
          .includes(filter.toLowerCase())
      );

    const contactList = this.container.querySelector("#contact-list") as HTMLElement;
    contactList.innerHTML = contacts
      .map(
        (contact) => `
        <li>
          ${contact.firstName} ${contact.lastName} - ${contact.email} (${contact.country})
          <div>
            <button class="edit" data-id="${contact.id}">Edit</button>
            <button class="delete" data-id="${contact.id}">Delete</button>
          </div>
        </li>`
      )
      .join("");

    this.addListEventListeners(); // Add listeners for edit and delete buttons
  }

  private addEventListeners() {
    // Form to add a new contact
    document.getElementById("add-contact")?.addEventListener("click", () => {
      new FormView(this.container, this.contactService, null).render();
    });

    // Filter the contact list based on search input
    const searchInput = document.getElementById("search") as HTMLInputElement;
    searchInput.addEventListener("input", () => this.renderContactList(searchInput.value));
  }

  private addListEventListeners() {
    // Edit a contact
    this.container.querySelectorAll(".edit").forEach((button) => {
      button.addEventListener("click", (event) => {
        const contactId = (event.target as HTMLElement).getAttribute("data-id");
        const contact = this.contactService.getContacts().find((c) => c.id === contactId) || null;
        new FormView(this.container, this.contactService, contact).render();
      });
    });

    // Delete a contact with confirmation
    this.container.querySelectorAll(".delete").forEach((button) => {
      button.addEventListener("click", (event) => {
        const contactId = (event.target as HTMLElement).getAttribute("data-id");
        if (contactId && window.confirm("Are you sure you want to delete this contact?")) {
          this.contactService.deleteContact(contactId); // Delete the contact
          this.render(); // Re-render the contact list
        }
      });
    });
  }
}
