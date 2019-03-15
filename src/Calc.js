import React from 'react';
import {Screen} from './Screen';
import {BigButton} from './BigButton';
import {Button} from './Button';

const CalcStyle = {
    width:'287px',
    height:'359px',
    border: 'solid 2px silver',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft:'0px'
   
}



export class Calc extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            wynik:'0',
            equalA:'',
            equalB:'',
            equalFinal:'',
            sign:''
 

    }
    }
    handleClick=()=> {
        console.log('próba',this);
        if(this.state.wynik!=='0'){
           this.setState({wynik:this.state.wynik+'1'})
        }
        
        else{
            this.setState({wynik:'1'})
        }
    }

    handleClickB=()=> {
        console.log('próba',this);
        if(this.state.wynik!=='0'){
           this.setState({wynik:this.state.wynik+'2'})
        }
        else{
            this.setState({wynik:'2'})
        }
    }
    handleClickC=()=> {
        console.log('próba',this);
        if(this.state.wynik!=='0'){
           this.setState({wynik:this.state.wynik+'3'})
        }
        else{
            this.setState({wynik:'3'})
        }
    }
    handleClickD=()=> {
        console.log('próba',this);
        if(this.state.wynik!=='0'){
           this.setState({wynik:this.state.wynik+'4'})
        }
        else{
            this.setState({wynik:'4'})
        }
    }
    handleClickE=()=> {
        console.log('próba',this);
        if(this.state.wynik!=='0'){
           this.setState({wynik:this.state.wynik+'5'})
        }
        else{
            this.setState({wynik:'5'})
        }
    }
    handleClickF=()=> {
        console.log('próba',this);
        if(this.state.wynik!=='0'){
           this.setState({wynik:this.state.wynik+'6'})
        }
        else{
            this.setState({wynik:'6'})
        }
    }
    handleClickG=()=> {
        console.log('próba',this);
        if(this.state.wynik!=='0'){
           this.setState({wynik:this.state.wynik+'7'})
        }
        else{
            this.setState({wynik:'7'})
        }
    }
    handleClickH=()=> {
        console.log('próba',this);
        if(this.state.wynik!=='0'){
           this.setState({wynik:this.state.wynik+'8'})
        }
        else{
            this.setState({wynik:'8'})
        }
    }
    handleClickI=()=> {
        console.log('próba',this);
        if(this.state.wynik!=='0'){
           this.setState({wynik:this.state.wynik+'9'})
        }
        else{
            this.setState({wynik:'9'})
        }
    }
    handleClickPlus=()=> {
        console.log('próba',this);
        if(this.state.wynik!=='0'){
           this.setState({equalA:this.state.wynik})
           this.setState({wynik:'0'})
           this.setState({sign:'1'})
        }
        else{
            this.setState({wynik:'0'})
        }
    }

    handleClickMinus=()=> {
        console.log('próba',this);
        if(this.state.wynik!=='0'){
           this.setState({equalA:this.state.wynik})
           this.setState({wynik:'0'})
           this.setState({sign:'2'})
        }
        else{
            this.setState({wynik:'0'})
        }
    }

    handleClickTimes=()=> {
        console.log('próba',this);
        if(this.state.wynik!=='0'){
           this.setState({equalA:this.state.wynik})
           this.setState({wynik:'0'})
           this.setState({sign:'3'})
        }
        else{
            this.setState({wynik:'0'})
        }
    }

    handleClickEqual=()=> {
        if (this.state.sign==='1'){
        console.log('próba',this);
        const a=parseInt(this.state.equalA)+parseInt(this.state.wynik)
        if(this.state.wynik!=='0'){
           this.setState({equalB:this.state.wynik})
           this.setState({wynik:a.toString()})
           this.setState({equalFinal:a.toString()})
        }
        else{
            this.setState({wynik:'0'})
        }
    }
    if (this.state.sign==='2'){
        console.log('próba',this);
        const a=parseInt(this.state.equalA)-parseInt(this.state.wynik)
        if(this.state.wynik!=='0'){
           this.setState({equalB:this.state.wynik})
           this.setState({wynik:a.toString()})
           this.setState({equalFinal:a.toString()})
        }
        else{
            this.setState({wynik:'0'})
        }
    }
    if (this.state.sign==='3'){
        console.log('próba',this);
        const a=parseInt(this.state.equalA)*parseInt(this.state.wynik)
        if(this.state.wynik!=='0'){
           this.setState({equalB:this.state.wynik})
           this.setState({wynik:a.toString()})
           this.setState({equalFinal:a.toString()})
        }
        else{
            this.setState({wynik:'0'})
        }
    }
    }
    suma=()=>{
        const a=parseInt(this.state.equalA)+parseInt(this.state.equalB);
        this.setState({equalFinal:a.toString()})
    }
    handleClickClear=()=>{
        this.setState({wynik:'0'})
    }
    render(){

    return(
        
        <div style={CalcStyle}>  
           <Screen name={this.state.wynik} />
           <div style={{display: 'inline', position: 'relative',
        marginLeft:'0px',left:'0'}}>
           <BigButton name={'Clear'} onClick={this.handleClickClear.bind(this)} />
           <Button name={'*'} onClick={this.handleClickTimes.bind(this)}/>
           </div>
           <div style={{display: 'inline', position: 'relative', left:'0'}}>
           <Button name={'7'} onClick={this.handleClickG.bind(this)}/>
           <Button name={'8'} onClick={this.handleClickH.bind(this)}/>
           <Button name={'9'} onClick={this.handleClickI.bind(this)}/>
           <Button name={'-'} onClick={this.handleClickMinus.bind(this)}/>
           </div>
           <div style={{display: 'inline', position: 'relative'}}>
           <Button name={'4'} onClick={this.handleClickD.bind(this)}/>
           <Button name={'5'} onClick={this.handleClickE.bind(this)}/>
           <Button name={'6'} onClick={this.handleClickF.bind(this)}/>
           <Button name={'+'} onClick={this.handleClickPlus.bind(this)}/>
           </div>
           <div style={{display: 'inline', position: 'relative'}}>
           <Button name={'1'} onClick={this.handleClick.bind(this)}/>
           <Button name={'2'} onClick={this.handleClickB.bind(this)}/>
           <Button name={'3'} onClick={this.handleClickC.bind(this)}/>
           <Button name={'='} onClick={this.handleClickEqual.bind(this)}/>
           </div>

          
        </div>
    )
     
}
}