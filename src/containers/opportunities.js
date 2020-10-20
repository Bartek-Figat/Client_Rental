import React from 'react';
import { Link } from 'react-router-dom';
const opportunities = () => {
  return (
    <section>
      <div className="container bg-gray-100 py-6 px-3 px-lg-5 rounded-lg shadow-sm">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-left">
            <p className="subtitle text-secondary">
              Zacznij korzystać z katalogu już dziś
            </p>
            <p className="text-lg">
              Katalog to najlepszy sposób na znalezienie świetnych lokalnych
              firm
            </p>
            <p className="text-muted mb-0">
              Pewnego ranka, gdy Gregor Samsa obudził się z niespokojnych snów,
              znalazł przekształcił się w swoim łóżku
            </p>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="text-center">
              {!localStorage.getItem('token') ? (
                <p className="mb-2">
                  <Link className="btn btn-lg btn-primary" to="/register">
                    Utwórz swoje konto
                  </Link>
                  <p className="text-muted text-small">Za darmo!!</p>
                </p>
              ) : (
                <Link className="btn btn-lg btn-primary" to="/admin">
                  Pulpit
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default opportunities;
