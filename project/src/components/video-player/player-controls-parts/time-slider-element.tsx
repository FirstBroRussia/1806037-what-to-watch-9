import {useEffect, useState} from 'react';
import {useAppSelector} from '../../../store/store';
import {NameSpace} from '../../../utils/const';
import {getDurationFormatTime} from '../../../utils/utils';

type TimeSliderElementPropsType = {
  videoRef: React.MutableRefObject<HTMLVideoElement | null>;
}

function TimeSliderElement({videoRef}: TimeSliderElementPropsType): JSX.Element | null {
  const durationVideo = useAppSelector((state) => state[NameSpace.PLAYER].durationVideo);
  const videoElement = videoRef.current as HTMLVideoElement;
  const [time, setTime] = useState(durationVideo);
  const isVideoState = useAppSelector((state) => state[NameSpace.PLAYER].isCurrentVideoPlayerState);

  const videoElementProgressiveActionHandler = (evt: Event) => {
    if (!isVideoState) {
      return;
    }
    evt.preventDefault();
    const targetElement = evt.target as HTMLVideoElement;
    const currentTime = Number(targetElement.currentTime);
    setTime(currentTime);
  };

  useEffect(() => {
    videoElement?.addEventListener('timeupdate', videoElementProgressiveActionHandler);
    return () => {
      videoElement?.removeEventListener('timeupdate', videoElementProgressiveActionHandler);
    };
  });

  const viewedAsAPercentage: number = Math.floor((time/Number(durationVideo))*100);
  const remainingTime: number = Math.floor(Number(durationVideo) - time);

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={String(viewedAsAPercentage)} max="100"></progress>
        <div className="player__toggler" style={{
          left: `${viewedAsAPercentage}%`,
        }}
        >Toggler
        </div>
      </div>
      <div className="player__time-value">{getDurationFormatTime(remainingTime)}</div>
    </div>
  );
}

export default TimeSliderElement;
