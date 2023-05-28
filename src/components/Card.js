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
            setFetchedData(response.data.entries);
            }   catch(error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);

    // console.log('data; ', fetchedData);
    
  return (
    <div>

        <div className='testAPI'>
            {fetchedData && fetchedData.map((item)=>(
                <div className="card border-0" key={item.meta.uuid}  style={{ width: '19rem' }}>
                    <div className='square-image'>
                        <img className='card-img-top rounded' src={item.fields.image.url} alt={item.fields.image.title}></img>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>{item.fields.image.title}</h5>
                    </div>
                </div>
            ))}
        </div>
       
    </div>
  )
}

export default Card