import React, { Component } from "react";
import DocumentsClient from './DocumentsClient.js';
import { connect } from 'react-redux';
import { addDocumentAsync, deleteDocumentAsync, editDocumentAsync } from './redux/actions';

class SingleDocument extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    //    console.log("Joey props");
    //console.log(this.props.document.id);
    this.state = (props.document) ? props.document : { 'content': ''};
    //this.state = props;
  }

  handleChange = event => {
    this.setState({ content: event.target.value });
  };

  handleAddDocument = () => {
    this.props.addDocumentAsync(this.state.content);
    this.setState({ content : "" });
  };

  handleDeleteDocument = () => {
    this.props.deleteDocumentAsync(this.state.id);
    this.setState({ content : "" });
  };

  handleEditDocument = () => {
    this.props.editDocumentAsync(this.state.id, this.state.content);
    this.setState({ content : this.state.content });
  };

  render() {
  return (
    <div className="SingleDocument" id={this.state.id}>
      <form>
        {this.state.id ? (
          <React.Fragment>
        <label>id</label>
        <input readOnly value={this.state.id}/></React.Fragment>) : <div/>}

        <label>content</label>
        <input value={this.state.content} onChange={this.handleChange}/>
        <input type='button'  onClick={this.state.id ? this.handleEditDocument : this.handleAddDocument } value={this.state.id ? ('submit') : 'new'}/>
        {this.state.id ? (
          <input type='button'  onClick={this.handleDeleteDocument} value='delete'/>
        ) : <div/>}
      </form>
    </div>
  );
  }
}

export default connect(null, {addDocumentAsync, deleteDocumentAsync, editDocumentAsync} ) (SingleDocument);
