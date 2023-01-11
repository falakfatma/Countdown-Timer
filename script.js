let day = document.getElementById("day")
let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")
let futureDay = new Date(`Wed Feb 11 2023 23:51:07`)
  
let timer = () => {
setInterval(()=>{
let today = new Date()
  let differ = futureDay - today
  let differenceDay = Math.floor(differ / 8.64e+7)
  let differenceHour = Math.floor(differ / 3.6e+6)
  let differenceMinute = Math.floor(differ / 60000)
  let differenceSecond = Math.floor(differ / 1000)
  // if(){
    
  // }
  day.value = differenceDay
  hour.value = differenceHour
  minute.value = differenceMinute
  second.value = differenceSecond
},1000)
  
}
// timer()
setInterval(()=>{
timer()
},1000)
