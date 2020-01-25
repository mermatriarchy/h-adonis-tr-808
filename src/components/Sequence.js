import React from 'react';
import Beat from './Beat';

export default function Sequence(props) {
  return (
    <>
      {props.totalBeats.map(number => (
        <Beat
          key={number}
        />
      ))}
    </>
  );
}