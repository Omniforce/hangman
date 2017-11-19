const unwrap = response => {
  if (response.status !== 200) {
    console.error('Error fetching data', response.status, response);
    throw new Error(response);
  }

  return response.json();
};

module.exports = {
  unwrap,
}
