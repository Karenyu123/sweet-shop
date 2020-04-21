import axios from 'axios'
import { BASEURL } from '../common/js/const'

const http = axios.create({
  baseURL: BASEURL
})

export default http