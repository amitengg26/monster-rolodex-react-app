import React from 'react'
import './card-list.styles.css'
import Card from '../cards/card.component'

const CardList = props => {    
    return (
        // console.log(props)
        
        <div className="card-list">
            {
            props.monsters.map( (monster) => 
              <Card key={monster.id} monster={monster} />
            )
          }
        </div>
    )
}

export default CardList
/*
Card Component <Card />
Pass props
<Card key={monster.id} name={monster.name} image={monster.image}  email={monster.email}

*/