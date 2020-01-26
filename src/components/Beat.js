import React from 'react';

export default function Beat(props) {
  // these are conditionals that dictacte which color is assigned to the beat that's being hit
  // there's probably a better way to do this but time!!!
  const restColor = (props.currPosition == props.position) && !props.isActive && !props.isMeasure;
  const currentHitColor = (props.currPosition == props.position) && props.isActive && !props.isMeasure;
  const measureHitColor = (props.currPosition == props.position) && props.isMeasure;
  return (
    <>
      <div className={"beat outline" + (props.isActive ? ' selected' : '') + 
                      (props.isMeasure ? ' green-bg light' : '') +
                      (restColor ? ' hit xlight' : '') +
                      ((currentHitColor || measureHitColor) ? ' xlight' : '')}>
      </div>
    </>
  );
}