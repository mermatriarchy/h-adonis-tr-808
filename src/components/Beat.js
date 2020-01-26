import React from 'react';

export default function Beat(props) {
  return (
    <>
      <div className={"beat outline" + (props.isActive? ' active' : '') + 
                      (props.isMeasure? ' green-bg light' : '')}>
      </div>
    </>
  );
}