import cookie from 'cookie';
import assign from 'object-assign';
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';
import deserializeCookieMap, { deserializeCookie } from '../utils/deserializeCookieMap';

const SET_COOKIE = 'SET_COOKIE';

let initCookies = deserializeCookieMap(cookie.parse(document.cookie));

export default function reducer(
  state = initCookies, action = {}
) {
  switch (action.type) {
    case SET_COOKIE: {
      return {
        ...state,
        [action.cookie.name]: action.cookie.value,
      };
    }
    default: {
      return state;
    }
  }
};

export const setCookie = (name, value, options) => {
  options = assign({
    path: '/',
  }, options);
  let deserializedValue = deserializeCookie(value);

  return (dispatch, getState) => {
    let serializedValue;

    if (isString(value)) {
      serializedValue = value;
    } else if (isObject(value)) {
      serializedValue = JSON.stringify(value);
    }

    document.cookie = cookie.serialize(
        name, serializedValue, options);

    dispatch({
      type: SET_COOKIE,
      cookie: {
        name,
        value: deserializedValue,
        options,
      },
    });
  };
};

export const setCookies = (cookies, res = null) => {
  return (dispatch) => {
    Object
      .keys(cookies)
      .forEach((name) => dispatch(setCookie(name, cookies[name], {}, res)));
  };
};

export const removeCookie = (name) => {
  return (dispatch, getState) => {
    return dispatch(setCookie(name, '', {
      expires: new Date(1970, 1, 1, 0, 0, 1),
    }));
  };
};
