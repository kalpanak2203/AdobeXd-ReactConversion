import React from 'react';
import './PostCard.css';
import { AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import Images from '../Assets/Images';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.avatar} alt="user" className="avatar" />
        <div className="user-info">
          <h4>{post.username}</h4>
          <p>@{post.handle}</p>
        </div>
        <BsThreeDots className="menu-icon" />
      </div>

      <p className="post-text">
        {post.text} <span className="read-more">Read More</span>
      </p>

      <img src={post.image} alt="post content" className="post-image" />

      <div className="reactions">
        <div><AiOutlineHeart /> {post.likes}</div>
        <div><AiOutlineComment /> {post.comments}</div>
        <div><AiOutlineShareAlt /> {post.shares}</div>
      </div>
    </div>
  );
};

export default PostCard;
