import React from 'react';
import Beat from './Beat';

export default function Sequence(props) {
  {/* see note in App.js for how I played myself on the isActive prop & its changeability. */}
  {/* The prop isActive means that the beat will be triggered during the sequence */}
  return (
    <>
      {props.totalBeats.map(number => (
        <Beat
          key={number}
          isActive={props.instrumentSequence[number]}
          position={number++}
          currPosition={props.currPosition}
        />
      ))}
    </>
  );
}