import { connect } from 'react-redux'
import { addBook } from '../actions/bookActions'
import BookList from '../components/BookList'

const mapStateToProps = state => ({
    books: state.books
})

const mapDispatchToProps = dispatch => ({
    addBook: (bookItem) => dispatch(addBook(bookItem))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)