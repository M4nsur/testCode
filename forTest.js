const arr = [
    [
      82, 59, -69,  5, 40,
      -13, -68, 27, -80, 30
    ],
    [
      39, 28,  7, -73, 72,
      85,  -6, -54, 54, 68
    ],
    [
      56, -24, 90, 50, -36,
      57, -80, 66, -15, 70
    ],
    [
      12, -34, -3, 14, -23,
      28, 99, -75, -47, 59
    ],
    [
      17, 19, -59, 17, 89,
      57, 41, 76, -93, 29
    ],
    [
      59, -62, 25, 11, -51,
      -41, 21, -19,  2, 94
    ],
    [
      76, 58, 73,  5, 31,
      97,  7, -38, 80, 10
    ],
    [
      -61, 54, 92,  -8, 85,
      22, -31, 78, 37, 50
    ],
    [
      -70,  3, 1, 22, 62,
      88, 33, 4, -99, 70
    ],
    [
      97, -15, 21, 92, 64,
      85, -29, 59, -27,  0
    ]
  ]

function findPositiveMinNum(arg){
  let cloneArr = JSON.parse(JSON.stringify(arg))
  cloneArr.forEach((arr, idx) => {
    cloneArr[idx] = arr.filter(num => 
      num >= 0)
  })
  const arrMinNumbers = findMinNumb(cloneArr)
  getArrToConsole(arrMinNumbers, "Наименьшее положительное число в массиве")
}

function addToStart(arg) {
  const arrMinNumbers = findMinNumb(arg)
  let primalValue = null
  arrMinNumbers.forEach(el => {
    if(el < primalValue) {
      primalValue = el
    }
  })
  const indexMin = arrMinNumbers.indexOf(primalValue)
  arg[indexMin].push("  тут метка: *")
  getArrToConsole(arg, "Массив")
}

function findMinNumb(arg) {
  const list = []
  arg.forEach((el) => {
    list.push(Math.min(...el))
  })
  return list 
}

function getArrToConsole(arg, payload){
  arg.forEach((el, idx) => {
    console.log(`${payload} №${idx + 1}: ${el}`)
  })
} 

function checkReplace(arg) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arg[i][j] > 0) {
        if (j > 1 && arr[i][j-1] > 0 && arr[i][j-2] > 0) {
          arg[i][j] = -arg[i][j];
          count++;
        } else if (i > 1 && arg[i-1][j] > 0 && arg[i-2][j] > 0) {
          arg[i][j] = -arg[i][j];
          count++;
        }
      } else if (arg[i][j] < 0) {
        if (j > 1 && arg[i][j-1] < 0 && arg[i][j-2] < 0) {
          arg[i][j] = -arg[i][j];
          count++;
        } else if (i > 1 && arg[i-1][j] < 0 && arg[i-2][j] < 0) {
          arg[i][j] = -arg[i][j];
          count++;
        }
      }
    }
  }
  console.log(`Необходимо заменить ${count}`)
}
addToStart(arr) // - Пометить строку с минимальным числом - звездочкой
findPositiveMinNum(arr) // В каждой строке вывести наименьшее положительное число
checkReplace(arr) // В каждой строке написать какое минимальное кол-во чисел 