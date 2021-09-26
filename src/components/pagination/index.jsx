import React, { Component } from 'react';
import _ from 'lodash';
import cx from 'classnames';

import { Profile } from '../FriendList/components/Profile';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 4
    };
  }

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { currentPage, itemsPerPage } = this.state;
    const indexOfLastTodo = currentPage * itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
    const _renderList = this.props.renderList.slice(indexOfFirstTodo, indexOfLastTodo);

    !_.isEmpty(_renderList) && _renderList.sort((a, b) => {
      return b.isFavorite - a.isFavorite;
    });

    const renderItems = _.map(_renderList, (user) => {

      return (
        <Profile
          key={user.id}
          user={user}
          addToFavorites={this.props.addToFavorites}
          onClickDelete={this.props.onClickDelete}
        />);
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.renderList.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = _.map(pageNumbers, number => {
      return (
        <span
          key={number}
          id={number}
          onClick={this.handleClick}
          className={cx({ 'active': currentPage === number })}
        >
          {number}
        </span>
      );
    });

    return (
      <div>
        {renderItems}
        <div className="page-numbers flex-center curPointer">
          {renderPageNumbers}
        </div>
      </div>
    );
  }
}

export default Pagination;
