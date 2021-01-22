import { Row, Col } from 'react-bootstrap';
import Character from '../characters/Character';
import Favorite from './Favorite';
import './Favorites.css';

const Favorites = ({ favorites, deleteFav }) => {
  return (
    <Row className="aside-box">
      <Col className="">
        <h5>Agrega tus favoritos</h5>
        <Row className="fav-box">
          {favorites.map((character) => (
            <Favorite key={character.id} deleteFav={deleteFav} {...character} />
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Favorites;
