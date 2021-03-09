let clock = document.querySelector(".clock");

const updateTime = () => {
  let [hour, minute, second, ampm] = new Date()
    .toLocaleTimeString("en-AU")
    .split(/:| /);
  clock.innerText = `${hour}:${minute}:${second} ${ampm}`;
};

setInterval(updateTime, 1000);
