import {RatingLevelCountValue, RatingLevel} from '../utils/const';

function getRatingLevel (ratingCount: number): string | undefined {
  if (RatingLevelCountValue.ZERO <= ratingCount && ratingCount < RatingLevelCountValue.THREE) {
    return RatingLevel.Bad;}
  if (RatingLevelCountValue.THREE <= ratingCount && ratingCount < RatingLevelCountValue.FIVE) {
    return RatingLevel.Normal;}
  if (RatingLevelCountValue.FIVE <= ratingCount && ratingCount < RatingLevelCountValue.EIGHT) {
    return RatingLevel.Good;}
  if (RatingLevelCountValue.EIGHT <= ratingCount && ratingCount < RatingLevelCountValue.TEN) {
    return RatingLevel.VeryGood;}
  if (ratingCount === RatingLevelCountValue.TEN) {
    return RatingLevel.Awesome;}
}

function getStarringArrayToString (starring: string[]): string | undefined {
  return starring.join(', ');
}

export {getRatingLevel, getStarringArrayToString};
