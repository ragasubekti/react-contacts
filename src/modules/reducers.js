const ADD_CONTACT = "ADD_CONTACT";
const DELETE_CONTACT = "DELETE_CONTACT";
const FAVORITE_CONTACT = "FAVORITE_CONTACT";

const initialState = {
  contacts: [
    {
      name: "Raga Subekti",
      phoneNumber: "+62 821 4368 8959",
      isFavorite: true
    }
  ]
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, actions.payload]
      };
    default:
      return state;
  }
}

export const addContacts = contact => ({
  type: ADD_CONTACT,
  payload: contact
});
