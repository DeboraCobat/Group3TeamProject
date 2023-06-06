import React from 'react';

const ArticleContent = () => {
  const id = "mastering-react";
  const title = "Mastering React: Unlock the Power of JavaScript";
  const author = "John Dylan";
  const dateCreated = "June 6, 2023";
  const content = [
    "React - The Game Changer in JavaScript Development",
    "React has revolutionized the way we build user interfaces in JavaScript. With its efficient virtual DOM rendering, React offers developers a high-performance solution for creating dynamic and interactive web applications. Its component-based architecture promotes code reusability and modularity, enabling developers to build complex UIs with ease. Whether you're a beginner or an experienced developer, learning React opens up a world of possibilities for creating stunning and responsive web applications.",
    "Embrace the React Ecosystem for Enhanced Development",
    "When diving into React, you're not just learning a single library; you're entering a vibrant ecosystem that offers a plethora of tools and libraries to enhance your development experience. From state management libraries like Redux and MobX to UI component libraries like Material-UI and Ant Design, the React ecosystem provides a wide range of options to streamline your workflow. By harnessing the power of this ecosystem, you can expedite your development process and deliver feature-rich applications in record time.",
    "Continuous Learning and Growth with React",
    "React is a living and evolving technology, with regular updates and new features being introduced by the React team and the community. This means that learning React is not a one-time process but a continuous journey of growth. By staying up-to-date with the latest trends, best practices, and emerging patterns in the React world, you can sharpen your skills and stay ahead in the ever-evolving landscape of front-end development. With an active and supportive community, countless online resources, and engaging conferences, React offers a vibrant learning environment that keeps you motivated and encourages lifelong learning."
  ];

  return (
    <div>
      <h1>{title}</h1>
      <p>Author: {author}</p>
      <p>Date Created: {dateCreated}</p>
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default ArticleContent;
