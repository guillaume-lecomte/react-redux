import { connect } from "react-redux";
import { removeBook } from "../actions/bookActions";
import BookDetails from "../components/BookDetails";

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removeBook(id)),
});

export default connect(null, mapDispatchToProps)(BookDetails);
