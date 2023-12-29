import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className=" min-w-[500px]  max-w-[1500px]" >
      <div className=" w-auto h-80  flex justify-center space-x-[30px] mt-40 ml-40 " >
        <div className=" shadow-xl " >
          <p className=" ">
            Don't have an account?
              <a className="" href="">
                Create a new account
              </a>
          </p>
          <form>
            <input className="" type="email" placeholder="Email address " />
            <br />
            <input className=" " type="password" placeholder="Password" />
          </form>
          <button className="">Login</button>
        </div>
        <div className=" w-1/2 h-80  " >
          <p className="">About</p>
          <h1 className="">Evangadi Networks</h1>

          <p className="">
            No matter what stage of life you are in, whether you’re just
            starting elementary school or being promoted to CEO of a Fortune 500
            company, you have much to offer to those who are trying to follow in
            your footsteps.
            <p className="">
              Wheather you are willing to share your knowledge or you are just
              looking to meet mentors of your own, please start by joining the
              network here.
            </p>
          </p>
          <button className="">HOW IT WORKS</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
