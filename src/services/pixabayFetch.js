export default function pixabayFetch(name, page) {
  const key = '22673335-b99cca5659da707c56ab45ca0';
  const url = 'https://pixabay.com/api/';
  return fetch(
    `${url}?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => res.json());
}
