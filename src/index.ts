// src/index.ts
import { ListView } from "./components/ContactList";
import { ContactService } from "./Services/ContactService";
import { Footer } from "./components/Footer";

document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.getElementById("app");
  if (appContainer) {
    const contactService = new ContactService();
    const listView = new ListView(appContainer, contactService);
    listView.render();

    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
      const footer = new Footer(footerContainer);
      footer.render();
    }
  }
});
