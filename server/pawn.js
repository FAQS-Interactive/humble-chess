export default function pawn() {
  const wPawn = document.getElementById('wpawn')
  const currentCell = wPawn.parentElement
  const allCells = document.getElementsByTagName('td')
  const allCellsArr = [...allCells]
  let clickedPawn = { active: false, hasMoved: false, element: wPawn }

  wPawn.onclick = handleClick
  wPawn.onmouseover = handleHover

  function handleClick() {
    currentCell.style.border = '2px solid red'
    clickedPawn.active = true

    if (clickedPawn.active === true && clickedPawn.hasMoved === false) {
      const index = allCellsArr.find((x) => x.id === currentCell.id)
      const freeCellOne = allCellsArr[index.id - 8]
      const freeCellTwo = allCellsArr[index.id - 16]
      freeCellOne.style.border = '2px solid green'
      freeCellTwo.style.border = '2px solid green'

      freeCellOne.onclick = handleMove
      freeCellTwo.onclick = handleMove
    }
  }

  function handleHover() {
    currentCell.style.backgroundColor = 'pink'
  }

  function handleMove() {
    const index = allCellsArr.find((x) => x.id === currentCell.id)
    const freeCellOne = allCellsArr[index.id - 8]
    const freeCellTwo = allCellsArr[index.id - 16]

    // if
    // currentCell.innerHTML = null
    // freeCellOne.appendChild(wPawn)

    clickedPawn.active = false
    clickedPawn.hasMoved = true
  }
}
