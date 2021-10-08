import instance from '../../vendor/Axios';

export function top() {
  return instance.get('/radio');
}
