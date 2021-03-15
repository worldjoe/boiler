/* Dependencies */
import React from 'react'
import renderer from 'react-test-renderer';
import App from './App.js'
import * as DocumentsClient from './DocumentsClient.js';
import SingleDocument from './SingleDocument.js';
jest.mock('./DocumentsClient');

describe('test App', () => {

  test ("donothing", () => {

  });
  /*
  test("no documents", () => {
    const noDocumentsApp = renderer.create(
      <App/>
    );
    let tree = noDocumentsApp.toJSON();
    expect(tree).toMatchSnapshot();
  })


  function sortStack(stack)  {
    if (stack.length === 0) {
      return stack;
    }
    let tempStack=[];
    let top = stack.pop();
    let newTop = stack.pop();
    while (newTop != null) {
      if (top > newTop) {
        tempStack.push(newTop);
      } else {
        if (tempStack.length>0)
          stack.push(...tempStack);
        sortStack(stack);
        stack.push(top);
        stack.push(newTop);
        return stack;
      }
      newTop = stack.pop();
    }
    stack.push(top);
    stack.push(...tempStack)
    if (stack.length === 1) {
      return stack;
    }
    return sortStack(stack);
  }

  test("sort test", () => {

    let stack = [34, 3];
    let sortedStack = sortStack(stack);
    expect(sortedStack).toEqual([3,34]);
  });

  test("mid sort test", () => {
    let newstack = [34, 3, 31];
    let sortedStack = sortStack(newstack);
    expect(sortedStack).toEqual([3, 31, 34]);
  });

  test("mid mid sort test", () => {
    let stack = [34, 3, 31, 98 ];
    let sortedStack = sortStack(stack);
    expect(sortedStack).toEqual([3, 31, 34, 98])
  });

  test("one document", () => {
    let myDocuments = [{'id': '123', 'content': 'daft punk'}];
    const noDocumentsApp = renderer.create(
      <App documents={myDocuments}/>
    );
    let tree = noDocumentsApp.toJSON();
    expect(tree).toMatchSnapshot();
  })

  test("one document and create one", () => {
    let myDocuments = [{'id': '123', 'content': 'daft punk'}];
    const noDocumentsApp = renderer.create(
      <App documents={myDocuments}/>
    );
    let tree = noDocumentsApp.toJSON();
    expect(tree).toMatchSnapshot();
    myDocuments = [{'id': '123', 'content': 'daft punk'}, {'id': '3245', 'content': 'stronger'}];
    noDocumentsApp.getInstance().setState({documents: myDocuments});
    tree = noDocumentsApp.toJSON();
    expect(tree).toMatchSnapshot();

  })
  */
})