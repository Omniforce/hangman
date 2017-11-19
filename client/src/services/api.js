const { unwrap } = require('./api-helper');

export const startGame = () => {
  const options = {
    credentials: 'include',
  };

  return fetch('/game/start', options).then(unwrap);
}

export const getGameStatus = () => {
  const options = {
    credentials: 'include',
  };

  return fetch('/game/status', options).then(unwrap);
}

export const guessLetter = (letter) => {
  const options = {
    credentials: 'include',
    method: 'POST',
  };

  return fetch('/game/' + letter, options).then(unwrap);
}
