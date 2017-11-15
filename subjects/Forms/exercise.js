////////////////////////////////////////////////////////////////////////////////
// Exercise
//
// - When the checkbox is checked:
//   - Fill in the shipping fields with the values from billing
//   - Disable the shipping fields so they are not directly editable
//   - Keep the shipping fields up to date as billing fields change
//   - Hint: you can get the checkbox value from `event.target.checked`
// - When the form submits, console.log the values
//
// Got extra time?
//
// - If there are more than two characters in the "state" field, let the user
//   know they should use the two-character abbreviation
// - If the user types something into shipping, then checks the checkbox, then
//   unchecks the checkbox, ensure the field has the information from
//   before clicking the checkbox the first time
import React from 'react'
import ReactDOM from 'react-dom'
import serializeForm from 'form-serialize'

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.data);
    this.state = {
      checked:false,
      BillingName:'',
      BillingState:'',
      ShipName:'',
      ShipState:''
    }
  }

  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <form>
          <fieldset>
            <legend>Billing Address</legend>
            <p>
              <label>Billing Name: <input type="text" value={this.state.BillingName} onChange={(e)=>{
                e.preventDefault();
                console.log(e.target.value);
                this.setState({BillingName:e.target.value})
              }}/></label>
            </p>
            <p>
              <label>Billing State: <input type="text" size="2" value={this.state.BillingState} onChange={e=>{
                e.preventDefault();
                console.log(e.target.value);
                this.setState({BillingState:e.target.value})
              }}/></label>
            </p>
          </fieldset>

          <br/>

          <fieldset>
            <label><input type="checkbox" onChange={ event => {
              this.setState({checked:!this.state.checked});
              console.log(this.state.BillingName,this.state.BillingState);
              this.setState({ShipName:this.state.BillingName});
              this.setState({ShipState:this.state.BillingState})
            }
            }/> Same as billing</label>
            <legend>Shipping Address</legend>
            <p>
              <label>Shipping Name: <input type="text" value={this.state.checked? this.state.BillingName:this.state.ShipName} onChange={e=>{
                e.preventDefault();
                this.setState({ShipName:e.target.value})
              }}/></label>
            </p>
            <p>
              <label>Shipping State: <input type="text" size="2" value={this.state.checked ? this.state.BillingState:this.state.ShipState} onChange={
                e=>{ e.preventDefault();
                    this.setState({ShipState:e.target.value})
                }
              }/></label>
            </p>
          </fieldset>

          <p>
            <button>Submit</button>
          </p>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<CheckoutForm/>, document.getElementById('app'))
