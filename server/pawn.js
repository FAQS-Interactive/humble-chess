export default function pawn() {
  setTimeout(() => {
    const wPawn = document.getElementById('wpawn')
    wPawn.onclick = handleClick
    wPawn.onmouseover = handleHover
  }, 1500)

  function handleClick() {
    const wPawn = document.getElementById('wpawn')
    const currentCell = wPawn.parentElement
    currentCell.style.border = '2px solid red'
    let clickedPawn = { active: false, hasMoved: false, element: wPawn }

    clickedPawn.active = true

    if (clickedPawn.active === true && clickedPawn.hasMoved === false) {
      const test = document.getElementsByTagName('td')
      const testArr = [...test]
      const index = testArr.find((x) => x.id === currentCell.id)
      const freeCellOne = testArr[index.id - 8]
      const freeCellTwo = testArr[index.id - 16]
      freeCellOne.style.border = '2px solid green'
      freeCellTwo.style.border = '2px solid green'

      freeCellOne.onclick = handleMove
      freeCellTwo.onclick = handleMove
    }
  }
  function handleHover() {
    const wPawn = document.getElementById('wpawn')
    const currentCell = wPawn.parentElement
    currentCell.style.backgroundColor = 'pink'
  }

  function handleMove() {
    const wPawn = document.getElementById('wpawn')
    const currentCell = wPawn.parentElement

    const test = document.getElementsByTagName('td')
    const testArr = [...test]
    const index = testArr.find((x) => x.id === currentCell.id)
    const freeCellOne = testArr[index.id - 8]
    const freeCellTwo = testArr[index.id - 16]

    currentCell.innerHTML = null
    freeCellOne.appendChild(wPawn)

    clickedPawn.active = false
    clickedPawn.hasMoved = true
  }
}
