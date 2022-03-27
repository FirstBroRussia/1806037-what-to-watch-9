import * as dayjs from 'dayjs';
import {searchAreaNumberRegExp, searchAllNumbersRegExp, ZERO_VALUE, SIXTY_VALUE, RatingLevelCountValue, RatingLevel, ModeReceivingStarringData} from '../utils/const';

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
    case (runTime < SIXTY_VALUE) : return `${runTime}m`;
    case (runTime % SIXTY_VALUE === ZERO_VALUE) : return `${runTime/SIXTY_VALUE}h`;
    case (runTime > SIXTY_VALUE) : {
      const hours = Math.floor(runTime/SIXTY_VALUE);
      const minutes = runTime - (hours * SIXTY_VALUE);
      return `${hours}h ${minutes}m`;
    }
    default : throw new Error ('Невалидное значение');
  }
};

const getIdFilmFromCurrentPathLocation = (pathname: string) => {
  const intermediateValue = pathname.match(searchAreaNumberRegExp)?.join('');
  const idFilm = intermediateValue?.match(searchAllNumbersRegExp)?.join('');

  return idFilm;
};

export {dayjs, getRatingLevel, getStarringArrayToString, convertRunTime, getIdFilmFromCurrentPathLocation};
