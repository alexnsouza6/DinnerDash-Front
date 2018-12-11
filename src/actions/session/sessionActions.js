import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { URL, USER_LOGIN, USER_LOGOUT } from '../consts';
import { history } from '../../index';

export const authUser = userInfo => dispatch => {
  axios({
    method: 'post',
    url: `${URL}/login`,
    data: userInfo,
    headers: { contentType: 'application/json' },
  })
    .then(response => {
      toastr.success('Welcome to DinnerDash', 'Enjoy your Meal!');
      dispatch({ payload: response.data, type: USER_LOGIN });
      console.log(response.data);
      history.push(`/profile/edit/${response.data.id}`);
    })
    .catch(error => {
      if (error.response && error.response.data) console.log(error.response.data.message);
    });
};

export const logoutUser = user => dispatch => {
  axios({
    method: 'delete',
    url: `${URL}/logout`,
    data: user,
    headers: { contentType: 'application/json', authorization: `Bearer ${user.token}` },
  }).then(() => {
    toastr.success('Bye bye!', 'Get Back Soon!');
    dispatch({ payload: {}, type: USER_LOGOUT });
    history.push('/');
  });
};
