import {RatingLevelCountValue, RatingLevel, ModeReceivingStarringData} from '../utils/const';

function getRatingLevel (ratingCount: number): string {
  switch (true) {
    case (RatingLevelCountValue.Zero <= ratingCount && ratingCount < RatingLevelCountValue.Three): return RatingLevel.Bad;
    case (RatingLevelCountValue.Three <= ratingCount && ratingCount < RatingLevelCountValue.Five): return RatingLevel.Normal;
    case (RatingLevelCountValue.Five <= ratingCount && ratingCount < RatingLevelCountValue.Eight): return RatingLevel.Good;
    case (RatingLevelCountValue.Eight <= ratingCount && ratingCount < RatingLevelCountValue.Ten): return RatingLevel.VeryGood;
    case (ratingCount === RatingLevelCountValue.Ten): return RatingLevel.Awesome;
    default: throw new Error('ERROR');
  }
}

function getStarringArrayToString (mode: string, starring: string[]): string {
  // console.log(starring);
  switch (true) {
    case (mode === ModeReceivingStarringData.Overview) : return starring.join(', ');
    case (mode === ModeReceivingStarringData.Details) : return starring.join(', <br></br>');
    default: throw new Error('Передано  невалидное значение в функцию');
  }
}


export {getRatingLevel, getStarringArrayToString};
