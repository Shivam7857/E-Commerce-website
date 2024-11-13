import React from "react";
import "./Login.css";
import Swal from 'sweetalert2'
const Login =()=> {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c2eadce3-ff0e-4d8d-b3c3-acb2929c515a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "You are Logined!",
                icon: "success"
              });
        }
      };
    return (
        <section className="Contact">
            <form onSubmit= {onSubmit}>
                <h2>Login Page</h2>
                <label>Full Name</label>
                <div className="input-box">
                    <input type="text"className="field" placeholder ="Enter your name" name='name' required/>
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="email"className="field" placeholder ="Enter your email" name='name' required/>
                    </div>
                    <div className="input-box">
                        <label>Contact No.</label>
                     <input type="number"className="field" placeholder ="Enter your number" name='name' required/>
                    </div>
                    <button type="submit">Login</button>
            </form>
        </section>
    )
}
export default Login;