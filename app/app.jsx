var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var About = require('About');
var Weather = require('Weather');
var Examples = require('Examples');

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!sass!appStyles')

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<Route path="examples" component={Examples}/>
			<IndexRoute component={Weather}></IndexRoute>
		</Route>
	</Router>,
  document.getElementById('app')
);
