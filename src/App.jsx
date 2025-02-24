import { Container, Typography, List } from "@mui/material";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  return (
    <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Книга контактів
      </Typography>

      <ContactsForm />
      <SearchBox />

      <List>
        <ContactList />
      </List>
    </Container>
  );
};

export default App;
