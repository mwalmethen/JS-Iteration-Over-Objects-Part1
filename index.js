/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/

const person = {
    name: "Mohammed",
    age: 22, 
    city: "Kuwait"
};

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.email = "foxxiz123@gmail.com";

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
const object = { // object that contains name and age
    name: "Mohammed",
    age: 22,
}
function hasKey(object, key) { // function to check elements in an object 
    if (object.hasOwnProperty(key)) { /* Used hasOwnProperty which is a built in method 
        for  objects */
        return true; 
    } else {
        return false;
    }
}
console.log(hasKey(object, "city")); /* calling function and setting key = "city" which 
should return false for this case */ 

const movies = [   // list of movies 
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Crime",
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action",
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama",
    },
  ];
  /******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to print the titles of all the movies.
  ********************************/
function titleMovies(movies) {
    for(let i= 0; i < movies.length; i++) { // we used a for loop to iterate through the array 
        console.log(movies[i].title); // calling only the movies // title 
    }
}
titleMovies(movies) // calling function 


  /******************************
	Q5) Create a function that accepts an array of objects called 'movies' 
and iterates through it to count how many movies were released in the year 1994.
********************************/
function releasedMovies(movies) {
    let movies1994 = 0; // used a varialbe called movies1994 to store the number of movies relesed in 1994 
    for (let i = 0; i < movies.length; i++) { // for loop to iterate through the array
        if (movies[i].year === 1994) { // check every movie's year of publish and store it in movies1994
            movies1994++;
        }
    }
    console.log(`Movies that were relesed in 1994 were ${movies1994} `); // print the result
    return movies1994++; // returing the amount which should be 3 movies 

}
releasedMovies(movies); // calling function 


/******************************
	Q6) Write a function that updates the genre of the movie "The Dark Knight"
 to "Action/Drama" and returns the modified array of movies.
********************************/
function update(movies) {
    for (let i = 0; i < movies.length; i++) { // using for loop as before to iterate through the array 
        if (movies[i].title === "The Dark Knight") { // using if to tell the computer to find "The Dark Knight"
            movies[i].genre = "Action/Drama"; // then using objects metods that we learend to modify the genre
        }
    }
    return movies; // returing the entire object after doing the changes 
}
console.log(update(movies)); // calling fucntion 
