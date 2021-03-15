import {ADD_DOCUMENT, ADD_DOCUMENT_SUCCESS, ADD_DOCUMENT_STARTED, ADD_DOCUMENT_FAILURE, DELETE_DOCUMENT_SUCCESS, DELETE_DOCUMENT_STARTED, DELETE_DOCUMENT_FAILURE, DELETE_DOCUMENT, EDIT_DOCUMENT_SUCCESS, EDIT_DOCUMENT_STARTED, EDIT_DOCUMENT_FAILURE} from "./actionTypes";
//import axios from 'axios';
import DocumentsClient from "../DocumentsClient";
let nextId = 0;

export const addDocumentAsync = content => {
    return dispatch => {
      dispatch(addDOCUMENTStarted());
  
      let documentsClient = new DocumentsClient();
            let clientret = documentsClient.createDocument(content);

        clientret
        .then(res => {
          dispatch(addDOCUMENTSuccess(res));
        })
        .catch(err => {
          dispatch(addDOCUMENTFailure(err.message));
        });
    };
  };

  const addDOCUMENTSuccess = DOCUMENT => ({
    type: ADD_DOCUMENT_SUCCESS,
    payload: {
      ...DOCUMENT
    }
  });
  
  const addDOCUMENTStarted = () => ({
    type: ADD_DOCUMENT_STARTED
  });
  
  const addDOCUMENTFailure = error => ({
    type: ADD_DOCUMENT_FAILURE,
    payload: {
      error
    }
  });

  export const deleteDocumentAsync = id => {
    return dispatch => {
      dispatch(deleteDOCUMENTStarted());
  
      let documentsClient = new DocumentsClient();
            let clientret = documentsClient.deleteDocument(id);

        clientret
        .then(res => {
          dispatch(deleteDOCUMENTSuccess(id));
        })
        .catch(err => {
          dispatch(deleteDOCUMENTFailure(err.message));
        });
    };
  };

  const deleteDOCUMENTSuccess = id => ({
    type: DELETE_DOCUMENT_SUCCESS,
    payload: id 
  });
  
  const deleteDOCUMENTStarted = () => ({
    type: DELETE_DOCUMENT_STARTED
  });
  
  const deleteDOCUMENTFailure = error => ({
    type: DELETE_DOCUMENT_FAILURE,
    payload: {
      error
    }
  });

  export const editDocumentAsync = (id, content) => {
    return dispatch => {
      dispatch(editDOCUMENTStarted());
  
      let documentsClient = new DocumentsClient();
            let clientret = documentsClient.updateDocument(id, content);

        clientret
        .then(res => {
          dispatch(editDOCUMENTSuccess(id, content));
        })
        .catch(err => {
          dispatch(editDOCUMENTFailure(err.message));
        });
    };
  };

  const editDOCUMENTSuccess = (id, content) => ({
    type: EDIT_DOCUMENT_SUCCESS,
    payload: {id, content}
  });
  
  const editDOCUMENTStarted = () => ({
    type: EDIT_DOCUMENT_STARTED
  });
  
  const editDOCUMENTFailure = error => ({
    type: EDIT_DOCUMENT_FAILURE,
    payload: {
      error
    }
  });

export const addDocument = content => ({
    type: ADD_DOCUMENT,
    payload: {
        id: nextId,
        content
    }
});

export const deleteDocument = content => ({
    type: DELETE_DOCUMENT,
    payload: {
        id: nextId,
        content
    }
});