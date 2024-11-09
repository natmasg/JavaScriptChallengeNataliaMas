import { Contact } from "../models/Contact";
import { ContactService } from '../Services/ContactService';
import { countries } from "../Utils/Countries";
import { ListView } from "./ContactList";
import { ValidationService } from "../Services/ValidationService"; 

export class FormView {
    private container: HTMLElement;
    private contactService: ContactService;
    private contact: Contact | null;

    constructor(container: HTMLElement, contactService: ContactService, contact: Contact | null = null) {
        this.container = container;
        this.contactService = contactService;
        this.contact = contact;
    }

    render() {
        this.container.innerHTML = `
            <section>
            <h2>${this.contact ? "Edit" : "Add"} Contact</h2>
            <form id="contact-form">
                <input type="text" id="first-name" placeholder="First Name" value="${this.contact?.firstName || ""}" required>
                <input type="text" id="last-name" placeholder="Last Name" value="${this.contact?.lastName || ""}" required>
                <input type="text" id="email" placeholder="Email" value="${this.contact?.email || ""}" required>
                <select id="country" required>
                    <option value="">Select Country</option>
                </select>
                <button type="submit">${this.contact ? "Update" : "Add"} Contact</button>
            </form>
            </section>
        `;

        // Populate the country dropdown list
        this.populateCountryDropdown();

        // Add form submit event listener
        document.getElementById("contact-form")?.addEventListener("submit", (event) => {
            event.preventDefault();
            this.handleFormSubmit();
        });
    }

    private populateCountryDropdown() {
        const countrySelect = document.getElementById("country") as HTMLSelectElement;
        
        countries.forEach(country => {
            const option = document.createElement("option");
            option.value = country;
            option.textContent = country;
            countrySelect.appendChild(option);
        });

        // If there's a contact to edit, preselect the country
        if (this.contact) {
            const selectedOption = countrySelect.querySelector(`option[value="${this.contact.country}"]`) as HTMLOptionElement;
            if (selectedOption) {
                selectedOption.selected = true;
            }
        }
    }

    private handleFormSubmit() {
        const firstName = (document.getElementById("first-name") as HTMLInputElement).value.trim();
        const lastName = (document.getElementById("last-name") as HTMLInputElement).value.trim();
        const email = (document.getElementById("email") as HTMLInputElement).value.trim();
        const country = (document.getElementById("country") as HTMLSelectElement).value;

        // Validate fields using ValidationService
        if (!ValidationService.isValidName(firstName) || !ValidationService.isValidName(lastName) || !ValidationService.isValidName(country)) {
            alert("All fields are required and should not be empty.");
            return;
        }

        // Validate email address
        if (!ValidationService.isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (this.contact) {
            // Update existing contact
            this.contactService.updateContact({
                ...this.contact,
                firstName,
                lastName,
                email,
                country
            });
        } else {
            // Create a new contact
            const newContact = new Contact(Date.now().toString(), firstName, lastName, email, country);
            this.contactService.addContact(newContact);
        }

        // Re-render the contact list
        new ListView(this.container, this.contactService).render();
    }
}
