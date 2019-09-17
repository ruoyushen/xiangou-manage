import React, { Component, createRef } from 'react'
import SideBar from './sidebar'
import RightContent from './rightcontent'
import MDrawer from '../../components/MDrawer'
import { 
  Layout, 
  Avatar,
  Drawer
} from 'antd'
import './index.less'

const { Header, Footer} = Layout


export default class PrimaryLayout extends Component {

    constructor () {
      super()

      this.oMDrawer = createRef()
    }

    showDrawer = () => {
      this.oMDrawer.current.showDrawer()
    }

    state = {
      visible: false
    }

    render() {
      return (
        <div>
          <Layout style={{ minHeight: '100vh' }}>
          {/* 侧边栏 */}
          <SideBar/> 
          <Layout>
            {/* 头部 */}
            <Header style={{ background: '#fff', padding: 0 }}>
              <div className="avatar-area">
                  <Avatar src='https://img-blog.csdnimg.cn/20190913132853727.jpg'/>
                  <span onClick={ this.showDrawer } className="user-name">WJCHumble</span>|
                  <span className="exit">退出</span>
              </div>
            </Header>
            {/* 右侧内容区 */}
            <RightContent/> 
            {/* 底部 */}
            <Footer style={{ textAlign: 'center' }}> ©CopyRight WJCHumble 2019</Footer>
          </Layout>
        </Layout>
        {/* 抽屉 */}
        <MDrawer ref={ this.oMDrawer }/> 
        </div>
      );
    }
}