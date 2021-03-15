import React from "react";

import './App.css';
import SingleDocument from './SingleDocument.js';
import { getDocuments } from './redux/selectors'
import { connect } from "react-redux";


/*
class App extends Component {
  constructor(props) {
    super();
    this.state = {'documents': props.documents};
    this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
  }

  async rerenderParentCallback() {
    this.props.reRenderRoot();
    //await this.getDocuments();
    //this.forceUpdate();
  }

  /*
  async componentDidMount() {
    this.getDocuments();
  }

  async getDocuments() {
    let documentsClient = new DocumentsClient();
    //    let myDocument = await documentsClient.getDocument("1087949846");
    let myDocument = await documentsClient.getAllDocuments();
    console.log("Joey : " + myDocument);
    this.setState({documents: myDocument.documents});
    //this.setState({document: myDocument.documents[0]});
    console.log(this.state.document);
  }



  render() {
    */

    /*
   export default function App() {
    let item;
    return (
      <div className="App">
        {this.state.documents ? this.state.documents.map((mydocument, id) =>
          <React.Fragment key={id}>
            <SingleDocument rerenderParentCallback={this.rerenderParentCallback} document={mydocument}/>
          </React.Fragment>
        )  : <div>fallback</div> }
        <div><SingleDocument rerenderParentCallback={this.rerenderParentCallback}/></div>
      </div>
    );
  }
  */
  const DocumentList = ({ documents }) => (
      <div>
      {documents && documents.length
        ? documents.map((document, index) => {
            return  <SingleDocument key={`document-${document.id}`} document={document}/>
          })
        : <div>fallback</div>}
       <div><SingleDocument/></div>
      </div>
  );
  
  // const mapStateToProps = state => {
  //   const { byIds, allIds } = state.todos || {};
  //   const todos =
  //     allIds && state.todos.allIds.length
  //       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
  //       : null;
  //   return { todos };
  // };
  
  const mapStateToProps = state => {
    const documents = getDocuments(state);
    return { documents };
  };
  // export default TodoList;
  const DocumentListConnect = connect(mapStateToProps)(DocumentList);
   
  export default DocumentListConnect;