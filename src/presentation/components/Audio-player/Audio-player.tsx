import React, { useState, useRef, useEffect } from 'react';
import ReactHowler from 'react-howler';
import DurationDisplay from 'presentation/components/Duration-display/Duration-display';
import { Styled } from './styles';

const AudioPlayer: React.FC<{ src: string, trackName: string, play?: boolean }> = ({ src, trackName, play }) => {
    const [playing, setPlaying] = useState(false);
    const [loadState, setLoadState] = useState('unloaded');
    const [volume, setVolume] = useState(0.5);
    const [seek, setSeek] = useState(0.0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);
    const playerRef = useRef<ReactHowler>(null);
 
    useEffect(() => {
        const updateSeek = () => {
            if (playerRef.current && playing && !isSeeking) {
                const currentSeek = playerRef.current.seek();
                setSeek((currentSeek / duration) * 100);
                setCurrentTime(currentSeek);
            }
        };

        const intervalId = setInterval(updateSeek, 1000);
        return () => clearInterval(intervalId);
    }, [playing, isSeeking, duration]);

    useEffect(() => {
      setPlaying(false);
    }, [play]);

    const handleTogglePlay = () => {
        setPlaying(!playing);
    }

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
    }

    const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isSeeking) return;
      const newSeek = parseFloat(e.target.value);
      if (isNaN(newSeek)) return;
      setSeek(newSeek);
      setCurrentTime((newSeek / 100) * duration);
    }
    const handleSeekTouch = (e: React.TouchEvent<HTMLInputElement>) => {
      const newSeek = parseFloat(e.currentTarget.value);
      setSeek(newSeek);
      setCurrentTime((newSeek / 100) * duration);
    }

    const handleSeekStart = () => {
      setIsSeeking(true);
    }

    const handleSeekEnd = (e: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>) => {
      if (playerRef.current) {
        const newSeek = parseFloat(e.currentTarget.value);
        setSeek(newSeek);
        playerRef.current.seek((newSeek / 100) * duration);
        setCurrentTime((newSeek / 100) * duration);
      }
      setIsSeeking(false);
    }

    const handleOnLoad = () => {
        if (playerRef.current) {
            setDuration(playerRef.current.duration());
            checkLoadState();
        }
    }

    const checkLoadState = () => {
        if (playerRef.current) {
            const state = playerRef.current.howlerState();
            setLoadState(state);
        }
    }

    return (
        <Styled.Wrapper>
            <ReactHowler
                src={src}
                playing={playing}
                volume={volume}
                ref={playerRef}
                preload={true}
                onLoad={handleOnLoad}
            />
            <Styled.Track>
                {loadState === 'unloaded' ? (
                    <Styled.Loader></Styled.Loader>
                ) : (
                    <DurationDisplay currentTime={currentTime} duration={duration}>
                      <Styled.Input>
                          <input
                            type="range"
                            step="0.01"
                            min="0"
                            max="100"
                            value={isNaN(seek) ? 0 : seek}
                            onChange={handleSeekChange}
                            onMouseUp={handleSeekEnd}
                            onMouseDown={handleSeekStart}
                            onTouchEnd={handleSeekEnd}
                            onTouchStart={handleSeekStart}
                            onTouchMove={handleSeekTouch}
                          />
                          <svg width={'100%'}>
                            <line
                              x1='0px'
                              y1='19px'
                              x2={`${isNaN(seek) ? 0 : seek}%`}
                              y2='19px'
                              strokeWidth='2px'
                              stroke='#164DC4'
                              className="line"
                            />
                          </svg>
                      </Styled.Input>
                    </DurationDisplay>
                )}
            </Styled.Track>
            <Styled.ControlsContainer>
              <Styled.Controls>
                  {loadState === 'loaded' && (
                      <Styled.Button onClick={handleTogglePlay}>
                          {playing
                          ? <svg width="27" height="27" viewBox="3 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="3" height="23" fill="#164DC4" />
                              <rect x="11" width="3" height="23" fill="#164DC4" />
                          </svg>
                          : <svg width="27" height="27" viewBox="2 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 12.5L0.750001 24.1913L0.750002 0.808657L21 12.5Z" fill="#164DC4" />
                          </svg>}
                      </Styled.Button>
                  )}
                  {loadState === 'loaded' && (
                      <Styled.Volume>
                          <Styled.Button>
                              <svg width="22" height="28" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <line x1="6" y1="25" x2="6" y2="15" stroke="#164DC4" strokeWidth="2" />
                                  <line x1="1" y1="25" x2="1" y2="20" stroke="#164DC4" strokeWidth="2" />
                                  <line x1="11" y1="25" x2="11" y2="10" stroke="#164DC4" strokeWidth="2" />
                                  <line x1="16" y1="25" x2="16" y2="5" stroke="#164DC4" strokeWidth="2" />
                                  <line x1="21" y1="25" x2="21" y2="0" stroke="#164DC4" strokeWidth="2" />
                              </svg>
                          </Styled.Button>
                          <Styled.InputVolume>
                              <input
                                  type="range"
                                  step="0.01"
                                  min="0"
                                  max="1"
                                  value={isNaN(volume) ? 0.5 : volume}
                                  onChange={handleVolumeChange}
                                  onTouchStart={(e) => e.stopPropagation()}
                              />
                              <svg width={'100%'}>
                                  <line
                                      x1='0px'
                                      y1='13px'
                                      x2={`${isNaN(volume) ? 50 : volume * 100}%`}
                                      y2='13px'
                                      strokeWidth='2px'
                                      stroke='#164DC4'
                                      className="line"
                                  />
                              </svg>
                          </Styled.InputVolume>
                      </Styled.Volume>
                  )}
              </Styled.Controls>
              {loadState === 'loaded' 
                ? <Styled.Name $loadedState={'loaded'}>{trackName}</Styled.Name>
                : <Styled.Name $loadedState={'unloaded'}>{trackName}</Styled.Name>
              }

            </Styled.ControlsContainer>
        </Styled.Wrapper>
    );
};

export default AudioPlayer;
