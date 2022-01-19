import React, { Component, } from 'react';
import { FlatList } from 'react-native';

import Article  from './newsItem';
import { getLvNews } from './fetchData';


class News extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }

	componentDidMount = () => {
		this.fetchNews();
	};

	fetchNews = () => {
		getLvNews()
			.then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
	};

	 handleRefresh() {
    this.setState(
      {
        refreshing: true
    },
      () => this.fetchNews()
    );
  }

	render() {
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
  );
  }
}

export default News;