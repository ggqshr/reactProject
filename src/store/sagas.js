import { takeEvery ,put} from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes';
import {initListAction} from './actionCreators'
import axios from 'axios'

function* getInitList(){
    // 解决跨域
    axios.defaults.withCredentials = true
    const res = yield axios.get('http://127.0.0.1:5000/list.json')
    const action = initListAction(res.data)
    yield put(action)
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST,getInitList)
}

export default mySaga;