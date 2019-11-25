import React, { Component } from 'react'
import { Coba } from '../components'

class Cobaco extends Component {
    state = {
        map : [
            {
                id: 1,
                name : "Amar"
            }, {
                id: 2,
                name : "ubio"
            }, {
                id: 3,
                name : "RIzqon"
            }, {
                id: 4,
                name : "Khoirudin"
            }, {
                id: 5,
                name : "Kopi hitam"
            }, {
                id: 6,
                name : "kopi susu"
            },
        ]
    }
    render() {
        return (
            <div>
                <Coba
                    tes={this.state.map}
                />
            </div>
        )
    }
}
export default Cobaco