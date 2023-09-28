import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function Places() {
  const [places, setPlaces] = useState([])
  const [search, setSearch] = useState('')
  const [submit, setSubmit] = useState('')

  useEffect(()=> { 

    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then((result) => {
    //   setPlaces(result.data)})
    // .catch((err) => {
    //   console.log(err)});


    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'fsq31RSOiusBvxCstM0Yq/1vAGTXO+7z/zPrbcgTwYbNsIg='
      }
    };
    
    fetch('https://api.foursquare.com/v3/places/search?query=&limit=50', options)
    .then(response => response.json())
    // .then(response => console.log(response.results))
    .then(response => setPlaces(response.results))
    .catch(err => console.error(err));
    
},[])

const onClick = () =>{
  setSubmit(search)
}

return (
  <div>
    <input name="search" value={search} onChange= {e => setSearch(e.target.value)} />
    <button onClick={onClick}>Submit</button>
    <ul>
    {/* {places.filter(value=> value.categories.name.includes(search)).map(val=>{  */}
    {places.filter(value=> value.categories[0].name.includes(submit)).map(val=>{ 

      return(
        <ul key={val.fsq_id} >
          <li> {val.name} </li>
        </ul>
      )}
      )}
    </ul>
  </div>
)
}
