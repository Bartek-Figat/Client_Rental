import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { GiPriceTag } from 'react-icons/gi';
import img_one from '../images/photo/photo-1484154218962-a197022b5858.jpg';
import img_two from '../images/photo/photo-1488805990569-3c9e1d76d51c.jpg';
import img_three from '../images/photo/photo-1467987506553-8f3916508521.jpg';
import img_four from '../images/photo/photo-1426122402199-be02db90eb90.jpg';
import img_five from '../images/photo/restaurant-1515164783716-8e6920f3e77c.jpg';
import 'swiper/swiper-bundle.min.css';



const ImageSlider = () => {
  return (
    <div>
      <section className="py-6">
        <div className="container">
          <div className="row mb-lg-6">
            <div className="col-md-8">
              <p className="subtitle text-secondary">
                ZNAJDŹ SWÓJ DOM JUŻ DZIŚ
              </p>
              
            </div>
            <div className="col-md-4 d-md-flex align-items-center justify-content-end">
              <Link className="text-muted text-sm" to="/">
                Zobacz wszystkie nowe miejsca
                <BsBoxArrowInRight className="fas fa-angle-double-right ml-2" />
              </Link>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="swiper-container swiper-container-mx-negative items-slider-full px-lg-5 pt-3">
            <Swiper spaceBetween={1} slidesPerView={5}>
              <SwiperSlide>
                <div className="swiper-wrapper pb-5">
                  <div className="swiper-slide h-auto px-2">
                    <div
                      className="w-100 h-100 hover-animate"
                      data-marker-id="59c0c8e33b1527bfe2abaf92"
                    >
                      <div className="card h-100 border-0 shadow">
                        <div className="card-img-top overflow-hidden gradient-overlay">
                          {' '}
                          <img
                            className="img-fluid"
                            src={img_five}
                            alt="Modern, Well-Appointed Room"
                          />
                          <a className="tile-link" href="detail-rooms.html"></a>
                        </div>
                        <div className="card-body d-flex align-items-center">
                          <div className="w-100">
                            <h6 className="card-title">
                              <a
                                className="text-decoration-none text-dark"
                                href="detail-rooms.html"
                              >
                                Modern, Well-Appointed Room
                              </a>
                            </h6>
                            <p className="text-sm text-secondary card-subtitle mb-2">
                              <i className="fa fa-map-marker text-secondary opacity-4 mr-1"></i>
                              San Francisco
                            </p>
                            <p className="text-sm text-muted text-uppercase">
                              House
                            </p>
                            <p className="card-text d-flex justify-content-between text-gray-800 text-sm">
                              <span className="mr-1">
                                <i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1"></i>
                                350 m<sup>2</sup>{' '}
                              </span>
                              <span className="mr-1">
                                <i className="fa fa-bed text-primary opacity-4 text-xs mr-1"></i>
                                3
                              </span>
                              <span className="mr-1">
                                <i className="fa fa-bath text-primary opacity-4 text-xs mr-1"></i>
                                2
                              </span>
                              <span>
                                <GiPriceTag className="fa fa-tag text-primary opacity-4 text-xs mr-1" />
                                $150k
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-wrapper pb-5">
                  <div className="swiper-slide h-auto px-2">
                    <div
                      className="w-100 h-100 hover-animate"
                      data-marker-id="59c0c8e33b1527bfe2abaf92"
                    >
                      <div className="card h-100 border-0 shadow">
                        <div className="card-img-top overflow-hidden gradient-overlay">
                          {' '}
                          <img
                            className="img-fluid"
                            src={img_one}
                            alt="Modern, Well-Appointed Room"
                          />
                          <a className="tile-link" href="detail-rooms.html"></a>
                        </div>
                        <div className="card-body d-flex align-items-center">
                          <div className="w-100">
                            <h6 className="card-title">
                              <a
                                className="text-decoration-none text-dark"
                                href="detail-rooms.html"
                              >
                                Modern, Well-Appointed Room
                              </a>
                            </h6>
                            <p className="text-sm text-secondary card-subtitle mb-2">
                              <i className="fa fa-map-marker text-secondary opacity-4 mr-1"></i>
                              San Francisco
                            </p>
                            <p className="text-sm text-muted text-uppercase">
                              House
                            </p>
                            <p className="card-text d-flex justify-content-between text-gray-800 text-sm">
                              <span className="mr-1">
                                <i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1"></i>
                                350 m<sup>2</sup>{' '}
                              </span>
                              <span className="mr-1">
                                <i className="fa fa-bed text-primary opacity-4 text-xs mr-1"></i>
                                3
                              </span>
                              <span className="mr-1">
                                <i className="fa fa-bath text-primary opacity-4 text-xs mr-1"></i>
                                2
                              </span>
                              <span>
                                <GiPriceTag className="fa fa-tag text-primary opacity-4 text-xs mr-1" />
                                $150k
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-wrapper pb-5">
                  <div className="swiper-slide h-auto px-2">
                    <div
                      className="w-100 h-100 hover-animate"
                      data-marker-id="59c0c8e33b1527bfe2abaf92"
                    >
                      <div className="card h-100 border-0 shadow">
                        <div className="card-img-top overflow-hidden gradient-overlay">
                          {' '}
                          <img
                            className="img-fluid"
                            src={img_two}
                            alt="Modern, Well-Appointed Room"
                          />
                          <a className="tile-link" href="detail-rooms.html"></a>
                        </div>
                        <div className="card-body d-flex align-items-center">
                          <div className="w-100">
                            <h6 className="card-title">
                              <a
                                className="text-decoration-none text-dark"
                                href="detail-rooms.html"
                              >
                                Modern, Well-Appointed Room
                              </a>
                            </h6>
                            <p className="text-sm text-secondary card-subtitle mb-2">
                              <i className="fa fa-map-marker text-secondary opacity-4 mr-1"></i>
                              San Francisco
                            </p>
                            <p className="text-sm text-muted text-uppercase">
                              House
                            </p>
                            <p className="card-text d-flex justify-content-between text-gray-800 text-sm">
                              <span className="mr-1">
                                <i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1"></i>
                                350 m<sup>2</sup>{' '}
                              </span>
                              <span className="mr-1">
                                <i className="fa fa-bed text-primary opacity-4 text-xs mr-1"></i>
                                3
                              </span>
                              <span className="mr-1">
                                <i className="fa fa-bath text-primary opacity-4 text-xs mr-1"></i>
                                2
                              </span>
                              <span>
                                <GiPriceTag className="fa fa-tag text-primary opacity-4 text-xs mr-1" />
                                $150k
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-wrapper pb-5">
                  <div className="swiper-slide h-auto px-2">
                    <div
                      className="w-100 h-100 hover-animate"
                      data-marker-id="59c0c8e33b1527bfe2abaf92"
                    >
                      <div className="card h-100 border-0 shadow">
                        <div className="card-img-top overflow-hidden gradient-overlay">
                          {' '}
                          <img
                            className="img-fluid"
                            src={img_three}
                            alt="Modern, Well-Appointed Room"
                          />
                          <a className="tile-link" href="detail-rooms.html"></a>
                        </div>
                        <div className="card-body d-flex align-items-center">
                          <div className="w-100">
                            <h6 className="card-title">
                              <a
                                className="text-decoration-none text-dark"
                                href="detail-rooms.html"
                              >
                                Modern, Well-Appointed Room
                              </a>
                            </h6>
                            <p className="text-sm text-secondary card-subtitle mb-2">
                              <i className="fa fa-map-marker text-secondary opacity-4 mr-1"></i>
                              San Francisco
                            </p>
                            <p className="text-sm text-muted text-uppercase">
                              House
                            </p>
                            <p className="card-text d-flex justify-content-between text-gray-800 text-sm">
                              <span className="mr-1">
                                <i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1"></i>
                                350 m<sup>2</sup>{' '}
                              </span>
                              <span className="mr-1">
                                <i className="fa fa-bed text-primary opacity-4 text-xs mr-1"></i>
                                3
                              </span>
                              <span className="mr-1">
                                <i className="fa fa-bath text-primary opacity-4 text-xs mr-1"></i>
                                2
                              </span>
                              <span>
                                <GiPriceTag className="fa fa-tag text-primary opacity-4 text-xs mr-1" />
                                $150k
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-wrapper pb-5">
                  <div className="swiper-slide h-auto px-2">
                    <div
                      className="w-100 h-100 hover-animate"
                      data-marker-id="59c0c8e33b1527bfe2abaf92"
                    >
                      <div className="card h-100 border-0 shadow">
                        <div className="card-img-top overflow-hidden gradient-overlay">
                          {' '}
                          <img
                            className="img-fluid"
                            src={img_four}
                            alt="Modern, Well-Appointed Room"
                          />
                          <a className="tile-link" href="detail-rooms.html"></a>
                        </div>
                        <div className="card-body d-flex align-items-center">
                          <div className="w-100">
                            <h6 className="card-title">
                              <a
                                className="text-decoration-none text-dark"
                                href="detail-rooms.html"
                              >
                                Modern, Well-Appointed Room
                              </a>
                            </h6>
                            <p className="text-sm text-secondary card-subtitle mb-2">
                              <i className="fa fa-map-marker text-secondary opacity-4 mr-1"></i>
                              San Francisco
                            </p>
                            <p className="text-sm text-muted text-uppercase">
                              House
                            </p>
                            <p className="card-text d-flex justify-content-between text-gray-800 text-sm">
                              <span className="mr-1">
                                <i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1"></i>
                                350 m<sup>2</sup>{' '}
                              </span>
                              <span className="mr-1">
                                <i className="fa fa-bed text-primary opacity-4 text-xs mr-1"></i>
                                3
                              </span>
                              <span className="mr-1">
                                <i className="fa fa-bath text-primary opacity-4 text-xs mr-1"></i>
                                2
                              </span>
                              <span>
                                <GiPriceTag className="fa fa-tag text-primary opacity-4 text-xs mr-1" />
                                $150k
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageSlider;
