import React from 'react';
import './StepIndicator.css';

const steps = [
  { number: 1, label: 'Blueprint' },
  { number: 2, label: 'Generate' },
  { number: 3, label: 'Analyze' },
  { number: 4, label: 'Review' },
  { number: 5, label: 'Publish' },
];

const StepIndicator = ({ currentStep }) => {
  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className={`step ${currentStep === step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}>
            <div className="step-circle">
              {currentStep > step.number ? '✓' : step.number}
            </div>
            <span className="step-label">{step.label}</span>
          </div>
          {index < steps.length - 1 && <div className={`step-connector ${currentStep > step.number ? 'completed' : ''}`} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;