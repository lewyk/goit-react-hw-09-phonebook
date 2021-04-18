import axios from 'axios';
import * as actions from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

const addContact = value => dispatch => {
  dispatch(actions.addContactsRequest());

  axios
    .post('/contacts', value)
    .then(({ data }) => dispatch(actions.addContactsSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

const delContact = id => dispatch => {
  dispatch(actions.delContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.delContactsSuccess(id)))
    .catch(error => dispatch(actions.delContactsError(error)));
};

const changeContact = ({ id, name, number }) => dispatch => {
  const update = { name, number };

  dispatch(actions.changeContactRequest());

  axios
    .patch(`/contacts/${id}`, update)
    .then(({ data }) => dispatch(actions.changeContactSuccess(data)))
    .catch(error => dispatch(actions.changeContactError(error.message)));
};

export { fetchContacts, addContact, delContact, changeContact };
