import {Component} from 'react'
import Draggable from 'react-draggable';
import './index.css'

class Home extends Component{
    state={name:'',
    bride:'',
    weds:'',
    groom:'',
    date:'',
}


    nameEvent=(event)=>{
        this.setState({name:event.target.value})
    }

    brideEvent=(event)=>{
        this.setState({bride:event.target.value})
    }

    wedsEvent=(event)=>{
        this.setState({weds:event.target.value})
    }

    groomEvent=(event)=>{
        this.setState({groom:event.target.value})
    }

    dateEvent=(event)=>{
        this.setState({date:event.target.value})
    }

    render(){
        const{name,bride,groom,weds,date,edit,tempText}=this.state
        console.log(edit,'edit')
        console.log(tempText,'temp text')
        return(
            <div className='home-container'>
                <div className='image-container'>
                    <Draggable>
                    <h1 className='function-name' onClick={this.editEvent} value={name}>{name}</h1>
                    </Draggable>

                    <Draggable>
                    <h2 className='bride-styles' onClick={this.editEvent} value={bride}>{bride}</h2>
                    </Draggable>

                    <Draggable> 
                    <h4 className='weds-styles' onClick={this.editEvent} value={weds}>{weds}</h4>
                    </Draggable>
                    <Draggable>
                    <h2 className='bride-styles' onClick={this.editEvent} value={groom}>{groom}</h2>
                    </Draggable>

                    <Draggable>
                    <h2 className='date-styles' onClick={this.editEvent} value={date}>{date}</h2>
                    </Draggable>

                </div>

                <form className='form-section'>
                    <div className='each-container'>
                    <label className='label-styles'>function name</label>
                    <input type='text' className='input-box' onChange={this.nameEvent} value={name}/>
                    </div>
                    <div className='each-container'>
                    <label className='label-styles'>Bride</label>
                    <input type='text' className='input-box' onChange={this.brideEvent} value={bride}/>
                    </div>
                    <div className='each-container'>
                    <label className='label-styles'>Weds</label>
                    <input type='text' className='input-box' onChange={this.wedsEvent} value={weds} />
                    </div>
                    <div className='each-container'>
                    <label className='label-styles'>Groom</label>
                    <input type='text' className='input-box' onChange={this.groomEvent} value={groom}/>
                    </div>
                    <div className='each-container'>
                    <label className='label-styles'>function Date</label>
                    <input type='date' className='input-box' onChange={this.dateEvent}  value={date} />
                    </div>
                </form>
               
            </div>
        )
    }
}

export default Home 