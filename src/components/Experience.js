import React from 'react';

const Experience = () => {
  return (
    <section className="py-12 md:px-4 lg:px-12 px-20 bg-thirty m-12 lg:m-8 md:m-6 rounded-3xl">
      <div className="grid grid-cols-4 gap-20 md:gap-12 lg:grid-cols-2 md:grid-cols-1">
        <div className="text-center">
          <h2 className="text-6xl lg:text-4xl font-bold mb-4 text-primary">2+</h2>
          <p className="text-xl lg:text-lg">Years Of Experience</p>
        </div>
        <div className="text-center">
          <h2 className="text-6xl lg:text-4xl font-bold mb-4 text-primary">15+</h2>
          <p className="text-xl lg:text-lg">Opensource Contributions</p>
        </div>
        <div className="text-center">
          <h2 className="text-6xl lg:text-4xl font-bold mb-4 text-primary">80+</h2>
          <p className="text-xl lg:text-lg">Projects Completed</p>
        </div>
        <div className="text-center">
          <h2 className="text-6xl lg:text-4xl font-bold mb-4 text-primary">3</h2>
          <p className="text-xl lg:text-lg">Hackathon Wins</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
