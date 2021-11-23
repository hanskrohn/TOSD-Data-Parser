import React, { useState, useEffect } from 'react';

import '../css/Summary.css';
import { Searching } from './Searching';
import { Grade } from './Grade';
import { Grades } from '../types';

/** Summary Component, Displays Pie Chart, Cases found, and Overall Grade */
const Summary: React.FC = () => {
  // TODO: Get rid of this logic beneath, this is just here to show what the components looks like by switching through them
  const components = [
    <Searching />,
    <Grade grade={Grades.Good} />,
    <Grade grade={Grades.Neutral} />,
    <Grade grade={Grades.Bad} />,
  ];
  const [index, setIndex] = useState<number>(0);
  const [display, setDisplay] = useState<JSX.Element>(<Searching />);
  useEffect(() => {
    if (index > components.length - 1) {
      setIndex(0);
      return;
    }
    setTimeout(() => {
      const i = index + 1;
      setDisplay(components[index]);
      setIndex(i);
    }, 500);
  }, [index]);
  // TODO: Get rid of this top section ^

  return <div className="summary-container grey-container-borders">{display}</div>;
};

export { Summary };
