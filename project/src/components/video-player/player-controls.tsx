import PlayPauseButton from './player-controls-parts/play-pause-button';
import TimeSliderElement from './player-controls-parts/time-slider-element';

type PlayerControlsElementPropsType = {
  videoRef: React.MutableRefObject<HTMLVideoElement | null>;
}

function PlayerControls({videoRef}: PlayerControlsElementPropsType) {
  return (
    <div className="player__controls">
      <TimeSliderElement videoRef={videoRef} />

      <div className="player__controls-row">

        <PlayPauseButton videoRef={videoRef} />

        <div className="player__name">Transpotting</div>

        <button type="button" className="player__full-screen">
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  );
}

export default PlayerControls;

