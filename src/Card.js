import React, { useState } from 'react';
import styled from 'styled-components';

function Card(props) {
    // Declare a new state variable, which we'll call "count"
    // const [count, setCount] = useState(0);

    
    const [timestamp, name, year] = props.item;

    return (
      <div>

        <p>{name}</p>
        <p>{timestamp}</p>
        <p>{year}</p>

        <ul>
        {(props.comments || []).map((comment, i) => {
           return (
            <div key={i}>
                <h2>{props.comments.author}</h2>
                <div>{comment}</div>
            </div>
            )
        })}
        </ul>

        <input type='text' placeholder='comment'></input>
        <button onClick={submitComment}>
          Submit
        </button>
      </div>
    );
  }

  function submitComment(text, author) {
      // POST to excel spreadsheet
  }

  export default Card;