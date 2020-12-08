import React from 'react';
import ApiContext from '../ApiContext';
import DashboardNavBar from '../DashboardNavBar/DashboardNavBar';
import './AddActivity.css'


class AddActivity extends React.Component{
static contextType = ApiContext;

    handleSubmit = e =>{
        e.preventDefault();
        const { titleInput, durationInput, distanceInput, descriptionInput } = e.target;

    
       
        const activity = {
            name: this.context.loggedUser['fullname'],
            user_id: this.context.loggedUser['id'],
            title: titleInput.value,
            duration: durationInput.value,
            distance: distanceInput.value,
            description: descriptionInput.value
        }
        
        

        this.context.addActivity(activity)

        setTimeout( () => this.props.history.push('/activities'), 500)
        
        
    }
    

    

    render(){
        return(
            <div className='AddActivity'>
                <DashboardNavBar/>
                
                <div className='loginFormContainer'>
                <h2 id='loginheading'>Add Activity</h2>
                <form onSubmit={this.handleSubmit}>
                    <input  type='text' id='titleInput' name='titleInput' placeholder='Title' />
                    <input  type='number' id='durationInput' name='durationInput' placeholder='Duration(minutes)' required/>
                    <input  type='number' id='distanceInput' name='distanceInput' placeholder='Distance(miles)' required/>
                    <input  type='text' id='descriptionInput' name='descriptionInput' placeholder='Notes(Ex: Felt great after the first mile)' required/>
                    <button type='submit' id='activity-submit-button'>Submit</button>
                   
                    
                </form>
                </div>
                    
                    
                    
                
                
            </div>
        
        )
    }
}

export default AddActivity;