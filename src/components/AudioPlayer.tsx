
import React, { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  src: string;
  title: string;
  artist?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title, artist }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const setAudioData = () => {
      setDuration(audio.duration);
    };
    
    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };
    
    // Events
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', () => setIsPlaying(false));
    
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);
  
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };
  
  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };
  
  return (
    <div className="bg-muted rounded-md p-4 shadow-md">
      <audio ref={audioRef} src={src} preload="metadata" />
      
      <div className="flex items-center justify-between mb-2">
        <div>
          <h4 className="text-lg font-medium text-ethiopia-gold">{title}</h4>
          {artist && <p className="text-xs text-muted-foreground">{artist}</p>}
        </div>
        
        <button 
          onClick={togglePlayPause}
          className="w-10 h-10 rounded-full bg-ethiopia-gold text-ethiopia-night flex items-center justify-center hover:bg-ethiopia-darkGold transition-colors"
        >
          {isPlaying ? (
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </button>
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="text-xs text-muted-foreground w-8">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleTimeChange}
          className="w-full h-1 bg-muted-foreground/50 rounded-full appearance-none cursor-pointer"
          style={{
            backgroundSize: `${(currentTime / duration) * 100}% 100%`,
            backgroundImage: 'linear-gradient(#D4AF37, #D4AF37)'
          }}
        />
        <span className="text-xs text-muted-foreground w-8">{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default AudioPlayer;
