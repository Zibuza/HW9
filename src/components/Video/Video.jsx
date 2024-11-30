import React, { useRef, useState } from "react";
import videoSource from "/assets/video.mp4";
import "./video.css";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleStart = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressChange = (e) => {
    if (videoRef.current) {
      videoRef.current.currentTime = e.target.value;
      setCurrentTime(e.target.value);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video-player"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src={videoSource} type="video/mp4" />
        
      </video>
      <div className="video-controls">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReplay}>Replay</button>
        <div className="time-display">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
        <input
          type="range"
          className="progress-bar"
          min="0"
          max={duration}
          step="0.1"
          value={currentTime}
          onChange={handleProgressChange}
        />
      </div>
    </div>
  );
}
