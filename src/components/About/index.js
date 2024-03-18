import React from 'react'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import {useState, useEffect} from 'react';
import headshot from '../../assets/images/sean-tinted.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faJava, faJs, faPython, faReact, faSwift } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        // Return a cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
      }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx={12}
                    />
                </h1>
                <p>Experienced and results-driven Sales Engineer, with a fervent passion for technology. Actively pursuing new opportunities and bringing forth a versatile skill set honed through a diverse professional background and personal endeavors. Eager to demonstrate my skill set to deliver impactful engineering solutions.</p>
                <h3>
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['S','k','i','l','l','s']}
                        idx={21}
                    />
                </h3>
                <p>Solutions Engineering, Software Development, Product Demonstration, Android Development, iOS Development, Web Development, Customer Relationship Management, Technical Support</p>
                <h3>
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['L','a','n','g','u','a','g','e','s']}
                        idx={30}
                    />
                </h3>
                <p>Java, JavaScript, TypeScript, Python, Swift</p>
            </div>
            <img className='headshot' src={headshot} alt="Headshot" /> 
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJava} color="#f89820"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faPython} color="#4584B6"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faSwift} color="#f05138"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJs} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faAndroid} color="#3DDC84"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="ball-pulse-sync"/>
        </>
    )
}
export default About