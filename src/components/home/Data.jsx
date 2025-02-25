import React from 'react';

const Data = () => {
  // Function to determine the greeting message based on the current hour
  const getGreetingMessage = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return "Good Morning";
    if (currentHour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className='home__data'>
      <h2 className="home__greeting">{getGreetingMessage()}. I"m</h2>
      
      <h1 className="home__title">
        Tarun Kumar
        <svg
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="home__hand"
        >
          {/* SVG Path Content */}
        </svg>
      </h1>

      <h3 className="home__subtitle">Full Stack Developer</h3>
      <p className="home__description">
      Hey, I'm Tarun Kumar, a Junior Full Stack Developer with one year of experience in building dynamic, user-focused applications. I specialize in PHP (Laravel), Python, C/C++, Java, .NET, and various databases, with a strong foundation in AWS and Azure Cloud Computing. Passionate about scalable solutions and continuous learning, I push boundaries to create impactful, user-driven experiences. Let’s build something remarkable! 🚀
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <svg
          className="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* SVG Path Content */}
        </svg>
      </a>
    </div>
  );
}

export default Data;
