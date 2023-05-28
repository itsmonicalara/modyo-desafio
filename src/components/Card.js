import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../styles/Card.css'
import questionImg from '../img/whoIs.jpg'


function Card() {

    const [fetchedData, setFetchedData] = useState([]);
    const [revealedCards, setRevealedCards] = useState([]);


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
        updatedData[index].isRevealed = true;
        setFetchedData(updatedData);
      
        const updatedCards = [...revealedCards];
        updatedCards.push(index);
        setRevealedCards(updatedCards);
      
        if (updatedCards.length === 2) {
          setTimeout(() => {
            const [firstCard, secondCard] = updatedCards;
            const resetData = [...updatedData];
            resetData[firstCard].isRevealed = false;
            resetData[secondCard].isRevealed = false;
            setFetchedData(resetData);
            setRevealedCards([]);
          }, 3000);
        }
    };
      

    
    return (
        <div>
          <div className='testAPI'>
            <div className='row gy-3'>
              {fetchedData.map((item, index) => (
                <div className='col-lg-3 col-md-4 col-sm-6' key={`${item.meta.slug}-${index}`}>
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