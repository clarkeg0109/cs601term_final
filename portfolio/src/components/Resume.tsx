import React from 'react';

const Resume: React.FC = () => (
    <section id="resume" style={{ padding: '2rem', textAlign: 'center' }}>
<h1>Resume</h1>
<p>
Download my resume below or view the details online.
</p>
<a
href="/path-to-your-resume.pdf" // Replace with the correct path to your resume file
download="YourName_Resume.pdf"
style={{
    display: 'inline-block',
        marginTop: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#6200ea',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
}}
>
Download Resume
</a>

<div style={{ marginTop: '2rem', textAlign: 'left', maxWidth: '800px', margin: '2rem auto' }}>
<h2>Experience</h2>
<p><strong>Frontend Developer</strong>, XYZ Company (2021–Present)</p>
<p>Building modern, responsive web applications using React, TypeScript, and more.</p>

<h2>Education</h2>
<p><strong>Bachelor of Computer Science</strong>, ABC University (2017–2021)</p>
<p>Specialized in web development and user interface design.</p>

<h2>Skills</h2>
<ul>
<li>React, TypeScript, JavaScript, HTML5, CSS3</li>
<li>Responsive Design, UI/UX, Accessibility</li>
<li>Version Control (Git), Agile Methodology</li>
</ul>
</div>
</section>
);

export default Resume;
