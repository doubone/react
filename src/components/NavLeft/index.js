import React from 'react';
import menuConfig from './../../config/menuConfig';
import { Menu } from 'antd';
import './index.css'
const { SubMenu } = Menu;
export default class NavLeft extends React.Component {
    renderMenu(data) {
        return data.map(item => {
            if (item.children) {
                return <SubMenu key={item.key} title={item.title}>{this.renderMenu(item.children)}</SubMenu>
            }
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="./logo-ant.svg" alt="" />
                    <h1 >卧龙岗</h1>
                </div>
                <Menu mode="vertical" theme='dark'>
                    {this.renderMenu(menuConfig)}
                </Menu>
            </div>
        )
    }
}


