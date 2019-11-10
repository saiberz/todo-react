import { connect } from 'react-redux';
import MainSection from '../components/MainSection';
import { deleteTodo, editTodo, setDone } from '../actions/';


const mapStatesToProps = ({todos, filter}) => {
  return {todos, filter};
};

export default connect(
  mapStatesToProps,
  {deleteTodo, editTodo, setDone},
)(MainSection);
