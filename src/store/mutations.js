import {
  RECEIVE_LIST
} from './mutations_type.js'

export default {
  [RECEIVE_LIST](state, val) {
    state.listTem = val;
  }
}
