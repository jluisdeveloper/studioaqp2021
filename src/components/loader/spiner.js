
import React from 'react';
import './spiner.scss'

export default function Placeholder() {
  return (
    <div className="placeholder">
      <div className="u-loading">
        <div className="u-loading__symbol">
          <img src="https://studio-front.s3.amazonaws.com/isotipo_blanco.png" alt="studioaqp"/>
        </div>
      </div>
    </div>
  );
}