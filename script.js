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
const acc = document.querySelector("#accordian");

movies.forEach((movie) => {
  // Create elements and classlist
  // Button
  let btn = document.createElement("button");
  btn.classList.add("btn_title");
  // movie-info div
  let movie_info = document.createElement("div");
  movie_info.classList.add("mov");
  // poster div
  let posterDiv = document.createElement("div");
  posterDiv.classList.add("poster_Div");
  let poster = document.createElement("img");
  poster.classList.add("poster_img");
  // movie-details div
  let movieDetailsDiv = document.createElement("div");
  movieDetailsDiv.classList.add("movie_details_Div");
  let plot = document.createElement("p");
  let cast = document.createElement("p");
  let runtime = document.createElement("p");
  let rating = document.createElement("p");

  // Add content to elements
  btn.innerHTML = `${movie[1].year} : ${movie[0]}`;
  poster.src = movie[1].link;
  plot.innerHTML = `Plot: ${movie[1].plot}`;
  cast.innerHTML = `Cast: ${movie[1].cast}`;
  runtime.innerHTML = `Runtime: ${movie[1].runtime}`;
  rating.innerHTML = `Rating: ${movie[1].rating}`;

  // Append elements
  posterDiv.appendChild(poster);
  movieDetailsDiv.appendChild(plot);
  movieDetailsDiv.appendChild(cast);
  movieDetailsDiv.appendChild(runtime);
  movieDetailsDiv.appendChild(rating);
  movie_info.appendChild(posterDiv);
  movie_info.appendChild(movieDetailsDiv);

  acc.appendChild(btn);
  acc.appendChild(movie_info);

  // Toggle to show / hide movie info
  btn.addEventListener("click", () => {
    console.log("Clicked");
    movie_info.classList.toggle("active");
  });
});
