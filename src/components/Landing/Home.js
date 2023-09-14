import React from 'react';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Owlcarousel from './Owlcarousel.js';
import Introduce from './Introduce.js';
import Projects from './Projects.js';
import Comment from './Comment.js';
import Footer from './Footer.js';
import styles from "./Home.module.css"
const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Owlcarousel />
            <Introduce />
            <Comment/>
            <Projects />
            <Footer />
        </div>
    );
};

export default Home;