import React, { useState } from 'react';
function Project() {
  const [projects] = useState([
    {
      name: 'covie',
      title: 'CoVie Search',
      description: 'Dashboard',
      technologies:
        'html | css | bootstrap | js | Plotly.js | server-side APIs',
      image: 'screen-shot-coviesearch.png',
    },
    {
      name: 'shrinko',
      title: 'SHRINKO',
      description: 'Electronic Mental Health Records',
      technologies: 'Node.js | Express.js | MySQL | Sequelize | bcrypt',
      image: 'shrinko.jpg',
    },
    {
      name: 'run-buddy',
      title: 'Run Buddy',
      description: 'Runners Website',
      technologies: 'HTML | CSS' ,
      image: 'run-buddy.jpg',
    },
    {
      name: 'weather-app',
      title: 'The Weather App',
      description: 'World Weather Forecast Dashboard',
      technologies: 'html | css | bootstrap | js | Moment.js | OpenWeather API',
      image: 'screen-shot-weather-dashboard.png',
    },
  ]);
  return (
    <div>
      <div className="flex-row">
        {projects.map((project) => (
          <img
            src={require(`../../assets/images/portfolio/${project.image}`)}
            alt={project.title}
            className="img-thumbnail mx-1"
            key={project.name}
          />
        ))}
      </div>
    </div>
  );
}
export default Project;