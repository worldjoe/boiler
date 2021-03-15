import { EDIT_DOCUMENT_SUCCESS, ADD_DOCUMENT_SUCCESS, DELETE_DOCUMENT_SUCCESS } from "../actionTypes";

const initialState = [];


export default function documents(state = initialState, action) {
    switch (action.type) {
        case 'crud/documentsLoaded': {
            // Replace the existing state entirely by returning the new value
            return action.payload
        }
        case ADD_DOCUMENT_SUCCESS: {
            console.log("Joey createNew running");
            return [...state, action.payload];
        }
        case DELETE_DOCUMENT_SUCCESS: {

                console.log("joey deleting document");
                return state.filter(document => document.id !== action.payload);
                //return state;
            }
        case EDIT_DOCUMENT_SUCCESS: {

                console.log("joey editing document");
                return state.map(document =>  {
                    if (document.id === action.payload.id) {
                        document.content = action.payload.content;
                    }
                    return document;
                });
                //return state;
            }
        default:
            return state;
    }
}