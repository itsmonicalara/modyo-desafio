import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../styles/Card.css'


function Card({ matchingCount, setMatchingCount, mistakeCount, setMistakeCount, name }) {

    const [fetchedData, setFetchedData] = useState([]);
    const [revealedCards, setRevealedCards] = useState([]);  
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {      
        const getData = async () => {
            try {
            const response = await axios.get(
                'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20'
            );
            // Made sure 'entries' array was present in the API responde, 'meta' array was not needed at this point.
            const slicedData = response.data.entries.slice(0, 6);
            const duplicatedData = duplicateImages(slicedData, 2);
            const shuffledData = shuffleArray(duplicatedData);
            setFetchedData(shuffledData);
            }   catch(error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);

    // console.log('data; ', fetchedData);

    // Helper function to shuffle an array using Fisher-Yates algorithm
    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const duplicateImages = (data, repeatCount) => {
        const duplicatedData = [];
        data.forEach((item) => {
          for (let i = 0; i < repeatCount; i++) {
            duplicatedData.push({ ...item, isRevealed: false });
          }
        });
        return duplicatedData;
    };

    const handleClick = (index) => {
        const updatedData = [...fetchedData];
        const updatedCards = [...revealedCards];
      
        // Return if already 2 cards are revealed
        if (updatedCards.length === 2) {
          return;
        }
      
        updatedData[index].isRevealed = true;
        updatedCards.push(index);
        setFetchedData(updatedData);
        setRevealedCards(updatedCards);
      
        if (updatedCards.length === 2) {
          const [firstCard, secondCard] = updatedCards;
      
          if (updatedData[firstCard].fields.image.url === updatedData[secondCard].fields.image.url) {
            setMatchingCount((prevCount) => prevCount + 1);
            // Clear revealed cards if they match
            setRevealedCards([]);
            // Check if all cards are revealed
            if(matchingCount + 1 === fetchedData.length / 2) {
              const userData = JSON.parse(localStorage.getItem('userData')) || {};
              if (userData[name]) {
                userData[name].matchingCount += matchingCount;
                userData[name].mistakeCount += mistakeCount;
                localStorage.setItem('userData', JSON.stringify(userData));
              }
              setGameWon(true);
            }
          } else {
            // Hide revealed cards after a delay
            setMistakeCount((prevCount) => prevCount + 1);
            setTimeout(() => {
              const resetData = [...updatedData];
              resetData[firstCard].isRevealed = false;
              resetData[secondCard].isRevealed = false;
              setFetchedData(resetData);
              setRevealedCards([]);
            }, 1000);
          }
        }
      };
        
    return (
        <div> 
          {gameWon && ( 
          <div className="alert alert-success" role="alert">
            Congratulations, {name}! You have won the memory game!
          </div>
          )}        
          <div className='testAPI'>
            <div className='row gy-3'>
              {fetchedData.map((item, index) => (
                <div className='cardItem col-lg-2 col-md-3 col-sm-4' key={`${item.meta.slug}-${index}`}>
                  <div
                    className={`card border-0 ${item.isRevealed ? 'revealed' : ''}`}
                    style={{ width: '100%' }}
                    onClick={() => handleClick(index)}
                  >
                    <div className='square-image rounded'>
                      <img
                        className='card-img-top'
                        src={item.isRevealed ? item.fields.image.url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/640px-Question_mark_%28black%29.svg.png'}
                        alt={item.fields.image.title}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

export default Card