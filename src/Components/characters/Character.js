import { Col, Card, Button } from 'react-bootstrap';

const Character = ({
  id,
  name,
  status,
  species,
  gender,
  image,
  handlerFavorites,
}) => {
  const getFavorite = (e) => {
    const { id } = e.target;
    handlerFavorites(id, name, image);
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
            <Button
              type="button"
              id={id}
              onClick={getFavorite}
              className="ml-5"
            >
              ***
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Character;
