import { useState } from 'react';
import { Col, Card } from 'react-bootstrap';

const Character = ({
  id,
  name,
  status,
  species,
  gender,
  image,
  addFavorites,
}) => {
  const [favCharacter, setFavCharacter] = useState(false);

  const getFavorite = () => {
    const character = {
      id,
      name,
      image,
    };
    setFavCharacter(true);
    addFavorites(character);
  };

  return (
    <Col md={4} key={id} className="mt-3 mb-3">
      <Card>
        <Card.Img src={image} variant="top" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <span>
              Especie: {species} -Genero: {gender}
            </span>
            <small>Estado: </small>
            {(status === 'Alive' && <small>Vivo</small>) ||
              (status === 'Dead' && <small>Muerto</small>) ||
              (status === 'unknown' && <small>Desconocido</small>)}
            {!favCharacter ? (
              <i
                className="fas fa-heart"
                style={{ cursor: 'pointer', color: 'red' }}
                id={id}
                onClick={getFavorite}
              ></i>
            ) : (
              <i
                className="fas fa-heart"
                style={{ cursor: 'pointer', color: 'grey' }}
                id={id}
                onClick={getFavorite}
              ></i>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Character;
