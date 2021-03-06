import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faPhoneSquare,
    faEnvelope,
    faHome,
    faLock
  } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faPhoneSquare, faEnvelope, faHome, faLock)
};

export default Icons;