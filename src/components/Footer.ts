export class Footer {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  render() {
    const footer = document.createElement('footer');

    footer.innerHTML = `
      <p>Natàlia Mas Gisbert</p>
      <p>Front-End Developer</p>
      <p>© ${new Date().getFullYear()}</p>
    `;

    this.container.appendChild(footer);
  }
}
