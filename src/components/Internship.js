import React from 'react';
import './Internship.css'; // Import a CSS file for your Internship component styles

function Internship() {
  // Define an array of your internship experiences
  const internships = [
    {
      company: 'Audex Sol & Tech Company',
      position: 'Software Development Intern',
      duration: 'May 2023 - July 2023',
      description:
        'Worked on web development projects using technologies such as React, HTML, and CSS. Collaborated with the development team to implement new features and fix bugs.',
    },
    {
      company: 'codechamps',
      position: 'Cultural Head',
      duration: 'January 2021 - April 2023',
      description:
        'Organised many events and fests in our college during this leadership.',
    },
    {
      company: 'NSS CAMP',
      position: 'Voluntering Head',
      duration: 'January 2022 - Sep2022',
      description:
        'Organised many events and fests in our college during this leadership for colloge NGO',
    },
    // Add more internship experiences here
  ];

  return (
    <section id="internship" className="internship-section">
      <h2 className="internship-title">Internship Experience & Participation</h2>
      <div className="internship-container">
        {internships.map((internship, index) => (
          <div key={index} className="internship-item">
            <h3 className="internship-company">{internship.company}</h3>
            <p className="internship-position">{internship.position}</p>
            <p className="internship-duration">{internship.duration}</p>
            <p className="internship-description">{internship.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Internship;
