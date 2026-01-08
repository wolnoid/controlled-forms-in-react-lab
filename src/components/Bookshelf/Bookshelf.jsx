import { useState } from 'react';

const App = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  function handleInputChange(event) {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault()
    setBooks([ ...books, newBook ])
    setNewBook({ title: '', author: '' })
  }

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input
                id="title"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
                /> <br></br>
            <label htmlFor="author">Author: </label>
            <input
                id="author"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
                /> <br></br>
            <button type="submit">Add Book</button>
          </form>
        </div>
        <div className="bookCardsDiv">{books.map(book => (
            <div className="bookCard">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
            </div>
        ))}</div>
      </div>
    </>
  );
};

export default App;