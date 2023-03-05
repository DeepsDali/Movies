console.log("Checking");
let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
    link: "./images/darjeeling.jpg",
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
    link: "./images/royal.jpg",
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
    link: "./images/fox.jpg",
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    link: "./images/budapest.jpg",
  },
};
let movies = Object.entries(movieData);
console.log(movies[0][0]);
console.log(movies);
accordianContainer = document.querySelector("#accordian_container");
formContainer = document.querySelector("#form_container");

// Show Accordian function
let showAccordian = () => {
  console.log("show accordian");

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
    btn.innerHTML = `${movie[1].year} : ${movie[0]}`;
    poster.src = movie[1].link;
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
    accorDiv.appendChild(btn);
    accorDiv.appendChild(movie_info);
    accordianContainer.appendChild(accorDiv);
    // Toggle to show / hide movie info
    btn.addEventListener("click", () => {
      console.log("Clicked");
      movie_info.classList.toggle("active");
    });
  });
};
showAccordian();

// Add Show Movie Form Function
let showMovieForm = () => {
  let formDiv = document.createElement("div");
  formDiv.classList.add("form_Div");
  let para = document.createElement("p");
  para.innerHTML = `This is a form`;
  formDiv.appendChild(para);
  formContainer.appendChild(formDiv);
};

let acc = document.querySelector(".accordian");
let form = document.querySelector(".form_Div");
let addMov = document.querySelector("#add_mov");
let homeBtn = document.querySelector("#home");

// Add initialization function

let init = () => {
  acc = document.querySelector(".accordian");
  form = document.querySelector(".form_Div");
};

// Add Movie button function
addMov.addEventListener("click", () => {
  console.log("clicked add mov");
  init();
  acc.remove();
  showMovieForm();
});
// Add home button function
homeBtn.addEventListener("click", () => {
  console.log("clicked add watch");
  init();
  formContainer.removeChild(form);
  showAccordian();
});
