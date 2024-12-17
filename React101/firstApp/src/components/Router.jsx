import React, {useEffect, useState} from "react";
import { Routes, Route, Outlet, Link, useParams, Navigate } from "react-router-dom";
function Router() {
  return (
    <>
      <div>Navbar</div>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/about/ceo"><li>CEO</li></Link>
      </ul>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}>
        {/* subrouting */}
            <Route path="company" element = {<Company/>}></Route>
            <Route path="ceo" element = {<Ceo/>}></Route>
        </Route>
        {/* dynamic routing */}
        <Route path="/user/:id" element={<User/>}></Route>
        {/* redirected  */}
        <Route path="/home" element= {<Navigate to="/" />}></Route>
        {/* default route  404 routing*/} 
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </>
  );
}

function Home() {
  return <h1>Home Component</h1>;
}

function About() {
  return (
    <div>
      <h1>About Component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        accusamus odio sint quas porro, fuga ipsa optio fugit quisquam omnis
        voluptas culpa natus totam ullam nemo. Exercitationem odit nam cum.
      </p>
      <Outlet></Outlet>
    </div>
  );
}

function Company() {
    return (
      <>
        <h2>we never layoff</h2>
        <Outlet></Outlet>
      </>
    );
  }

  function Ceo() {
    return (
      <>
        <h2>we do not promote 70 hour work week</h2>
        <Outlet></Outlet>
      </>
    );
  }

  function User() {
    const [user, setUser] = useState(null);
    const {id} = useParams();
    useEffect(() => {
      async function getUsers() {
        let resp = await fetch(`https://fakestoreapi.com/users/${id}`);
        let data = await resp.json();
        console.log(data);
        setUser(data);
      }
      getUsers();
    }, []);
  
    return (
      <>
        {user == null ? (
          <h1>...Loading</h1>
        ) : (
          <>
            <div>I am User {id}</div>
            <li>
              {user.name.firstname}
              {user.name.lastname}
            </li>
            <li>{user.phone}</li>
          </>
        )}
      </>
    );
  }

  function PageNotFound () {
    return (
        <h1>404 Page Not Found</h1>
    )
  }

export default Router;
