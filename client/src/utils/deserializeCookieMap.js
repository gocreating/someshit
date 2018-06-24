import mapValues from 'lodash/mapValues';

export function deserializeCookie(cookieValue) {
  try {
    let parsed = JSON.parse(cookieValue);
    return parsed;
  } catch (err) {
    return cookieValue;
  }
};

export default (cookieMap) => mapValues(cookieMap, deserializeCookie);
