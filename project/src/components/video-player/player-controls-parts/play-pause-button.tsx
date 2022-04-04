import {setCurrentVideoPlayerStateAction} from '../../../store/slices/video-player-slice';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {NameSpace, VideoEvent} from '../../../utils/const';

type PlayPauseButtonElementPropsType = {
  videoRef: React.MutableRefObject<HTMLVideoElement | null>;
}

function PlayPauseButton({videoRef}: PlayPauseButtonElementPropsType) {
  const dispatch = useAppDispatch();
  const isCurrentVideoPlayerState: string | null = useAppSelector((state) => state[NameSpace.PLAYER].isCurrentVideoPlayerState);

  const handlePlayButtonClick: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    const videoElement = videoRef.current as unknown as HTMLVideoElement;
    if (isCurrentVideoPlayerState === VideoEvent.Pause) {
      videoElement.play();
      dispatch(setCurrentVideoPlayerStateAction(VideoEvent.Play));
    } else {
      videoElement.pause();
      dispatch(setCurrentVideoPlayerStateAction(VideoEvent.Pause));
    }
  };

  return (
    <button onClick={handlePlayButtonClick} type="button" className="player__play">
      <svg viewBox="0 0 19 19" width="19" height="19">
        {
          isCurrentVideoPlayerState === VideoEvent.Play ? (<use xlinkHref="#pause"></use>) : (<use xlinkHref="#play-s"></use>)
        }
      </svg><span>Play</span>
    </button>
  );
}

export default PlayPauseButton;
