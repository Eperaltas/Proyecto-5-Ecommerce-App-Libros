import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';

function App() {
  const [books, setBooks] = useState([
    { id: 0, rating: 4, title: 'Harry Potter y el Cáliz de Fuego', price: '$899.99', image: 'libro01.jpg' },
    { id: 1, rating: 3, title: 'The Shining', price: '$550.99', image: 'libro02.jpg' },
    { id: 2, rating: 5, title: 'El Código Da Vinci', price: '$740.99', image: 'libro03.jpg' },
    { id: 3, rating: 5, title: 'El Principíto', price: '$390.99', image: 'libro04.jpg' },
    { id: 4, rating: 5, title: 'Sobrenatural', price: '$250.99', image: 'libro05.jpg' },
  ]);
  const [copyBooks, setCopyBooks] = useState([])

  const initBooks = () => {
    setCopyBooks([...books]);
  }

  const welcome = async () => {
    const resp = await axios.get('http://localhost:3001/v1');
    console.log(resp.data)
    }

  useEffect(() => {
    initBooks();
    welcome();
  }, []);

  const onSearch = (query) => {
    if (query === '') {
      setCopyBooks([...books]);
    } else {
      const temp = [...books];
      var res = [];
      temp.forEach(item => {
        if (item.price.toLowerCase().indexOf(query) > -1) {
          res.push(item);
        }
        if (item.title.toLowerCase().indexOf(query) > -1) {
          res.push(item);
        }
      });
      setCopyBooks([...res]);
    }
  }

  const addItem = (usuario) => {
    var temp = [...books];
    const id = temp[temp.length - 1].id + 1;
    usuario['id'] = id;
    temp.push(usuario);
    setBooks([...temp]);
    initBooks();
  }
  const remove = (id) => {
    var temp = [...books];
    const res = temp.filter(item => item.id != id);
    setBooks([...res]);
    initBooks();
  }

  const updateRating = (item) => {
    var temp = [...books];
    const index = temp.findIndex(x => x.id === item.id);
    temp[index].title = item.title;
    temp[index].price = item.price;
    temp[index].image = item.image;
    temp[index].rating = item.rating;
    setBooks([...temp]);
    initBooks();
  }
  return (
    <div className="app">
      <Menu title="E-Books" onsearch={onSearch} onadd={addItem} />
      <List className="list" items={copyBooks} onremove={remove} onupdaterating={updateRating} />
    </div>
  );
}
export default App;