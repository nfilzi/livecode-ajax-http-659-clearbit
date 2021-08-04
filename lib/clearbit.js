// import { fetchEnrichedInformation } from "./clearbit/fetchEnrichedInformation.js"
// import { fetchEnrichedInformation } from "./clearbit/advanced/fetchEnrichedInformation.js"
import { fetchEnrichedInformation } from "./clearbit/promise_based/fetchEnrichedInformation.js"
import { displayLeadData }          from './dom_manipulation/displayLeadData.js'

const form = document.querySelector("#clearbitForm")
// 1.1 On doit récupérer le contenu de l'input de search
// à la soumission du form => poser un eventListener
// 1.2 Pour récupérer le contenu, il faut qu'on puisse cibler
// l'élément qui nous intéresse

form.addEventListener("submit", (event) => {
  // console.log("Form has been submitted")

  const input = event.currentTarget.querySelector("#clearbitEmail")
  fetchEnrichedInformation(input.value, displayLeadData)
})

// 2.1 On doit contacter l'API de Clearbit en lui envoyant l'email
// tapé l'utilisateur pour récupérer des résultats

// 2.2 On doit afficher dans la page les informations reçues

// const results = fetchEnrichedInformation("boris@lewagon.org")
// console.log(results)
