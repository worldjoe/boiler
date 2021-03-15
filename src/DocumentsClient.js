class DocumentsClient {

  async getDocument(id) {
    const response = await fetch("https://localhost:8443/v1/documents/" + id, { method: 'GET'});
    const documentResponse = await response.json();
    return documentResponse;
  }

  async createDocument(content) {
    const response = await fetch("https://localhost:8443/v1/documents/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'content' : content}),
    });
    const documentResponse = await response.json();
    return documentResponse;
  }

  async deleteDocument(id) {
    const response = await fetch("https://localhost:8443/v1/documents/" + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //    const documentResponse = await response.json();
    return response;
  }

  async getAllDocuments() {
    console.log("joey in getAllDocuments");
    const response = await fetch("https://localhost:8443/v1/documents/", { method: 'GET'});
    console.log("joey in getAllDocuments response");
    const documentResponse = await response.json();
    console.log("joey in getAllDocuments response getting json");
    return documentResponse;
  }

  async updateDocument(id, content) {
    const response = await fetch("https://localhost:8443/v1/documents/" + id, {
      method: 'PUT', // or 'POST'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'content' : content}),
    });
    const documentResponse = await response.json();
    return documentResponse;
  }
}
export default DocumentsClient;
