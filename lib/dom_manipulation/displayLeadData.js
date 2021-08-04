const displayLeadData = (data) => {
  const nameElement     = document.querySelector("#userName")
  const bioElement      = document.querySelector("#userBio")
  const emailElement    = document.querySelector("#userEmail")
  const locationElement = document.querySelector("#userLocation")

  nameElement.innerText     = data.name
  bioElement.innerText      = data.bio
  emailElement.innerText    = data.email
  locationElement.innerText = data.location
}

export { displayLeadData }
