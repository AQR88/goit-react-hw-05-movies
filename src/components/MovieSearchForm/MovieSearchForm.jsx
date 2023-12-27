import { useState } from 'react';

export const MovieSearchForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    handleSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        name="movie"
        required
        value={query}
        onChange={handleChange}
      ></input>
      <button  type="submit">
        Search Movie
      </button>
    </form>
  );
};