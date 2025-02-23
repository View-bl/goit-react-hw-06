import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      {contact.name}: {contact.number}
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Видалити
      </button>
    </li>
  );
};

export default Contact;
