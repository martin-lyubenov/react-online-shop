// Query for getting a fruit by ID
export function filter(fieldName, value) {
    const query = JSON.stringify({[fieldName]: value});

    return `where=${encodeURIComponent(query)}`
}
