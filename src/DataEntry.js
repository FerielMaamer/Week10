import React from "react";

const INITIAL_VALUE = {
    emailAddress: "",
    name: "",
    address:"",
    address2:"",
    city:"",
    postalCode:"",
    isSubmitted:false
}


export default class DataEntry extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {...INITIAL_VALUE}
        this.provinces = ["Choose...", "Alberta","British Columbia", "Manitoba", "New Brunswick",
            "Ontario", "Nova Scotia", "Quebec"]
    }

    onSubmitLogin = (event) => {
        event.preventDefault()
        console.log(this.state)
        console.log("Login Clicked")        
        this.setState({isSubmitted:true})
        console.log(this.state)
    }

    onValueChanged = (event) => {

        this.setState({[event.target.name]: event.target.value})
    }

    render= () => {
        return(
            <>
                <h1>Data Entry Form</h1>
                <form>
                    
                    <div>
                        <label style={{display: "block", textAlign:"center"}} htmlFor="emailAddress">Email Address</label>
                        <input 
                            type="text" 
                            name="emailAddress"
                            placeholder="Enter email"                        
                            style={{width:"100%", margin:"10px", display:"block"}}
                            onChange={event => this.onValueChanged(event)} />
                    </div>
                    <div>
                        <label style={{display: "block", textAlign:"center"}} htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Full Name"
                            style={{width:"100%", margin:"10px", float:"right"}} 
                            onChange={event => this.onValueChanged(event)} />
                    </div>
                    
                    <div>
                        <label style={{display: "block", textAlign:"center"}} for="address">Address</label>
                        <input 
                        id="address"
                        type="text" 
                        name="address"
                        placeholder="1234 Main St"
                        style={{width:"100%", margin:"10px", display:"block"}}
                        onChange={event => this.onValueChanged(event)} />
                    </div>
                    <div style={{width:"100%"}}>
                        <label style={{display: "block", textAlign:"center"}} htmlFor="address2">Address 2</label>
                        <input 
                        type="text" 
                        name="address2"
                        placeholder="Apartment, studio, or floor"
                        style={{width:"100%", margin:"10px", display:"block"}}
                        onChange={event => this.onValueChanged(event)} />
                    </div>
                    <div >
                        <label style={{display: "block", textAlign:"center"}} htmlFor="city">City</label>
                        <input 
                        type="text" 
                        name="city" 
                        style={{width:"100%", margin:"10px", display:"block"}}
                        onChange={event => this.onValueChanged(event)} />
                    </div>
                    <div>
                        <label style={{display: "block", textAlign:"center"}} htmlFor="province">Province</label>
                        <select onChange={this.onValueChanged} name="province" style={{width:"100%", margin:"20px", display:"block"}}>
                        {
                            this.provinces.map(province => (
                                <option key={province}>{province}</option>
                            ))
                        }
                    </select>
                    </div>
                    <div>
                        <label style={{display: "block", textAlign:"center"}} htmlFor="postalCode">Postal Code</label>
                        <input 
                        type="text" 
                        name="postalCode"
                        style={{width:"90%", margin:"10px", display:"block"}} 
                        onChange={event => this.onValueChanged(event)} />
                    </div>
                    
                    <input 
                        type="submit" 
                        name="btnSubmit" 
                        value="Submit" 
                        onClick={this.onSubmitLogin} />
                    
                </form>
                {this.state.isSubmitted &&
                <>
                    <p>Email: {this.state.emailAddress}</p>
                    <p>Full Name: {this.state.name}</p>
                    <p>Address: {this.state.address +" "+ this.state.address2}</p>
                    <p>City: {this.state.city}</p>
                    <p>Province: {this.state.province}</p>
                    <p>Postal Code: {this.state.postalCode}</p>
                </>
                }
            </>
        )
    }
}