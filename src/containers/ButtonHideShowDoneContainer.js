import React, { Component } from 'react'
import { hideShowDone } from '../actions/DoneActions'
import { connect } from 'react-redux'
import ButtonHideShowDone from '../components/ButtonHideShowDone'
class ButtonHideShowDoneContainer extends Component {
  render() {
    // Кнопка "Скрыть/Показать выполненные" будет появлятся только тогда когда имеется ходябы один отмечанный ЧБ:
    const divButtonHideShowDone = this.props.items.items.some(
      value => value.done
    ) ? ( // some вернёт true если хотябы у одного item value.done=true
      <ButtonHideShowDone
        //hideShowDone={this.hideShowDone}
        statusBtnHideShowDone={this.props.done.statusBtnHideShowDone}
        hideShowDoneAction={this.props.hideShowDoneAction}
      />
    ) : (
      ''
    )
    return <div>{divButtonHideShowDone}</div>
  }
}
const mapStateToProp = store => {
  return {
    done: store.done,
    items: store.items,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideShowDoneAction: e => dispatch(hideShowDone(e)),
  }
}
export default connect(
  mapStateToProp,
  mapDispatchToProps
)(ButtonHideShowDoneContainer)
