/* eslint-disable no-console */

import {useState} from 'react';
import {useAppSelector} from '../../../store/store';
import {NameSpace} from '../../../utils/const';
import {getDurationFormatTime} from '../../../utils/utils';

type TimeSliderElementPropsType = {
  videoRef: React.MutableRefObject<null>;
}

function TimeSliderElement({videoRef}: TimeSliderElementPropsType) {
  const durationVideo = useAppSelector((state) => state[NameSpace.PLAYER].durationVideo);
  const videoElement = videoRef.current as unknown as HTMLVideoElement;
  const [time, setTime] = useState(0);
  const [percent, setPercent] = useState(0);

  const videoElementTimeUpdateHandler = (evt: any) => {
    evt.preventDefault();
    const currentTime = Number(evt.target.currentTime);
    const viewedAsAPercentage = Math.floor((currentTime/Number(durationVideo))*100);
    const remainingTime = Math.floor(Number(durationVideo) - currentTime);
    setPercent(viewedAsAPercentage);
    setTime(remainingTime);
  };

  if (videoRef.current !== null) {
    videoElement.addEventListener('timeupdate', videoElementTimeUpdateHandler);
  }

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={percent} max="100"></progress>
        <div className="player__toggler" style={{
          left: `${percent}%`,
        }}
        >Toggler
        </div>
      </div>
      <div className="player__time-value">{getDurationFormatTime(time)}</div>
    </div>
  );
}

export default TimeSliderElement;
