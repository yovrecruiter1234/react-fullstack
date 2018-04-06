import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Header2 from './components/Header2';

const App = () => {
    return (
            <div>
                <h1>This is a test!</h1>
                <Header/>
                <Header2/>
            </div>
        );
}

//ReactDom.render(<App/>, root);
//ReactDom.render(<App/>, document.getElementById('root));


/*const App = () => {
    return React.createElement('h1', {className: 'title'}, React.createElement('div', null, 'This is a test!'))
}*/

ReactDom.render(<App/>, document.querySelector('#root'));