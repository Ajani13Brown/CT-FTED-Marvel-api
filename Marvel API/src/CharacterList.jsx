import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BrowseCharacters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get(
                    `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=90e2f3cc6631fa0974dcbb853fe4bc85&hash=e2e212242e30864497acc87865e3b468`
                );
                setCharacters(response.data.data.results);
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <div>
            <h2>Marvel Characters</h2>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>
                        <Link to={`/CharacterDetails/${character.id}`}>
                        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>
                            {character.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseCharacters;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CharacterList = () => {
//     const [Characters, setCharacters] = useState([]);

//     useEffect(() => {
//         const fetchCharacterDetails = async () => {
//             try {
//                 const response = await axios.get(
//                     `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=90e2f3cc6631fa0974dcbb853fe4bc85&hash=e2e212242e30864497acc87865e3b468`
//                 );
//                 // Set Characters to the array of characters received from API
//                 setCharacters(response.data.data.results);
//             } catch (error) {
//                 console.error('Error fetching character details:', error);
//             }
//         };

//         // Call the fetch function when the component mounts
//         fetchCharacterDetails();
//     }, []); // Empty dependency array ensures this effect runs only once

//     return (
//         <div>
//             <h2>Browse Characters</h2>
//             <ul>
//                 {/* Map over Characters to display each character's details */}
//                 {Characters.map((character) => (
//                     <li key={character.id}>
//                         <strong>{character.name}</strong> -<img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CharacterList;
