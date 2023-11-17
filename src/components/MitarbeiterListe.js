import React from "react";
//import { mitarbeiter } from './Mitarbeiter.js';
import Card from './Card.js'



const MitarbeiterListe = ({mitarbeiter}) => {

    
    // Mit Map durch Array;
    //manuelle Lösung: 
    //<Card id={mitarbeiter[0].id} name={mitarbeiter[0].name} email={mitarbeiter[0].email} bild={mitarbeiter[0].bild} />
    const mitarbeiterArray = mitarbeiter.map((user, i) => {
        return (
        <Card
        key={i}
        id={mitarbeiter[i].id}
        name={mitarbeiter[i].name}
        email={mitarbeiter[i].email}
        bild={mitarbeiter[i].bild} />
        )
    })

    return(
    <div>
    {mitarbeiterArray}
    </div>
    );
}

export default MitarbeiterListe;