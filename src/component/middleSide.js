import React from 'react';
import { Link } from 'react-router-dom';  
import './middleSide.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const MiddleSide = () => {
  return (
    <div className="MiddleSideHome">
      <div className="storyBlock">
        <div className="storyParticular">
          <div className="imageDIv">
            <Link to="/profile/RadhaGupta">  {/* Link to profile */}
              <img className='statusImg' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Profile" />
            </Link>
          </div>
          <div className="profileName">RadhaGupta</div>
        </div>
      </div>
      <div className="postSection">
        <div className="post">
          <div className="postInfo">
            <Link to="/profile/Kajal">  {/* Link to profile */}
              <img className="postInfoImg" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Profile" />
            </Link>
            <div className="postInfousername">Kajal</div>
            <div className="timingInfo">.36min</div>
          </div>
          <div className="postImg">
            <img className='postImhage' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Post" />
          </div>
          <div className="iconsBlock">
            <div className="leftIcon">
              <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
              <AddCommentIcon sx={{ fontSize: "25px" }} />
              <SendIcon sx={{ fontSize: "25px" }} />
            </div>
            <div>
              <BookmarkBorderIcon sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike">
              <img className='likeImg' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
              <img className='likeImg2' src="https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg" alt="" />
            </div>
            <div className="noOfLikes">
              1230 Likes
            </div>
            <div className="postAbout">
              <div className="postAboutName">kajal</div>
              <div className="InfoComment">Happy mother's day...</div>
            </div>
            <div className="noOfComment">view all 50 comments</div>
            <div className="addComment">Add a comment..</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSide;
