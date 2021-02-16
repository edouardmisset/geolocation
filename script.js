const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  (data) => {
    // console.log(data.coords.longitude);
    // console.log(data.coords.latitude);
    // console.log(data.coords.speed);
    // console.log(data.coords.heading);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    console.error(err);
  }
);
