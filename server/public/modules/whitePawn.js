const tableCells = document.getElementsByTagName('td')
const tableArr = [...tableCells]

function whitePawn() {
  let img = document.createElement('img')
  img.src = './images/wpawn.png'
  img.alt = 'pawn piece'
  img.id = 'wpawn'
  img.className = 'chessPiece'

  tableArr.map((x, i) =>
    i > 47 && i < 56 ? x.appendChild(img.cloneNode(true)) : null
  )
}

whitePawn()

// module.exports = {
//   whitePawn,
// }
