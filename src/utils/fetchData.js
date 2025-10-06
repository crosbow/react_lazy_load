const cache = new Map();

export const fetchData = async (url) => {
  if (!cache.has(url)) {
    return cache.set(url, getData(url));
  }

  return cache.get(url);
};

const getData = async (url) => {
  return await getPosts(url);
};

const getPosts = (url) => {
  return fetch(url).then((res) => res.json());
};
