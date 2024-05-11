import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Headlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=7b4b9848284a4de0957ddc241e2ed53a'
        );
        setHeadlines(response.data.articles);
      } catch (error) {
        setError('Error fetching headlines. Please try again later.');
      }
    };

    fetchHeadlines();
  }, []);

  return (
    <div>
      <h2>Latest Headlines</h2>
      {error && <p>{error}</p>}
      <ul>
        {headlines.map((headline, index) => (
          <li key={index}>
            <h3>{headline.title}</h3>
            <p>{headline.source.name}</p>
            <p>{headline.publishedAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Headlines;
