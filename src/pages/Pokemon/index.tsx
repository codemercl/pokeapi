
import { FC, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPokemonByDetails } from '../../store/pokemon/actions';
import { setPokemonType } from '../../store/pokemons/pokemonsSlice';
import { MdOutlineDesktopAccessDisabled } from "react-icons/md";
import { BackLink, Card, Layout } from '../../components';
import { Tag } from 'antd';

export const Pokemon: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { name } = useParams<{ name?: string }>();
  const { details, error } = useAppSelector((state) => state.pokemonReducer);

  useEffect(() => {
    if (name && dispatch) {
      dispatch(fetchPokemonByDetails(name));
    }
  }, [name, dispatch]);

  const handleTypeClick = useCallback((typeName: string) => {
    if (typeName && dispatch) {
      dispatch(setPokemonType(typeName));
      navigate("/");
    }
  }, [dispatch, navigate]);

  if (error) {
    return (
      <Layout>
        <BackLink />
        <p>{error}</p>
        <MdOutlineDesktopAccessDisabled size={300} />
      </Layout>
    );
  }

  return (
    <Layout>

      <BackLink />

      <Card.Wrapper>
        <Card.Title>{details?.name}</Card.Title>
        <Card.Image src={details?.sprites.front_default} alt={details?.name} />
        <Card.Types>
          {details?.types.map(({ type }, index: number) => (
            <Tag key={index} onClick={() => handleTypeClick(type.name)}>
              {type.name}
              {index < details.types.length - 1 && ', '}
            </Tag>
          ))}
        </Card.Types>
        <Card.Moves>
          {details?.moves.map(({ move }) => move.name).join(', ')}
        </Card.Moves>
      </Card.Wrapper>

    </Layout >
  );
};