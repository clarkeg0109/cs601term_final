import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Interests from '../components/Interests';
import Resume from '../components/Resume';
//import Contact from './components/Contact';
import PhotoGallery from './PhotoGallery';
import ContactForm from '../components/ContactForm';

const App: React.FC = () => (
    <>
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Interests />
            <Resume />
            <ContactForm />
            <PhotoGallery/>
    </>
);

export default App;