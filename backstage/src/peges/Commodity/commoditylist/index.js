import React, { Component } from 'react'
import { Card, Table, message, Button ,Popconfirm,Pagination} from 'antd'
import adminApi from '../../../api/commodity.js'

let rootpath = 'http://47.95.207.1:3000'
class Commodityadd extends Component {
    state = {
        page: 1,
        pageSize: 5,
        list: [],
        count: 0,
        columns: [
            { title: 'id', dataIndex: '_id', key: '_id', width: 120,flex:'left' },
            { title: '名称', dataIndex: 'name', key: 'name', width: 120 },
            { title: '库存', dataIndex: 'stock', key: 'stock', width: 80 },
            { title: '价格', dataIndex: 'price', key: 'price', width: 80 },
            { title: '缩略图', dataIndex: 'path', key: 'path', width: 200 ,render(path){
                return(<img src={rootpath+path} width='100' height='80' ></img>)
            }},
            { title: '描述', dataIndex: 'desc', key: 'desc', width: 120 },
            { title: '单位', dataIndex: 'unit', key: 'unit', width: 80 },
            { title: '状态', dataIndex: 'putaway', key: 'putaway', width: 80 },
            { title: '操作', key: "action", width: 120, render:(hehe)=>{
                return(
                    <div>
                    <Popconfirm title='你确定要删除该商品嘛?'
                        onConfirm={()=>{this.delGoods(hehe._id)}}
                    >
                    <Button type='danger' size='small'>删除</Button>
                    </Popconfirm>
                    <Button type='warn' size='small'>上架</Button>
                    <Button type='primary' size='small'>添加</Button>
                </div>
                )
            }}
        ]
    }


    refshList = async () => {
        let { page, pageSize } = this.state
        let result = await adminApi.list(page, pageSize)
        let { count, code, list, msg } = result
        console.log(result)
        if (code != 0) { return message.error(msg) }
        this.setState({ list, count })
    }

    delGoods= async(_id)=>{
        console.log(adminApi)
        let {code,msg} = await adminApi.del(_id)
        console.log(code)
        if(code){return message.error(msg)}
        this.refshList()
    }

    componentDidMount() {
        this.refshList()
    }

    render() {
        let { list, columns ,page,pageSize,count} = this.state
        console.log(count)
        return (
            <div>
                <Card title='商品管理'>
                    <Table dataSource={list}
                    pagination={false}
                      columns={columns} rowKey="_id"></Table>
                      <Pagination defaultCurrent total={count}
                      onChange={(page,pagesize)=>{
                        this.setState({page},()=>{
                            this.refshList()
                        })
                      }}
                        showQuickJumper
                      />
                </Card>
            </div>
        )
    }
}

export default Commodityadd