import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map(book => {
			return (
				<li key={book.title} className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return <ul className="list-group col-md-4">{this.renderList()}</ul>;
	}
}

const mapStateToProps = state => {
	return {
		books: state.books,
	};
};

export default connect(mapStateToProps)(BookList);
