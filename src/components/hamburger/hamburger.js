import React from 'react';
import './hamburger.css';

export default function Hamburger(props) {
  const { Click, open } = props;
  return (
    <div className="hamburger" onClick={Click}>
      <div
        className="bar"
        style={{ transform: open ? 'rotate(45deg)' : 'rotate(0)' }}
      ></div>
      <div
        className="bar"
        style={{
          transform: open ? 'translateX(200%)' : 'translateX(0)',
          opacity: open ? 0 : 1,
        }}
      ></div>
      <div
        className="bar"
        style={{ transform: open ? 'rotate(-45deg)' : 'rotate(0)' }}
      ></div>
    </div>
  );
}
