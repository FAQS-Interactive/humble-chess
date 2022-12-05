export default function pawn() {
  const wPawn = document.getElementsByClassName('whitePawn')
  const wPawnArr = [...wPawn]

  wPawnArr.map((x, i) => {
    x.onclick = handleClick
    x.id = i
  })

  const allCells = document.getElementsByTagName('td')
  const allCellsArr = [...allCells]

  // wPawn.onmouseover = handleHover

  function handleClick(e) {
    e.preventDefault()

    let clickedPawn = { active: false, hasMoved: false, element: e.target }

    const currentCell = wPawnArr.find(
      (x) => x.id === clickedPawn.element.id
    ).parentElement

    const freeCellOne = allCellsArr[currentCell.id - 8]
    const freeCellTwo = allCellsArr[currentCell.id - 16]
    // console.log()

    // console.log(freeCellOne)
    // console.log(freeCellTwo)

    currentCell.style.border = '2px solid red'
    clickedPawn.active = true

    if (clickedPawn.hasMoved === true) {
      freeCellOne.style.border = '2px solid green'
      freeCellTwo.style.border = null
      freeCellOne.onclick = handleMoveOne
      console.log('hit')
    } else if (clickedPawn.hasMoved === false) {
      freeCellOne.style.border = '2px solid green'
      freeCellTwo.style.border = '2px solid green'

      freeCellOne.onclick = handleMoveOne
      freeCellTwo.onclick = handleMoveTwo
    }

    function handleMoveOne() {
      clickedPawn.active = false
      clickedPawn.hasMoved = true
      currentCell.innerHTML = null
      freeCellOne.appendChild(clickedPawn.element)

      currentCell.style.border = null
      freeCellOne.style.border = null
      freeCellTwo.style.border = null
      console.log('hit')

      // console.log(clickedPawn)
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
