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
      <div className="wrapper">
      {/* <h1 id="about">Portfolio</h1>
      <p></p> */}
        {projects.map((project) => (
          <div className="card">
          <div className="img-container">
          <img
              src={require(`../../assets/images/${project.image}`)}
              alt={project.title}
              className="img-thumbnail"
              key={project.name}
            />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong> {project.title}
              </li>
              <li>
                <strong>Description:</strong> {project.description}
              </li>
              <li>
                <strong>Technologies:</strong> {project.technologies}
              </li>
              <li>
                <strong>GitHub Repo:</strong> <a href={project.repo}>LINK</a>
              </li>
              <li>
                <strong>Deployed:</strong> <a href={project.deployed}>LINK</a>
              </li>
            </ul>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Project;