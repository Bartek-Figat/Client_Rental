import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsBoxArrowInRight } from 'react-icons/bs';
import img_five from '../images/photo/restaurant-1515164783716-8e6920f3e77c.jpg';

import 'swiper/swiper-bundle.min.css';

const ImageSlider = () => {
  return (
    <div>
      <section className="py-6">
        <div className="container">
          <div className="row mb-lg-6">
            <div className="col-md-8">
              <p className="subtitle text-secondary">ZNAJDŹ SWÓJ DOM JUŻ DZIŚ</p>
            </div>
            <div className="col-md-4 d-md-flex align-items-center justify-content-end">
              <Link className="text-muted text-sm" to="/category">
                Zobacz wszystkie nowe miejsca
                <BsBoxArrowInRight className="fas fa-angle-double-right ml-2" />
              </Link>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="container">
            <div className="row">
              {}
              <div
                className="col-sm-6 col-xl-4 mb-5 hover-animate"
                data-marker-id="59c0c8e33b1527bfe2abaf92"
              >
                <div className="card h-100 border-0 shadow">
                  <div
                    className="card-img-top overflow-hidden dark-overlay bg-cover"
                    style={{
                      backgroundImage: `url(${img_five})`,
                      minHeight: `200px`,
                    }}
                  >
                    <a className="tile-link" href="detail.html"></a>
                    <div className="card-img-overlay-bottom z-index-20">
                      <h4 className="text-white text-shadow">Blue Hill</h4>
                      <p className="mb-2 text-xs">
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-gray-300"> </i>
                      </p>
                    </div>
                    <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                      <div className="badge badge-transparent badge-pill px-3 py-2">
                        Restaurants
                      </div>
                      <svg className="svg-icon text-white"></svg>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="text-sm text-muted mb-3">
                      {' '}
                      Cupidatat excepteur non dolore laborum et quis nostrud veniam dolore deserunt.
                      Pariatur dolore ut in elit id nulla. Irur...
                    </p>
                    <p className="text-sm text-muted text-uppercase mb-1">
                      By{' '}
                      <a href="#" className="text-dark">
                        Matt Damon
                      </a>
                    </p>
                    <p className="text-sm mb-0">
                      <a className="mr-1" href="#">
                        Restaurant,
                      </a>
                      <a className="mr-1" href="#">
                        Contemporary
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-sm-6 col-xl-4 mb-5 hover-animate"
                data-marker-id="59c0c8e322f3375db4d89128"
              >
                <div className="card h-100 border-0 shadow">
                  <div
                    className="card-img-top overflow-hidden dark-overlay bg-cover"
                    style={{
                      backgroundImage: `url(${img_five})`,
                      minHeight: `200px`,
                    }}
                  >
                    <a className="tile-link" href="detail.html"></a>
                    <div className="card-img-overlay-bottom z-index-20">
                      <h4 className="text-white text-shadow">Plutorque</h4>
                      <p className="mb-2 text-xs">
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                      </p>
                    </div>
                    <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                      <div className="badge badge-transparent badge-pill px-3 py-2">Restaurant</div>
                      <svg className="svg-icon text-white"></svg>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="text-sm text-muted mb-3">
                      {' '}
                      Proident irure eiusmod velit veniam consectetur id minim irure et nostrud
                      mollit magna velit. Commodo amet proident aliq...
                    </p>
                    <p className="text-sm text-muted text-uppercase mb-1">
                      By{' '}
                      <a href="#" className="text-dark">
                        Matt Damon
                      </a>
                    </p>
                    <p className="text-sm mb-0">
                      <a className="mr-1" href="#">
                        Restaurant,
                      </a>
                      <a className="mr-1" href="#">
                        Fusion
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-sm-6 col-xl-4 mb-5 hover-animate"
                data-marker-id="59c0c8e3a31e62979bf147c9"
              >
                <div className="card h-100 border-0 shadow">
                  <div
                    className="card-img-top overflow-hidden dark-overlay bg-cover"
                    style={{
                      backgroundImage: `url(${img_five})`,
                      minHeight: `200px`,
                    }}
                  >
                    <a className="tile-link" href="detail.html"></a>
                    <div className="card-img-overlay-bottom z-index-20">
                      <h4 className="text-white text-shadow">Junipoor</h4>
                      <p className="mb-2 text-xs">
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                      </p>
                    </div>
                    <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                      <div className="badge badge-transparent badge-pill px-3 py-2">Music club</div>
                      <svg className="svg-icon text-white"></svg>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="text-sm text-muted mb-3">
                      {' '}
                      Lorem amet ex duis in et fugiat consectetur laborum eiusmod labore. Quis
                      cupidatat et do dolor in in magna. Eu sit quis ...
                    </p>
                    <p className="text-sm text-muted text-uppercase mb-1">
                      By{' '}
                      <a href="#" className="text-dark">
                        Matt Damon
                      </a>
                    </p>
                    <p className="text-sm mb-0">
                      <a className="mr-1" href="#">
                        Music,
                      </a>
                      <a className="mr-1" href="#">
                        Techno,
                      </a>
                      <a className="mr-1" href="#">
                        House
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageSlider;
