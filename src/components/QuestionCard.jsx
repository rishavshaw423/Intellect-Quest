import React, { useState } from 'react';
import './QuestionCard.css';

const QuestionCard = ({ question, onUpdateQuestion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(question);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDraft((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdateQuestion(question.id, draft);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(question);
    setIsEditing(false);
  };

  const handleApprove = () => {
    onUpdateQuestion(question.id, { approved: !question.approved });
  };

  if (isEditing) {
    return (
      <div className="question-card editing">
        <textarea
          name="text"
          value={draft.text}
          onChange={handleChange}
          className="edit-text"
          rows={2}
        />
        <div className="tags-container edit-tags">
          <input
            type="number"
            name="marks"
            value={draft.marks}
            onChange={handleChange}
            className="edit-input"
          />
          <input
            type="text"
            name="bloom"
            value={draft.bloom}
            onChange={handleChange}
            className="edit-input"
          />
          <input
            type="text"
            name="co"
            value={draft.co}
            onChange={handleChange}
            className="edit-input"
          />
        </div>
        <div className="card-actions">
          <button onClick={handleSave} className="btn-save">Save</button>
          <button onClick={handleCancel} className="btn-cancel">Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`question-card ${question.approved ? 'approved' : ''}`}>
      <p className="question-text">{question.text}</p>
      <div className="tags-container">
        <span className="tag tag-marks">Marks: {question.marks}</span>
        <span className="tag tag-bloom">Bloom: {question.bloom}</span>
        <span className="tag tag-co">CO: {question.co}</span>
      </div>
      <div className="card-actions">
        <button onClick={() => setIsEditing(true)} className="btn-edit">Edit</button>
        <button onClick={handleApprove} className="btn-approve">
          {question.approved ? '✓ Approved' : 'Approve'}
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;