import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const ImageSlider = () => {
  return (
    <div>
      <section className="py-6">
        <div className="container">
          <div className="row mb-lg-6">
            <div className="col-md-8">
              <p className="subtitle text-secondary">Find your home today</p>
              <h2 className="mb-md-0">Featured listings around you</h2>
            </div>
            <div className="col-md-4 d-md-flex align-items-center justify-content-end">
              <a className="text-muted text-sm" href="category-rooms.html">
                See all featured listings
                <i className="fas fa-angle-double-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="swiper-container swiper-container-mx-negative items-slider-full px-lg-5 pt-3">
            <Swiper spaceBetween={50} slidesPerView={3}>
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
                            src="img/photo/photo-1484154218962-a197022b5858.jpg"
                            alt="Modern, Well-Appointed Room"
                          />
                          <a className="tile-link" href="detail-rooms.html"></a>
                          <div className="card-img-overlay-top text-right">
                            <a
                              className="card-fav-icon position-relative z-index-40"
                              href="javascript: void();"
                            ></a>
                          </div>
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
                                <i className="fa fa-tag text-primary opacity-4 text-xs mr-1"></i>
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
                            src="img/photo/photo-1484154218962-a197022b5858.jpg"
                            alt="Modern, Well-Appointed Room"
                          />
                          <a className="tile-link" href="detail-rooms.html"></a>
                          <div className="card-img-overlay-top text-right">
                            <a
                              className="card-fav-icon position-relative z-index-40"
                              href="javascript: void();"
                            ></a>
                          </div>
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
                                <i className="fa fa-tag text-primary opacity-4 text-xs mr-1"></i>
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
                            src="img/photo/photo-1484154218962-a197022b5858.jpg"
                            alt="Modern, Well-Appointed Room"
                          />
                          <a className="tile-link" href="detail-rooms.html"></a>
                          <div className="card-img-overlay-top text-right">
                            <a
                              className="card-fav-icon position-relative z-index-40"
                              href="javascript: void();"
                            ></a>
                          </div>
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
                                <i className="fa fa-tag text-primary opacity-4 text-xs mr-1"></i>
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
                            src="img/photo/photo-1484154218962-a197022b5858.jpg"
                            alt="Modern, Well-Appointed Room"
                          />
                          <a className="tile-link" href="detail-rooms.html"></a>
                          <div className="card-img-overlay-top text-right">
                            <a
                              className="card-fav-icon position-relative z-index-40"
                              href="javascript: void();"
                            ></a>
                          </div>
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
                                <i className="fa fa-tag text-primary opacity-4 text-xs mr-1"></i>
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
              ...
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageSlider;
