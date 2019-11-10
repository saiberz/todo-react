import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { setFilter, deleteCompleted } from '../actions';

const mapStatetoProps = ({todos}) => {
  return {todos};
};

export default connect(
  mapStatetoProps,
  {setFilter, deleteCompleted},
)(Footer);
