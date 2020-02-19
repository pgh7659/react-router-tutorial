import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <hr/>
        {/* exact : 주어진 경로와 정확히 일치해야 설정한 컴포넌트 로드 */}
        {/* exact 를 하지 않으면, /about 에도 / 가 있기 때문에 Home, About 둘다 로드*/}
        <Route exact path="/" component={Home} />

        {/* Switch 컴포넌트 -> 라우트들을 이 컴포넌트에 감싸면 매칭되는 첫번째 라우트만 로드 */}
        {/* 주의점 :  먼저 비교 할 라우트를 위에 작성(/about 이 먼저 작성되면 /about/:name은 무시됨)*/}
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/posts" component={Posts} />
      </div>
    );
  }
}

export default App;
