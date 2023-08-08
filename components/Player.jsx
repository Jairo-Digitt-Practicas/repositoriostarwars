import React, { useState, useRef } from 'react';

const Player = () => {
 const [isPlaying, setIsPlaying] = useState(false);
 const [progress, setProgress] = useState(0);
 const videoRef = useRef(null);

const togglePlay = () => {
 if (isPlaying) {
 videoRef.current.pause();
 } else {
 videoRef.current.play();
 }
 setIsPlaying(!isPlaying);
 };

const handleProgress = () => {
 const duration = videoRef.current.duration;
 const currentTime = videoRef.current.currentTime;
 const progress = (currentTime / duration) * 100;
 setProgress(progress);
 };
 return (
 <div>
 <iframe width='560' height='315' src='https://youtu.be/JmPaVpU8_b0' title='YouTube video player' frameborder='0'></iframe>
 </div>
 )
}

export default Player;