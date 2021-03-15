import documents from './documents';
import { EDIT_DOCUMENT_SUCCESS, ADD_DOCUMENT_SUCCESS, DELETE_DOCUMENT_SUCCESS } from "../actionTypes";

test ('document add', () => {
    let state = [{'id': 0, 'content': 'daft punk'}];
    let action = {'type': ADD_DOCUMENT_SUCCESS, 'payload' : {'id': 1, 'content': 'harder'}};
    let newState = documents(state, action);
    let expectedState = [{'id': 0, 'content': 'daft punk'}, {'id': 1, 'content': 'harder'}];
    expect(newState).toEqual(expectedState);
});

test ('document delete', () => {
    let state = [{'id': 0, 'content': 'daft punk'}, {'id': 1, 'content': 'harder'}];
    let action = {'type': DELETE_DOCUMENT_SUCCESS, 'payload' : 1 };
    let newState = documents(state, action);
    let expectedState = [{'id': 0, 'content': 'daft punk'}];
    expect(newState).toEqual(expectedState);
});

test ('document edit', () => {
    let state = [{'id': 0, 'content': 'daft punk'}, {'id': 1, 'content': 'harder'}];
    let action = {'type': EDIT_DOCUMENT_SUCCESS, 'payload' : {'id': 1, 'content': 'faster'} };
    let newState = documents(state, action);
    let expectedState = [{'id': 0, 'content': 'daft punk'}, {'id': 1, 'content': 'faster'}];
    expect(newState).toEqual(expectedState);
})

test ('state noop', () => {
    let state = [{'id': 0, 'content': 'daft punk'}, {'id': 1, 'content': 'harder'}];
    let action = {'type': 'foo', 'payload' : {'id': 1, 'content': 'faster'} };
    let newState = documents(state, action);
    expect(newState).toEqual(state);
})