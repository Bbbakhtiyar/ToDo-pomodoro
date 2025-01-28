import React from 'react';

const Filter = ({ onFilterChange }) => {
    return (
      <div>
        <button onClick={() => onFilterChange('all')}>Show All</button>
        <button onClick={() => onFilterChange('inProgress')}>Show In Progress</button>
        <button onClick={() => onFilterChange('done')}>Show Done</button>
      </div>
    );
  };

export default Filter;