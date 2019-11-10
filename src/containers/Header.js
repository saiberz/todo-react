import Header from '../components/Header';
import { connect } from 'react-redux';
import { addTodo, setAllDone } from '../actions';

const mapStatetoProps = ({todos}) => {
  return {todos};
};

export default connect(
  mapStatetoProps,
  {addTodo, setAllDone},
)(Header);
