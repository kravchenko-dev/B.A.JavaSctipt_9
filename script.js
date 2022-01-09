function createDiv() {
  let div = document.createElement('div')
  div.innerText = 'Enter text to edit'
  div.id = 'div'
  document.body.append(div)
}

createDiv()

document.addEventListener('keydown', function (event) {
  let div = document.getElementById('div')
  let textarea = document.getElementById('textarea')
  if (event.code == 'KeyE' && event.ctrlKey && div.id === 'div') {
    div.remove()
    let textarea = document.createElement('textarea')
    textarea.id = 'textarea'
    textarea.innerText = div.textContent
    document.body.append(textarea)
  }
})

document.addEventListener('keydown', function (event) {
  if (event.code == 'Equal' && event.ctrlKey && textarea.id === 'textarea') {
    let div = document.createElement('div')
    div.id = 'div'
    let textarea = document.getElementById('textarea')
    div.innerText = textarea.value
    textarea.remove()
    document.body.append(div)
  }
})
