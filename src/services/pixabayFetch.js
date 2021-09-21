export default function pixabayFetch(url, name, page, key) {
  return fetch(
    `${url}?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => res.json());
}
