import React, { Component } from 'react'
import style from '../../common/less/Admin.module.less'
import { withRouter } from 'react-router-dom'
import menuList from '../../components/custnomNav/menuList.js'

import { Layout, Menu, Switch } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function handleClick(e) {
    // 点击获取跳转路径通过编程式导航实现跳转
    let { path } = e.item.props
    this.props.history.replace(path)
}

class Admin extends Component {
    renderItem(data) {
        return data.map((item, index) => {
            if (item.children) {
                return <SubMenu key={item.key} title={item.title}>
                    {this.renderItem(item.children)}
                </SubMenu>
            } else {
                return <Menu.Item key={item.key} path={item.path}>
                    {item.title}
                </Menu.Item>
            }
        })
    }
state = {
    theme: 'dark',
    current: '1',
    openKeys: ['sub1'],
};
// submenu keys of first level 侧边栏
rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

//侧边栏
onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({ openKeys });
    } else {
        this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
        });
    }
};

render() {
    return (
        <Layout style={{ minHeight: 100 + "vh" }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                className={style.aee}
            >
                <Menu
                    onClick={handleClick.bind(this)}
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    style={{ width: 200 }}
                    theme={'dark'}
                >
                    {this.renderItem(menuList)}
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}
}

export default withRouter(Admin)