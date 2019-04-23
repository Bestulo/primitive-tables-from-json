$(document).ready(() => {
  fetch('dump.json')
  .then(r => r.json())
  .then(data => {
    const keys = Object.entries(data[0]).map(x => x[0])
    let keysToHtml = ''
    keys.forEach(key => keysToHtml += ('<th>' + key + '</th>'))
    console.log(keys)
    $('#dynatable').html(`
<thead>
  ${keysToHtml}
</thead>
<tbody>
</tbody>`)

    $('#dynatable').dynatable({ dataset: { records: data } })
  })
})