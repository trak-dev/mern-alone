export const getTodo = (id) =>
  fetch(`http://localhost:4000/${id}`).then((res) => res.json());
