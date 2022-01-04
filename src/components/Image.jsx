import React from 'react';

import post from '../img/post.png';

const Image = () => {
  return (
    <div className="image-container">
      <img src={post} alt="" className="post-image" />
      <div className="post-info">
        <p>View Insight</p>
        <button>Boost Post</button>
      </div>
    </div>
  );
};

export default Image;
