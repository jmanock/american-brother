import React,{Component} from 'react';

class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      showForm: true,
      showThankYou:false,
      email:null,
      name:null
    }
  }
  handleInputChange = (event) =>{
    this.setState({
      [event.target.name]:event.target.value,
    });
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz1ddL3nb5VS0v_TMXTmGTELPdWHkG-yVWTG5YdcKhBByCk9-0/exec';
    const form = document.forms['something'];

    fetch(scriptURL, {method:'POST', body:new FormData(form)})
      .then(response => console.log('Something', response, this.thankYou()))
      .catch(error => console.log('Error!!!', error.message))
  }
  thankYou = () =>{
    this.setState({
      showThankYou:true,
      showForm:false
    })
  }
  render(){
    return(
      <section className='my-5' id='Sign'>
        <div className='container'>
          <div className='row'>
            <p className='text-center col-md-10 mx-auto' style={{fontSize:'1em',fontFamily:'Helvetica Neue'}}>
              Sign Up for the Newsletter
            </p>
            {
              this.state.showForm ?
              <form onSubmit={this.handleSubmit} name='something' className='col-md-10 mx-auto'>
                <div className='form-group'>
                  <input className='form-control form-control-lg' name='name' type='text' placeholder='Name' required onChange={this.handleInputChange} />
                </div>
                <div className='form-group'>
                  <input className='form-control form-control-lg' name='email' type='email' placeholder='Email' required onChange={this.handleInputChange} />
                </div>
                <div className='form-group'>
                  <button type='submit' className='form-control form-control-lg submit'>Submit</button>
                </div>
              </form> : null
            }
            {
              this.state.showThankYou ?
              <div className='col-md-10 mx-auto'>
                <h3>Thank You for your support!</h3>
              </div> : null
            }

          </div>
        </div>
      </section>
    )
  }
}
export default SignUp;
