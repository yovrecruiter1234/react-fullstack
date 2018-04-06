import React, { Component } from 'react';
import '../css/style.css';

class Header2 extends Component {
    
    inputChangeHandler(e) {
        console.log(e.target.value);
    }

    logoClickHandler(e) {
        e.persist();
        console.log(
            {
                clientX: e.clientX,
                clientY: e.clientY
            }
        );
    }

    render() {
        return (
            <header id="header2">
                <div className="heading" onMouseOver={(e) => console.log('MouseOver') }>This is header 2</div>
                <div className="logo" onClick={this.logoClickHandler}>Here goes another logo image</div>
                <div><input type="text" onChange={this.inputChangeHandler} /> </div>
            </header>
        );
    }
}

export default Header2;