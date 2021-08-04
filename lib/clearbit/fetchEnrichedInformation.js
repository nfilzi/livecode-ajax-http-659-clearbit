const apiKey  = "sk_8a1c43abbd4e92a829bbac36c7900a8c"
const baseUrl = "https://person.clearbit.com"

// Version originelle (à la fin de notre livecode)
const fetchEnrichedInformation = (email, domSuccessCallback) => {
  const url = `${baseUrl}/v2/people/find?email=${email}`

  const headers = new Headers();

  headers.append('Authorization', `Bearer ${apiKey}`);

  const options = { method: 'GET', headers: headers };

  fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      const leadData = {
        name:     data.name.fullName,
        bio:      data.bio,
        email:    data.email,
        location: data.location
      }
      domSuccessCallback(leadData)
    })
}

export { fetchEnrichedInformation }
