import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataComponent({ collectionName }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .post('http://localhost:5000/get_collectionData', {
        collection_name: collectionName,
      })
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  }, [collectionName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const showEntityInfo = (entity) => {
    setIsModalOpen(true);

    Object.keys(entity).forEach((e, idx) => {
      if (idx > 0) {
        console.log(e, entity[e]);
      }
    });
  };

  return (
    <>
      {data.map((e, idx) => (
        <div
          key={idx}
          className="entity"
          onClick={() => {
            showEntityInfo(e);
          }}
        >
          {idx + 1}. {e.name}
        </div>
      ))}
    </>
  );
}

export default DataComponent;
