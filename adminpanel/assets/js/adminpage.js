onValue(booksDataRef, (snapshot) => {
    const bookData = snapshot.val();
    const keys = Object.keys(bookData);

    keys.map((key, index) => {
        const bookName = bookData[key].name;
        const bookDescription = bookData[key].description.slice(0, 40) + "...";
        const bookCategory = bookData[key].type;
        const bookAuthor = bookData[key].author;
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${(index += 1)}</td>
          <td>${bookName}</td>
          <td>${bookDescription}</td>
          <td>${bookCategory}</td>
          <td>${bookAuthor}</td>
      `;
        booksTableBody.append(tr);
    });
});

const apiKey = "AIzaSyDLQJBjL-y_fWchHg9pg3QliuW53W4eIEc";
const searchBook = document.getElementById("search-book");
const bookForm = document.getElementById("bookForm");
const bookName = document.getElementById("book-name");
const bookAuthor = document.getElementById("author-name");
const bookImage = document.getElementById("book-image");
const bookDescription = document.getElementById("description");
const bookType = document.getElementById("book-type");
let bookID;
let bookSaleInfo;
let bookPublishDate;

const booksAPI = {
    fillInputs: (e) => {
        e.preventDefault();
        fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${searchBook.value}&key=${apiKey}`
        )
            .then((response) => response.json())
            .then((data) => {
                const bookInfo = data.items;

                for (let i = 0; i < bookInfo.length; i++) {
                    bookName.value = bookInfo[i].volumeInfo.title;
                    bookAuthor.value = bookInfo[i].volumeInfo.authors;
                    bookImage.value =
                        bookInfo[i].volumeInfo.imageLinks.thumbnail;
                    bookDescription.value = bookInfo[i].volumeInfo.description;
                    bookType.value = bookInfo[i].volumeInfo.categories;
                    bookID = bookInfo[i].id;
                    bookSaleInfo = bookInfo[i].saleInfo.listPrice.amount;
                    bookPublishDate = bookInfo[i].volumeInfo.publishedDate;
                }
            });
    },

    sendData: (e) => {
        e.preventDefault();
        const bookData = {
            name: bookName.value,
            author: bookAuthor.value,
            description: bookDescription.value,
            image: bookImage.value,
            type: bookType.value,
            id: bookID,
            saleInfo: bookSaleInfo,
            publishedDate: bookPublishDate,
        };
        console.log(bookData.description);

        const newBookData = push(child(ref(db), `/bookData`)).key;

        set(ref(db, `/bookData/${newBookData}`), bookData);
    },
};
