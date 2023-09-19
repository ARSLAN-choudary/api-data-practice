import React, { useEffect, useState } from "react";

function Structure() {
  const [users, setUsers] = useState([]);
  const getusers = async () => {
    const response = await fetch(
      "https://api.github.com/users"
    );
    setUsers(await response.json());
  };
  useEffect(() => {
    getusers();
  }, []);
  return (
    <div>
      <div className="container ms-5 ">
      <nav class="navbar  bg-body-tertiary  ">
        <div className="container text-bg-secondary">
           <h1 className="text-center">Gihut Users</h1>
        </div>
        </nav>
        <div className="row ms-5">
          {users.map((curelem) => {
            const{id,avatar_url,login,type,url}=curelem;
            return (
              <div className="col col-md-4 mt-5">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={avatar_url}className="card-img-top"/>
                  <div className="card-body">
                    <h5 className="card-title">{login}</h5>
                    <p className="card-text">{type}</p>
                    <a href="#" className="btn btn-primary">go somewhere </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Structure;
