/* eslint-disable no-alert */
const linkToServer = 'https://9.react.pages.academy/wtw';
// const authorizationToken = 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=';

const enum RequestMethod {
  Get = 'GET',
  Post = 'POST',
  Delete = 'DELETE'
}

const enum GetRequest {
  Promo = '/promo/',
  Films = '/films/',
  Similar = '/similar',
  Favorite = '/favorite',
  Comments = '/comments/',
  Login = '/login'
}

type objRequest = {
  method: string,
  headers: Headers,
  body: any
};

const requestToServer = async (link: string, optionRequest: objRequest) => await fetch(link, optionRequest);

const getPromoFilm: any = async () => {
  const link = `${linkToServer}${GetRequest.Promo}`;
  const headers: Headers = new Headers();

  const objRequest: objRequest = {
    method: RequestMethod.Get,
    headers: headers,
    body: null,
  };

  try {
    const response = await requestToServer(link, objRequest);
    if (response.ok) {
      return response.json();
    }
    throw response;
  } catch {
    alert('ОШИБКА ЗАПРОСА!!!');
  }
};


const getFilmsList: any = async () => {
  const link = `${linkToServer}${GetRequest.Films}`;
  const headers: Headers = new Headers();

  const objRequest: objRequest = {
    method: RequestMethod.Get,
    headers: headers,
    body: null,
  };

  try {
    const response = await requestToServer(link, objRequest);
    if (response.ok) {
      return response.json();
    }
    throw response;
  } catch {
    alert('ОШИБКА ЗАПРОСА!!!');
  }
};

export {getPromoFilm, getFilmsList};
