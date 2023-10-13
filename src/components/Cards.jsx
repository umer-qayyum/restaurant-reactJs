import React from "react";

const Cards = ({ menu }) => {
  return (
    <>
      <div className="container p-3">
        <div className="row text-center p-3">
          {menu.map((value) => {
            return (
              <div className="col-lg-4 text-center p-3" key={value.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={value.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{value.name}</h5>
                    <p className="card-text">{value.description}</p>
                    <div className="d-flex justify-content-around">
                      <p className="">
                        <b>Prize :</b> {value.prize}
                      </p>
                      <a href="#" className="btn btn-success">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
