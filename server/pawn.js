export default function pawn() {
  const wPawn = document.getElementsByClassName('whitePawn')
  const wPawnArr = [...wPawn]

  wPawnArr.map((x, i) => {
    x.onclick = handleClick
    x.id = i
  })

  // wPawnArr.onclick = handleClick

  // const currentCell = wPawnArr.parentElement
  const allCells = document.getElementsByTagName('td')
  const allCellsArr = [...allCells]

  // wPawn.onmouseover = handleHover

  function handleClick(e) {
    e.preventDefault()

    let clickedPawn = { active: false, hasMoved: false, element: e.target }
    // console.log(e.target)
    const currentCell = wPawnArr.find(
      (x) => x.id === clickedPawn.element.id
    ).parentElement
    // console.log(currentCell)

    // const index = allCellsArr.find((x) => x.id === currentCell.id)
    const freeCellOne = allCellsArr[currentCell.id - 8]
    const freeCellTwo = allCellsArr[currentCell.id - 16]

    currentCell.style.border = '2px solid red'
    clickedPawn.active = true

    if (clickedPawn.active === true && clickedPawn.hasMoved === false) {
      freeCellOne.style.border = '2px solid green'
      freeCellTwo.style.border = '2px solid green'

      freeCellOne.onclick = handleMoveOne
      freeCellTwo.onclick = handleMoveTwo
    } else if (clickedPawn.active === true && clickedPawn.hasMoved === true) {
      freeCellOne.style.border = '2px solid green'
      freeCellOne.onclick = handleMoveOne
    }

    function handleMoveOne() {
      console.log(e.target)

      currentCell.innerHTML = null
      freeCellOne.appendChild(clickedPawn.element)

      currentCell.style.border = null
      freeCellOne.style.border = null
      freeCellTwo.style.border = null

      clickedPawn.active = false
      clickedPawn.hasMoved = true
    }
    function handleMoveTwo() {
      currentCell.innerHTML = null
      freeCellTwo.appendChild(clickedPawn.element)

      currentCell.style.border = null
      freeCellOne.style.border = null
      freeCellTwo.style.border = null

      clickedPawn.active = false
      clickedPawn.hasMoved = true
    }
  }

  // function handleHover() {
  //   currentCell.style.backgroundColor = 'pink'
  // }
}
