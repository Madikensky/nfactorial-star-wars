import { useEffect, useRef } from 'react';
import video from '../assets/intro.mp4';

function VideoComponent(props) {
  const videoRef = useRef(null);

  const unmuteVideo = () => {
    videoRef.current.muted = !videoRef.current.muted;
    videoRef.current.volume = 0.1;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 3;
    }
  }, []);

  return (
    <div className="video-wrapper">
      <video
        src={video}
        autoPlay
        loop
        className="intro"
        ref={videoRef}
        muted={true}
      />
      <button onClick={unmuteVideo}>Unmute / Mute</button>
    </div>
  );
}

export default VideoComponent;
