import React, { Component }   from 'react';
// import JSONDATA from "./sample";
import {useState} from 'react';
import App from './App';
import data from './sample';

 class FoodComponent extends Component {
  
   constructor(props) {
     super(props)
   
     this.state = {
        count:0,
        count1:0,
        count2:0,
        cal1:400,
        total:0,
        // click1:0,
        cal2:80,
        total2:0,
        cal3:65,
        total3:0,
        final:0,
        name1:"Pizza",
        name2:"Apple",
        name3:"Orange",

        persondata:data,
        filterData:[]
     };
   }

   filterData = (e) =>{
      if(e === "Pizza")
      {
          var filteredData = this.state.persondata.filter((data)=>{
            return data.name === "Pizza"
        })
      }
      else if(e === "Apple")
      {
          var filteredData = this.state.persondata.filter((data)=>{
            return data.name === "Apple"
        })
      }
      else if(e === "Orange")
      {
          var filteredData = this.state.persondata.filter((data)=>{
            return data.name === "Orange"
        })
      }
      this.setState({
        ...this.state,
        filterData:filteredData
      })
   }

   incrementone = () =>{
    
    
    this.setState({count:this.state.count+1}) 
    this.setState({total:(this.state.count+1)*this.state.cal1})
    // this.setState({final:this.state.final+this.state.total+this.state.total2+this.state.total3})
     return 
   }
   
  //  add1 = () =>{
     
  //    this.setState({cal1:this.state.cal1*this.state.count })
  //    return
  //  }
   incrementtwo = () =>{

    this.setState({count1:this.state.count1+1}) 
    this.setState({total2:(this.state.count1+1)*this.state.cal2})
    return
  }
  
    
  incrementthree = () =>{
    this.setState({count2:this.state.count2 + 1})
    this.setState({total3:(this.state.count2+1)*this.state.cal3})
    return
  }

  finaltotal = () =>{
    this.setState({final:this.state.total+this.state.total2+this.state.total3})
    return
  }
   
  
   render() {
        
        return (
            
            <div>
            {/*********** *****************************************************************/}

               <div className="box">
                   <h3 style={{marginLeft:'305px'}}>Search</h3>
                   <input type="text" placeholder="search" style={{marginLeft:'305px'}} onChange={this.filterData}></input>
                   <br></br>
                   <h2>{this.state.count} {this.state.name1} cal = {this.state.total}</h2>
                   <h2>{this.state.count1} {this.state.name2} cal = {this.state.total2}</h2>
                   <h2>{this.state.count2} {this.state.name3} cal = {this.state.total3}</h2>

                   {/* <h2>Today's Food {this.state.final} Cal</h2> */}
                   <button onClick={this.finaltotal}>Click Here For Total Calories</button><h2>Today's Food {this.state.final} Cal</h2>
  <article className="media">
    <div className="media-left" >
      <figure className="image is-64x64">
        {/* <img src="https://i.imgur.com/eTmWoAN.png" style={{height:'110px'}}/> */}
      </figure>
    </div>
    <div className="media-content" style={{backgroundColor:'grey',height:'120px',width:'550px',marginLeft:'15px',marginTop:'60px',border:"purple solid 2px"}}>
    <img src="https://i.imgur.com/eTmWoAN.png" style={{height:'110px'}} alt='pizza'/>
      <div className="content" >
        <p>
          <strong style={{marginLeft:'305px'}}>Pizza</strong> <br />
          <large style={{marginLeft:'305px'}} >400 cal</large>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" value={this.state.count}  style={{float:'left',marginLeft:'15px'}}/>
        </div>
        <div className="control" >
          <button className="button is-info" style={{float:'left'}} onClick={this.incrementone}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>

{/*********** *****************************************************************/}

<div className="box">
  <article className="media">
    <div className="media-left" >
      <figure className="image is-64x64">
        {/* <img src="https://i.imgur.com/eTmWoAN.png" style={{height:'110px'}}/> */}
      </figure>
    </div>
    <div className="media-content" style={{backgroundColor:'grey',height:'120px',width:'550px',marginLeft:'15px',marginTop:'80px',border:"purple solid 2px"}}>
    <img src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg" style={{height:'97px',padding:'5px'}}/>
      <div className="content" >
        <p>
          <strong style={{marginLeft:'305px'}}>Apple</strong> <br />
          <large style={{marginLeft:'305px'}} >80 cal</large>
        </p>
      </div>
    </div>
    
    <div className="media-right">
      <div className="field has-addons"> 
        <div className="control">
          <input className="input" value={this.state.count1}  style={{float:'left',marginLeft:'15px'}}/>
        </div>
        <div className="control">
          <button className="button is-info" style={{float:'left'}} onClick={this.incrementtwo}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>


{/************************************************ *************************************/}
<div className="box">
  <article className="media">
    <div className="media-left" >
      <figure className="image is-64x64">
        {/* <img src="https://i.imgur.com/eTmWoAN.png" style={{height:'110px'}}/> */}
      </figure>
    </div>
    <div className="media-content" style={{backgroundColor:'grey',height:'120px',width:'550px',marginLeft:'15px',marginTop:'80px',border:"purple solid 2px"}}>
    <img src="https://i.pinimg.com/originals/05/79/5a/05795a16b647118ffb6629390e995adb.jpg" style={{height:'97px',padding:'7px'}}/>
      <div className="content" >
        <p>
          <strong style={{marginLeft:'305px'}}>Orange</strong> <br />
          <large style={{marginLeft:'305px'}}>65 cal</large>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" value={this.state.count2} style={{float:'left',marginLeft:'15px'}}/>
        </div>
        <div className="control">
          <button className="button is-info" style={{float:'left'}} onClick={this.incrementthree}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
{/*********************************************************************************************************** */}
            </div>
        )
    }
}

export default FoodComponent;