import React, { useEffect, useState } from 'react';
import DataComponent from './DataComponent';
// import ChildEntity from './ChildEntity';
import searchImg from '../assets/icons8-поиск-50.png';

function EntitySample({ entityType }) {
  const [query, setQuery] = useState('');
  const [filteredComponents, setFilteredComponents] = useState([]);

  const handleSearch = (value) => {
    setQuery(value);
    // const filtered = entity.filter((component) => {
    //   return component.name.toLowerCase().includes(value.toLowerCase());
    // });
    // setFilteredComponents(filtered);
  };

  return (
    <div className="entity-wrapper">
      <div className="entity-name">{entityType}</div>
      <div className="entity-search">
        <input
          type="text"
          placeholder={`Enter your ${entityType.slice(0, -1)} name`}
          onChange={(e) => handleSearch(e.target.value)}
        ></input>
        <img src={searchImg} alt="search"></img>
      </div>
      {/* <div className="entity-create">
        <div onClick={addEntity}>
          Create <span style={{ textTransform: 'lowercase' }}>a random</span>{' '}
          {entityType.slice(0, -1)}
        </div>
      </div> */}
      <div className="entities">
        <DataComponent collectionName={entityType} />
      </div>
    </div>
  );
}

export default EntitySample;
