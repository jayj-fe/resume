import axios from 'axios'

const _baseurl = window.location.href.indexOf('localhost') !== -1 ? 'http://localhost:9000/' : 'https://jayj-fe.github.io/';

export default axios.create({
  withCredentials: true,
  // baseURL: 'https://jayj-fe.github.io/',
  // baseURL: 'http://localhost:9000/',
  baseURL : _baseurl,
  headers :{
    post: {
      'Content-Type' : 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin' : '*'
    }
  }
})
