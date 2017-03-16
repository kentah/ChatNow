import { connect } from 'react-redux'

import { updateName, updateAccountNumber } from '../actions'
import SignInScreen from '../components/SigninScreen'


const mapStateToProps = (state, props) => (
  {
    name: state.name,
    accountNumber: state.accountNumber,
    navHandler: props.navHandler
  }
)

const mapDispatchToProps = dispatch => (
  {
    onNameUpdate: value => {
      dispatch(updateName(value))
    },
    onAccountNumberUpdate: value => {
      dispatch(updateAccountNumber(value))
    }
  }
)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen)
