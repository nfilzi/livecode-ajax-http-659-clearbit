// Pour tester les différentes versions de `fetchEnrichedInformation`
// il suffit d'uncomment celle qui vous intéresse et de comment les autres

// import { fetchEnrichedInformation } from "./clearbit/fetchEnrichedInformation.js"
// import { fetchEnrichedInformation } from "./clearbit/advanced/fetchEnrichedInformation.js"
import { fetchEnrichedInformation } from "./clearbit/promise_based/fetchEnrichedInformation.js"

import { displayLeadData }          from './dom_manipulation/displayLeadData.js'

const form = document.querySelector("#clearbitForm")

form.addEventListener("submit", (event) => {
  // Sanity check, pour valider que l'event listener est bien posé !
  // console.log("Form has been submitted")

  const input = event.currentTarget.querySelector("#clearbitEmail")
  fetchEnrichedInformation(input.value, displayLeadData)
})

// On casse le gros problème en plus petits morceaux, qu'on
// construit de manière isolée, avant de les assembler pour faire tourner
// la feature.

// 1.1 On doit récupérer le contenu de l'input de search
// à la soumission du form => poser un eventListener

// 1.2 Pour récupérer le contenu, il faut qu'on puisse cibler
// l'élément qui nous intéresse

// 2.1 On doit contacter l'API de Clearbit en lui envoyant l'email
// tapé l'utilisateur pour récupérer des résultats

// 2.2 On doit afficher dans la page les informations reçues

// Premier tests, quand on avait seulement la fonction `fetchEnrichedInformation`
// const results = fetchEnrichedInformation("boris@lewagon.org")
// console.log(results)
