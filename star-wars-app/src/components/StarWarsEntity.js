import React from 'react';

import people from '../assets/people_sw.jpg';
import planets from '../assets/planets_sw.jpg';
import starships from '../assets/starships_sw.jpg';

import { useNavigate } from 'react-router-dom';

function StarWarsEntity(props) {
  const { entityType } = props;

  const navigate = useNavigate();

  let url;

  if (entityType === 'characters') {
    url = people;
  } else if (entityType === 'planets') {
    url = planets;
  } else {
    url = starships;
  }

  const handleClick = () => {
    navigate(`/${entityType}`);
  };

  return (
    <div className="entity" onClick={handleClick}>
      <div
        style={{
          backgroundImage: `url(${url})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100%',
          height: '250px',
        }}
      ></div>
      <div className="entity-type">{entityType}</div>
    </div>
  );
}

export default StarWarsEntity;
