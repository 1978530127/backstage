import axios from '../utils/utils.js'

class Admin {
    list(){
        let url = '/hehe/admin'
        return axios.get(url)
    }

}

export default new Admin()