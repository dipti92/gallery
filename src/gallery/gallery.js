import React from 'react'
import './gallery.css'
import ImageCard from '../imagecard/image'
class Gallery extends React.Component{

    constructor(props){
        super(props)
        this.state={
            images:[],
            currentadd:""
        };
 }

 onaddchange=(event) =>{
     this.setState({
         currentadd:event.target.value
     });
 };

 onaddimage=()=>{
     const newimages=[...this.state.images];

     newimages.push(this.state.currentadd);

     this.setState({
         images:newimages,
         
     });
     this.clearInput();
    }

     clearInput = () => {
        this.setState({
         currentadd: ""
        });
    }
 
    render=()=>{
        return (
            <div className ="rootcont">
                <h1>------Image Gallery------</h1>

                <div className="inputbox">
                <input onChange={this.onaddchange}
                  value={this.state.currentadd} 
                 type="text" placeholder="Enter Image Url"/>
                <button onClick={this.onaddimage}>Add</button>
                </div>

                <div>
                {this.state.images.map((url) => {
                return <ImageCard imageurl ={url}/>
                })
              }
                </div>
            </div>

        )
        }
        
    }


export default Gallery;