import axios from 'axios';
import { URL, USER_CREATE } from '../consts';

export const signUpUser = userInfo => dispatch => {
  axios({
    method: 'post',
    url: `${URL}/users`,
    data: userInfo,
    headers: { contentType: 'application/json' },
  })
    .then(response => dispatch({ payload: response.data, type: USER_CREATE }))
    .catch(error => console.log(error.response.data.message));
};
