import {RECEIVE_LIST} from './mutations_type.js'
import listData from '../data/list_data.js'

export default {
    getList({commit}){
      commit(RECEIVE_LIST,listData)
    }
}
