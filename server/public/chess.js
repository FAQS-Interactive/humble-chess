const tableCells = document.getElementsByTagName('td')
const tableArr = [...tableCells]

// let pawnPiece = document.createElement('img')

function pawn() {
  let img = document.createElement('img')
  img.src = './images/pawn.png'
  img.alt = 'pawn piece'
  img.id = 'pawn'

  tableArr.map((x, i) =>
    i > 47 && i < 56 ? x.appendChild(img.cloneNode(true)) : null
  )

  // console.log(test)
  console.log(tableArr)
}

pawn()

const occupiedCells = tableArr.filter(
  (x) =>
    // let cells = document.getElementsByTagName('td')
    x.innerHTML
)
console.log(occupiedCells)
