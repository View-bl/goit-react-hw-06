import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactsForm.module.css";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { id: Date.now().toString(), name, phone };
    dispatch(addContact(contact));
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className={css.input}
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Додати контакт
      </button>
    </form>
  );
};

export default ContactsForm;
