/* Dependencies */
import React from 'react'
import renderer from 'react-test-renderer';
import SingleDocument from './SingleDocument.js'
import * as DocumentsClient from './DocumentsClient.js';
jest.mock('./DocumentsClient');

describe('test window location\'s reload function', () => {
  const location = window.location;
  delete window.location;
  window.location = {
    ...location,
    reload: jest.fn()
  };;
  test ("donothing", () => {

  });
/*
  test("testRender", () => {
    //  let documentsClient = new DocumentsClient();
    let mockReRenderCallbackFunction = jest.fn();
    const singleDocumentComponent = renderer.create(
      <SingleDocument rerenderParentCallback={mockReRenderCallbackFunction} />,
    );
    let tree = singleDocumentComponent.toJSON();
    expect(tree).toMatchSnapshot();
    singleDocumentComponent.root.findAllByType('input')[1].props.onClick();
    return new Promise(resolve => setImmediate(resolve)).then (() => {
      console.log("Joey in promise return going to check window.location.reload");

      expect(mockReRenderCallbackFunction).toHaveBeenCalled();
      //expect(window.location.reload).toHaveBeenCalledTimes(1);
      jest.restoreAllMocks();
      window.location = location;
    });
  });

  test("testRender with content", () => {
    let props = {'content': 'joey is awesome', 'id' :'123'};
    //  let documentsClient = new DocumentsClient();
    let mockReRenderCallbackFunction = jest.fn();
    const singleDocumentComponent = renderer.create(
      <SingleDocument document={props} rerenderParentCallback={mockReRenderCallbackFunction} />,
    );
    let tree = singleDocumentComponent.toJSON();
    expect(tree).toMatchSnapshot();
    singleDocumentComponent.root.findAllByType('input')[2].props.onClick();
    return new Promise(resolve => setImmediate(resolve)).then (() => {
      console.log("Joey in promise return going to check window.location.reload");

      jest.restoreAllMocks();
      window.location = location;
    });
  });
  */
});