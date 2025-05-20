const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

//name, authors, released(year), numberOfPages
const createNewElement = (item) => {
  const name = item.name;
  const author = item.authors[0];
  const date = new Date(item.released);
  const year = date.getFullYear();
  const numPages = item.numberOfPages;

  const book = document.createElement("div");
  const bookBody = document.createElement("div");
  // TODO: check accessibility issue for skipped headings
  const bookTitle = document.createElement("h5");
  const bookAuthor = document.createElement("p");
  const bookYear = document.createElement("p");
  const bookPages = document.createElement("p");

  book.setAttribute("class", "book mb-5");
  // TODO: remove inline css
  book.setAttribute("style", "width: 18rem;");
  bookBody.setAttribute("class", "book-body");
  bookTitle.setAttribute("class", "book-title");
  bookAuthor.setAttribute("class", "book-text");
  bookYear.setAttribute("class", "book-text");
  bookPages.setAttribute("class", "book-text");

  bookTitle.textContent = name;
  bookAuthor.textContent = "by " + author;
  bookYear.textContent = "released " + year;
  bookPages.textContent = numPages + " pages";

  console.log("name: " + bookTitle.textContent + "(" + name + ")");

  bookBody.append(bookTitle);
  bookBody.append(bookAuthor);
  bookBody.append(bookYear);
  bookBody.append(bookPages);
  book.append(bookBody);

  return book;
};

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.group("Fetch All Books - Promise Implementation");
      console.log("Data", data); // array of 10 objects
      data.forEach((item) => {
        // console.log(item.name);
        const date = new Date(item.released);
        console.log(
          `${item.name} - ${item.authors[0]} - ${date.getFullYear()} - ${
            item.numberOfPages
          } pages`
        );
        const element = createNewElement(item);
        app.append(element);
      });
      console.groupEnd();
    })
    .catch((error) => console.error(error))
    .finally(() => {
      console.log("Fetch All Books - Promise Implementation - finally block");
      // remove the loading gif
      const loader = document.querySelector("#loading");
      loader.setAttribute("class", "d-none");
    });
};

fetchData(url);
