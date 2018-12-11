import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { URL, USER_CREATE, USER_EDITED } from '../consts';

export const signUpUser = userInfo => dispatch => {
  axios({
    method: 'post',
    url: `${URL}/users`,
    data: userInfo,
    headers: { contentType: 'application/json' },
  })
    .then(response => {
      dispatch({ payload: response.data, type: USER_CREATE });
      toastr.success('Welcome to DinnerDash', 'Enjoy your Meal!');
    })
    .catch(error => console.log(error.response.data.message));
};

export const editUser = (userInfo, userId) => dispatch => {
  const userToken = localStorage.getItem('userToken');
  axios({
    method: 'patch',
    url: `${URL}/users/${userId}`,
    data: userInfo,
    headers: { contentType: 'application/json', authorization: `Bearer ${userToken}` },
  }).then(response => {
    dispatch({ payload: response.data, type: USER_EDITED });
    toastr.success('User Info Updated');
  });
};
