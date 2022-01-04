import React from 'react';
// COMPONETS
import UserInfo from './components/UserInfo';
import Image from './components/Image';
import Comment from './components/Comment';

function App() {
  return (
    <div className="container">
      <div className="post-container">
        <UserInfo />
        <Image />
        <Comment />
      </div>
    </div>
  );
}

export default App;
