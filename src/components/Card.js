import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Card() {

    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(
                // 'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20'
                'https://jsonplaceholder.typicode.com/todos/1'           
            );
            setFetchedData(data);
        };
        getData();
    }, []);

    console.log('data; ', fetchedData);
    
  return (
    <div>
        <div class="card border-0" style={{width: '18rem'}}>
            <img class="card-img-top rounded" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="..."></img>
        </div>
        {fetchedData.data ? <h2>id: {fetchedData.data.id}</h2> : null}
        {fetchedData.data ? <h2>title: {fetchedData.data.title}</h2> : null}
    </div>
  )
}

export default Card