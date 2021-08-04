const apiKey  = "sk_8a1c43abbd4e92a829bbac36c7900a8c"
const baseUrl = "https://person.clearbit.com"

// Version ultime : retourner une Promise
// pour pouvoir bien détailler chaque étape de traitement,
// et enchaîner les .then() (voir ligne 31 à 34)

// Lire https://www.javascripttutorial.net/es6/promise-chaining/
// pour tenter de comprendre ce setup 💪

const extractDataOfInterest = (allData) => {
  return new Promise((resolve, reject) => {
    const leadData = {
      name:     allData.name.fullName,
      bio:      allData.bio,
      email:    allData.email,
      location: allData.location
    }

    resolve(leadData)
  })
}

const fetchEnrichedInformation = (email, domSuccessCallback) => {
  const url = `${baseUrl}/v2/people/find?email=${email}`

  const headers = new Headers();

  headers.append('Authorization', `Bearer ${apiKey}`);

  const options = { method: 'GET', headers: headers };

  fetch(url, options)
    .then(response => response.json())
    .then(extractDataOfInterest)
    .then(domSuccessCallback)
}

export { fetchEnrichedInformation }
