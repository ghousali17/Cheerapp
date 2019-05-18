import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
    
                    <Menu.Item key="1">
                         <Link  to="/#page-top">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link  to="/#about">About</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                         <Link  to="/#signUp">Contact</Link>
                    </Menu.Item>
                    
                
                    {
                        this.props.authenticated ?
                    <Menu.Item key="4">
                         <Link to={`/profile/${this.props.username}/`}>Profile</Link>
                    </Menu.Item>             
                    :
                    <Menu.Item key="4">
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                }
                {
                    this.props.authenticated ?
                    (<Menu.Item key="5" onClick={this.props.logout}>
                        Logout
                    </Menu.Item>):
                    <Menu.Item key="5">
                        <Link to="/signup">signup</Link>
                    </Menu.Item>

                }
                {
                    this.props.authenticated &&
                    ( <Menu.Item key="6">
                        <Link to="/chat">Chat</Link>
                    </Menu.Item>
                    )
                }
                
                    
                    
                </Menu>
                </Header>
                <Content style={{ padding: '0 0px' }}>
                    <div >
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));