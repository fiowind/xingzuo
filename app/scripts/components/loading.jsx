import React from 'react';
import { Link } from 'react-router';

const Loading = (props) => {
  return (
    <div>
      <div className="loader">
        <div className="loader-inner ball-clip-rotate">
          <div></div>
        </div>
      </div>
    </div>
  )
};

export default Loading;