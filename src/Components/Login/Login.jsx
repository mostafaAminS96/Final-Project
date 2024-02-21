// import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { Link,  } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:4000/register', data)
    .then(response => {
      console.log('Form data sent successfully:', response.data);
      
    })
    .catch(error => {
      console.error('Error sending form data:', error);
      
    });
  };
  console.log(getValues());

  return (
    <div className="body">
      <div className=" row row-col-2 p-20px g-30px">
        {/* left */}
        <div className="loginImg container col-6">
          <img src="src\assets\—Pngtree—knowledge tree pencil books stationery_4346186.png" alt="" />
        </div>

        {/* right */}
        <div className=" right col-6 container ">
          <div className="loginInfo">
            <p>
              Welcome To{" "}
              <span style={{ color: "#49BBBD", fontSize: "20px" }}>
                {" "}
                Learnova{" "}
              </span>
            </p>
            <div className="switch">
              <ul>
                <li className="loginButton active">
                  <Link to="/Login">Login</Link>
                </li>
                <li className=" active">
                  <Link to="/Register">Register</Link>
                </li>
              </ul>
            </div>
            <p className="tx">
              With{" "}
              <span style={{ color: "#49BBBD", fontSiz: "20px" }}>
                {" "}
                Learnova ...{" "}
              </span>
              Explore boundless learning opportunities tailored just for you.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="inputBox">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                  })}
                />
                {errors.username && (
                  <p className="error">{errors.username.message}</p>
                )}
              </div>

              <div className="inputBox">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="error">{errors.password.message}</p>
                )}
              </div>

            <div className="forgot">
              <a rel="#" href="#">
                Forgot Password ?
              </a>
            </div>

              <button type="submit" className="login">
                Login
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
