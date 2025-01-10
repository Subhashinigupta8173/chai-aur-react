import React from 'react';
import { useParams } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const { username } = useParams();

  return (
    <div className="profilePage">
      {/* Profile Header */}
      <div className="profileHeader">
        <div className="profilePicture">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Profile" />
        </div>
        <div className="profileInfo">
          <h2>{username}</h2>
          <p>Bio: This is a brief bio about the user.</p>
          <button className="editProfileBtn">Edit Profile</button>
        </div>
      </div>

      {/* Profile Statistics */}
      <div className="profileStats">
        <div className="stat">
          <strong>123</strong>
          <span>Posts</span>
        </div>
        <div className="stat">
          <strong>456</strong>
          <span>Followers</span>
        </div>
        <div className="stat">
          <strong>789</strong>
          <span>Following</span>
        </div>
      </div>

      {/* Posts Section */}
      <div className="postsSection">
        <h3>Posts</h3>
        <div className="postsGrid">
          <img src="https://th.bing.com/th/id/OIP.rWrBc_ddCCmNKcfbxHpQLwHaE6?rs=1&pid=ImgDetMain" alt="Post" />
          <img src="https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1" alt="Post" />
          <img src="https://th.bing.com/th/id/OIP.Jf0NnGpH2AhNM3BtwZufwwHaJ4?rs=1&pid=ImgDetMain" alt="Post" />
          {/* Add more posts */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
