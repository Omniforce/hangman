const { unwrap } = require('./api-helper');

export const getGame = () => {
  const options = {
    credentials: 'include',
  };

  return fetch('/api/game', options).then(unwrap);
}

export const resetGame = () => {
  const options = {
    credentials: 'include',
    method: 'POST',
  };

  return fetch('/api/reset', options).then(unwrap);
}

export const guessLetter = (letter) => {
  const options = {
    credentials: 'include',
    method: 'POST',
  };

  return fetch('/api/' + letter, options).then(unwrap);
}
