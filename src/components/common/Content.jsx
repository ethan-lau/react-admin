/**
 * Author: liuhanlong
 * Date: 16/10/13
 */
import React from 'react'

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="content-wrapper">
        {this.props.children}
      </div>
    )
  }
}

export default Content
