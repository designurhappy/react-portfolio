import React from 'react';
import ResumePdf from './AliciaRoss_Res.pdf';

function Resume() {
    return (
      <section className="my-5">
        <h1 id="about">Resume</h1>
        <div class="section-content">
            <p>Click <a href={ResumePdf} target="_blank" rel="noopener noreferrer">here</a> to view my resume.</p>
        </div>
      </section>
    );
  }

export default Resume;