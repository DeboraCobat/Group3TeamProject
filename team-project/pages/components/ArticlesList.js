import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const ArticlesList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const articles = [
    {
      id: 1,
      title: 'Gardening',
      content: [
        'Gardening is a wonderful hobby that brings joy and beauty to our lives. It allows us to connect with nature and create stunning landscapes in our own backyard.',
        'When starting a garden, it\'s important to consider factors such as sunlight, soil quality, and watering needs. Choosing the right plants for your climate and understanding their care requirements is crucial for a successful garden.',
        'Gardening also has numerous health benefits. It provides physical exercise, reduces stress, and promotes mental well-being. Whether you have a small balcony garden or a sprawling yard, gardening can be a fulfilling and rewarding experience.'
      ],
      dateCreated: '2023-06-01',
    },
    {
      id: 2,
      title: 'Weather News',
      content: [
        'Keeping up with the latest weather news is essential for planning outdoor activities and staying safe during extreme conditions. Weather forecasts provide valuable information about temperature, precipitation, wind patterns, and more.',
        'Meteorologists use advanced technology and data analysis to predict weather patterns accurately. With the advent of weather satellites and computer models, forecasting has become more reliable than ever before.',
        'Weather events such as hurricanes, tornadoes, and heatwaves have a significant impact on our lives and the environment. Understanding weather phenomena and their potential consequences helps us make informed decisions and take appropriate precautions.'
      ],
      dateCreated: '2023-06-02',
    },
    {
      id: 3,
      title: 'The Future of Social Media',
      content: [
        'Social media has revolutionized the way we connect, share information, and interact with the world. As technology continues to advance, the future of social media holds exciting possibilities and challenges.',
        'Artificial intelligence and machine learning are transforming social media platforms by enhancing personalization, content recommendations, and targeted advertising. These technologies enable platforms to deliver tailored experiences to users.',
        'However, the future of social media also raises concerns about privacy, data security, and the impact of social media on mental health. Striking a balance between technological advancements and user well-being will be crucial for the sustainable growth of social media in the future.'
      ],
      dateCreated: '2023-06-03',
    },
  ];

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {filteredArticles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p>{article.dateCreated}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;