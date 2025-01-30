import { Contact } from '../models/contacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await Contact.find();
    console.log("succesfully fetched");
    return contacts;
  } catch (e) {
    return 'error', e;
  }
};

export const getContactById = async (id) => {
  try {
    const contact = await Contact.findById(id);
    console.log("succesfully found a contact");
    return contact;
  } catch (e) {
    return 'error', e;
  }
};
