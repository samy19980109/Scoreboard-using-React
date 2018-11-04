import React, {PureComponent} from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import Icon from './Icon';

class Player extends PureComponent{

    static PropTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number,
        index: PropTypes.number,
        isHighScore: PropTypes.bool
    }

    render(){
        const { name, score, id, index, changeScore, removePlayer } = this.props;
        return (
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
            <Icon isHighScore={this.props.isHighScore} />
            { name }
            </span>
    
            <Counter score={score} changeScore={changeScore} index={index}/>
        </div>
        );
    }
  }

//   Player.propTypes = {
//       name: PropTypes.string,
//       score: PropTypes.number,
//       id: PropTypes.number,
//       index: PropTypes.number,
//       changeScore: PropTypes.func,
//       removePlayer: PropTypes.func
//   }

  export default Player;