import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const [editingOptionIndex, setEditingOptionIndex] = useState(null);
  const [optionText, setOptionText] = useState('');
  const [newOptionText, setNewOptionText] = useState('');
  const { state, dispatch } = useContext(SurveyContext);
  const isEditing = state.ui.editingQuestionId === question.id;

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // TODO: Students will add edit functionality here
  const handleEdit = () => {
    setWorkingText(question.question);
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: isEditing ? null : question.id },
    });
  };

  // TODO: Students will add save functionality here
  const handleSave = () => {
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: { id: question.id, newText: workingText },
    });
    dispatch({ type: 'SET_EDITING_QUESTION', payload: { questionId: null } });
  };

  // TODO: Students will add delete functionality here
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      dispatch({ type: 'DELETE_QUESTION', payload: { id: question.id } });
    }
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          {/* TODO: Students add Edit and Delete buttons here */}
          <button className={styles['edit-btn']} onClick={handleEdit}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      {/* TODO: Students will add conditional controlled form to edit question here */}
      <div className={styles['question-content']}>
        {isEditing ? (
          <div className={styles['edit-form']}>
            <input
              type="text"
              value={workingText}
              onChange={(e) => setWorkingText(e.target.value)}
            />
            <button onClick={handleSave} className={styles['save-btn']}>
              Save
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: 'SET_EDITING_QUESTION',
                  payload: { questionId: null },
                })
              }
              className={styles['cancel-btn']}
            >
              Cancel
            </button>
          </div>
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                {editingOptionIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={optionText}
                      onChange={(e) => setOptionText(e.target.value)}
                    />
                    <button
                      onClick={() => {
                        dispatch({
                          type: 'UPDATE_OPTION_TEXT',
                          payload: {
                            questionId: question.id,
                            optionIndex: index,
                            newText: optionText,
                          },
                        });
                        setEditingOptionIndex(null);
                      }}
                    >
                      Save
                    </button>
                    <button onClick={() => setEditingOptionIndex(null)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <span className={styles['option-text']}>{option}</span>
                    <button
                      onClick={() => {
                        setOptionText(option);
                        setEditingOptionIndex(index);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      disabled={question.options.length <= 2}
                      onClick={() =>
                        dispatch({
                          type: 'DELETE_OPTION_FROM_QUESTION',
                          payload: {
                            questionId: question.id,
                            optionIndex: index,
                          },
                        })
                      }
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className={styles['add-option-row']}>
            <input
              type="text"
              value={newOptionText}
              placeholder="Add new option..."
              onChange={(e) => setNewOptionText(e.target.value)}
            />
            <button
              onClick={() => {
                if (newOptionText.trim()) {
                  dispatch({
                    type: 'ADD_OPTION_TO_QUESTION',
                    payload: {
                      questionId: question.id,
                      optionText: newOptionText.trim(),
                    },
                  });
                  setNewOptionText('');
                }
              }}
            >
              + Add Option
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
