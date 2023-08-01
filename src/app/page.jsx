'use client'
import React from 'react';
import ReactPlayer from 'react-player';
import video from '../assets/videos/Introducción.mp4';

function IndexPage() {
  return (
    <div>
      <ul>
        <li className="use-client-title ">
        <h1 href="/">Repositorio Star Wars</h1>
        </li>
        <ReactPlayer
        url={video}
        controls/>
      </ul>
    </div>
  );
}
export default IndexPage;