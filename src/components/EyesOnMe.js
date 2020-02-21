// Code EyesOnMe Component Here

import React from 'react';

class EyesOnMe extends React.Component {

    blurr = () => {

        console.log('Hey! Eyes on me!')

    }

    focus = () => {

        console.log('Good!')
    }

    render() {
        return (
            <div>
                <button onFocus={this.focus} onBlur={this.blurr}>Eyes on me, please!</button>
            </div>
        )
      }


}

export default EyesOnMe;
