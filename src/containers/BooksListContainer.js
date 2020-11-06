import { connect } from "react-redux";
import BooksList from "../components/BooksList";

const mapStateToProps = (state) => ({
  list: state.books,
});

export default connect(mapStateToProps, null)(BooksList);
