<template>
  <div>
    <!-- loader -->
    <!-- <div class="loader"></div> -->
    <!-- loader -->

    <!-- call Modal -->
    <div class="modal fade" id="callUS" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="call">
              <h2>CALL US</h2>
              <p>Call Us and let's discuss your question.</p>
              <a href="tel: (559) 584-5531">Sales: (559) 584-5531</a>
              <div class="call-btn">
                <button type="button" class="offer" data-bs-dismiss="modal">
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- text Modal -->
    <div class="modal fade" id="textUS" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="call text-sms">
              <h2>TEXT US</h2>
              <p>
                Enter your mobile phone number bellow, and someone from <br />
                CarNetWork will respond with a text to your phone right away.
              </p>

              <div class="overly-form">
                <form>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Full Name" />
                    <label for="floatingInput">Full Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingEmial"
                      placeholder="Email" />
                    <label for="floatingEmial">Email</label>
                  </div>
                  <div class="form-floating mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Type your message"
                      id="floatingTextarea2"
                      style="height: 100px; padding-top: 12px"></textarea>
                    <label for="floatingTextarea2">Type your message</label>
                  </div>

                  <p>
                    Don't worry you can opt-out by texting STOP when you don't
                    want to receive any more texts from us.
                  </p>

                  <h3>Text Reason</h3>
                  <div class="form-check mb-4">
                    <label class="checks"
                      >Schedule a test drive
                      <input type="radio" name="radio" checked="checked" />
                      <span class="checkmarks"></span>
                    </label>
                    <label class="checks"
                      >Get info about vehicles
                      <input type="radio" name="radio" />
                      <span class="checkmarks"></span>
                    </label>
                    <label class="checks"
                      >Discuss financing options
                      <input type="radio" name="radio" />
                      <span class="checkmarks"></span>
                    </label>
                  </div>

                  <button type="submit" class="offer" data-bs-dismiss="modal">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- worring Modal -->
    <div
      class="modal offer-modal fade"
      id="exampleModal1"
      tabindex="-1"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="offer-head">
              <img
                class="lazy img-fluid"
                src="assets/images/placeholder.png"
                data-srcset="assets/images/worring.svg"
                alt="worring" />
            </div>
            <div class="offer-body">
              <h3>Ops!!</h3>
              <p>
                Your Offer Is too Low. <br />
                Please Consider Increase it.
              </p>
              <button type="button" class="live-demo" data-bs-dismiss="modal">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- sucess Modal -->
    <div
      class="modal offer-modal fade"
      id="exampleModal2"
      tabindex="-1"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="offer-head">
              <img
                class="lazy img-fluid"
                src="assets/images/placeholder.png"
                data-srcset="assets/images/succes.svg"
                alt="succes" />
            </div>
            <div class="offer-body sucess">
              <h3>Great!!</h3>
              <p>
                Your Offer Has Been Submitted! <br />
                The Dealer Will be In Contact With You Soon!
              </p>
              <button type="button" class="live-demo" data-bs-dismiss="modal">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- header-area -->
    <header class="header-area fixed-top">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- navigation -->
            <div class="navigation">
              <nav class="navbar navbar-expand-xl">
                <div class="container-fluid">
                  <a class="navbar-brand" href="index.html"
                    ><img
                      class="img-fluid"
                      src="assets/images/logo.svg"
                      alt="logo"
                  /></a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="27"
                        viewbox="0 0 30 27">
                        <g fill="none" fill-rule="evenodd">
                          <g fill="#fff" style="fill: #fff">
                            <g>
                              <path
                                d="M0 17H30V19H0zM0 25H30V27H0z"
                                transform="translate(-1376 -48) translate(1376 48)" />
                              <text
                                font-family="Roboto, sans-serif"
                                font-size="11"
                                font-weight="500"
                                letter-spacing=".2"
                                transform="translate(-1376 -48) translate(1376 48)">
                                <tspan x=".115" y="10">MENU</tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <!-- Right nav -->
                    <ul id="main-menu" class="sm sm-clean">
                      <li class="active"><a href="#">New</a></li>

                      <li><a href="search.html">Used</a></li>
                      <li><a href="#">Internet</a></li>
                      <li><a href="#">Specials</a></li>
                      <li><a href="#">Finance</a></li>
                      <li><a href="#">Service</a></li>
                      <li><a href="#">Parts</a></li>

                      <li>
                        <a class="love" href="#"
                          ><img
                            class="img-fluid"
                            src="assets/images/love.svg"
                            alt="logo" />
                          <span class="count">99</span></a
                        >
                      </li>

                      <li class="border-0">
                        <a class="signup" href="#">For Dealers</a>
                      </li>
                      <li class="border-0">
                        <a class="signup2" href="#"
                          ><img
                            class="img-fluid"
                            src="assets/images/user.svg"
                            alt="logo" />
                          My account</a
                        >

                        <ul class="sub login">
                          <li><a href="login.html">Log in</a></li>
                          <li><a href="signup.html">Sign Up</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <!-- navigation -->
          </div>
        </div>
      </div>
    </header>
    <!-- header-area -->

    <!-- carsearch-area -->
    <section class="carsearch-area margin-top">
      <div class="container-fluid">
        <div class="row">
          <div class="serach-areas">
            <!-- search-category -->
            <div class="border-end left-sidebar">
              <div class="sidebar">
                <div class="search-category">
                  <div class="serhedwth">
                    <div class="serh-location">
                      <h4>
                        <img
                          class="img-fluid"
                          src="assets/images/black-placeholder-variant.svg"
                          alt="location" />
                        Kansas City
                      </h4>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="1234" />
                    </div>
                  </div>

                  <img
                    class="img-fluid closefilter"
                    src="assets/images/x-circle.svg"
                    alt="x-circle" />
                  <div class="search-fillter">
                    <div class="condition">
                      <ul>
                        <li><a class="active" href="#">Used Cars</a></li>
                        <li><a href="#" class="">New cars</a></li>
                      </ul>
                    </div>

                    <div class="fillter-lable">
                      <h4>
                        <img
                          class="img-fluid"
                          src="assets/images/cotton.svg"
                          alt="cotton" />
                        Filter
                      </h4>
                      <p>105 Listings</p>
                    </div>

                    <div class="accordion" id="accordionPanelsStayOpenExample">
                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="panelsStayOpen-headingOne">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne">
                            <img
                              class="img-fluid icons"
                              src="assets/images/1-Make.png"
                              alt="Make" />
                            Make
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseOne"
                          class="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingOne">
                          <div class="accordion-body">
                            <div class="allmodel">
                              <label class="check" for="allmake"
                                >All Make <span class="available"> (32)</span>
                                <input
                                  class="make"
                                  type="checkbox"
                                  id="allmake" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="acura"
                                >acura <span class="available"> (32)</span>
                                <input
                                  class="make"
                                  type="checkbox"
                                  id="acura" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="alfa"
                                >alfa romeo
                                <span class="available"> (32)</span>
                                <input class="make" type="checkbox" id="alfa" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="chevrolet"
                                >chevrolet
                                <span class="available"> (32)</span>
                                <input
                                  class="make"
                                  type="checkbox"
                                  id="chevrolet" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="dodge"
                                >dodge <span class="available"> (32)</span>
                                <input
                                  class="make"
                                  type="checkbox"
                                  id="dodge" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="ford"
                                >ford <span class="available"> (32)</span>
                                <input class="make" type="checkbox" id="ford" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="honda"
                                >honda <span class="available"> (32)</span>
                                <input
                                  class="make"
                                  type="checkbox"
                                  id="honda" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="infiniti"
                                >infiniti <span class="available"> (32)</span>
                                <input
                                  class="make"
                                  type="checkbox"
                                  id="infiniti" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="kia"
                                >kia <span class="available"> (32)</span>
                                <input class="make" type="checkbox" id="kia" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="lexus"
                                >lexus <span class="available"> (32)</span>
                                <input
                                  class="make"
                                  type="checkbox"
                                  id="lexus" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="mercedes"
                                >mercedes-benz
                                <span class="available"> (32)</span>
                                <input
                                  class="make"
                                  type="checkbox"
                                  id="mercedes" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="nissan"
                                >nissan <span class="available"> (32)</span>
                                <input
                                  class="make"
                                  type="checkbox"
                                  id="nissan" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="toyota"
                                >toyota <span class="available"> (32)</span>
                                <input
                                  class="make"
                                  type="checkbox"
                                  id="toyota" />
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="panelsStayOpen-headingTwo">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo">
                            <img
                              class="img-fluid icons"
                              src="assets/images/2-Model.png"
                              alt="Model" />
                            Model
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingTwo">
                          <div class="accordion-body">
                            <div class="allmodel">
                              <label class="check" for="allmodel"
                                >All Model
                                <span class="available"> (32)</span>
                                <input
                                  class="model"
                                  type="checkbox"
                                  id="allmodel" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="4runner"
                                >4runner <span class="available"> (32)</span>
                                <input
                                  class="model"
                                  type="checkbox"
                                  id="4runner" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="challenger"
                                >challenger
                                <span class="available"> (32)</span>
                                <input
                                  class="model"
                                  type="checkbox"
                                  id="challenger" />
                                <span class="checkmark"></span>
                              </label>

                              <label class="check" for="civic"
                                >civic <span class="available"> (32)</span>
                                <input
                                  class="model"
                                  type="checkbox"
                                  id="civic" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="es"
                                >es 350 <span class="available"> (32)</span>
                                <input class="model" type="checkbox" id="es" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="escape"
                                >escape <span class="available"> (32)</span>
                                <input
                                  class="model"
                                  type="checkbox"
                                  id="escape" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="hord"
                                >hord <span class="available"> (32)</span>
                                <input
                                  class="model"
                                  type="checkbox"
                                  id="hord" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="mdx"
                                >mdx <span class="available"> (32)</span>
                                <input class="model" type="checkbox" id="mdx" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="model"
                                >model <span class="available"> (32)</span>
                                <input
                                  class="model"
                                  type="checkbox"
                                  id="model" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="mustang"
                                >mustang <span class="available"> (32)</span>
                                <input
                                  class="model"
                                  type="checkbox"
                                  id="mustang" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="nv200"
                                >nv200 <span class="available"> (32)</span>
                                <input
                                  class="model"
                                  type="checkbox"
                                  id="nv200" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="odyssey"
                                >odyssey <span class="available"> (32)</span>
                                <input
                                  class="model"
                                  type="checkbox"
                                  id="odyssey" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="q50"
                                >q50 <span class="available"> (32)</span>
                                <input class="model" type="checkbox" id="q50" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="q50"
                                >q50 <span class="available"> (32)</span>
                                <input class="model" type="checkbox" id="q50" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="silverado_crew"
                                >silverado 1500 crew cab
                                <span class="available"> (32)</span>
                                <input
                                  class="model"
                                  type="checkbox"
                                  id="silverado_crew" />
                                <span class="checkmark"></span>
                              </label>

                              <label class="check" for="silverado_double"
                                >silverado 1500 double cab
                                <span class="available"> (32)</span>
                                <input
                                  class="model"
                                  type="checkbox"
                                  id="silverado_double" />
                                <span class="checkmark"></span>
                              </label>

                              <label class="check" for="soul"
                                >soul<span class="available"> (32)</span>
                                <input
                                  class="model"
                                  type="checkbox"
                                  id="soul" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="sprinter"
                                >sprinter<span class="available"> (32)</span>
                                <input
                                  class="model"
                                  type="checkbox"
                                  id="sprinter" />
                                <span class="checkmark"></span>
                              </label>
                              <label class="check" for="250h"
                                >ux 250h<span class="available"> (32)</span>
                                <input
                                  class="model"
                                  type="checkbox"
                                  id="250h" />
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="panelsStayOpen-headingThree">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree">
                            <img
                              class="img-fluid icons"
                              src="assets/images/3-Price.png"
                              alt="Price" />
                            Price
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree">
                          <div class="accordion-body">
                            <div class="sort-box">
                              <div>
                                <span class="doller1">$</span>
                                <input
                                  type="text"
                                  id="min_price1"
                                  class="price-range-field"
                                  aria-label="price" />
                                <span class="to">TO</span>
                                <span class="doller2">$</span>
                                <input
                                  type="text"
                                  id="max_price1"
                                  class="price-range-field"
                                  aria-label="price" />
                              </div>
                              <div
                                id="slider-range1"
                                class="price-filter-range"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="panelsStayOpen-headingThree1">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree1"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree1">
                            <img
                              class="img-fluid icons"
                              src="assets/images/4-Mileage.png"
                              alt="Mileage" />
                            Mileage
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree1"
                          class="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree1">
                          <div class="accordion-body">
                            <div class="km">
                              <input
                                type="text"
                                id="amount"
                                aria-label="amount" />
                            </div>

                            <div id="slider-range-min"></div>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="panelsStayOpen-headingThree2">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree2"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree2">
                            <img
                              class="img-fluid icons"
                              src="assets/images/5-Year.png"
                              alt="Year" />
                            Year
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree2"
                          class="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree2">
                          <div class="accordion-body">
                            <div class="sort-box">
                              <div>
                                <input
                                  type="text"
                                  id="min_price2"
                                  class="price-range-field"
                                  aria-label="min_price2" />
                                <span class="to">TO</span>
                                <input
                                  type="text"
                                  id="max_price2"
                                  class="price-range-field"
                                  aria-label="min_price2" />
                              </div>
                              <div
                                id="slider-range2"
                                class="price-filter-range"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="panelsStayOpen-headingThree3">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree3"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree3">
                            <img
                              class="img-fluid icons"
                              src="assets/images/6-Body_style.png"
                              alt="Body Type" />
                            Body Type
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree3"
                          class="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree3">
                          <div class="accordion-body">
                            <div class="body-type">
                              <ul>
                                <li>
                                  <a href="#">
                                    <img
                                      class="img-fluid"
                                      src="assets/images/Coupe.png"
                                      alt="Coupe" />
                                    <p>Coupe</p>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      class="img-fluid"
                                      src="assets/images/Convertible.png"
                                      alt="Convertible" />
                                    <p>Convertible</p>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      class="img-fluid"
                                      src="assets/images/SUV.png"
                                      alt="SUV" />
                                    <p>SUV</p>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      class="img-fluid"
                                      src="assets/images/Hatchback.png"
                                      alt="Hatchback" />
                                    <p>Hatchback</p>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      class="img-fluid"
                                      src="assets/images/Mini-Van.png"
                                      alt="Mini" />
                                    <p>Mini Van</p>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      class="img-fluid"
                                      src="assets/images/Wagon.png"
                                      alt="Wagon" />
                                    <p>Wagon</p>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      class="img-fluid"
                                      src="assets/images/Truck-Pickup.png"
                                      alt="Truck" />
                                    <p>Truck</p>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      class="img-fluid"
                                      src="assets/images/Sedan.png"
                                      alt="Sedan" />
                                    <p>Sedan</p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="panelsStayOpen-headingThree4">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree4"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree4">
                            <img
                              class="img-fluid icons"
                              src="assets/images/7-Ext-Color.png"
                              alt="Exterior Color" />
                            Exterior Color
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree4"
                          class="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree4">
                          <div class="accordion-body">
                            <div class="exteror-coler">
                              <ul>
                                <li><span class="White"></span> White</li>
                                <li><span class="Black"></span> Black</li>
                                <li><span class="Blue"></span> Blue</li>
                                <li><span class="Gray"></span> Gray</li>
                                <li><span class="Red"></span> Red</li>
                                <li><span class="Silver"></span> Silver</li>
                                <li><span class="Green"></span> Green</li>
                                <li><span class="Brown"></span> Brown</li>
                                <li><span class="Orange"></span> Orange</li>
                                <li><span class="Yellow"></span> Yellow</li>
                                <li>
                                  <input
                                    type="color"
                                    id="favcolor"
                                    name="favcolor"
                                    title="Click me" />
                                  Other
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="panelsStayOpen-headingThree5">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree5"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree5">
                            <img
                              class="img-fluid icons"
                              src="assets/images/8-Int_Color.png"
                              alt="Interior Color" />
                            Interior Color
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree5"
                          class="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree5">
                          <div class="accordion-body">
                            <div class="interior-coler">
                              <ul>
                                <li><span class="White"></span> White</li>
                                <li><span class="Black"></span> Black</li>
                                <li><span class="Blue"></span> Blue</li>
                                <li><span class="Gray"></span> Gray</li>
                                <li><span class="Red"></span> Red</li>
                                <li><span class="Tan"></span> Tan</li>
                                <li><span class="Brown"></span> Brown</li>
                                <li>
                                  <input
                                    type="color"
                                    id="favcolor1"
                                    name="favcolor1"
                                    title="Click me" />
                                  Other
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="panelsStayOpen-headingThree6">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree6"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree6">
                            <img
                              class="img-fluid icons"
                              src="assets/images/9-Trim.png"
                              alt="Trim" />
                            Trim
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree6"
                          class="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree6">
                          <div class="accordion-body">
                            <label class="check check-bg"
                              >Coupe <span class="available"> (32)</span>
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="check"
                              >Sedan <span class="available"> (32)</span>
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="check"
                              >Van <span class="available"> (32)</span>
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="check"
                              >Hatchback <span class="available"> (32)</span>
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="panelsStayOpen-headingThree8">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree8"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree8">
                            <img
                              class="img-fluid icons"
                              src="assets/images/6-Body_style.png"
                              alt="Body_style" />
                            Body Style
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree8"
                          class="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree8">
                          <div class="accordion-body">
                            <label class="check check-bg"
                              >Coupe <span class="available"> (32)</span>
                              <input type="checkbox" checked="checked" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="check"
                              >Sedan <span class="available"> (32)</span>
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="check"
                              >Van <span class="available"> (32)</span>
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="check"
                              >Hatchback <span class="available"> (32)</span>
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="panelsStayOpen-headingThree9">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree9"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree9">
                            <img
                              class="img-fluid icons"
                              src="assets/images/10-Transmission.png"
                              alt="Transmission" />
                            Transmissions
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree9"
                          class="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree9">
                          <div class="accordion-body">
                            <div class="transmission">
                              <ul>
                                <li>
                                  <a href="#">automatic</a>
                                </li>
                                <li>
                                  <a href="#">manual</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="panelsStayOpen-headingThree12">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree12"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree12">
                            <img
                              class="img-fluid icons"
                              src="assets/images/11-MPG-Highway.png"
                              alt="Fuel" />
                            Fuel Type
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree12"
                          class="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree12">
                          <div class="accordion-body">
                            <div class="transmission">
                              <ul>
                                <li>
                                  <a href="#">Gasoline</a>
                                </li>
                                <li>
                                  <a href="#">Hybrid</a>
                                </li>
                                <li>
                                  <a href="#">Electric</a>
                                </li>
                                <li>
                                  <a href="#">Diesel</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="panelsStayOpen-headingThree13">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree13"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree13">
                            <img
                              class="img-fluid icons"
                              src="assets/images/003-car-chassis.png"
                              alt="Drive" />
                            Drive Type
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree13"
                          class="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree13">
                          <div class="accordion-body">
                            <div class="cylinder drive">
                              <ul>
                                <li>
                                  <a href="#">4WD</a>
                                </li>
                                <li>
                                  <a href="#">AWD</a>
                                </li>
                                <li>
                                  <a href="#">FWD</a>
                                </li>
                                <li>
                                  <a href="#">RWD</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="panelsStayOpen-headingThree10">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree10"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree10">
                            <img
                              class="img-fluid icons"
                              src="assets/images/11-MPG-Highway.png"
                              alt="MPG" />
                            MPG Highway
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree10"
                          class="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree10">
                          <div class="accordion-body">
                            <div class="sort-box">
                              <div>
                                <input
                                  type="text"
                                  id="min_price3"
                                  class="price-range-field"
                                  aria-label="Highway" />
                                <span class="to">TO</span>
                                <input
                                  type="text"
                                  id="max_price3"
                                  class="price-range-field"
                                  aria-label="Highway" />
                              </div>
                              <div
                                id="slider-range3"
                                class="price-filter-range"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2
                          class="accordion-header"
                          id="panelsStayOpen-headingThree11">
                          <button
                            class="accordion-button last-accordion collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree11"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree11">
                            <img
                              class="img-fluid icons"
                              src="assets/images/12-Cylinders.png"
                              alt="Cylinders" />
                            Cylinders
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree11"
                          class="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree11">
                          <div class="accordion-body">
                            <div class="cylinder">
                              <ul>
                                <li><a href="#">4</a></li>
                                <li><a href="#">6</a></li>
                                <li><a href="#">8</a></li>
                                <li><a href="#">12</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <form class="resetbtn" action="" method="get">
                      <button class="cus-btns" type="submit">Search</button>
                      <input type="hidden" name="lead_source" value="Other" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <!-- search-category -->

            <!-- search-results -->
            <div class="result-bg">
              <div class="serbarwth">
                <div class="search-bar">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Search by Make, Model, or Keyword"
                    aria-label="search" />
                  <img
                    class="img-fluid searchicon"
                    src="assets/images/search1.svg"
                    alt="search" />
                </div>
              </div>

              <div class="search-results">
                <div class="row">
                  <div class="col-12">
                    <div class="title-breadcrumb">
                      <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                          <li class="breadcrumb-item">
                            <a href="#">Home</a>
                          </li>
                          <li class="breadcrumb-item">
                            <a href="#">Used</a>
                          </li>
                          <li
                            class="breadcrumb-item active"
                            aria-current="page">
                            Car
                          </li>
                        </ol>
                      </nav>

                      <h1>Used 2020 BMW M2 Coupe 2D in Orange, CA</h1>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-7">
                    <div class="clear-fillter">
                      <p>Used Mercedes-Benz</p>
                      <ul>
                        <li>
                          <a href="#"
                            >Under $29,000 <span class="exit">x</span></a
                          >
                        </li>
                        <li>
                          <a href="#">Coupe <span class="exit">x</span></a>
                        </li>
                        <li>
                          <a href="#">Ext. Bule <span class="exit">x</span></a>
                        </li>
                        <li>
                          <a class="Clear-filter" href="#">Clear filter</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-5">
                    <div class="sort-save">
                      <div class="sortby">
                        <select
                          class="form-select"
                          aria-label="Default select example">
                          <option selected>Sort By</option>
                          <option value="0">Price low to high</option>
                          <option value="1">Mileage low to high</option>
                          <option value="2">Price high to low</option>
                          <option value="3">Mileage high to low</option>
                          <option value="4">Newest posts</option>
                        </select>
                      </div>
                      <div class="save-filler">
                        <a href="#">Save Search</a>
                        <a class="filter-btn" href="#"
                          ><img
                            src="assets/images/cotton.svg"
                            alt="cotton" />filter</a
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div class="result-card">
                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <div class="row g-1 buysonline">
                          <div class="col-3">
                            <p class="card-text">30 mi</p>
                          </div>
                          <div class="col-9">
                            <a class="online" href="#"
                              ><img
                                class="img-fluid"
                                src="assets/images/online.png"
                                alt="online" />
                              Online buying avilable
                            </a>
                          </div>
                        </div>

                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circle" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount"
                                  placeholder="Amount" />
                                <label for="Amount">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full"
                                  placeholder="Full Name" />
                                <label for="Full">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone"
                                  placeholder="Phone" />
                                <label for="Phone">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email"
                                  placeholder="Email" />
                                <label for="Email">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1">
                              Submit
                            </button>

                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <div class="row g-1 buysonline">
                          <div class="col-3">
                            <p class="card-text">30 mi</p>
                          </div>
                          <div class="col-9">
                            <a class="online" href="#"
                              ><img
                                class="img-fluid"
                                src="assets/images/online.png"
                                alt="online" />
                              Online buying avilable
                            </a>
                          </div>
                        </div>

                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circle" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount1"
                                  placeholder="Amount1" />
                                <label for="Amount">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full1"
                                  placeholder="Full Name" />
                                <label for="Full1">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone1"
                                  placeholder="Phone" />
                                <label for="Phone1">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email1"
                                  placeholder="Email" />
                                <label for="Email1">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <div class="row g-1 buysn">
                          <div class="col-3">
                            <p class="card-text">30 mi</p>
                          </div>
                          <div class="col-9">
                            <a class="online" href="#"
                              ><img
                                class="img-fluid"
                                src="assets/images/online.png"
                                alt="online" />
                              Online buying avilable
                            </a>
                          </div>
                        </div>

                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circle" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount2"
                                  placeholder="Amount" />
                                <label for="Amount2">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full2"
                                  placeholder="Full Name" />
                                <label for="Full2">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone2"
                                  placeholder="Phone" />
                                <label for="Phone2">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email2"
                                  placeholder="Email" />
                                <label for="Email2">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1">
                              Submit
                            </button>

                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <!-- single-result -->
                  <div class="cards">
                    <div class="card card-result">
                      <a href="details.html">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/BMW-M2.png"
                          alt="car name" />
                      </a>
                      <div class="loves">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </div>
                      <div class="card-body">
                        <h2 class="card-title">
                          Used 2020 BMW M2 Coupe 2D in Orange, CA
                        </h2>
                        <p class="card-text">30 mi</p>
                        <div class="contact-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#callUS"
                            ><img
                              src="assets/images/call.svg"
                              alt="Call" />Call</a
                          >
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#textUS"
                            ><img
                              src="assets/images/text.svg"
                              alt="Text" />Text</a
                          >
                          <a href="details.html"
                            ><img
                              src="assets/images/detail.svg"
                              alt="Details" />Details</a
                          >
                        </div>
                        <div class="row g-2">
                          <div class="col-md-5">
                            <div class="price">
                              <h2>$28,830</h2>
                              <p>MSRP $30,590</p>
                            </div>
                          </div>
                          <div class="col-md-7">
                            <button class="offer make">Make An Offer</button>
                          </div>
                        </div>

                        <!-- overly-form -->
                        <div class="overly-form">
                          <div class="over">
                            <form>
                              <img
                                class="img-fluid x-clx"
                                src="assets/images/x-circle.svg"
                                alt="x-circl" />
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Amount3"
                                  placeholder="Amount" />
                                <label for="Amount3">Your Offer Amount</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Full3"
                                  placeholder="Full Name" />
                                <label for="Full3">Full Name</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="Phone3"
                                  placeholder="Phone" />
                                <label for="Phone3">Phone</label>
                              </div>
                              <div class="form-floating mb-3">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="Email3"
                                  placeholder="Email" />
                                <label for="Email3">Email</label>
                              </div>
                            </form>

                            <button
                              type="submit"
                              class="offer"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1">
                              Submit
                            </button>
                            <p class="disclimer">
                              Please Consider Submitting A Reasonable Offer For
                              The Dealership To Consider
                            </p>
                          </div>
                        </div>
                        <!-- overly-form -->
                      </div>
                    </div>
                  </div>
                  <!-- single-result -->

                  <div class="paginations">
                    <div class="row">
                      <!-- pagination -->
                      <div class="col-12">
                        <nav aria-label="Page navigation example">
                          <ul class="pagination justify-content-end">
                            <li class="page-item disabled">
                              <a class="page-link" href="#">Previous</a>
                            </li>
                            <li class="page-item active">
                              <a class="page-link" href="#">1</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">2</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">Next</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <!-- pagination -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- search-results -->
          </div>
        </div>
      </div>
    </section>
    <!-- carsearch-area -->

    <!-- footer-area -->
    <footer class="footer-area">
      <div class="containers">
        <div class="row">
          <div class="col-md-7">
            <div class="row">
              <div class="col-md-6 col-lg-4">
                <div class="footer-item">
                  <h4>Company</h4>
                  <ul>
                    <li><a href="#">About CarNetWork</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Price Trends</a></li>
                    <li><a href="#">Careers</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="footer-item">
                  <h4>For Dealers</h4>
                  <ul>
                    <li><a href="#">Dealer Signup</a></li>
                    <li><a href="#">Dealer Resources</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="footer-item">
                  <h4>Terms</h4>
                  <ul>
                    <li>
                      <a href="#">Do Not Sell My Personal Information</a>
                    </li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Interest-Based Ads</a></li>
                    <li><a href="#">Security</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="row">
              <div class="col-md-6">
                <div class="footer-item">
                  <h4>Help</h4>
                  <ul>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Buying a Car During Coronavirus</a></li>
                    <li><a href="#">Delivery</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="footer-item">
                  <h4>Language</h4>
                  <select class="form-select">
                    <option selected>USA (EN)</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-6">
            <div class="social">
              <ul>
                <li>
                  <a href="#"
                    ><i class="fa fa-youtube-play" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-facebook" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-instagram" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-linkedin" aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="copyright">
              <p>© 2021 CarNetWork, All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer-area -->

    <div class="col-12">
      <a href="#" class="scrolltotop"><i class="fa fa-angle-up"></i></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
