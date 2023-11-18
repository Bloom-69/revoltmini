import { Message } from "./message.js";
import { Modal } from "./modal.js";
import { Attachments } from "./attachments.js";
import { Mdsymbols } from "./mdsymbols.js";

customElements.define("message-renderer", Message);
customElements.define("attachment-renderer", Attachments);
customElements.define("material-symbols", Mdsymbols);
customElements.define("custom-modal", Modal, { extends: "dialog" });
