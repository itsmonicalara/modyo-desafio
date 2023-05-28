import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Card() {

    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20'
            );
            setFetchedData(response.data.entries);
        };
        getData();
    }, []);

    console.log('data; ', fetchedData);
    
  return (
    <div>

        <div className='testAPI'>
            {fetchedData && fetchedData.map((item)=>(
                <div key={item.meta.uuid} className="card border-0" style={{ width: '18rem' }}>
                    <img className='card-img-top rounded' src={item.fields.image.url} alt={item.fields.image.title}></img>
                    <div className='card-body'>
                        <h5 className='card-title'>{item.meta.name}</h5>
                        <p className='card-text'>{item.fields.image.description}</p>
                    </div>
                </div>
            ))}
        </div>
       
    </div>
  )
}

export default Card