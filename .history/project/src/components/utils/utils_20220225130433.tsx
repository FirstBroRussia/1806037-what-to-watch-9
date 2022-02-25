const FILM_CARD_COUNT = 20;


type CustomFilmDataType = {
  title: string,
  imgSrc: string,
  genre: string,
  year: number,
};

const CustomFilmData: CustomFilmDataType = {
  title: 'The Grand Budapest Hotel',
  imgSrc: 'img/the-grand-budapest-hotel-poster.jpg',
  genre: 'Drama',
  year: 2014,
};

export default CustomFilmDataType;
export {CustomFilmData, FILM_CARD_COUNT};

