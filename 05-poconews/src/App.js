import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()

    this.state = {
      news: [],
      date: new Date()
    }
  }

  componentDidMount() {
    const search1 = "everything?q=reactjs&from=2019-01-16&sortBy=publishedAt"
    const apikey = "76a96cb2ed34441e817f79fc4b0b79ed"
    const search2 = "top-headlines?country=br&category=technology"

    fetch(`https://newsapi.org/v2/${search2}&apiKey=${apikey}`) 
    .then(response => response.json())
    .then(news => this.setState({news: news.articles}))
  }

  render() {
  
    return (
      <div className="App">
        <header className="header">
          <h1>PocoNews</h1>
        </header>
        <main>
        {this.state.news.map(article => {
          return (
            <div key={article.publishedAt} className="article-wrapper">
              <a href={article.url} rel="noopener noreferrer" target="_blank">
                <h1>{article.title}</h1>
                <img alt={article.title} src={article.urlToImage} />
                <p>{article.content}</p>
              </a>
            </div>
          )
        })}
        </main>
        <footer>
          <center>@ 2019</center>
        </footer>
      </div>
    );
  }
}

export default App;
