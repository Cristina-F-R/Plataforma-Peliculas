import '../styles/core/variables.scss';
import '../styles/login.scss';

const Login = ({handleChangeInput, validateUser}) =>{
    
    const handleInput = (ev) =>{
        ev.preventDefault()
         const inputValue = ev.target.value;
         const inputName = ev.target.name; 
         handleChangeInput(inputName, inputValue)        
    }


    const onSubmit = (ev) =>{
        ev.preventDefault();
        validateUser();
    }
    
    return(
        <div className="login">
            <div className="login_container">
                <form action="" className="login_container_form" onSubmit={onSubmit}>
                    <label  className="login_container_form_label" htmlFor='username'>
                        <input type="text" name='username' id='username' className="login_container_form_label_input" placeholder="Username" onChange={handleInput} />
                    </label>
                    <label htmlFor='password' className="login_container_form_label">
                          <input type="text" name='password' id='password' className="login_container_form_label_input" placeholder="Password" onChange={handleInput} />
                    </label>
                    <button className="login_container_form_btn">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login;