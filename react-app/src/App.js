import React, { Component } from 'react';
// import Header from './header';
import RegistrationForm from './registrationForm';



const menu = [

    {
        link: '/home',
        label: 'Home'
    },


    {
        link: '/profile',
        label: 'Profile'
    },

    {
        link: '/contacts',
        label: 'Contacts'
    }


];



class App extends  Component {

    render() {

        // return (
        //
        //     <div>
        //         <Header items={menu} />
        //     </div>
        //
        //     );

        return (

            <div>
                <RegistrationForm />
            </div>

            );
    }

}

export default App;