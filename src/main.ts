import matcher from 'matcher'

const CLASS_NAME = '__environment-ribbon'

const styles = `
.${CLASS_NAME} {
  display: inline-block;
  position: fixed;
  padding: 5px 0;
  right: -40px;
  top: 40px;
  width: 200px;
  text-align: center;
  font-size: 18px;
  line-height: 16px;
  color: #fff;
  letter-spacing: 0.05em;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  border-top: dashed 1px rgba(255, 255, 255, 0.65);
  border-bottom: dashed 1px rgba(255, 255, 255, 0.65);
  z-index: 10000;
  opacity: 0.75;
  cursor: pointer;
}
`

const matchUrl = (url: string) => matcher.isMatch(location.href, url)

const matchSelector = (selector: string | null) => {
  if (!selector) return true

  return !!document.querySelector(selector)
}

const injectStyle = () => {
  const element = document.createElement('style')
  element.innerHTML = styles
  document.head.append(element)
}

const injectRibbon = ({ name, color }: { name: string; color: string }) => {
  const element = document.createElement('span')
  element.classList.add(CLASS_NAME)
  element.style.backgroundColor = color
  element.textContent = name
  element.addEventListener('click', () => {
    document.body.removeChild(element)
  })
  document.body.appendChild(element)
}

const main = () => {
  chrome.storage.sync.get(['json'], ({ json }) => {
    if (!json) return

    const config = JSON.parse(json)
    const currentConfig = config.find(
      ({ url, selector }: { url: string; selector: string | null }) => matchUrl(url) && matchSelector(selector),
    )
    if (!currentConfig) return

    injectStyle()
    injectRibbon(currentConfig)
  })
}

main()
