import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectArticle } from './actions/articlesAction';

import * as A from './style';

import Header from './components/Header';
import Listing from './components/Listing';
import Details from './components/Details';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
  }

  render() {
    const { articles } = this.props;
    const { selected } = this.state;

    return (
      <Container>
        <A.Wrapper>
          <Header onLogoClick={() => this.setState({ selected: [] })} />
          {selected.length === 0 ? (
            <Listing
              articles={articles}
              onSelectArticle={article => this.setState({ selected: article })}
            />
          ) : (
            <Details
              selectedArticle={selected}
              onResetSelected={() => this.setState({ selected: [] })}
            />
          )}
          <Footer />
        </A.Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = ({ articles }) => {
  return {
    articles
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      selectArticle
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
