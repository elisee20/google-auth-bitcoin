import React from 'react';
import axios from 'axios';
import { Card } from "tabler-react";
import Price from "format-price";
import {Link} from "react-router-dom";
import "tabler-react/dist/Tabler.css";
import '../App.css';


export default class Bitcoin extends React.Component{
constructor(props){
    super(props);
    this.state={
        token:null
    }
    this.getContent()
    
        }
    getContent=()=>{
        const url= "https://api.coindesk.com/v1/bpi/currentprice.json";
        axios.get(url)
        .then(response =>{
        this.setState({
            data:response.data.bpi,
            token:this.props.location.state? this.props.location.state.token:null
        },()=>console.log(this.state,"token"));
    
        })
        .catch(err => console.log(err))  

}

    render(){
        if (!this.state.data)return (<main><img src="/loading.gif" width="20px" alt="loading"/></main>)
        else if (this.state.data && !this.state.token) return(<main>
            <Link to={"/"} >
            <Card>
            <Card.Alert color="warning">Veuillez vous reconnecter</Card.Alert>
            </Card>
            </Link>
            </main>
        )
        
        else if
        ( this.props.location.state.token && this.state.data)
        return(
            <main>
            <Card>
<Card.Title>Cours du Bitcoin en €</Card.Title>

<Card.Body>{Price.format('fr-FR', 'EUR',this.state.data.EUR.rate_float)}</Card.Body>

            </Card>

            <Card>
<Card.Title>Cours du Bitcoin en $</Card.Title>

<Card.Body>{Price.format('us', 'USD',this.state.data.USD.rate_float)}</Card.Body>

            </Card>
            <Card>
<Card.Title>Cours du Bitcoin en £</Card.Title>

<Card.Body>{Price.format('en-uk', 'GBP',this.state.data.GBP.rate_float)}</Card.Body> 
            </Card>
    
            </main>
        )
        
         
    }


}