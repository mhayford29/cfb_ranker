import { connect } from 'react-redux';
import SignUpLoginModal from '../components/LoginModal.jsx';
import { toggleModal } from '../actions/loginModal.js';

var mapStateToProps = (state) => ({})

var mapDispatchToProps = (dispatch) => ({
  toggleLoginModal: (flag) => {
    dispatch(toggleModal(flag))
  }
})

var LoginModalContainer = connect(mapStateToProps, mapDispatchToProps)(SignUpLoginModal)

export default LoginModalContainer;