import QuestionCard from './QuestionCard';
import './QuestionCard.css';

function QuestionList({ questions, onUpdateQuestion }) {
  return (
    <div className="question-list">
      {questions.map((q) => (
        <QuestionCard key={q.id} question={q} onUpdateQuestion={onUpdateQuestion} />
      ))}
    </div>
  );
}

export default QuestionList;