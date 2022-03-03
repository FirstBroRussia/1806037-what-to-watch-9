import {RatingLevelCountValue, RatingLevel} from '../utils/const';

function getRatingLevel (ratingCount: number): string {
  if (RatingLevelCountValue.Zero <= ratingCount && ratingCount < RatingLevelCountValue.Three) {
    return RatingLevel.Bad;}
  if (RatingLevelCountValue.Three <= ratingCount && ratingCount < RatingLevelCountValue.Five) {
    return RatingLevel.Normal;}
  if (RatingLevelCountValue.Five <= ratingCount && ratingCount < RatingLevelCountValue.Eight) {
    return RatingLevel.Good;}
  if (RatingLevelCountValue.Eight <= ratingCount && ratingCount < RatingLevelCountValue.Ten) {
    return RatingLevel.VeryGood;}
  if (ratingCount === RatingLevelCountValue.Ten) {
    return RatingLevel.Awesome;} else {
    throw new Error('ERROR');
  }
}

function getStarringArrayToString (starring: string[]): string {
  return starring.join(', ');
}

export {getRatingLevel, getStarringArrayToString};
