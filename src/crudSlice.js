import DocumentsClient from "./DocumentsClient";


const initialState = [];


export default function crudReducer(state = initialState, action) {
    switch (action.type) {
      // omit other reducer cases
      case 'crud/documentsLoaded': {
        // Replace the existing state entirely by returning the new value
        return action.payload
      }
      default:
        return state
    }
  }

export async function fetchDocuments(dispatch, getState) {
    let documentsClient = new DocumentsClient();
    //    let myDocument = await documentsClient.getDocument("1087949846");
    let myDocument = await documentsClient.getAllDocuments();
    //console.log("Joey : " + myDocument);
    dispatch({ type: 'crud/documentsLoaded', payload: myDocument.documents })
    //this.setState({document: myDocument.documents[0]});

}