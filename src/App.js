import { useState } from 'react';

import Articles from './components/articles';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([
    { title: 'first One', text: 'text for first one ', date: '1 April 2020', upVoted: "1" },
    { title: 'second One', text: 'text for second One', date: '2 April 2020', upVoted: "11" },
    { title: 'third One', text: 'text for Third One', date: '3 April 2020', upVoted: "13" },
    { title: 'four One', text: 'text for Ford One', date: '4 April 2020', upVoted: "55" },
    { title: 'sex One', text: 'text for Five One', date: '5 April 2020', upVoted: "22" },
    { title: 'seven One', text: 'text for Five One', date: '6 April 2020', upVoted: "45" },
    { title: 'eight One', text: 'text for Five One', date: '7 April 2020', upVoted: "25" },
    { title: 'nine One', text: 'text for Five One', date: '8 April 2020', upVoted: "525" },
    { title: 'ten One', text: 'text for Five One', date: '9 April 2020', upVoted: "11" },
  ]);

  console.log(articles.slice(), `art.Slice()`);
  
  const sortedByUpvotes = articles.sort((a, b) => b.upVoted - a.upVoted);

  const [updatedArticles, modifyArticles] = useState(sortedByUpvotes);

  return (
    <div className="App">
      <header className="App-header">
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light" style={{ display: 'block' }}>Sort By</label>
          <button data-testid="most-upvoted-link" style={{ marginRight: '2px  ' }} onClick={() => modifyArticles(articles.slice().sort((a, b) => b.upvotes - a.upvotes))} className="small">Most Upvoted</button>
          <button data-testid="most-recent-link" style={{ marginRight: '2px  ' }} onClick={() => modifyArticles(articles.slice().sort((a, b) => new Date(b.date) - new Date(a.date)))} className="small">Most Recent</button>
          <Articles articles={updatedArticles} />

        </div>

      </header>
    </div>
  );
}

export default App;
