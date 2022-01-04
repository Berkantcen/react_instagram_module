import React from 'react';
import { useState, useEffect } from 'react';
// ASSETS
import profilePic from '../img/profile.png';

const Comment = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(468);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    if (isLiked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
  }, [isLiked]);

  return (
    <div className="comment-container">
      <div className="like-container">
        <div className="like-left-section">
          {isLiked ? (
            <i class="fas fa-heart" onClick={handleLike}></i>
          ) : (
            <i class="far fa-heart" onClick={handleLike}></i>
          )}

          <i class="far fa-comment"></i>
          <i class="fas fa-external-link-alt"></i>
        </div>
        <i class="far fa-bookmark"></i>
      </div>
      {/* COMMENTS */}
      <div className="comment-section">
        <div className="comment-header">
          <div className="pictures">
            <img src={profilePic} alt="" />
            <img src={profilePic} alt="" />
            <img src={profilePic} alt="" />
          </div>
          <p>
            Liked by <strong>oguzhanerik</strong> and{' '}
            <strong>{likeCount} others</strong>
          </p>
        </div>
        <div className="comment-body">
          <p>
            <strong>berkantcen</strong> #335 yeni hediyem &#9757; &#9757;
            &#9757;
          </p>
        </div>
        <div className="comment-count">
          <p>View all 3 comments</p>
        </div>
        <div className="comment-date">
          <p>21 September 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
