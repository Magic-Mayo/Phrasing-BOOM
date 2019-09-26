import React, {Component} from 'react';
import Character from './components/Character';
import characters from './characters.json'
import './index.css'

class Archer extends Component {
    state = {
        score: 0,
        highScore: 0,
        characters: characters,
        clicked: [],
        selection: <h2 className="text-center start">Select an image to start!</h2>
    }

    restart = () => {
        this.setState({selection: <h2 className="text-center start">Select an image to start!</h2>})
        this.state.highScore < this.state.score ? this.setState({highScore: this.state.score, score: 0, clicked: []}) : this.setState({score: 0, clicked: []})
    }
    
    handleSelection = (id) => {
        if(this.state.clicked.includes(id)){
            this.selection(false);
            setTimeout(this.restart, 2250);
        } else {
            this.selection(true);
            this.setState({score: this.state.score+1, clicked: [...this.state.clicked, id]});
            setTimeout(this.shuffle, 500);
        }
    }

    selection = (correct) => {
        if(correct){
            this.setState({selection: <h2 className="text-center phrase start">PHRASING!</h2>});
            setTimeout(()=>this.setState({selection: <h2 className="text-center start">PHRASING!</h2>}), 150);
        } else {
            this.setState({selection: <h2 className="text-center start danger font-italic">DANGER ZONE!</h2>});
        }
    }

    shuffle = () => {
        let shuffledArray = [...characters];
        let len = characters.length;
        for(let i = 0; i < len; i += 1) {
            let randomIndex = Math.floor(Math.random() * len);
            [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
        }
        return this.setState({characters: shuffledArray})
    }

    render(){
        return (
            <div>
                <nav className="text-center">
                    <h2 className="score">Score: {this.state.score} | High Score: {this.state.highScore}</h2>
                </nav>
                <div className="jumbotron text-center">
                    <h1 className="font-italic phrasing">PHRASING!&ensp;</h1>
                    <h1 className="font-weight-bolder boom">BOOM!!!</h1>
                    <h3>Select a different image each time to increase your score but remember to watch your phrasing!</h3>
                </div>
                {this.state.selection}
                <div className="container">
                    {this.state.characters.map(all=>{
                        return <Character 
                                image={all.image}
                                key={all.id}
                                id={all.id}
                                handleSelection={this.handleSelection}
                                />
                    })}
                </div>
                <footer className="text-center">
                    <span>&copy;2019</span>
                </footer>
            </div>
        )
    }
}

export default Archer;