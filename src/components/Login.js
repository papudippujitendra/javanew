import React, { useState } from 'react'


const Login = () => {

    const[form,setForm]=useState({username:"",password:""});

     // Hook from react-router to change page programmatically
  
    
      const fetchUsers = async () => {
  // For now, return hardcoded users
  return [
    { username: "Admin", password: "admin@123",email:"admin@gmail.com" },
    { username: "User", password: "user@123" }
  ];
};

    const handleLogin= async(e)=>{
        e.preventDefault();

        // Get the list of users (from your API or wherever)
        const users= await fetchUsers();

        // Check if there is a user whose username and password match the input
        const userFound= users.find(
            (user)=>
                user.username === form.username && user.password === form.password
        );

        if (userFound) {
      alert("Login successful!");
      
    } else {
      alert("Invalid username & password");
    }

      
    };
  return (
    <div className='container-fluid d-flex justiy-content-center mx-auto align-items:center' style={{ backgroundImage:`url(https://t4.ftcdn.net/jpg/02/86/73/71/360_F_286737135_FNEDjbyt7Y33eZ3WUpvY1OkUIUQua4ff.jpg)`,
      height:"100vh",
      backgroundSize: "cover",
        backgroundPosition: "center",
    }}>
       
 <div className="card p-4 mx-auto"
 
        style={{
          width: 500,
          height: 400,
          backgroundImage:
            `url(https://png.pngtree.com/background/20250207/original/pngtree-soft-pastel-floral-design-light-blue-background-picture-image_16257054.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexDirection:'column',
          borderRadius: 8,
          marginTop:'80px',
          marginLeft: '380px',
          display: "flex",
          
          justifyContent: "center",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}>
          <h2>SIGN UP</h2>
  
         <form
         
        onSubmit={handleLogin}
       
      >
        {/* Username input */}
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "4px",
            border: "none",
          }}
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "4px",
            border: "none",
          }}
        />

       <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "4px",
            border: "none",
          }}
        />


        {/* Login button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#f0ad4e",
            border: "none",
            borderRadius: "4px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "10px", textAlign: "center" }}>
          <a href="/verify" style={{ color: "#0d0909ff", textDecoration: "none" }}>
            VerifyPhone Number?
          </a>
        </p>
      </form>
      </div>
    
    </div>
  )
}

export default Login
