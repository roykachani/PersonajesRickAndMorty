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
  const [favorite, setFavorite] = useState(inicialState);
  const [showFav, setShowFav] = useState([]);
  const handlerSearch = (value) => {
    setSearch(value);
  };

  const addFavorites = (character) => {
    setFavorite([...favorite, character]);
    checkArray();
  };

  const checkArray = () => {
    favorite.map((fav) =>
      fav.name === '' ? null : setShowFav([...showFav, fav])
    );
    console.log(showFav);
  };
  return (
    <>
      <Container>
        <Search handlerSearch={handlerSearch} />
        <Row>
          <Col md={10}>
            <Characters search={search} addFavorites={addFavorites} />
          </Col>
          <Col>
            <Favorites favorite={favorite} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
