// Query for getting a fruit by ID
export function filter(fieldName, value) {
    const query = JSON.stringify({[fieldName]: value});

    return `where=${encodeURIComponent(query)}`
}

export function filterByOwner(objectId) {
 
    const query = JSON.stringify({
        owner:{
          __type:"Pointer",
          className:"_User",
          objectId,
        }
      });

    return `where=${encodeURIComponent(query)}`
}
