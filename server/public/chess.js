import pawn from '../pawn'

function boardInit() {
  const table = document.createElement('table')
  const tableBody = document.createElement('tbody')

  for (let i = 0; i < 8; i++) {
    const tableRow = document.createElement('tr')

    for (let j = 0; j < 8; j++) {
      const tableCell = document.createElement('td')
      tableCell.className = 'tableCell'

      const cellText = document.createTextNode('')
      tableCell.appendChild(cellText)
      tableRow.appendChild(tableCell)
    }

    tableBody.appendChild(tableRow)
  }

  table.appendChild(tableBody)

  document.body.appendChild(table)

  const tableCells = document.getElementsByTagName('td')
  const tableArr = [...tableCells]

  tableArr.map((x, i) => (x.id = i))

  for (let z = 0; z < tableArr.length; z++) {
    let cell = tableArr[z]
    let checkForInt = z / 2

    if (z >= 0 && z < 8 && Number.isInteger(checkForInt) === false) {
      cell.style.backgroundColor = 'saddlebrown'
    } else if (z >= 8 && z < 16 && Number.isInteger(checkForInt) === true) {
      cell.style.backgroundColor = 'saddlebrown'
    } else if (z >= 16 && z < 24 && Number.isInteger(checkForInt) === false) {
      cell.style.backgroundColor = 'saddlebrown'
    } else if (z >= 24 && z < 32 && Number.isInteger(checkForInt) === true) {
      cell.style.backgroundColor = 'saddlebrown'
    } else if (z >= 32 && z < 40 && Number.isInteger(checkForInt) === false) {
      cell.style.backgroundColor = 'saddlebrown'
    } else if (z >= 40 && z < 48 && Number.isInteger(checkForInt) === true) {
      cell.style.backgroundColor = 'saddlebrown'
    } else if (z >= 48 && z < 56 && Number.isInteger(checkForInt) === false) {
      cell.style.backgroundColor = 'saddlebrown'
    } else if (z >= 56 && z < 64 && Number.isInteger(checkForInt) === true) {
      cell.style.backgroundColor = 'saddlebrown'
    } else {
      cell.style.backgroundColor = 'bisque'
    }
  }
}

boardInit()
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

function whiteKing() {
  let img = document.createElement('img')
  img.src = './images/wking.png'
  img.alt = 'king piece'
  img.id = 'wking'
  img.className = 'chessPiece'

  tableArr[60].appendChild(img)
}

function whiteQueen() {
  let img = document.createElement('img')
  img.src = './images/wqueen.png'
  img.alt = 'queen piece'
  img.id = 'wqueen'
  img.className = 'chessPiece'

  tableArr[59].appendChild(img)
}

function whiteRook() {
  let img = document.createElement('img')
  img.src = './images/wrook.png'
  img.alt = 'rook piece'
  img.id = 'wrook'
  img.className = 'chessPiece'

  tableArr[56].appendChild(img.cloneNode(true))
  tableArr[63].appendChild(img.cloneNode(true))
}

function whiteKnight() {
  let img = document.createElement('img')
  img.src = './images/wknight.png'
  img.alt = 'knight piece'
  img.id = 'wknight'
  img.className = 'chessPiece'

  tableArr[57].appendChild(img.cloneNode(true))
  tableArr[62].appendChild(img.cloneNode(true))
}

function whiteBishop() {
  let img = document.createElement('img')
  img.src = './images/wbishop.png'
  img.alt = 'bishop piece'
  img.id = 'wbishop'
  img.className = 'chessPiece'

  tableArr[58].appendChild(img.cloneNode(true))
  tableArr[61].appendChild(img.cloneNode(true))
}

function blackPawn() {
  let img = document.createElement('img')
  img.src = './images/bpawn.png'
  img.alt = 'pawn piece'
  img.id = 'bpawn'
  img.className = 'chessPiece'

  tableArr.map((x, i) =>
    i > 7 && i < 16 ? x.appendChild(img.cloneNode(true)) : null
  )
}

function blackKing() {
  let img = document.createElement('img')
  img.src = './images/bking.png'
  img.alt = 'king piece'
  img.id = 'bking'
  img.className = 'chessPiece'

  tableArr[4].appendChild(img)
}

function blackQueen() {
  let img = document.createElement('img')
  img.src = './images/bqueen.png'
  img.alt = 'queen piece'
  img.id = 'bqueen'
  img.className = 'chessPiece'

  tableArr[3].appendChild(img)
}

function blackRook() {
  let img = document.createElement('img')
  img.src = './images/brook.png'
  img.alt = 'rook piece'
  img.id = 'brook'
  img.className = 'chessPiece'

  tableArr[0].appendChild(img.cloneNode(true))
  tableArr[7].appendChild(img.cloneNode(true))
}

function blackKnight() {
  let img = document.createElement('img')
  img.src = './images/bknight.png'
  img.alt = 'knight piece'
  img.id = 'bknight'
  img.className = 'chessPiece'

  tableArr[1].appendChild(img.cloneNode(true))
  tableArr[6].appendChild(img.cloneNode(true))
}

function blackBishop() {
  let img = document.createElement('img')
  img.src = './images/bbishop.png'
  img.alt = 'bishop piece'
  img.id = 'bbishop'
  img.className = 'chessPiece'

  tableArr[2].appendChild(img.cloneNode(true))
  tableArr[5].appendChild(img.cloneNode(true))
}

whitePawn()
whiteKing()
whiteQueen()
whiteRook()
whiteKnight()
whiteBishop()

blackPawn()
blackKing()
blackQueen()
blackRook()
blackKnight()
blackBishop()

pawn()

const occupiedCells = tableArr.filter((x) => x.innerHTML)
