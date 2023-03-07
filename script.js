console.log("Checking");
let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
    link: "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_2440-740741.jpg?v=1611688443 ",
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
    link: "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/royal_tenenbaums_xlg-868522_4c1cffbe-3538-4681-bc5e-7c6f71ed6c07-221962.jpg?v=1663173396",
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
    link: "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/EEC8D35A-C900-4EF1-B476-C9F876492747-328288_1024x1024@2x.jpg?v=1611687955",
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    link: "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/Grand_Budapest_Hotel_Style_B-284653_1200x1200.jpg?v=1611688501",
  },
};
let movies = Object.entries(movieData);
console.log(movies[0][0]);
console.log(movies);
let accordianContainer = document.querySelector("#accordian_container");
let formContainer = document.querySelector("#form_container");
let watchPosters = document.querySelector("#watchlist_posters");

// Show Accordian function
let showAccordian = () => {
  console.log("show accordian");
  let movies = Object.entries(movieData);
  let accorDiv = document.createElement("div");

  accorDiv.classList.add("accordian");

  movies.forEach((movie) => {
    // Create Button
    let btn = document.createElement("button");
    btn.classList.add("btn_title");
    // Create movie-info div
    let movie_info = document.createElement("div");
    movie_info.classList.add("mov");
    // Create poster div
    let posterDiv = document.createElement("div");
    posterDiv.classList.add("poster_Div");
    let poster = document.createElement("img");
    poster.classList.add("poster_img");
    let watchlistPoster = document.createElement("img");
    watchlistPoster.classList.add("watchlistPoster_img");
    // Create movie-details div
    let movieDetailsDiv = document.createElement("div");
    movieDetailsDiv.classList.add("movie_details_Div");
    let plot = document.createElement("p");
    let cast = document.createElement("p");
    let runtime = document.createElement("p");
    let rating = document.createElement("p");
    let watchBtn = document.createElement("button");
    watchBtn.classList.add("nav_btn");
    // Add content to elements
    btn.innerHTML = `${movie[1].year} : ${movie[0]} `;

    poster.src = movie[1].link;
    watchlistPoster.src = movie[1].link;
    plot.innerHTML = `Plot: ${movie[1].plot}`;
    cast.innerHTML = `Cast: ${movie[1].cast}`;
    runtime.innerHTML = `Runtime: ${movie[1].runtime}`;
    rating.innerHTML = `Rating: ${movie[1].rating}`;
    watchBtn.innerHTML = `Add to Watchlist`;
    // Append elements
    posterDiv.appendChild(poster);
    movieDetailsDiv.appendChild(plot);
    movieDetailsDiv.appendChild(cast);
    movieDetailsDiv.appendChild(runtime);
    movieDetailsDiv.appendChild(rating);
    movieDetailsDiv.appendChild(watchBtn);
    movie_info.appendChild(posterDiv);
    movie_info.appendChild(movieDetailsDiv);
    let span = document.createElement("span");
    span.innerHTML = `<i class="fa fa-angle-down"></i>`;
    span.classList.add("arrow");
    btn.appendChild(span);
    accorDiv.appendChild(btn);
    accorDiv.appendChild(movie_info);
    accordianContainer.appendChild(accorDiv);

    // Toggle to show / hide movie info
    btn.addEventListener("click", () => {
      console.log("Clicked");
      movie_info.classList.toggle("active");

      if (span.innerHTML === `<i class="fa fa-angle-down"></i>`) {
        span.innerHTML = `<i class="fa fa-angle-up"></i>`;
      } else {
        span.innerHTML = `<i class="fa fa-angle-down"></i>`;
      }
    });
    watchBtn.addEventListener("click", () => {
      console.log("Clicked add to watchlist btn");
      watchPosters.appendChild(watchlistPoster);
    });
  });
};
showAccordian();

let formDiv = document.querySelector(".form_Div");
let acc = document.querySelector(".accordian");
let form = document.querySelector(".form_Div");
let addMov = document.querySelector("#add_mov");
let homeBtn = document.querySelector("#home");
let myWatchlist = document.querySelector("#my_watchlist");
// Add initialization function
let init = () => {
  acc = document.querySelector(".accordian");
  form = document.querySelector(".form_Div");
  watchPosters = document.querySelector("#watchlist_posters");
};

// Add Movie button function
addMov.addEventListener("click", () => {
  console.log("clicked add mov");
  init();
  acc.style.display = "none";
  form.style.display = "block";
  watchPosters.style.display = "none";
});
// Add home button function
homeBtn.addEventListener("click", () => {
  console.log("clicked home");
  init();
  acc.style.display = "block";
  form.style.display = "none";
  watchPosters.style.display = "none";
});
// Add watchlist button function
myWatchlist.addEventListener("click", (e) => {
  console.log("clicked my watchlist");
  init();
  watchPosters.style.display = "flex";
  form.style.display = "none";
  acc.style.display = "none";
});

// Add movie

const movieForm = document.getElementById("movie_form");
const submitBtn = document.querySelector("#submit_btn");
const movieTitle = document.getElementById("movie_title");
const plot = document.getElementById("plot");
const cast = document.getElementById("cast");
const runtime = document.getElementById("runtime");
const year = document.getElementById("year");
const rating = document.getElementById("rating");
const link = document.getElementById("link");

class Movie {
  constructor(plot, cast, runtime, rating, year, link) {
    this.plot = plot;
    this.cast = cast;
    this.runtime = runtime;
    this.rating = rating;
    this.year = year;
    this.link = link;
  }
}
// Add submit button function
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  init();
  console.log("Clicked submit");
  let objName = movieTitle.value;
  let movie = new Movie(
    plot.value,
    cast.value,
    runtime.value,
    rating.value,
    year.value,
    link.value
  );
  console.log(movie);
  movieData[objName] = movie;
  acc.remove();
  showAccordian();
  movieForm.reset();
  form.style.display = "none";
});
