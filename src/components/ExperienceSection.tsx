
import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-24 py-20 bg-neutral-100">
      <div>
        <h3 className="section-title text-2xl md:text-3xl mb-6">PAST EXPERIENCE</h3>
        <div className="space-y-2">
          <p className="feature-item">Designs based on historical principles and traditional crafting techniques</p>
          <p className="feature-item">Modernized Japanese design elements</p>
          <p className="feature-item">Focus on natural materials and texture</p>
          <p className="feature-item">Handcrafted by skilled artisans</p>
          <p className="feature-item">Adherence to traditional aesthetic values</p>
          <p className="feature-item">Limited batch production to ensure quality control</p>
        </div>
      </div>
      <div>
        <h3 className="section-title text-2xl md:text-3xl mb-6">PRESENT-DAY SKILLS</h3>
        <div className="space-y-2">
          <p className="feature-item">Integration of modern technologies with traditional craft</p>
          <p className="feature-item">Applying contemporary production methods</p>
          <p className="feature-item">Environmentally sustainable design approach</p>
          <p className="feature-item">Utilizing sustainable materials that remain durable</p>
          <p className="feature-item">Balancing aesthetics with functionality</p>
          <p className="feature-item">Creating timeless pieces that transcend trends</p>
          <p className="feature-item">Building collaborations with clients to fully actualize and conceptualize custom works</p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
