import { useEffect, useState } from 'react';
import logoLarge from '../../assets/images/logo-s-large.png'
import resume from '../../assets/pdf/Sean McNutt Resume.pdf'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const introArray = ['H','e','l','l','o',',',' ','W','o','r','l','d','!']
    const nameArray = ['e', 'a', 'n', ' ', 'M','c','N','u','t','t']
    const jobArray = ['s','a','l','e','s',' ','e','n','g','i','n','e','e','r','.']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        // Return a cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
      }, []);
    
    return(
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters letterClass={letterClass} strArray={introArray} idx={11} />
                <br />
                <span className={`${letterClass} _24`}>I</span>
                <span className={`${letterClass} _25`}>'m</span>
                <img src={logoLarge} alt="developer" /> 
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={26} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={37} />
                </h1>
                <h2>Aspiring Software Engineer</h2>
                <a href={resume} target="_blank" rel="noopener noreferrer" className="flat-button">Resume</a>
            </div>
            <Logo />
        </div>
        <Loader type="ball-pulse-sync" />
        </>
    );
}

export default Home