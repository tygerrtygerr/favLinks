import React from 'react';
import Table from './Table';
import Form from './Form';
/*LinkContainer:
    -holds the form
    -holds the table
    -passes data between form and table. form form to linkcontainer and then to table*/

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
        this.state ={
            favLinks: []
        }
        
    }

    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */

       const removeLink = (props) =>{
            this.favLinks.splice(index)
            return(
                this.favLinks
            )
       }
       this.setState({
           removeLink
       })

       

    }

    handleSubmit = (event) => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       
       this.setState((state) => ({
           favLinks: state.favLinks.concat([this.state.favLinks])
       }))
    }

    submitForm = handleSubmit => {
        
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                    <Table linkData={this.state.favLinks} onChange={this.onFormSubmit} /> {/*passed linkData prop*/}
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default LinkContainer;