import React, { useState } from 'react';
import './GeneratePaperForm.css';
import { uploadSyllabus } from '../api';

const GeneratePaperForm = ({ onSubmitted }) => {
  const [formData, setFormData] = useState({
    subject: '',
    totalMarks: '',
    numQuestions: '',
    easyPercent: '',
    mediumPercent: '',
    hardPercent: '',
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const result = await uploadSyllabus(formData);
      console.log('API response:', result);
      setStatus('success');
      if (onSubmitted) onSubmitted();
    } catch (err) {
      console.error('Upload failed:', err);
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <form className="generate-form" onSubmit={handleSubmit}>
      <h2>Generate Question Paper</h2>

      <label>
        Subject
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Database Management Systems"
        />
      </label>

      <label>
        Total Marks
        <input
          type="number"
          name="totalMarks"
          value={formData.totalMarks}
          onChange={handleChange}
          placeholder="e.g. 50"
        />
      </label>

      <label>
        Number of Questions
        <input
          type="number"
          name="numQuestions"
          value={formData.numQuestions}
          onChange={handleChange}
          placeholder="e.g. 10"
        />
      </label>

      <div className="difficulty-row">
        <label>
          Easy %
          <input
            type="number"
            name="easyPercent"
            value={formData.easyPercent}
            onChange={handleChange}
            placeholder="30"
          />
        </label>
        <label>
          Medium %
          <input
            type="number"
            name="mediumPercent"
            value={formData.mediumPercent}
            onChange={handleChange}
            placeholder="40"
          />
        </label>
        <label>
          Hard %
          <input
            type="number"
            name="hardPercent"
            value={formData.hardPercent}
            onChange={handleChange}
            placeholder="30"
          />
        </label>
      </div>

      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Generating...' : 'Generate Paper'}
      </button>

      {status === 'success' && (
        <p className="status-msg success">✓ Request sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="status-msg error">✗ Error: {errorMsg}</p>
      )}
    </form>
  );
};

export default GeneratePaperForm;