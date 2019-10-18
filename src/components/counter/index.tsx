import React, { useState, useEffect } from 'react';
// @ts-ignore
import useCountdown from 'react-use-countdown';


export default (props: any) => {

  const countdown = useCountdown(() => Date.now() + 10000);
  return (
    <div className="App">
        <h1>{props.title}</h1>
      <div>
        COUNTDOWN: {countdown}
      </div>
    </div>
  );
}

