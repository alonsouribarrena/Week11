import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function Quote() {
  const [quote,setQuote] = useState([])
  // const [newQuote, setNewQuote] = useState([])

  useEffect(()=>{
    // axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?')
    // axios.get('https://talaikis.com/api/quotes/random')
    // axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
    //Name
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((result) => {
      console.log(result.data)
    }).catch((err) => {
      console.log(err)
    });
    //title
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
      setQuote(result.data)
    }).catch((err) => {
      console.log(err)
    });

  }, [])



  return (
    <div>
    <ul>
      {quote && quote.map(val=>{
        return(
          <li key={val.id}>{val.title}</li>
        )})}
    </ul>
      <button>New Quote</button>
    </div>
  )
}
