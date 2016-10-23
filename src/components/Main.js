import React from 'react';
import Header from 'components/common/Header'
import Menu from 'components/common/Menu'
import Content from 'components/common/Content'
import Aside from 'components/common/Aside'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Menu/>
        <Content>
          {this.props.children}
        </Content>

        <footer className="main-footer">
          <div className="pull-right hidden-xs">
            <b>Version</b> 2.3.6
          </div>
          <strong>Copyright &copy; 2014-2016 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights
          reserved.
        </footer>
        <Aside/>
        <div className="control-sidebar-bg"></div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
