import React from 'react';



const Card = (props) => {
    //Destructuring für besseren Code - wenn ohne dann bild.props, name.props und email.props
    const {name, email, bild} = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='' src={bild} width={200} height={200} />
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;