import React,{Component} from 'react'
import {Card,Table} from 'antd'
import adminApi from '../../api/user.js'


const columns = [
    {
      title: 'id',
      dataIndex: '_id',
      key: 'id',
    },
    {
      title: '账号',
      dataIndex: 'userName',
      key: 'userName',
    },
  ];
  

class Login extends Component{
    state = {
        dataSoure:[]
     }
    refshifList= async()=>{
        let result = await adminApi.list()
        console.log(result)
        this.setState({dataSoure:result.adminList},()=>{
            console.log(this.state.dataSoure)
        })
    }
    componentDidMount(){
        this.refshifList()
    }
    render(){
        return(
            <div>
                <Card title="我的">
                <Table dataSource={this.state.dataSoure} columns={columns}  rowKey="_id"/>;
                </Card>
            </div>
        )
    }
}

export default Login