import React, { useState } from 'react';
import StepIndicator from './StepIndicator';
import GeneratePaperForm from './GeneratePaperForm';
import QuestionList from './QuestionList';
import './CreateExam.css';

const CreateExam = ({ questions, onUpdateQuestion, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleFormSubmitted = () => {
    setCurrentStep(2); // Generate
    // simulate generation delay, then move to Analyze
    setTimeout(() => {
      setCurrentStep(3); // Analyze
    }, 1200);
  };

  const handleProceedToReview = () => {
    setCurrentStep(4); // Review
  };

  const handlePublish = () => {
    setCurrentStep(5); // Publish
  };

  return (
    <div className="create-exam-wrapper">
      <button className="back-btn" onClick={onBack}>← Back to Dashboard</button>

      <StepIndicator currentStep={currentStep} />

      {currentStep === 1 && (
        <GeneratePaperForm onSubmitted={handleFormSubmitted} />
      )}

      {currentStep === 2 && (
        <div className="step-panel loading-panel">
          <div className="spinner" />
          <p>AI is generating your question paper...</p>
        </div>
      )}

      {currentStep === 3 && (
        <div className="step-panel analyze-panel">
          <h3>AI Paper Analysis</h3>
          <div className="quality-score">
            <div className="score-circle">92%</div>
            <p>Paper Quality Score</p>
          </div>
          <ul className="analysis-checklist">
            <li>✓ Syllabus Coverage: 94%</li>
            <li>✓ CO Mapping: 91%</li>
            <li>✓ Bloom Balance: 96%</li>
            <li>✓ Difficulty Balance: 82%</li>
          </ul>
          <button className="primary-btn" onClick={handleProceedToReview}>
            Proceed to Review →
          </button>
        </div>
      )}

      {currentStep === 4 && (
        <>
          <QuestionList questions={questions} onUpdateQuestion={onUpdateQuestion} />
          <button className="primary-btn publish-btn" onClick={handlePublish}>
            Finalize & Publish →
          </button>
        </>
      )}

      {currentStep === 5 && (
        <div className="step-panel publish-panel">
          <h3>✓ Paper Finalized</h3>
          <p>Your question paper is ready.</p>
          <button className="primary-btn">Download PDF</button>
        </div>
      )}
    </div>
  );
};

export default CreateExam;