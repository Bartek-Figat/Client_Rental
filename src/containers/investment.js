import React from 'react';
import { FcMindMap } from 'react-icons/fc';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
const investment = () => {
  return (
    <section className="py-6">
      <div className="container">
        <div className="pb-lg-4">
          <p className="subtitle text-secondary">Dlaczego my?</p>
          <h2 className="mb-5">
            Odkryj najlepsze możliwości inwestycyjne wokół siebie
          </h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
            <div className="px-0 pr-lg-4">
              <div className="icon-rounded mb-3 bg-primary-light">
                <FcMindMap className="svg-icon w-2rem h-2rem text-primary" />
              </div>
              <h3 className="h6 text-uppercase">
                Znajdź najlepszy teren inwestycyjny
              </h3>
              <p className="text-muted text-sm">
                Pewnego ranka, gdy Gregor Samsa obudził się z niespokojnych
                snów, on znalazł się przemieniony w swoim łóżku
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
            <div className="px-0 pr-lg-4">
              <div className="icon-rounded mb-3 bg-secondary-light">
                <AiOutlineHome className="svg-icon w-2rem h-2rem text-secondary" />
              </div>
              <h3 className="h6 text-uppercase">Kup nieruchomość</h3>
              <p className="text-muted text-sm">
                Pościel z trudem ją przykrywała i wydawała się gotowa zsuń się w
                każdej chwili. Jego wiele nóg, dół
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
            <div className="px-0 pr-lg-4">
              <div className="icon-rounded mb-3 bg-primary-light">
                <FaHandHoldingUsd className="svg-icon w-2rem h-2rem text-secondary" />
              </div>
              <h3 className="h6 text-uppercase">Zysk</h3>
              <p className="text-muted text-sm">
                Jego pokój, właściwy ludzki pokój, choć trochę za mały, leżał
                spokojnie między czterema znanymi{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default investment;
