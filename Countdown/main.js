const day = document.getElementById('days')
const hour = document.getElementById('hours')
const minute = document.getElementById('minutes')
const second = document.getElementById('seconds')

function countdown(date) {
  let days, hours, minutes, seconds

  const current_date = new Date()
  let total = (date - Date.parse(current_date)) / 1000

  setInterval(function () {
    days = Math.floor(total / 3600 / 24)
    hours = Math.floor(total / 3600) % 24
    minutes = Math.floor(total / 60) % 60
    seconds = Math.floor(total) % 60
    console.log(`${days} : ${hours} : ${minutes} : ${seconds}`)

    day.innerHTML = `${days}`
    hour.innerHTML = `${hours}`
    minute.innerHTML = `${minutes}`
    second.innerHTML = `${seconds}`

    total = total - 1
  }, 1000)
}

function formatTime(time) {
  return time < 10 ? ` 0${time}` : time
}

const target_date = new Date('6 Aug 2022')

countdown(Date.parse(target_date))
