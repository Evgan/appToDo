import React, { Component } from 'react'
import PropTypes from 'prop-types'
class ButtonHideShowDone extends Component {
  static propTypes = {
    hideShowDoneAction: PropTypes.func.isRequired,
    statusBtnHideShowDone: PropTypes.object.isRequired,
  }
  handleClick2 = () => {
    this.props.hideShowDoneAction(this.props.statusBtnHideShowDone)
  }
  render() {
    const label = this.props.statusBtnHideShowDone.label
    return <button onClick={this.handleClick2}>{label}</button>
  }
}
export default ButtonHideShowDone
