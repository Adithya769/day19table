import React from "react";
import './table.css';
import Form from "./form";
import Table from "./table";


class Studentdetails extends React.Component{
    state ={
        characters:[],
    }
    removeCharacter=(index) =>{
        const {characters} = this.state
        this.setState({
            characters:characters.filter((character,i)=>{
                return i !== index
            }),
        })
    }
    handleSubmit = (character)=>{
        this.setState({characters:[...this.state.characters,character]})
    }
    render(){
        const {characters}=this.state
        return(
            <div className= "container">
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit ={this.handleSubmit}/>
            </div>
        )
    }
}

export default Studentdetails;