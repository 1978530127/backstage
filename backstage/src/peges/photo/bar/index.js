import React, { Component } from 'react'
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react'

class Bar extends Component {
    state = {
        option: {
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: { formatter: '{value}%' },
                    data: [{ value: 50, name: '完成率' }]
                }
            ]
        }
    }

    componentDidMount() {
        let {option,myChart} = this.state
        setInterval(() => {
            option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            this.setState(option, true);
        }, 2000);
    }

    render() {
        let { option } = this.state
        return (
            <div>
                <Card title='树状图'>
                    <ReactEcharts
                        option={option} />
                </Card>
            </div>
        )
    }
}

export default Bar