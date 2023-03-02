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
const movie_list = document.querySelector(".btn_list");

movies.forEach((movie) => {
  let li = document.createElement("li");
  li.classList.add("btn_title");
  let movie_info = document.createElement("div");
  movie_info.classList.add("mov");
  let poster = document.createElement("img");
  poster.classList.add("poster_img");
  li.innerHTML = `${movie[1].year} : ${movie[0]}`;
  poster.src = movie[1].link;
  movie_info.appendChild(poster);
  li.appendChild(movie_info);
  movie_list.appendChild(li);
});
