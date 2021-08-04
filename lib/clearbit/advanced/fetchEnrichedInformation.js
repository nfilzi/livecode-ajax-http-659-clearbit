const apiKey  = "sk_8a1c43abbd4e92a829bbac36c7900a8c"
const baseUrl = "https://person.clearbit.com"

// Version après extraction d'instructions
// dans la function `extractDataOfInterest`

const extractDataOfInterest = (allData) => {
  return {
    name:     allData.name.fullName,
    bio:      allData.bio,
    email:    allData.email,
    location: allData.location
  }
}

const fetchEnrichedInformation = (email, domSuccessCallback) => {
  const url = `${baseUrl}/v2/people/find?email=${email}`

  const headers = new Headers();

  headers.append('Authorization', `Bearer ${apiKey}`);

  const options = { method: 'GET', headers: headers };

  fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      const leadData = extractDataOfInterest(data)
      domSuccessCallback(leadData)
    })
}

export { fetchEnrichedInformation }
