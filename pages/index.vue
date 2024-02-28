<template>
  <div>
    <NuxtLink to="/404"> error</NuxtLink>
    <NuxtLink to="/account"> account</NuxtLink>
    <NuxtLink to="/details"> details</NuxtLink>

    <!-- start from here -->

    <!-- loader -->
    <!-- <div class="loader"></div> -->
    <!-- loader -->

    <!-- wishlist modal -->
    <div
      class="modal fade"
      id="wishlist"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Wish List</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="overly-form wishlist">
              <form>
                <div class="row g-3">
                  <div class="col-12">
                    <h3>Personal Info</h3>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="First"
                        placeholder="First name" />
                      <label for="First">First name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Last"
                        placeholder="Last name" />
                      <label for="Last">Last name</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="Email"
                        placeholder="Email" />
                      <label for="Email">Email</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Phone"
                        placeholder="Phone" />
                      <label for="Phone">Phone number</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Zip"
                        placeholder="Zip" />
                      <label for="Zip">Zip Code</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <h3>Car Info</h3>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Make"
                        placeholder="Make" />
                      <label for="Make">Make</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Model"
                        placeholder="Model" />
                      <label for="Model">Model</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Trim"
                        placeholder="Trim" />
                      <label for="Trim">Trim</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Color"
                        placeholder="Color" />
                      <label for="Color">Color</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Body Type"
                        placeholder="Body Type" />
                      <label for="Body Type">Body Type</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Transmission"
                        placeholder="Transmission" />
                      <label for="Transmission">Transmission</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="Radius">Radius Within </label>
                    <div class="km">
                      <input type="text" id="amount" aria-label="amount" />
                    </div>

                    <div id="slider-range-min"></div>
                  </div>
                  <div class="col-md-6">
                    <label for="Price">Price range</label>
                    <div class="km">
                      <input type="text" id="prices" aria-label="prices" />
                    </div>

                    <div id="slider-prices"></div>
                  </div>

                  <div class="col-md-12">
                    <div class="equipment-check agree">
                      <label class="check">
                        I agree to the terms &amp; conditions
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="offer">Send</button>
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
                            alt="my account" />
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

    <!-- headline-area -->
    <section class="headline-area margin-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="headlines">
              <div class="headline-title">
                <img
                  class="lazy img-fluid"
                  src="assets/images/placeholder.png"
                  data-srcset="assets/images/carnetwork.png"
                  alt="carnetwork" />

                <h1>
                  Buy Sell Trade <br />
                  Your Way
                </h1>
                <div class="btns">
                  <ul>
                    <li><a class="sale-btn" href="#">Sell Your Car</a></li>
                    <li><a class="sale-btn2" href="#">Shop For A Car</a></li>
                    <li>
                      <a class="sale-btn" href="#">by online vehicles</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- headline-area -->

    <!-- search-area -->
    <section class="search-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="search-box">
              <div class="search-tabs">
                <div class="search-bar">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Search by Make, Model, or Keyword"
                    aria-label="search" />
                  <img
                    class="img-fluid searchicon"
                    src="assets/images/search1.svg"
                    alt="search icon" />
                </div>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="Used-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Used"
                      type="button"
                      role="tab"
                      aria-controls="Used"
                      aria-selected="true">
                      Used Car
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="New-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#New"
                      type="button"
                      role="tab"
                      aria-controls="New"
                      aria-selected="false">
                      New Car
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="Certified-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Certified"
                      type="button"
                      role="tab"
                      aria-controls="Certified"
                      aria-selected="false">
                      Certified Pre-Owned
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="Sale-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Sale"
                      type="button"
                      role="tab"
                      aria-controls="Sale"
                      aria-selected="false">
                      For Sale By Owner
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="Financing-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Financing"
                      type="button"
                      role="tab"
                      aria-controls="Financing"
                      aria-selected="false">
                      Financing
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      type="button"
                      class="wishbtn"
                      data-bs-toggle="modal"
                      data-bs-target="#wishlist">
                      <img
                        class="img-fluid"
                        src="assets/images/wishlist.png"
                        alt="wishlist" />
                      Wish List
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="Used"
                    role="tabpanel"
                    aria-labelledby="Used-tab">
                    <div class="search-option">
                      <div class="row">
                        <div class="col-md-3">
                          <select class="form-select">
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                          </select>
                        </div>
                        <div class="col-md-3">
                          <select class="form-select">
                            <option value="AL">All modal</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                          </select>
                        </div>
                        <div class="col-md-3">
                          <div class="zipcode">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="ZIP Code"
                              aria-label="search" />
                            <img
                              class="img-fluid location-icon"
                              src="assets/images/black-placeholder-variant.svg"
                              alt="zip code" />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <button type="submit" class="cus-btns">
                            <img
                              class="img-fluid"
                              src="assets/images/search2.svg"
                              alt="Search" />
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="New"
                    role="tabpanel"
                    aria-labelledby="New-tab">
                    <div class="search-option">
                      <div class="row">
                        <div class="col-md-3">
                          <select class="form-select">
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                          </select>
                        </div>
                        <div class="col-md-3">
                          <select class="form-select">
                            <option value="AL">All modal</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                          </select>
                        </div>
                        <div class="col-md-3">
                          <div class="zipcode">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="ZIP Code"
                              aria-label="search" />
                            <img
                              class="img-fluid location-icon"
                              src="assets/images/black-placeholder-variant.svg"
                              alt="zipcode" />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <button type="submit" class="cus-btns">
                            <img
                              class="img-fluid"
                              src="assets/images/search2.svg"
                              alt="Search" />
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="Certified"
                    role="tabpanel"
                    aria-labelledby="Certified-tab">
                    <div class="search-option">
                      <div class="row">
                        <div class="col-md-3">
                          <select class="form-select">
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                          </select>
                        </div>
                        <div class="col-md-3">
                          <select class="form-select">
                            <option value="AL">All modal</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                          </select>
                        </div>
                        <div class="col-md-3">
                          <div class="zipcode">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="ZIP Code"
                              aria-label="search" />
                            <img
                              class="img-fluid location-icon"
                              src="assets/images/black-placeholder-variant.svg"
                              alt="zip Code" />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <button type="submit" class="cus-btns">
                            <img
                              class="img-fluid"
                              src="assets/images/search2.svg"
                              alt="Search" />
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="Sale"
                    role="tabpanel"
                    aria-labelledby="Sale-tab">
                    <div class="search-option">
                      <div class="row">
                        <div class="col-md-3">
                          <select class="form-select">
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                          </select>
                        </div>
                        <div class="col-md-3">
                          <select class="form-select">
                            <option value="AL">All modal</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                          </select>
                        </div>
                        <div class="col-md-3">
                          <div class="zipcode">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="ZIP Code"
                              aria-label="search" />
                            <img
                              class="img-fluid location-icon"
                              src="assets/images/black-placeholder-variant.svg"
                              alt="zip code" />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <button type="submit" class="cus-btns">
                            <img
                              class="img-fluid"
                              src="assets/images/search2.svg"
                              alt="Search" />
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="Financing"
                    role="tabpanel"
                    aria-labelledby="Financing-tab">
                    <div class="search-option">
                      <div class="row">
                        <div class="col-md-3">
                          <select class="form-select">
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                          </select>
                        </div>
                        <div class="col-md-3">
                          <select class="form-select">
                            <option value="AL">All modal</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                          </select>
                        </div>
                        <div class="col-md-3">
                          <div class="zipcode">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="ZIP Code"
                              aria-label="search" />
                            <img
                              class="img-fluid location-icon"
                              src="assets/images/black-placeholder-variant.svg"
                              alt="zip code" />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <button type="submit" class="cus-btns">
                            <img
                              class="img-fluid"
                              src="assets/images/search2.svg"
                              alt="Search" />
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- search-area -->

    <!-- Guesswork-area -->
    <section class="guesswork-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <div class="guesswork-img">
              <img
                class="lazy img-fluid"
                src="~/assets/images/placeholder.png"
                data-srcset="assets/images/guess.png"
                alt="guess image" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="guesswork-con">
              <div class="title">
                <h2>
                  Be In Control Shop And Sell <br />
                  Your Way
                </h2>
              </div>

              <div class="media d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img
                    class="lazy img-fluid"
                    src="assets/images/placeholder.png"
                    data-srcset="assets/images/g1.png"
                    alt="Browse Thousands" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h4>Browse Thousands Of Cars</h4>
                  <p>
                    Our algorithm rates just 30% of cars a good or great deal.
                  </p>
                </div>
              </div>
              <div class="media d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img
                    class="lazy img-fluid"
                    src="assets/images/placeholder.png"
                    data-srcset="assets/images/g2.png"
                    alt="Make An Offer" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h4>Make An Offer Be In Control</h4>
                  <p>
                    View personalized, real rates before you even talk to a
                    dealer.
                  </p>
                </div>
              </div>
              <div class="media d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img
                    class="lazy img-fluid"
                    src="assets/images/placeholder.png"
                    data-srcset="assets/images/g3.png"
                    alt="Buy Online" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h4>Buy Online Or Visit The Dealer</h4>
                  <p>
                    Accident history, price drops, days on lot… find it all
                    here.
                  </p>
                </div>
              </div>
              <div class="media d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img
                    class="lazy img-fluid"
                    src="assets/images/placeholder.png"
                    data-srcset="assets/images/g4.png"
                    alt="List Youre" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h4>List Your Car In Seconds</h4>
                  <p>Scan the Vin Number Add It And Get Offers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Guesswork-area -->

    <!-- Recommended -->
    <section class="recommended-slider">
      <div class="containers">
        <div class="row">
          <div class="col-12">
            <div class="title text-center">
              <h3>Recommended for you</h3>
            </div>
            <div class="owl-carousel">
              <div class="item">
                <div class="cards">
                  <div class="card card-result">
                    <a href="details.html"
                      ><img
                        data-src="assets/images/car2.png"
                        class="owl-lazy card-img-top img-fluid"
                        alt="car name"
                    /></a>
                    <div class="loves">
                      <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <div class="card-body">
                      <h2 class="card-title">
                        Used 2017 Chevrolet Silverado 1500 Crew Cab LT Pickup 4D
                        5 3/4 ft in CA
                      </h2>
                      <p class="card-text">30 mi</p>
                      <div class="row g-2">
                        <div class="col-md-12">
                          <div class="price">
                            <h2>$28,830 <span>MSRP $30,590 </span></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="cards">
                  <div class="card card-result">
                    <a href="details.html"
                      ><img
                        data-src="assets/images/car3.png"
                        class="owl-lazy card-img-top img-fluid"
                        alt="car name"
                    /></a>
                    <div class="loves">
                      <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <div class="card-body">
                      <h2 class="card-title">
                        Used 2017 Chevrolet Silverado 1500 Crew Cab LT Pickup 4D
                        5 3/4 ft in CA
                      </h2>
                      <p class="card-text">30 mi</p>
                      <div class="row g-2">
                        <div class="col-md-12">
                          <div class="price">
                            <h2>$28,830 <span>MSRP $30,590 </span></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="cards">
                  <div class="card card-result">
                    <a href="details.html"
                      ><img
                        data-src="assets/images/car4.png"
                        class="owl-lazy card-img-top img-fluid"
                        alt="car name"
                    /></a>
                    <div class="loves">
                      <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <div class="card-body">
                      <h2 class="card-title">
                        Used 2017 Chevrolet Silverado 1500 Crew Cab LT Pickup 4D
                        5 3/4 ft in CA
                      </h2>
                      <p class="card-text">30 mi</p>
                      <div class="row g-2">
                        <div class="col-md-12">
                          <div class="price">
                            <h2>$28,830 <span>MSRP $30,590 </span></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="cards">
                  <div class="card card-result">
                    <a href="details.html"
                      ><img
                        data-src="assets/images/car5.png"
                        class="owl-lazy card-img-top img-fluid"
                        alt="car name"
                    /></a>
                    <div class="loves">
                      <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <div class="card-body">
                      <h2 class="card-title">
                        Used 2017 Chevrolet Silverado 1500 Crew Cab LT Pickup 4D
                        5 3/4 ft in CA
                      </h2>
                      <p class="card-text">30 mi</p>
                      <div class="row g-2">
                        <div class="col-md-12">
                          <div class="price">
                            <h2>$28,830 <span>MSRP $30,590 </span></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="cards">
                  <div class="card card-result">
                    <a href="details.html"
                      ><img
                        data-src="assets/images/car6.png"
                        class="owl-lazy card-img-top img-fluid"
                        alt="car name"
                    /></a>
                    <div class="loves">
                      <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <div class="card-body">
                      <h2 class="card-title">
                        Used 2017 Chevrolet Silverado 1500 Crew Cab LT Pickup 4D
                        5 3/4 ft in CA
                      </h2>
                      <p class="card-text">30 mi</p>
                      <div class="row g-2">
                        <div class="col-md-12">
                          <div class="price">
                            <h2>$28,830 <span>MSRP $30,590 </span></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Recommended -->

    <!-- user-say-area -->
    <section class="usersay-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 text-center">
            <div class="title">
              <p>Customer Feedback</p>
              <h2>What Our Users Say</h2>
            </div>
          </div>
          <div class="owl-carousel">
            <!-- items -->
            <div class="items">
              <iframe
                src="https://www.youtube.com/embed/qd79mXSjD9o"
                title="YouTube video"
                allowfullscreen></iframe>

              <figure>
                <blockquote class="blockquote">
                  <img
                    class="owl-lazy img-fluid"
                    data-src="assets/images/quote1.svg"
                    alt="" />
                  <p>
                    It's definitely the filters on DealersGear that make it
                    easy—you can choose exactly the configuration you're looking
                    for.
                  </p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  <cite title="Source Title">Megan D</cite>
                </figcaption>
              </figure>
            </div>
            <!-- items -->
            <!-- items -->
            <div class="items">
              <iframe
                src="https://www.youtube.com/embed/qd79mXSjD9o"
                title="YouTube video"
                allowfullscreen></iframe>

              <figure>
                <blockquote class="blockquote">
                  <img
                    class="owl-lazy img-fluid"
                    data-src="assets/images/quote1.svg"
                    alt="" />
                  <p>
                    It's definitely the filters on DealersGear that make it
                    easy—you can choose exactly the configuration you're looking
                    for.
                  </p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  <cite title="Source Title">Megan D</cite>
                </figcaption>
              </figure>
            </div>
            <!-- items -->
            <!-- items -->
            <div class="items">
              <iframe
                src="https://www.youtube.com/embed/qd79mXSjD9o"
                title="YouTube video"
                allowfullscreen></iframe>

              <figure>
                <blockquote class="blockquote">
                  <img
                    class="owl-lazy img-fluid"
                    data-src="assets/images/quote1.svg"
                    alt="" />
                  <p>
                    It's definitely the filters on DealersGear that make it
                    easy—you can choose exactly the configuration you're looking
                    for.
                  </p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  <cite title="Source Title">Megan D</cite>
                </figcaption>
              </figure>
            </div>
            <!-- items -->
            <!-- items -->
            <div class="items">
              <iframe
                src="https://www.youtube.com/embed/qd79mXSjD9o"
                title="YouTube video"
                allowfullscreen></iframe>

              <figure>
                <blockquote class="blockquote">
                  <img
                    class="owl-lazy img-fluid"
                    data-src="assets/images/quote1.svg"
                    alt="" />
                  <p>
                    It's definitely the filters on DealersGear that make it
                    easy—you can choose exactly the configuration you're looking
                    for.
                  </p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  <cite title="Source Title">Megan D</cite>
                </figcaption>
              </figure>
            </div>
            <!-- items -->
          </div>
        </div>
      </div>
    </section>
    <!-- user-say-area -->

    <!-- Recent Test Drives -->
    <section class="testdrives-area">
      <div class="containers">
        <div class="row">
          <div class="col-12">
            <div class="title">
              <h2>Recent Test Drives</h2>
            </div>
            <div class="owl-carousel">
              <!-- items -->
              <div class="items">
                <div class="card">
                  <a href="details.html">
                    <img
                      class="owl-lazy card-img-top img-fluid"
                      data-src="assets/images/2017-mercedes-c-class-new-versions.png"
                      alt="car name" />
                  </a>
                  <div class="card-body">
                    <p>Matt Smith</p>
                    <h5 class="card-title">
                      2021 Infinity QX50 Test Drive Overview Used 2020 BMW M2
                      Coupe 2D in Orange, CA
                    </h5>
                  </div>
                </div>
              </div>
              <!-- items -->
              <!-- items -->
              <div class="items">
                <div class="card">
                  <a href="details.html">
                    <img
                      class="owl-lazy card-img-top img-fluid"
                      data-src="assets/images/2017-mercedes-c-class-new-versions.png"
                      alt="car name" />
                  </a>
                  <div class="card-body">
                    <p>Matt Smith</p>
                    <h5 class="card-title">
                      2021 Infinity QX50 Test Drive Overview Used 2020 BMW M2
                      Coupe 2D in Orange, CA
                    </h5>
                  </div>
                </div>
              </div>
              <!-- items -->
              <!-- items -->
              <div class="items">
                <div class="card">
                  <a href="details.html">
                    <img
                      class="owl-lazy card-img-top img-fluid"
                      data-src="assets/images/2017-mercedes-c-class-new-versions.png"
                      alt="car name" />
                  </a>
                  <div class="card-body">
                    <p>Matt Smith</p>
                    <h5 class="card-title">
                      2021 Infinity QX50 Test Drive Overview Used 2020 BMW M2
                      Coupe 2D in Orange, CA
                    </h5>
                  </div>
                </div>
              </div>
              <!-- items -->
              <!-- items -->
              <div class="items">
                <div class="card">
                  <a href="details.html">
                    <img
                      class="owl-lazy card-img-top img-fluid"
                      data-src="assets/images/2017-mercedes-c-class-new-versions.png"
                      alt="car name" />
                  </a>
                  <div class="card-body">
                    <p>Matt Smith</p>
                    <h5 class="card-title">
                      2021 Infinity QX50 Test Drive Overview Used 2020 BMW M2
                      Coupe 2D in Orange, CA
                    </h5>
                  </div>
                </div>
              </div>
              <!-- items -->
              <!-- items -->
              <div class="items">
                <div class="card">
                  <a href="details.html">
                    <img
                      class="owl-lazy card-img-top img-fluid"
                      data-src="assets/images/2017-mercedes-c-class-new-versions.png"
                      alt="car name" />
                  </a>
                  <div class="card-body">
                    <p>Matt Smith</p>
                    <h5 class="card-title">
                      2021 Infinity QX50 Test Drive Overview Used 2020 BMW M2
                      Coupe 2D in Orange, CA
                    </h5>
                  </div>
                </div>
              </div>
              <!-- items -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Recent Test Drives -->

    <!-- Top Cities -->
    <section class="top-cities">
      <div class="containers">
        <div class="row">
          <div class="col-12">
            <div class="title">
              <h2>Top Cities</h2>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="topcitis">
              <ul>
                <li><a href="#">Used Cars in Albuquerque, NM</a></li>
                <li><a href="#">Used Cars in Anchorage, AK </a></li>
                <li><a href="#">Used Cars in Atlanta, GA</a></li>
                <li><a href="#">Used Cars in Austin, TX </a></li>
                <li><a href="#">Used Cars in Baltimore, MD</a></li>
                <li><a href="#">Used Cars in Billings, MT</a></li>
                <li><a href="#">Used Cars in Birmingham, AL</a></li>
                <li><a href="#">Used Cars in Bismarck, ND</a></li>
                <li><a href="#">Used Cars in Boise, ID</a></li>
                <li><a href="#">Used Cars in Charleston, WV</a></li>
                <li><a href="#">Used Cars in Charlotte, NC</a></li>
                <li><a href="#">Used Cars in Cheyenne, W</a></li>
                <li><a href="#">Used Cars in Chicago, IL</a></li>
                <li><a href="#">Used Cars in Cleveland, OH</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="topcitis">
              <ul>
                <li><a href="#">Used Cars in Columbia, SC</a></li>
                <li><a href="#">Used Cars in Dallas, TX</a></li>
                <li><a href="#">Used Cars in Denver, CO</a></li>
                <li><a href="#">Used Cars in Des Moines, IA</a></li>
                <li><a href="#">Used Cars in Detroit, MI</a></li>
                <li><a href="#">Used Cars in Hartford, CT</a></li>
                <li><a href="#">Used Cars in Honolulu, HI </a></li>
                <li><a href="#">Used Cars in Houston, TX</a></li>
                <li><a href="#">Used Cars in Indianapolis, IN</a></li>
                <li><a href="#">Used Cars in Jackson, MS</a></li>
                <li><a href="#">Used Cars in Las Vegas, NV</a></li>
                <li><a href="#">Used Cars in Lexington, KY</a></li>
                <li><a href="#">Used Cars in Little Rock, AR</a></li>
                <li><a href="#">Used Cars in Los Angeles, CA</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="topcitis">
              <ul>
                <li><a href="#">Used Cars in Louisville, KY</a></li>
                <li><a href="#">Used Cars in Madison, WI </a></li>
                <li><a href="#">Used Cars in Manchester, NH</a></li>
                <li><a href="#">Used Cars in Memphis, TN </a></li>
                <li><a href="#">Used Cars in Miami, FL </a></li>
                <li><a href="#">Used Cars in Minneapolis, MN</a></li>
                <li><a href="#">Used Cars in New Orleans, LA</a></li>
                <li><a href="#">Used Cars in New York, NY</a></li>
                <li><a href="#">Used Cars in Oklahoma City, OK</a></li>
                <li><a href="#">Used Cars in Omaha, NE </a></li>
                <li><a href="#">Used Cars in Phoenix, AZ</a></li>
                <li><a href="#">Used Cars in Pittsburgh, PA</a></li>
                <li><a href="#">Used Cars in Portland, ME</a></li>
                <li><a href="#">Used Cars in Portland, OR</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="topcitis">
              <ul>
                <li><a href="#">Used Cars in Providence, RI</a></li>
                <li><a href="#">Used Cars in Richmond, VA</a></li>
                <li><a href="#">Used Cars in Sacramento, CA</a></li>
                <li><a href="#">Used Cars in Saint Louis, MO</a></li>
                <li><a href="#">Used Cars in Salt Lake City, UT</a></li>
                <li><a href="#">Used Cars in San Diego, CA </a></li>
                <li><a href="#">Used Cars in San Francisco, CA</a></li>
                <li><a href="#">Used Cars in Seattle, WA</a></li>
                <li><a href="#">Used Cars in Sioux Falls, SD</a></li>
                <li><a href="#">Used Cars in Trenton, NJ</a></li>
                <li><a href="#">Used Cars in Washington, DC </a></li>
                <li><a href="#">Used Cars in Wichita, KS </a></li>
                <li><a href="#">Used Cars in Wilmington, DE </a></li>
              </ul>
            </div>
          </div>

          <div class="col-12">
            <div class="title">
              <h2>Top Body Styles</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="topcitis">
              <ul>
                <li><a href="#">Used Chassis for sale </a></li>
                <li><a href="#">Used Convertibles for sale</a></li>
                <li><a href="#">Used Vans for sale </a></li>
              </ul>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="topcitis">
              <ul>
                <li><a href="#">Used Coupes for sale </a></li>
                <li><a href="#">Used Convertibles for sale</a></li>
                <li><a href="#">Used Vans for sale </a></li>
              </ul>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="topcitis">
              <ul>
                <li><a href="#">Used Minivans for sale </a></li>
                <li><a href="#">Used Pickups for sale</a></li>
              </ul>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="topcitis">
              <ul>
                <li><a href="#">Used Minivans for sale </a></li>
                <li><a href="#">Used Pickups for sale</a></li>
              </ul>
            </div>
          </div>

          <div class="col-12">
            <div class="title">
              <h2>Used Cars by Price</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="topcitis">
              <ul>
                <li><a href="#">Cars Under $1,000 </a></li>
                <li><a href="#">Cars Under $2,000</a></li>
                <li><a href="#">Cars Under $3,000</a></li>
              </ul>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="topcitis">
              <ul>
                <li><a href="#">Cars Under $4,000 </a></li>
                <li><a href="#">Cars Under $5,000</a></li>
              </ul>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="topcitis">
              <ul>
                <li><a href="#">Cars Under $10,000 </a></li>
                <li><a href="#">Cars Under $15,000</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="topcitis">
              <ul>
                <li><a href="#">Cars Under $20,000 </a></li>
                <li><a href="#">Cars Under $25,000</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Top Cities -->

    <!-- faq-area -->
    <section class="faq-area">
      <div class="containers">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <div class="d-flex">
              <div class="flex-shrink-0">
                <img
                  class="lazy img-fluid"
                  src="assets/images/placeholder.png"
                  data-srcset="assets/images/faq.png"
                  alt="faq" />
              </div>
              <div class="flex-grow-1 ms-3">
                <h4>randomly asked questions</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- faq-area -->

    <!-- faq-area -->
    <section class="faq-content">
      <div class="containers">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <div class="faq-question">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne">
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Facere harum suscipit ut, perspiciatis quo hic
                        provident aliquam velit autem error cum saepe
                        accusantium voluptas culpa aut inventore tenetur
                        obcaecati pariatur.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo">
                      Lorem ipsum is placeholder text commonly?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Facere harum suscipit ut, perspiciatis quo hic
                        provident aliquam velit autem error cum saepe
                        accusantium voluptas culpa aut inventore tenetur
                        obcaecati pariatur.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree">
                      Lorem ipsum is placeholder text commonly used in the?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Facere harum suscipit ut, perspiciatis quo hic
                        provident aliquam velit autem error cum saepe
                        accusantium voluptas culpa aut inventore tenetur
                        obcaecati pariatur.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree1"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree1">
                      Lorem ipsum is placeholder text commonly used in the
                      graphic?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree1"
                    class="accordion-collapse1 collapse"
                    aria-labelledby="flush-headingThree1"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Facere harum suscipit ut, perspiciatis quo hic
                        provident aliquam velit autem error cum saepe
                        accusantium voluptas culpa aut inventore tenetur
                        obcaecati pariatur.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree2">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree2"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree2">
                      Lorem ipsum is placeholder?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree2"
                    class="accordion-collapse1 collapse"
                    aria-labelledby="flush-headingThree2"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Facere harum suscipit ut, perspiciatis quo hic
                        provident aliquam velit autem error cum saepe
                        accusantium voluptas culpa aut inventore tenetur
                        obcaecati pariatur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- faq-area -->

    <!-- Subscribe-area -->
    <section class="subscribe-area">
      <div class="containers">
        <div class="row">
          <div class="col-md-6">
            <div class="subscribe-con">
              <div class="subscribe">
                <h3>
                  Install Our Mobile app On Your <br />
                  Smartphone
                </h3>
                <ul>
                  <li>
                    <a href="#">
                      <img
                        class="lazy img-fluid"
                        src="assets/images/placeholder.png"
                        data-srcset="assets/images/download-on-the-app-store.png"
                        alt="app-stor" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        class="lazy img-fluid"
                        src="assets/images/placeholder.png"
                        data-srcset="assets/images/get-it-on-google-play.png"
                        alt="google-play" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="subscribe-con">
              <div class="subscribe">
                <h3>
                  Sign up for Price Drops, New <br />
                  Listings, & More
                </h3>
                <form>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email Address"
                    aria-label="subscribe" />
                  <button type="submit" class="btn-subscribe">subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Subscribe-area -->

    <!-- Populer Makers -->
    <section class="populer-markers">
      <div class="containers">
        <div class="row">
          <div class="col-12">
            <div class="title">
              <h2>Populer Makers</h2>
            </div>
          </div>

          <div class="owl-carousel">
            <div class="items">
              <a href="#"
                ><img
                  class="owl-lazy img-fluid"
                  data-src="assets/images/b1.png"
                  alt="toyota"
              /></a>
            </div>
            <div class="items">
              <a href="#"
                ><img
                  class="owl-lazy img-fluid"
                  data-src="assets/images/b2.png"
                  alt="honda"
              /></a>
            </div>
            <div class="items">
              <a href="#"
                ><img
                  class="owl-lazy img-fluid"
                  data-src="assets/images/b3.png"
                  alt="audi"
              /></a>
            </div>
            <div class="items">
              <a href="#"
                ><img
                  class="owl-lazy img-fluid"
                  data-src="assets/images/b4.png"
                  alt="Chevrolet"
              /></a>
            </div>
            <div class="items">
              <a href="#"
                ><img
                  class="owl-lazy img-fluid"
                  data-src="assets/images/b5.png"
                  alt="hyundai"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Populer Makers -->

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

    <!-- welcomeback -->
    <div class="welcomeback-area">
      <div class="welcomeback-content">
        <div class="row">
          <div class="col-12">
            <div class="welcomeback-title">
              <h2>Welcome back!</h2>
              <p>Continue where you left off</p>
            </div>
            <div class="welcomeback">
              <a class="recentimg" href="details.html"
                ><img
                  src="assets/images/BMW-M2.png"
                  class="img-fluid"
                  alt="..."
              /></a>
              <h2>Used 2020 BMW M2 Coupe 2D in Orange, CA</h2>
              <div class="welcomePrice">
                <p>Sale Price</p>
                <p>$35,635</p>
              </div>
              <div class="backbtn">
                <a class="goahead" href="search.html">See more</a>
                <a class="goahead" href="#">Not now</a>
              </div>
              <div class="conavai">
                <a class="goahead" href="search.html"
                  >Confirm availability
                  <i class="fa fa-angle-right" aria-hidden="true"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- welcomeback -->

    <div class="col-12">
      <a href="#" class="scrolltotop"><i class="fa fa-angle-up"></i></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
