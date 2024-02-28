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
                          <li
                            class="breadcrumb-item active"
                            aria-current="page">
                            Favorite
                          </li>
                        </ol>
                      </nav>

                      <h1>Favorite cars</h1>
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
