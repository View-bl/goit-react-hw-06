import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = filter
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  const handleDelete = (id) => {
    dispatch(deleteContact(id)); // передаємо id для видалення конкретного контакту
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.contactItem}>
          <span>{contact.name}: {contact.phone}</span>
          <button
            onClick={() => handleDelete(contact.id)} // передаємо id при натисканні на кнопку
            className={css.deleteBtn}
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
