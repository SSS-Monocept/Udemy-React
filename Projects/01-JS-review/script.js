const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*

// ! Without Destructuring

const book = getBook(3); //object
// const title = book.title;
// const author = book.author;
// console.log(title, author);
// It takes a lot of manual effort like this

// ! Destructuring : 2 Types --> Obeject Destructuring & Array Destructuring

// ! Object Destructutring to read data form book
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  //   book;
  // console.log(author, title);

  //Its important to give exact name to variable as of object properties.
  //i.e. const { titles_1, author_1 } = book; will not work

  // ! Destructutring with Arrays:
  // Does not relay on the property name of the objects
  //Rather : Relays on the order of elements in the array.

  console.log(genres);
//Without Array Destructuring

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

//With Array Destructutring
const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre);

// ! Rest Operator ... : It creates an array of all the values that have not been previously destrutured .i.e
//...GenreN : Makes any array of elements from Genre3 to GenreN; Bcoz Genre1 and Genre2 have already been Destructured.
const [Genre1, Genre2, ...GenreN] = genres;
console.log(Genre1, Genre2, GenreN);
// ! We can only put rest operator at end of destructing operation
//Therfore console.log(Genre1, ...GenreN, Genre2); will give error

// ! Spread Operator also have ... structure, and more commonly used
// Spread operator creates a new array, and takes all value from the orignal array and spreeds it intto the new array, and then concatenate wiht new elements
const newGenre = [...genres, "epic-fantasy"];
newGenre;

// ! Spread Operator with Objects
console.log("Using Spread Operator with Objects");
book;
const updatedBook = { book, moviePublicationDate: "2001-12-19" };
updatedBook;
//Without using ...book; updatedBook created { book{content}, moviePublicationDate: "2001-12-19"}
//But we just want to add moviePublicationDate: "2001-12-19" within book object
//book{content, moviePublicationDate: "2001-12-19"}
const newUpdatedBook = {
  ...book,
  //Adding a new property
  moviePublicationDate: "2001-12-19",
  //Overwritting the existing pages property
  pages: 6969,
};
newUpdatedBook;
//We are apredaing out all the properties of book obejct in newUpdatedBook object property, along with adding new property.
//Therefore, spread properties should alwasy be wriiten first to avoid overwritting

//! TEMPLATE LITERALS
//Allows to create strings which contains JS variables or contains any JS expression inside of a string
const summary = `${title} is a book !`;
summary;

function getTotalReviewCount(book) {
  //Without Optional Chaining, is something is undefined then we will be doing undefined.reviewsCount;
  //const goodRead = book.reviews.goodRead.reviewsCount;
  //const librarything = book.reviews.librarything.reviewsCount;
  //Using Optional Chaining :  By adding ? before . operator
  const goodRead = book.reviews.goodRead?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodRead + librarything;
}

console.log(getTotalReviewCount(book));

*/

//Playing with arrays

//Map Method on Array
//Used to loop over an array and return a array of same lenght with some operations applied on the ekements of the array

const books = getBooks();

const demoMap = [1, 2, 3, 4, 5].map((e) => e * 2);
demoMap;
books;

const titles = books.map((book) => book.title);
titles;

// const essentialData = books.map(book => {
//   return {
//     title: book.title,
//     author: book.author,
//   };
// });

//similat but without return statemant
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentialData;
