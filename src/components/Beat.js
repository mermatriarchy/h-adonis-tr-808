import React from 'react';

export default function Beat(props) {
  return (
    <>
      <div className={"beat outline" + (props.isMeasure? ' green-bg light' : '')}>Here's a beat</div>
    </>
  );
}