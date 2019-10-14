import React from 'react';

function Clock() {
    return (
        <React.Fragment>
            <div>
                <h2>{new Date().toLocaleTimeString()}.</h2>
            </div>
        </React.Fragment>
    );
  }
  
  setInterval(Clock, 1000);

export default Clock;