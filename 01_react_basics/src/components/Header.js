import React, { Component } from 'react';

const getYear = () =>  {
    return new Date().getFullYear();
};

const user = {
    firstname: 'Yovan',
    lastname: 'Juggoo',
    profession: 'Programmer'
};

class Header extends Component {
    render() {
        const styles = {
            header: {
                background: '#03a9f4'
            },
            logo: {
               color: '#fff',
               fontFamily: 'Anton',
               textAlign: 'center'
            },
            headerList: {
                listStyleType: 'none',
                padding: 0
            }
        };
        return (
            <header style={styles.header}>
                <div style={styles.logo}>This is the logo</div>
                <div>This is the Header</div>
                <ul style={styles.headerList}>
                    <li>Current Year: { getYear() }</li>
                    <li>The value of PI is { Math.PI } </li>
                    <li>My name is {user.firstname} {user.lastname}</li>
                </ul>
            </header>
        );
    }
}

export default Header;