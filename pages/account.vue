<template>
  <div>
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

    <!-- account-area -->
    <section class="account-area margin-top">
      <div class="containers">
        <div class="row">
          <div class="col-lg-3">
            <!-- account-nav -->
            <div class="account-nav">
              <nav>
                <ul>
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Recommended cars</a></li>
                  <li><a href="#">My garage</a></li>
                  <li><a href="#">Email notifications</a></li>
                  <li><a href="#">Recently viewed cars</a></li>
                  <li><a href="#">Logout</a></li>
                </ul>
              </nav>
            </div>
            <!-- account-nav -->
          </div>

          <div class="col-lg-9">
            <!-- account-details -->
            <div class="account-details">
              <div class="title-breadcrumb">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Account</a></li>
                    <li class="breadcrumb-item active" aria-current="page">
                      My account
                    </li>
                  </ol>
                </nav>
              </div>
              <div class="account-title mb-3">
                <h1>Account settings</h1>
              </div>

              <!-- overly-form -->
              <div class="overly-form">
                <form>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="first"
                          placeholder="First name" />
                        <label for="first">First name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="last"
                          placeholder="Last name" />
                        <label for="last">Last name</label>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="username"
                          placeholder="username" />
                        <label for="username">Username</label>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="email"
                          class="form-control"
                          id="emails"
                          placeholder="emails" />
                        <label for="emails">Email Address</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          placeholder="password" />
                        <label for="password">Password</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="phone"
                          placeholder="phone" />
                        <label for="phone">Phone (optional)</label>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <button type="submit" class="offer">Update</button>
                    </div>
                  </div>
                </form>
              </div>
              <!-- overly-form -->
              <!-- overly-form -->
            </div>
            <!-- account-details -->
          </div>
        </div>
      </div>
    </section>
    <!-- account-area -->

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

<script setup lang="ts">
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: "bodyClose",
    },
  ],
});
</script>
<style lang="scss" scoped></style>
