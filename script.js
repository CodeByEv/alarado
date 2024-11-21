

// dark mode switch

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.querySelector('.switch')
const sideSwitch = document.querySelector(".side-switch")

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

const switchMode = function() {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
}

themeSwitch.addEventListener("click", switchMode)
sideSwitch.addEventListener("click", switchMode)


let sidebar = document.querySelector(".sidebar")

// side bar
function showSidebar(){
  sidebar.style.display = "flex";
}

function hideSidebar(){
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "none"
}

