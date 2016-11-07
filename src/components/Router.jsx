/**
 * Author: liuhanlong
 * Date: 16/10/22
 */
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import Home from 'components/Home';
import App from 'components/Main';
import Index from 'components/dashboard/index'
import Error404 from 'components/common/Error404'

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="dashboard" components={Home}>
        <Route path="index" component={Index}/>
      </Route>
      <Route path="*" component={Error404} />
    </Route>
  </Router>
)
