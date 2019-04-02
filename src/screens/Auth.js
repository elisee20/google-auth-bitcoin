import React from 'react';
import GoogleLogin from 'react-google-login';
import{ GOOGLE_KEY} from "../GOOGLE_KEY";
import { Card } from "tabler-react";


export default class Auth extends React.Component{

  state={
    isAuthentificated:false,
    token:null,
    error:false,
  }
  renderAlert=()=>{
    if (this.state.error) return(

      <Card.Alert color="danger">Erreur d'authentification, veuillez recommencer</Card.Alert>

    )


  }
render(){

    const responseGoogle = (response) => {
      if (response.accessToken){

          this.setState({isAuthentificated:true, token:response.accessToken},
            
            ()=>this.props.history.push({
            
                pathname: '/bitcoin',
                state: {
                  token: this.state.token,
                }
              })
              )
            
}

if (response.error) {
  this.setState({error:true})
}  
      }
      
   
      
return (
  <main>

<GoogleLogin
    clientId={GOOGLE_KEY}
    buttonText="Se connecter"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    uxMode="popup"
  />
{this.renderAlert()}

 </main>
)
}
}