/* global plugins */
const $ = document.querySelector.bind(document)
const $a = document.querySelectorAll.bind(document)
const list = plugins.map((p, i) => { p.id = `.p${i}`; return p })

$('.search').onsubmit = () => false

$('.search').onkeyup = () => {
  // get the search value
  const val = $('.field').value
  const re = new RegExp(val)

  // search relevant module fields for matches
  const matches = list.reduce((m, p) => {
    if (p.module.name.match(re)) { m.push(p.id); return m }
    if (p.module.description.match(re)) { m.push(p.id); return m }
    if (p.module.publisher.username.match(re)) { m.push(p.id); return m }
    if (p.module.keywords && p.module.keywords.indexOf(val) > -1) {
      m.push(p.id); return m
    }
    return m
  }, [])

  // clear any existing search classes
  $a('tr:not(.header)').forEach((el) => {
    el.className = el.className.replace(' hidden', '')
  })

  // add classes to hide non-matching elements
  if (matches.length) {
    const toHide = $a(`tr:not(.header):not(${matches.join('):not(')})`)
    toHide.forEach((el) => {
      el.className = `${el.className} hidden`
    })
  }
}
