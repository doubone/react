import React from 'react';
import menuConfig from './../../config/menuConfig';
import { MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Item from 'antd/lib/list/Item';
const { SubMenu } = Menu;
export default class NavLeft extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         menuList:[]
    //     }
    // }
    // componentDidMount(){
    //     this.setState({
    //         menuList:menuConfig
    //     })
    // }
    render() {
        return (
            <Menu mode="vertical">
                {/* <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <MailOutlined />
                            <span>Navigation One</span>
                        </span>
                    }
                >
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu> */}
                {menuConfig.map((item)=>{
                  return   <SubMenu key={item.key} title ={
                        <span>

                            <MailOutlined />
                    <span>{item.title}</span>
                        </span>
                    }></SubMenu>
                })}
            </Menu>
        )
    }
}


