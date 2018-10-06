import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-dark raleway f-18 text-white">
        <div className="container container-fluid">
          <div className="row">
            <div
              className="col-xl-2 col-lg-7 col-md-2 mt-4 col-12"
              id="uniandes"
            >
                <img
                  className="mw-200 img-fluid"
                  src='logoUniandesBlanco.png'
                  alt=""
                />
            </div>
            <div
              className="col-xl-5 col-lg-7 col-md-5 mt-4 col-12"
              id="info"
            >
              <p className="text-justify">
                 Uniandino siempre - Universidad de los Andes
                 Calle 18A No D-33 Bloque E, Piso 2 | Bogotá - Colombia
              </p>
                 
            </div>

            <div
              className="col-xl-5 col-lg-7 col-md-5 mt-4 col-12"
              id="desarrollado"
            >
              <p className="text-justify font-weight-bold text-warning">Desarrollado por</p>
                 <h6 className="text-justify text-warning">Gabriel Pinto & Vivian Gómez</h6>
            </div>

          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;