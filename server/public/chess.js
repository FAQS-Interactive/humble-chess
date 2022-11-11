function boardInit() {
  const table = document.createElement('table')
  const tableBody = document.createElement('tbody')

  for (let i = 0; i < 8; i++) {
    const tableRow = document.createElement('tr')

    for (let j = 0; j < 8; j++) {
      const tableCell = document.createElement('td')
      tableCell.id = 'tableCell'

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
  for (let z = 0; z < tableArr.length; z++) {
    console.log('cells: ', tableArr[z])
    let cell = tableArr[z]
    let checkForInt = z / 2
    // console.log(checkForInt)

    if (z >= 0 && z < 8 && Number.isInteger(checkForInt) === false) {
      // console.log('hit')
      cell.className = 'black'
    } else if (z >= 8 && z < 16 && Number.isInteger(checkForInt) === true) {
      cell.className = 'black'
    } else if (z >= 16 && z < 24 && Number.isInteger(checkForInt) === false) {
      cell.className = 'black'
    } else if (z >= 24 && z < 32 && Number.isInteger(checkForInt) === true) {
      cell.className = 'black'
    } else if (z >= 32 && z < 40 && Number.isInteger(checkForInt) === false) {
      cell.className = 'black'
    } else if (z >= 40 && z < 48 && Number.isInteger(checkForInt) === true) {
      cell.className = 'black'
    } else if (z >= 48 && z < 56 && Number.isInteger(checkForInt) === false) {
      cell.className = 'black'
    } else if (z >= 56 && z < 64 && Number.isInteger(checkForInt) === true) {
      cell.className = 'black'
    }
  }
}

boardInit()

const tableCells = document.getElementsByTagName('td')
const tableArr = [...tableCells]
// console.log(tableArr)

function pawn() {
  let img = document.createElement('img')
  img.src = './images/pawn.png'
  img.alt = 'pawn piece'
  img.id = 'pawn'

  tableArr.map((x, i) =>
    i > 47 && i < 56 ? x.appendChild(img.cloneNode(true)) : null
  )

  // console.log(tableArr)
}

function king() {
  let img = document.createElement('img')
  img.src = './images/king.png'
  img.alt = 'king piece'
  img.id = 'king'

  tableArr[60].appendChild(img)
}

function queen() {
  let img = document.createElement('img')
  img.src = './images/queen.png'
  img.alt = 'queen piece'
  img.id = 'queen'

  tableArr[59].appendChild(img)
}

function rook() {
  let img = document.createElement('img')
  img.src = './images/rook.png'
  img.alt = 'rook piece'
  img.id = 'rook'

  tableArr[56].appendChild(img.cloneNode(true))
  tableArr[63].appendChild(img.cloneNode(true))
}

function knight() {
  let img = document.createElement('img')
  img.src = './images/knight.png'
  img.alt = 'knight piece'
  img.id = 'knight'

  tableArr[57].appendChild(img.cloneNode(true))
  tableArr[62].appendChild(img.cloneNode(true))
}

function bishop() {
  let img = document.createElement('img')
  img.src = './images/bishop.png'
  img.alt = 'bishop piece'
  img.id = 'bishop'

  tableArr[58].appendChild(img.cloneNode(true))
  tableArr[61].appendChild(img.cloneNode(true))
}
pawn()
king()
queen()
rook()
knight()
bishop()
const occupiedCells = tableArr.filter((x) => x.innerHTML)
// console.log(occupiedCells)
