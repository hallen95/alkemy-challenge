import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';


const AddHeroButton = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    countPower(props.stats);
  }, []);

  const countPower = (stats) => {
    let totalCount = 0;
    Object.entries(stats).map((entry) => {
      totalCount = totalCount + parseInt(entry[1]);
    });
    setCount(totalCount);
  };

  const whichButton = (alignment) => {
    if (alignment === 'good' || alignment === 'neutral') {
      return (
        <Button
          className="btn btn-success"
          onClick={() => props.addGood()}
        >
          Añadir al equipo
        </Button>
      );
    } else {
      return (
        <Button
          className="btn btn-danger"
          onClick={() => props.addBad()}
        >
          Añadir al equipo
        </Button>
      );
    }
  };

  return (
    <div>
      {isNaN(count) ? (
        <Button className="btn btn-light" style={{cursor:"default"}}>No disponible</Button>
      ) : (
        whichButton(props.alignment)
      )}
    </div>
  );
};

export default AddHeroButton