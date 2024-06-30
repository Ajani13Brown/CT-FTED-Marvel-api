import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                const response = await axios.get(
                    `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=90e2f3cc6631fa0974dcbb853fe4bc85&hash=e2e212242e30864497acc87865e3b468`
                );
                setCharacter(response.data.data.results[0]);
            } catch (error) {
                console.error('Error fetching character details:', error);
            }
        };

        fetchCharacterDetails();
    }, [id]);

    if (!character) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <h3>Comics:</h3>
            <ul>
                {character.comics.items.map((comic, index) => (
                    <li key={index}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetails;
