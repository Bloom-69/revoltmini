class Mdsymbols extends HTMLElement {
    static get observedAttributes() {
        return ['icon', 'colour'];
    }
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        const icon = this.getAttribute('icon');
        const colour = this.getAttribute('colour');

        this.style.fill = colour;

        switch (icon) {
            case "addPicture":
                shadow.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200Zm480-480v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM240-280h480L570-480 450-320l-90-120-120 160Zm-40-480v560-560Z"/></svg>
                `;
                break;
            default:
                throw "No icon provided";
        }
    }
}

export { Mdsymbols}