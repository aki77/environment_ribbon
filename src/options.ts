const flash = (message: string, error = false) => {
  const element = document.querySelector('#flash') as HTMLDivElement
  element.textContent = message
  element.classList.toggle('flash-error', error)
  element.classList.remove('d-none')
}

const onSubmit = (event: Event) => {
  event.preventDefault()
  const json = (document.querySelector('#textarea') as HTMLTextAreaElement).value

  try {
    JSON.parse(json)
    chrome.storage.sync.set({ json }, () => {
      flash('Saved!')
    })
  } catch (error) {
    console.log(error)
    flash('Invalid json!', true)
  }
}

const form = document.querySelector('#form') as HTMLFormElement
form.addEventListener('submit', onSubmit)

chrome.storage.sync.get(['json'], (result) => {
  if (result.json) {
    (document.querySelector('#textarea') as HTMLTextAreaElement).value = result.json
  }
})
