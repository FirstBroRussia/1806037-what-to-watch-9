import * as dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {RatingLevelCountValue, RatingLevel, ModeReceivingStarringData, Values} from '../utils/const';

dayjs.extend(duration);

const getRatingLevel = (ratingCount: number): string => {
  switch (true) {
    case (RatingLevelCountValue.Zero <= ratingCount && ratingCount < RatingLevelCountValue.Three): return RatingLevel.Bad;
    case (RatingLevelCountValue.Three <= ratingCount && ratingCount < RatingLevelCountValue.Five): return RatingLevel.Normal;
    case (RatingLevelCountValue.Five <= ratingCount && ratingCount < RatingLevelCountValue.Eight): return RatingLevel.Good;
    case (RatingLevelCountValue.Eight <= ratingCount && ratingCount < RatingLevelCountValue.Ten): return RatingLevel.VeryGood;
    case (ratingCount === RatingLevelCountValue.Ten): return RatingLevel.Awesome;
    default: throw new Error('ERROR');
  }
};

const getStarringArrayToString = (mode: string, starring: string[]): string => {
  switch (true) {
    case (mode === ModeReceivingStarringData.Overview) : return starring.join(', ');
    case (mode === ModeReceivingStarringData.Details) : return starring.join(', \n');
    default: throw new Error('Передано  невалидное значение в функцию');
  }
};

const convertRunTime = (runTime: number): string => {
  switch (true) {
    case (runTime < Values.SIXTY_VALUE) : return `${runTime}m`;
    case (runTime % Values.SIXTY_VALUE === Values.ZERO_VALUE) : return `${runTime/Values.SIXTY_VALUE}h`;
    case (runTime > Values.SIXTY_VALUE) : {
      const hours = Math.floor(runTime/Values.SIXTY_VALUE);
      const minutes = runTime - (hours * Values.SIXTY_VALUE);
      return `${hours}h ${minutes}m`;
    }
    default : throw new Error ('Невалидное значение');
  }
};

const getDurationFormatTime = (value: number): string => {
  const MINUTE_IN_SECONDS = 60;
  const HOUR_IN_SECONDS = 3600;
  const time = Number(value);

  switch (true) {
    case (time < MINUTE_IN_SECONDS): {
      return dayjs.duration(time, 'seconds').format('-ss');
    }
    case (time >= MINUTE_IN_SECONDS && time < HOUR_IN_SECONDS): {
      return dayjs.duration(time, 'seconds').format('-mm:ss');
    }
    case (time >= HOUR_IN_SECONDS): {
      return dayjs.duration(time, 'seconds').format('-HH:mm:ss');
    }
    default: throw new Error('Невалидное значение');
  }
};

export {dayjs, getRatingLevel, getStarringArrayToString, convertRunTime, getDurationFormatTime};
