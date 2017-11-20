import React, { Component } from 'react';
// !!! not PropTypes in React - import from 'prop-types'
import PropTypes from 'prop-types'

class Header extends  Component {
    static propTypes = {

        items: PropTypes.array.isRequired,

        // isLoading: PropTypes.bool,
        //
        // submit: PropTypes.func.isRequired,
        //
        // title: PropTypes.string.isRequired,
        //
        // type: PropTypes.oneOf('news','photos'),
        //
        //
        // user: PropTypes.shape({
        //     name: PropTypes.string,
        //     age: PropTypes.number
        // }),
        //
        // // validate array
        // users: PropTypes.arrayOf(
        //
        //     PropTypes.shape({
        //         name: PropTypes.string,
        //         age: PropTypes.number
        //     }),
        //
        // )
    };

    render() {

        console.log('items', this.props.items);

        return (

            <nav>

                <ul>
                    {this.props.items.map((item, index) =>

                        <li key={index}><a href={item.link}>{item.label}</a></li>

                    )}
                </ul>


            </nav>

        )

    }

}

export default Header;