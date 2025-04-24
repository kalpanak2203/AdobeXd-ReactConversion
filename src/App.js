import React from 'react';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import RightSidebar from './Components/RightSidebar';
import PostCard from './Components/PostCard';
import ProductGrid from './Components/ProductGrid';
import Images from './Assets/Images';
import './App.css';

const dummyPosts = [
  {
    id: 1,
    title: 'Post 1',
    content: 'Content for post 1.',
    image: Images.PostCardImg1,
    avatar: Images.AvatarPC1,
    username: "Lara Leones",
    handle: "@thewallart"

  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Content for post 2.',
    image: Images.PostCardImg2,
    avatar: Images.AvatarPC2,
    username: "Thomas J",
    handle: "@thecustomcreator"
  }
  // {
  //   id: 3,
  //   title: 'Post 3',
  //   content: 'Content for post 3.',
  //   image: Images.PostCardImg2,
  //   avatar: Images.AvatarPC2  },
  // {
  //   id: 4,
  //   title: 'Post 4',
  //   content: 'Content for post 4.',
  //   image: Images.PostCardImg2,
  //   avatar: Images.AvatarPC2  },
];

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Topbar />

      <div style={{ marginLeft: '260px', marginRight: '260px', marginTop: '100px' }}>
        {dummyPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}

        <ProductGrid />
      </div>

      <RightSidebar />
    </div>
  );
}

export default App;
