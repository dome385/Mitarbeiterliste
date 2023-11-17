import React from "react";
import MitarbeiterListe from "../components/MitarbeiterListe.js";
import Searchbox from "../components/Searchbox.js";
import { mitarbeiter } from "./Mitarbeiter.js";
import './App.css'
import Scroll from '../components/Scroll.js'



class App extends React.Component {
    constructor(){
        super();
        this.state = {
            mitarbeiter: mitarbeiter,
            suchfeld: ''     
        }
    }

    onSearchChange = (event) =>{
        this.setState({suchfeld: event.target.value})
    }

    render(){

        const filterMitarbeiter = this.state.mitarbeiter.filter(mitarbeiter => {
        return mitarbeiter.name.toLowerCase().includes(this.state.suchfeld.toLowerCase());
        })
        return (
            <div className="tc">
            <h1 className="f2">Unsere</h1>
            <h1 className="f2">Mitarbeiter</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <Scroll>
            <MitarbeiterListe mitarbeiter={filterMitarbeiter} />
            </Scroll>
            <p id="untertitel">Diese Bilder wurden mit Midjourney erstellt.</p>
            </div>
        );

    }
    
}


export default App;