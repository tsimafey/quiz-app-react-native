import {useState, useEffect} from 'react';

const useTopicResultsList = (results) => {
  const [resultsList, setResultsList] = useState([]);

  useEffect(() => {
    setResultsList([
      {
        id: 1,
        results: results['level-1'],
      },
      {
        id: 2,
        results: results['level-2'],
      },
      {
        id: 3,
        results: results['level-3'],
      },
      {
        id: 4,
        results: results['level-4'],
      },
      {
        id: 5,
        results: results['level-5'],
      },
      {
        id: 6,
        results: results['level-6'],
      },
      {
        id: 7,
        results: results['level-7'],
      },
      {
        id: 8,
        results: results['level-8'],
      },
      {
        id: 9,
        results: results['level-9'],
      },
      {
        id: 10,
        results: results['level-10'],
      },
    ]);
  }, []);

  return resultsList;
};

export default useTopicResultsList;
