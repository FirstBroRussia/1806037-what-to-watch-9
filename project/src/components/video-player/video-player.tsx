import {useEffect, useRef} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {fetchGetIdFilmAction} from '../../api/api-action';
import {setFilmIdDataAction} from '../../store/slices/data-slice';
import {setCurrentVideoPlayerStateAction, setDurationVideoAction} from '../../store/slices/video-player-slice';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {NameSpace, VideoEvent} from '../../utils/const';
import PreloaderElement from '../preloader/preloader-element';
import PlayerControls from './player-controls';

function VideoPlayer() {
  const params = useParams();
  const idFilm = Number(params.id);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetIdFilmAction(idFilm));
    return () => {
      dispatch(setFilmIdDataAction(null));
      dispatch(setCurrentVideoPlayerStateAction(null));
    };
  }, [dispatch, idFilm]);

  const videoLink: string | undefined = useAppSelector((state) => state[NameSpace.DATA].idFilmData?.videoLink);

  const handleExitButtonClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate(-1);
  };

  const handlePlayAndPauseVideoChange: React.ReactEventHandler<HTMLVideoElement> = (evt) => {
    evt.preventDefault();
    const videoElement = videoRef.current as HTMLVideoElement;
    switch(evt.type) {
      case (VideoEvent.LoadedData): {
        dispatch(setDurationVideoAction(videoElement.duration));
        break;
      }
      case (VideoEvent.CanPlay): {
        videoElement.play();
        dispatch(setCurrentVideoPlayerStateAction(VideoEvent.Play));
        break;
      }
      case (VideoEvent.Pause): {
        videoElement.pause();
        dispatch(setCurrentVideoPlayerStateAction(VideoEvent.Pause));
        break;
      }
    }
  };


  if (!videoLink) {
    return (
      <PreloaderElement />
    );
  }

  return (
    <div className="player">
      <video
        onLoadedData={handlePlayAndPauseVideoChange}
        onCanPlay={handlePlayAndPauseVideoChange}
        onPlay={handlePlayAndPauseVideoChange}
        onPause={handlePlayAndPauseVideoChange}
        ref={videoRef}
        src={videoLink}
        className="player__video"
      >
      </video>

      <button
        onClick={handleExitButtonClick}
        type="button" className="player__exit"
      >Exit
      </button>
      <PlayerControls videoRef={videoRef} />
    </div>
  );
}

export default VideoPlayer;
