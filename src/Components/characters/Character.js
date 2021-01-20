import { Col, Card } from 'react-bootstrap';

const Character = ({ id, name, status, species, gender, image, created }) => {
  return (
    <Col md={4} className="mt-3 mb-3">
      <Card>
        <Card.Img src={image} variant="top" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <span>
              Especie: {species} -Genero: {gender}
            </span>
            <small>Creado: {created} - Estado: </small>
            {(status === 'Alive' && <small>Vivo</small>) ||
              (status === 'Dead' && <small>Muerto</small>) ||
              (status === 'unknown' && <small>Desconocido</small>)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Character;
