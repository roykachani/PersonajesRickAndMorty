import { Row, Col } from 'react-bootstrap';
import './Favorites.css';

const Favorites = ({ favorite }) => {
  return (
    <Row className="aside-box">
      <Col className="">
        <h5>Agrega tus favoritos</h5>
        <Row className="fav-box">
          {favorite.length >= 0 &&
            favorite.map((character) =>
              character.name === '' ? null : (
                <Col className="fav" key={character.id}>
                  <span>{character.name}</span>
                  <img src={character.image} alt={character.name} />
                </Col>
              )
            )}
        </Row>
      </Col>
    </Row>
  );
};

export default Favorites;
