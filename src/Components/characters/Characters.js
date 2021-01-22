import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useFetch } from '../../CustomHooks/useFetch'; //CUSTOM HOOK
import Paginate from './../Paginate/Paginate';
import Loading from './../Loading';
import Character from './Character';

//componente de logica (peticion + map)
const BASE_ENDPOINT = 'character';
const Characters = ({ search, addFavorites }) => {
  const inicialState = {
    id: '',
    name: '',
    image: '',
    fav: false,
  };

  const [url, setUrl] = useState(BASE_ENDPOINT);
  const [favCharacter, setFavCharacter] = useState(inicialState);
  //hoock para setear busqueda
  useEffect(() => {
    const newUrl = !search
      ? `${BASE_ENDPOINT}`
      : `${BASE_ENDPOINT}?name=${search}`;
    setUrl(newUrl);
  }, [search]);

  const [data, fetching] = useFetch(url); //CUSTOM HOOK
  const { info, results: characters } = data;

  //funcion de paginacion
  const handlerPage = (newUrl) => {
    setUrl(`${BASE_ENDPOINT}?${newUrl}`);
  };

  const handlerFavorites = (id, name, image) => {
    setFavCharacter({
      id: id,
      name: name,
      image: image,
      fav: true,
    });

    addFavorites(favCharacter);
  };

  return (
    <>
      <Paginate {...info} handlerPage={handlerPage} />
      <Row>
        {fetching ? (
          <Loading />
        ) : (
          characters.map((character) => (
            <Character
              key={character.id}
              {...character}
              handlerFavorites={handlerFavorites}
            />
          ))
        )}
      </Row>
      <Paginate {...info} handlerPage={handlerPage} />
    </>
  );
};

export default Characters;
