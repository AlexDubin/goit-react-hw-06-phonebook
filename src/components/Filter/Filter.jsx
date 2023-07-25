import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const Filter = ({ filter }) => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <label htmlFor="findInput">Find contacts by name or number</label>
      <input
        type="text"
        id="findInput"
        placeholder="Search contacts"
        value={filter}
        name="filter"
        onChange={handleChange}
        required
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
