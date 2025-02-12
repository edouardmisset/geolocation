const arrow = document.querySelector(".arrow")
const speedElement = document.querySelector(".speed-value")
const footer = document.querySelector("footer")

navigator.geolocation.watchPosition(
  (data) => {

    const { speed, altitude, heading } = data.coords

    speedElement.textContent = speed?.toFixed(2)
    arrow.style.transform = `rotate(${heading}deg)`
    footer.textContent = altitude ? `${altitude} meters above sea level` : ''
  },
  console.error
)
