import axios from 'axios';

export const signup = async (data) => {
  console.log(data, process.env.REACT_APP_API);
  try {
    if(data.password !== data.passwordConfirm){
      throw new Error('Contraseñas no coinciden');
    }
    const resp = await axios.post(`${process.env.REACT_APP_API}/user/signup`, data);
    return resp.data;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export const login = async (data) => {
  try {
    const resp = await axios.post(`${process.env.REACT_APP_API}/user/login`, data);
    return resp.data;
  } catch (e) {
    console.log(e);
    return false;
  }
}
