import axios from 'axios';
import { getAccessToken } from './auth';

// const BASE_URL = 'http://localhost:3333';
const BASE_URL = 'https://3333-dot-3108559-dot-devshell.appspot.com';

export {getPublicStartupBattles, getPrivateStartupBattles};

function getPublicStartupBattles() {
  const url = `${BASE_URL}/api/battles/public`;
  return axios.get(url).then(response => response.data);
}

function getPrivateStartupBattles() {
  const url = `${BASE_URL}/api/battles/private`;
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);
}
