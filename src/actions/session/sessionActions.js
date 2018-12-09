import axios from 'axios';
import { URL, USER_LOGIN } from '../consts';

export const authUser = userInfo => dispatch => {
  axios({
    method: 'post',
    url: `${URL}/login`,
    data: userInfo,
    headers: { contentType: 'application/json' },
  })
    .then(response => dispatch({ payload: response.data, type: USER_LOGIN }))
    .catch(error => console.log(error.response.data.message));
};
