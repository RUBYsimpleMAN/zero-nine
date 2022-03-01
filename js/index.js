const body = document.querySelector('body')
document.body.style.background = "#000024"
body.style.fontSize = "32px"
body.style.fontFamily = "Lato"
body.style.fontWeight = "300"
body.style.color = "snow"
body.style.margin = "0"
body.style.maxHeight = "100vh"

const nonHtmlCode = document.querySelector('.containerNoHTML')
nonHtmlCode.style.display = "flex"
nonHtmlCode.style.flexDirection = "column"
nonHtmlCode.style.justifyContent = "center"
nonHtmlCode.style.alignContent = "center"
nonHtmlCode.style.minWidth = "30vw"
nonHtmlCode.style.maxWidth = "30vw"
nonHtmlCode.style.minHeight = "40vh"
nonHtmlCode.style.maxHeight = "40vh"
nonHtmlCode.style.margin = "2%"
nonHtmlCode.style.border = "2px solid cadetblue"
nonHtmlCode.style.borderRadius = "2%"

const nonHtmlButtonSayText = document.createElement('div')
nonHtmlButtonSayText.classList.add("buttonSayText")

const nonHtmlButtonSayTextFirstP = document.createElement('p')
nonHtmlButtonSayTextFirstP.textContent = "You click onNoHTML"

const substituteText = "the Button Nr."
const nonHtmlButtonSayTextSecondP = document.createElement('p')
nonHtmlButtonSayTextSecondP.textContent = substituteText
const onHtmlButtonSayTextSecondP = document.querySelector('.buttonSayText p:last-child')
onHtmlButtonSayTextSecondP.textContent = substituteText

nonHtmlButtonSayText.append(nonHtmlButtonSayTextFirstP)
nonHtmlButtonSayText.append(nonHtmlButtonSayTextSecondP)

const nonHtmlButtonsContainer = document.createElement('div')
nonHtmlButtonsContainer.classList.add("buttonsContainer")
const onHtmlButtonsContainer = document.querySelector('.buttonsContainer')

nonHtmlButtonSayText.append(nonHtmlButtonsContainer)

nonHtmlCode.append(nonHtmlButtonSayText)

for (let i = 1; i <= 5; i++) {
  const nonHtmlButton = document.createElement('button')
  nonHtmlButton.addEventListener('click',
    () => {
      nonHtmlButtonSayTextSecondP.innerText = `${substituteText} 0${i}`
    }
  )
  nonHtmlButton.innerText = `Click_0${i}`
  nonHtmlButtonsContainer.append(nonHtmlButton)

  const onHtmlButton = document.createElement('button')
  onHtmlButton.addEventListener('click',
    () => {
      onHtmlButtonSayTextSecondP.innerText = `${substituteText} 0${i}`
    }
  )
  onHtmlButton.innerText = `Click_0${i}`
  onHtmlButtonsContainer.append(onHtmlButton)
}
