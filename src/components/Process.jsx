import React from 'react';
import '../styles/Process.css';

const Process = () => {
  const steps = [
    {
      id: 1,
      title: 'Material Preparation',
      description: 'High-purity raw materials including lithium, cobalt, nickel, and graphite are carefully processed and prepared for electrode manufacturing.',
      icon: '🔬'
    },
    {
      id: 2,
      title: 'Electrode Manufacturing',
      description: 'Cathode and anode materials are mixed with binders, coated onto metal foils, dried, and compressed to create the battery electrodes.',
      icon: '⚙️'
    },
    {
      id: 3,
      title: 'Cell Assembly',
      description: 'Electrodes are precisely cut and layered with separators, then assembled into cells in a controlled, dust-free environment.',
      icon: '🔋'
    },
    {
      id: 4,
      title: 'Electrolyte Filling',
      description: 'Cells are filled with specialized electrolyte solutions that enable ion movement between electrodes during charge and discharge cycles.',
      icon: '💧'
    },
    {
      id: 5,
      title: 'Formation & Testing',
      description: 'Batteries undergo initial charging cycles, followed by rigorous testing to ensure performance, safety, and quality standards are met.',
      icon: '✓'
    },
    {
      id: 6,
      title: 'Module & Pack Assembly',
      description: 'Individual cells are combined into modules with thermal management systems, then integrated into complete battery packs with control electronics.',
      icon: '📦'
    }
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <h2 className="section-title">Our Manufacturing Process</h2>
        <p className="section-subtitle">State-of-the-art production with rigorous quality control</p>
        
        <div className="process-timeline">
          {steps.map((step) => (
            <div className="process-step" key={step.id}>
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="process-cta">
          <p>Want to learn more about our manufacturing capabilities?</p>
          <button className="process-btn">Request Factory Tour</button>
        </div>
      </div>
    </section>
  );
};

export default Process;