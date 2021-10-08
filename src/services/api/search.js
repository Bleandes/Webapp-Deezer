import instance from '../../vendor/Axios';

export function search(searchText = '') {
  return instance.get('/search', {
    params: { q: searchText },
  });
}
