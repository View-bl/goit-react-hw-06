import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { v4 as uuidv4 } from "uuid"; 

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      name,
      phone,
    };
    dispatch(addContact(newContact)); 
    setName("");
    setPhone("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Ім'я"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Номер телефону"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Додати контакт
      </Button>
    </Box>
  );
};

export default ContactForm;
