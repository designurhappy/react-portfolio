import React, { useState } from 'react';

function Project() {
  const [projects] = useState([
    {
      name: 'covie',
      title: 'CoVie Search',
      description: 'Dashboard',
      technologies:
        'html | css | bootstrap | js | Plotly.js | server-side APIs',
      image: 'Covie.jpg',
      repo: 'https://github.com/jaaybe/covidsearch',
      deployed:'https://jaaybe.github.io/covidsearch/'
    },
    {
      name: 'shrinko',
      title: 'SHRINKO',
      description: 'Electronic Mental Health Records',
      technologies: 'Node.js | Express.js | MySQL | Sequelize | bcrypt',
      image: 'Shrinko.jpg',
      repo: 'https://github.com/PetitsPoissons/admin-patient-system.git',
      deployed:'https://shrinko.herokuapp.com/'
    },
    {
      name: 'run-buddy',
      title: 'Run Buddy',
      description: 'Runners Website',
      technologies: 'HTML | CSS' ,
      image: 'run-buddy.jpg',
      repo: 'https://github.com/designurhappy/run-buddy.git',
      deployed: 'https://designurhappy.github.io/run-buddy'
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