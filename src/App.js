import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Characters from './Components/characters';
import Search from './Components/Search';
import './App.css';
import Favorites from './Components/Favorites';
import Footer from './Components/Footer';

function App() {
  const inicialState = [];
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState(inicialState);

  const handlerSearch = (value) => {
    setSearch(value);
  };

  const addFavorites = (character) => {
    // setFavorites(
    //   favorites.filter((fav) =>
    //     fav.id !== character.id ? [...favorites, character] : null
    //   )
    // );
    // console.log(character.id);

    setFavorites([...favorites, character]);
  };

  const deleteFav = (id) => {
    setFavorites(favorites.filter((f) => f.id !== id));
  };
  console.log(favorites);

  return (
    <>
      <Container>
        <Search handlerSearch={handlerSearch} />
        <Row>
          <Col md={10}>
            <Characters search={search} addFavorites={addFavorites} />
          </Col>
          <Col>
            <Favorites favorites={favorites} deleteFav={deleteFav} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
