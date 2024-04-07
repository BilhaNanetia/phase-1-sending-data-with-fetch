 function submitData(name, email) {
    let formData = {
      name: "Steve",
      email: "steve@steve.com"
    };
  
    let configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configObject)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        appendIdToDOM(data.id, name, email); // Append id to the DOM with name and email
        return data;
      })
      .catch(error => {
        console.error("Error:", error);
        appendErrorMessageToDOM(error.message); // Append error message to the DOM
        return error;
      });
  }
  
  // Function to append id, name, and email to the DOM
  function appendIdToDOM(id, name, email) {
    let newElement = document.createElement("p");
    newElement.textContent = `New ID: ${id} - Name: ${name}, Email: ${email}`;
    document.body.appendChild(newElement);
  }
  
  // Function to append error message to the DOM
  function appendErrorMessageToDOM(message) {
    let errorElement = document.createElement("p");
    errorElement.textContent = `Error: ${message}`;
    document.body.appendChild(errorElement);
  }
  
  //submitData() - POST request with name="Sam" and email="sam@sam.com"
  let name1 = "Sam";
  let email1 = "sam@sam.com";
  submitData(name1, email1);
  
  //submitData() - handling failed POST request using catch, appending the error message to the DOM
  let name2 = "Jim";
  let email2 = "jim@jim.com";
  submitData(name2, email2);