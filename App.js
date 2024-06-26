import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleClick = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/text');
      const textData = response.data;
      setText('');
      animateText(textData);
    } catch (error) {
      console.error('Error fetching the text:', error);
    }
  };

  const animateText = (textData) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < textData.length) {
        setText((prevText) => prevText + textData[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the speed of animation by changing the interval
  };

  return (
    <div className="App">
      <textarea value={text} readOnly />
      <button onClick={handleClick}>Fetch Text</button>
    </div>
  );
}

export default App;
