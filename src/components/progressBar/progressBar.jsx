import React, { useState, useEffect, useRef } from 'react';

const Progress_bar = ({ bgcolor, progress, height }) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const progressBar = progressBarRef.current;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [1, 0.3], // Adjust threshold based on your needs
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate the progress bar width when it becomes visible
          setAnimatedWidth(progress);
        } else {
          // Reset the animatedWidth when the progress bar is not visible
          setAnimatedWidth(0);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(progressBar);

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [progress]);

  const Parentdiv = {
    height: height,
    width: '100%',
    backgroundColor: '#bbf7d4',
    borderRadius: 40,
    margin: 0,
  };

  const Childdiv = {
    height: '100%',
    width: `${animatedWidth}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right',
    transition: 'width 1.5s ease',
  };

  const progresstext = {
    padding: 10,
    color: '#bbf7d4',
    fontWeight: 700,
  };

  return (
    <div ref={progressBarRef} style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${animatedWidth}%`}</span>
      </div>
    </div>
  );
};

export default Progress_bar;