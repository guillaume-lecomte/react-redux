import { connect } from "react-redux";
import { addBook } from "../actions/bookActions";
import AddBook from "../components/AddBook";

const mapDispatchToProps = (dispatch) => ({
  add: (bookItem) => dispatch(addBook(bookItem)),
});

export default connect(null, mapDispatchToProps)(AddBook);
