import { Col } from 'react-bootstrap';
import './Favorites.css';

const Favorite = ({ id, name, image, status, deleteFav }) => {
  const deleteF = () => {
    deleteFav(id);
  };

  return (
    <Col className="fav">
      <img src={image} alt="" />
      <span>{name}</span>
      <i
        className="fas fa-trash text-danger"
        style={{ cursor: 'pointer', fontSize: '0.7em' }}
        onClick={deleteF}
      ></i>
    </Col>
  );
};

export default Favorite;
