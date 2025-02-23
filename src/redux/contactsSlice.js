import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [], // масив контактів
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload); // додаємо новий контакт
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((contact) => contact.id !== action.payload); // видаляємо контакт за id
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
