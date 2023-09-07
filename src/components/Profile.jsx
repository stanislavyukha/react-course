import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" />
      </div>
      <div>
        Avatar + desc
        <img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" />
      </div>
      <div>
        My posts
        <div>New post</div>
        <div className="posts">
          <div className="item">post1</div>
          <div className="item">post2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
