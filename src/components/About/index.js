import React from 'react';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About me</h1>
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