import React, {Component} from 'react';

class NetFlix extends Component {

    render() {
        var movieArray = [
            {
                movieName: "Chucky",
                yearReleased: 2001,
                genre: "Horror"
            },
            {
                movieName: "Aquaman",
                yearReleased: 2019,
                genre:"Horror"
            },
            {
                movieName: "Step Up",
                yearReleased: 2002,
                genre:"Dance"
            }
        ]

        return (
            <div>
<moviesDisplay movieArray />
            </div>
        )
    }
}

export default NetFlix;