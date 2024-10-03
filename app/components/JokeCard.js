"use client"
import { useState, useEffect } from 'react';

const JokeCard = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    const response = await fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=d3db59f25f3c4d5bf3bbeac04eaf', {
      headers: { Accept: 'application/json' }
    });
    const data = await response.json();
    setJoke(data.jokeContent);
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="p-4 w-80 h-48 mx-auto bg-white rounded-xl shadow-md space-y-4 text-black flex flex-col justify-center items-center">
    {loading ? <div className="spinner"></div> : <p>{joke}</p>}
    <button
      onClick={fetchJoke}
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
    >
      Next Joke
    </button>
  </div>
  );
};

export default JokeCard;
