let weather = {
  apikey: "11fc344642216628e0a92f6ee6bc8314",

  // getForcast(city) {
  //   fetch(
  //     "https://api.openweathermap.org/data/2.5/forecast?q=" +
  //       city +
  //       "&units=metric&appid=" +
  //       this.apikey
  //   )
  //     .then((response) => response.json())
  //     .then((data) => this.displayForcast(data))
  //     .catch((error) => console.log(error));
  // },

  getWeather(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      .catch((error) => console.log(error));
  },

  displayWeather(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { all } = data.clouds;
    const { dt } = data;

    let milliseconds = dt * 1000;

    let date = new Date(milliseconds);
    console.log(dt);
    console.log(date.toLocaleString());
    console.log(date);
    console.log(date.toDateString());

    document.getElementById("time").innerHTML = date.toDateString();
    document.getElementById("city").innerHTML = name;
    document.getElementById("temp").innerHTML = Math.floor(temp) + "&#176;" + "C";
    document.getElementById("icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.getElementById("desc").innerHTML = description;
    document.getElementById("cloud").innerHTML = Math.floor(all) + "%";
    document.getElementById("humidity").innerHTML = Math.floor(humidity) + "%";
    document.getElementById("speed").innerHTML = speed + "km/hr";

    document.querySelector(".weather-container").style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  // displayForcast(data) {
  //   const { icon, description } = data.list[0].weather[0];
  //   const { temp } = data.list[0].main;
  //   const { dt } = data.list[0];

  //   let milliseconds = dt * 1000;

  //   let date = new Date(milliseconds);

  //   document.querySelector(".first .time").innerHTML = date.toDateString();
  //   document.querySelector(".first .temp").innerHTML = Math.floor(temp) + "&#176;" + "C";
  //   document.querySelector(".first #icon").src =
  //     "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  //   document.querySelector(".first .description").innerHTML = description;
  // },

  search() {
    const searchBar = document.getElementById("search-bar").value;
    this.getWeather(searchBar);
    this.getForcast(searchBar);
  },
};

window.addEventListener("load", () => {
  weather.getWeather("London");
  weather.getForcast("London");
});

const searchBtn = document.getElementById("search");
const searchBar = document.getElementById("search-bar");
const destination = document.querySelectorAll(".location");

destination.forEach((location) => {
  location.addEventListener("click", (e) => {
    // console.log(e.target.innerHTML);
    weather.getWeather(e.target.innerHTML);
  });
});

searchBtn.addEventListener("click", () => {
  weather.search();
});
