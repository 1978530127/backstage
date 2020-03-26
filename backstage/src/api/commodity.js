import axios from '../utils/utils.js'

class Admin{
    list(page =1,pageSize = 2){
        let url = '/hehe/goods'
        return axios.get(url,{params:{page,pageSize}})
    }
    del(_id){
        let url =`/hehe/goods/${_id}`
        return axios.delete(url)
      }
}

export default new Admin()