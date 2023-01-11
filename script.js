let day = document.getElementById("day")
let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")
let futureDay = new Date(`Tues Feb 28 2023 23:06:44`)

let timer = () => {
  setInterval(() => {
    let today = new Date()
    let differ = futureDay - today
    let differenceDay = Math.floor(differ / 8.64e+7)
    let differenceHour = Math.floor(differ / 3.6e+6)
    let differenceMinute = Math.floor(differ / 60000)
    let differenceSecond = Math.floor(differ / 1000)
    if (differenceSecond < 0) {
      // console.log(0) 
      day.value = 0
      minute.value = 0
      hour.value = 0
      second.value = 0

    }
    else {
      day.value = differenceDay
      hour.value = differenceHour
      minute.value = differenceMinute
      second.value = differenceSecond
    }
  }, 1000)

}
// timer()
setInterval(() => {
  timer()
}, 1000)
