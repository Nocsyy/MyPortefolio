import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import './service.css';

export function Service() {
  const [inViewRefs, inViewRefsSetter] = useState([]);
  const [showElement, setShowElement] = useState(false);
  const toggleElement = () => setShowElement(!showElement);

  const [showElement1, setShowElement1] = useState(false);
  const toggleElement1 = () => setShowElement1(!showElement1);

  const [showElement2, setShowElement2] = useState(false);
  const toggleElement2 = () => setShowElement2(!showElement2);

  useEffect(() => {
    inViewRefsSetter(inViewRefs);
  }, [inViewRefs]);

  const [ref1, inView1] = useInView({
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const refs = [inView1, inView2, inView3];
    inViewRefsSetter(refs);
  }, [inView1, inView2, inView3]);

  useEffect(() => {
    inViewRefs.forEach((inViewRef, index) => {
      if (inViewRef) {
        const element = document.querySelector(`[data-index="${index}"]`);
        element.classList.add('animate__animated', 'animate__bounceInUp');
        element.classList.remove('opacity-0');
      }
    });
  }, [inViewRefs]);
  const [gradient, setGradient] = useState(false);

  const handleMouseOver = () => {
    setGradient(100);
  };

  const handleMouseOut = () => {
    setGradient(0);
  };
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkills(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div
        className='ctn-all-element'
        style={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
        }}
      >
        <div
          className='ctn-element1'
          style={{
            height: '100vh',
            scrollSnapAlign: 'start',
            backgroundColor: 'black',
            color: 'white',
            fontFamily: 'montserrat',
            fontSize: '50px',
          }}
        >
          <h4
            className='gradient-text text_center'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Developpeur front-end & back-end
          </h4>
        </div>
        <div
          className='ctn-element2'
          style={{
            height: '100vh',
            scrollSnapAlign: 'start',
            color: 'black',
            fontFamily: 'montserrat',
            fontSize: '50px',
          }}
        >
          <h3
            className='gradient-text1'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Langages
          </h3>
          <div className='App'>
            {showSkills && (
              <div className='skills'>
                <div className='skill'>
                  <h2 style={{ color: 'white' }}>HTML</h2>
                  <div class='container'>
                    <div class='progress2 progress-moved'>
                      <div class='progress-bar2'></div>
                    </div>
                  </div>
                </div>
                <div className='skill'>
                  <h2 style={{ color: 'white' }}>CSS</h2>
                  <div className='skill-bar'>
                    <div className='skill-progress css'></div>
                  </div>
                </div>
                <div className='skill'>
                  <h2 style={{ color: 'white' }}>React</h2>
                  <div className='skill-bar'>
                    <div className='skill-progress react'></div>
                  </div>
                </div>
                <div className='skill'>
                  <h2 style={{ color: 'white' }}>JavaScript</h2>
                  <div className='skill-bar'>
                    <div className='skill-progress javascript'></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className='ctn-element3'
          style={{
            height: '90vh',
            scrollSnapAlign: 'start',
            backgroundColor: 'black',
            color: 'white',
            fontFamily: 'montserrat',
            fontSize: '50px',
          }}
        >
          <h3
            className='gradient-text'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            test
          </h3>
          <div ref={ref3} data-index='2' className='opacity-0 element3'>
            <h4>Element 1</h4>
            <h4>Element 2</h4>
            <h4>Element 3</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
