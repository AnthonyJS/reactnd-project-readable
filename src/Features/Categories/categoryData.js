import axios from 'axios'
import { Header, ROOT_URL } from '../../Common/header'

export const getCategories = () =>
    axios.get(`${ROOT_URL}/categories`, Header).then(res => res.data)
