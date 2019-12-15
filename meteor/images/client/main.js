import { React } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';


const App = () => {
    return (
        <div>
            React app 2
        </div>
    );
};

    Meteor.startup(() => {
    render(<App />, document.getElementById('react-target'));
});