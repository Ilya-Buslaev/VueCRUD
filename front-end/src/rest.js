async function insertContact(cont) {
  window.console.log("insertContact, " + JSON.stringify(cont))
  let response = await fetch("http://localhost:8080/contacts", { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(cont)
      } ); 
  window.console.log(`insertContact, response.status=${response.status}`)
}

async function updateContact(cont) {
  window.console.log("updateContact, " + JSON.stringify(cont))
  let response = await fetch(`http://localhost:8080/contacts/${cont.id}`, { 
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(cont)
        } ); 
  window.console.log(`updateContact, response.status=${response.status}`)
}
  
async function deleteContact(id) {
  console.log(`deleteContact, ${id}`)
  let response = await fetch(`http://localhost:8080/contacts/${id}`, { method: 'DELETE' } ); 
  console.log(`deleteContact, response.status=${response.status}`)
}

async function selectContacts() {
  const response = await fetch("http://localhost:8080/contacts");
  let contacts = await response.json(); 
  return contacts;
} 


  

export {insertContact, deleteContact, updateContact, selectContacts}
