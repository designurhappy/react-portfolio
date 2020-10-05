import React from 'react';
import coverImage from '../../assets/imges/ANR.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About me</h1>
      <h2>Hello, my name is Alicia and this is my professional portfolio. As an web developer I enjoy the challenge of harmonizing effective design with optimum performance.
      </h2>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: '100%' }}
        alt="cover"
      />
    </section>
  );
}
export default About;