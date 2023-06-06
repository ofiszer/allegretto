import React, { useState } from 'react';

const OpinionForm = ({ addOpinion }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author && content) {
      const opinion = {
        author,
        content
      };
      addOpinion(opinion);
      setAuthor('');
      setContent('');
    }
  };

  return (
    <div>
      <h3>Dodaj opinię:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Autor:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <label>
          Treść:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};

export default OpinionForm;
