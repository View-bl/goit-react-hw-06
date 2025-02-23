import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './redux/store';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import ContactsForm from './components/ContactsForm/ContactsForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;
