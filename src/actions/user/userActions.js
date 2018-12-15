import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { URL, USER_CREATE, USER_EDITED } from '../consts';
import { history } from '../../index';

export const signUpUser = userInfo => dispatch => axios({
  method: 'post',
  url: `${URL}/users`,
  data: {
    user: {
      name: userInfo.name,
      username: userInfo.username,
      email: userInfo.email,
      password: userInfo.password,
      password_confirmation: userInfo.password_confirmation,
    },
  },
  headers: { contentType: 'application/json' },
})
  .then(response => {
    dispatch({ payload: response.data, type: USER_CREATE });
    toastr.success('Welcome to DinnerDash', 'Enjoy your Meal!');
    history.push(`/profile/edit/${response.data.id}`);
  })
  .catch(error => {
    if (error.response && error.response.data) toastr.error(error.response.data.errors);
  });

export const editUser = (userInfo, userId) => dispatch => {
  const userToken = localStorage.getItem('userToken');
  return axios({
    method: 'patch',
    url: `${URL}/users/${userId}`,
    data: {
      user: {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
        password_confirmation: userInfo.password_confirmation,
      },
    },
    headers: { contentType: 'application/json', authorization: `Bearer ${userToken}` },
  })
    .then(response => {
      dispatch({ payload: response.data, type: USER_EDITED });
      toastr.success('User Info Updated');
    })
    .catch(error => {
      if (error.response && error.response.data) toastr.error(error.response.data.errors);
    });
};
