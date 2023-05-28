import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../styles/Card.css'


function Card() {

    const [fetchedData, setFetchedData] = useState([]);
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
            duplicatedData.push({ ...item });
          }
        });
        return duplicatedData;
    };

    
  return (
    <div>
        <div className='testAPI'>
            <div className='row gy-3'>
                {fetchedData && fetchedData.map((item, index)=>(
                    <div className='col-lg-3 col-md-4 col-sm-6' key={`${item.meta.slug} - ${index}`}>
                    <div className='card border-0' style={{ width: '100%'}}>
                            <div className='square-image rounded'>
                                    <img className='card-img-top' src={item.fields.image.url} alt={item.fields.image.title}></img>
                            </div>
                    </div> 
                    </div>
                ))}
            </div>            
        </div>  
    </div>
  )
}

export default Card