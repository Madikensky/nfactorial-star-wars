import axios from 'axios';
import React, { useState } from 'react';

export default function ChildEntity({ entityType }) {
  const [data, setData] = useState(null);
  axios
    .get(`http://localhost:5000/create_${entityType.slice(0, -1)}`)
    .then((response) => {
      setData(response.data);
    });

  return (
    <>
      {/* {data.map((e, idx) => (
        <div key={idx}>
          {idx + 1}. {e.name}
        </div>
      ))} */}

      <div key={2}>
        {1}. {data.name}
      </div>
    </>
  );
}
