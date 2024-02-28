<template>
  <div>
    <!-- loader -->
    <!-- <div class="loader"></div> -->
    <!-- loader -->

    <!-- buyonline-modal -->
    <div class="buyonline-modal">
      <div class="col-12">
        <!-- progressbar -->
        <ul class="ppp2">
          <li class="active"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <!-- progressbar -->
      </div>
      <div class="multistep">
        <form id="msform">
          <!-- step1 -->
          <fieldset>
            <div class="buyonline-head">
              <div class="row">
                <div class="col-5">
                  <div class="carprice">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <a href="#">
                          <img
                            class="lazy img-fluid"
                            src="assets/images/placeholder.png"
                            data-srcset="assets/images/BMW-M2-1.png"
                            alt="car name" />
                        </a>
                      </div>
                      <div class="ms-3">
                        <p>Price</p>
                        <h5>$28,830</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-7">
                  <!-- progressbar -->
                  <ul class="ppp">
                    <li class="active">
                      <div class="steps">
                        <h3><span>01/8 </span> Information</h3>
                      </div>
                    </li>
                    <li>
                      <div class="closes">
                        <img
                          class="img-fluid"
                          src="assets/images/close.png"
                          alt="close" />
                      </div>
                    </li>
                  </ul>
                  <!-- progressbar -->
                </div>
              </div>
            </div>

            <!-- single-result -->
            <div class="card card-result buyon midlebox">
              <a href="#">
                <img
                  class="lazy img-fluid"
                  src="assets/images/placeholder.png"
                  data-srcset="assets/images/BMW-M2.png"
                  alt="car name" />
              </a>
              <div class="card-body">
                <h2 class="card-title">
                  Used 2020 BMW M2 Coupe 2D in Orange, CA
                </h2>
                <div class="row g-2">
                  <div class="col-md-5">
                    <div class="price">
                      <p>MSRP $30,590</p>
                      <h2>$28,830</h2>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="price">
                      <p>Stock : <span>0786</span></p>
                      <p>VIN : <span>WDDSJ4GB0JN527387</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- overly-form -->
              <div class="overly-form buyon">
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Full23"
                        placeholder="Full Name" />
                      <label for="Full23">Full Name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Phone23"
                        placeholder="Phone" />
                      <label for="Phone23">Phone</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="Email23"
                        placeholder="Email" />
                      <label for="Email23">Email</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="City"
                        placeholder="Email" />
                      <label for="City">City or Zip code</label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- overly-form -->
            </div>
            <!-- single-result -->

            <div class="btns">
              <input
                type="button"
                name="next"
                class="next action-button"
                value="Next" />
            </div>
          </fieldset>
          <!-- step1 -->

          <!-- step2 -->
          <fieldset>
            <div class="skip">
              <input
                type="button"
                name="next"
                class="next action-button"
                value="Skip" />
            </div>
            <div class="buyonline-head">
              <div class="row">
                <div class="col-5">
                  <div class="carprice">
                    <div class="media">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <a href="#">
                            <img
                              class="lazy img-fluid"
                              src="assets/images/placeholder.png"
                              data-srcset="assets/images/BMW-M2-1.png"
                              alt="car name" />
                          </a>
                        </div>
                        <div class="ms-3">
                          <p>Price</p>
                          <h5>$28,830</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-7">
                  <!-- progressbar -->
                  <ul class="ppp">
                    <li>
                      <div class="steps">
                        <h3><span>02/8 </span> Trade-In</h3>
                      </div>
                    </li>
                    <li>
                      <div class="closes">
                        <img
                          class="img-fluid"
                          src="assets/images/close.png"
                          alt="close" />
                      </div>
                    </li>
                  </ul>
                  <!-- progressbar -->
                </div>
              </div>
            </div>

            <!-- midlebox -->
            <div class="midlebox">
              <div class="row g-2 priceboxx">
                <div class="col-md-9">
                  <div class="price">
                    <p>Estimated Trade-In Value</p>
                    <h2>$7,765.00 <sub> KBB Price</sub></h2>
                    <small>Net trade-in $12,765.00</small>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="price"></div>
                </div>
              </div>

              <!-- overly-form -->
              <div class="overly-form buyon">
                <h3>Value Your Trade</h3>
                <div class="row g-3">
                  <div class="col-md-12">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="vin"
                        placeholder="WDDSJ4GB0JN527387" />
                      <label for="vin">VIN</label>
                    </div>
                  </div>
                </div>
                <h3>Vehicle Details</h3>

                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <select
                        class="form-select"
                        id="years"
                        aria-label="Floating label select example">
                        <option selected>2020</option>
                        <option value="1">2019</option>
                        <option value="2">2018</option>
                        <option value="3">2017</option>
                      </select>
                      <label for="years">Years</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <select
                        class="form-select"
                        id="model"
                        aria-label="Floating label select example">
                        <option selected>BMW</option>
                        <option value="1">BMW</option>
                        <option value="2">BMW</option>
                        <option value="3">BMW</option>
                      </select>
                      <label for="model">Models</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <select
                        class="form-select"
                        id="M2"
                        aria-label="Floating label select example">
                        <option selected>M2</option>
                        <option value="1">BMW</option>
                        <option value="2">BMW</option>
                        <option value="3">BMW</option>
                      </select>
                      <label for="M2">M2</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <select
                        class="form-select"
                        id="Coupe"
                        aria-label="Floating label select example">
                        <option selected>Coupe</option>
                        <option value="1">BMW</option>
                        <option value="2">BMW</option>
                        <option value="3">BMW</option>
                      </select>
                      <label for="Coupe">Coupe</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="price"
                        placeholder="15000" />
                      <label for="price">price</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="price2"
                        placeholder="4000" />
                      <label for="price2">price</label>
                    </div>
                  </div>
                </div>

                <!--  vehicle-condition-->
                <div class="row">
                  <div class="vehicle-condition">
                    <br />
                    <h3>Vehicle Condition</h3>
                    <ul>
                      <li>
                        <a class="active" href="#">
                          <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="169"
                                height="173"
                                viewbox="0 0 169 173"
                                fill="none">
                                <path
                                  d="M82.6331 0.938477H86.2284C97.4983 1.21504 108.768 3.73867 119.036 8.54395C136.459 16.5297 150.979 30.7727 159.552 48.1615C165.152 59.4314 168.16 72.015 168.471 84.6678V88.1939C168.16 102.195 164.496 116.161 157.685 128.365C151.532 139.531 142.889 149.245 132.587 156.609C119.139 166.323 102.788 171.716 86.2976 172.096H82.7368C67.3185 171.75 52.0038 167.083 39.1091 158.51C22.7228 147.828 10.1737 131.199 4.33135 112.289C1.91143 104.511 0.632324 96.3871 0.459473 88.2631V84.9443C0.701465 72.4645 3.60537 60.0537 9.06748 48.8875C16.8112 32.8469 29.6022 19.399 45.0897 11.033C56.6362 4.6375 69.6001 1.28418 82.6331 0.938477ZM78.1735 11.9318C65.4517 13.0381 53.0409 17.6014 42.5661 25.0686C30.6048 33.5383 21.2017 45.6725 15.9815 59.5006C11.9368 70.01 10.3812 81.4873 11.28 92.7572C12.7319 111.875 21.9276 130.197 36.1015 142.78C46.2997 151.907 59.0216 158.095 72.4349 160.342C86.4358 162.728 101.094 160.895 114.092 155.018C125.258 150.006 135.145 142.124 142.613 132.271C151.393 120.828 156.752 106.689 157.789 92.2041C158.964 77.2697 155.576 62.0242 148.144 49.0949C138.775 32.5012 122.942 19.7793 104.862 14.5592C96.2192 12.001 87.1272 11.1367 78.1735 11.9318Z"
                                  fill="black" />
                                <path
                                  d="M53.8363 44.9811C58.4342 44.1168 63.3086 44.8082 67.4225 47.0899C70.8104 48.9221 73.6105 51.826 75.4428 55.2485C76.6527 57.6338 75.6848 60.8143 73.4031 62.1625C71.1215 63.6145 67.8027 62.8539 66.3508 60.5377C65.5211 59.1895 64.5531 57.9104 63.2049 57.0115C59.6096 54.4879 54.3203 54.8336 51.1053 57.8758C49.5842 59.1203 49.0311 61.3328 47.1988 62.2317C44.7098 63.7182 41.2182 62.6119 40.0082 59.95C39.1785 58.2561 39.2822 56.1473 40.3193 54.5571C43.1887 49.6135 48.2359 46.0182 53.8363 44.9811Z"
                                  fill="black" />
                                <path
                                  d="M107.628 44.9464C112.226 44.1167 117.1 44.8427 121.214 47.1935C124.498 49.0603 127.264 51.8951 129.061 55.2484C130.271 57.6683 129.269 60.9179 126.918 62.197C125.155 63.2341 122.839 63.0613 121.214 61.8513C119.866 60.8488 119.347 59.1202 118.068 58.014C114.576 54.5224 108.492 54.3841 104.862 57.7374C103.237 59.0165 102.684 61.3327 100.783 62.2661C98.2245 63.7527 94.6292 62.5081 93.523 59.7079C92.7279 57.9103 93.039 55.7669 94.1798 54.2113C97.0837 49.3714 102.096 45.9144 107.628 44.9464Z"
                                  fill="black" />
                                <path
                                  d="M43.2922 104.753C45.5738 104.027 48.2357 105.133 49.3766 107.277C52.7299 113.119 57.466 118.166 63.1356 121.658C76.2031 129.886 93.834 129.713 106.694 121.139C111.949 117.682 116.339 112.946 119.485 107.45C120.28 105.929 121.767 104.788 123.461 104.58C126.123 104.096 128.888 106.136 129.303 108.832C129.683 110.423 129.13 112.047 128.231 113.361C123.841 120.794 117.618 127.12 110.22 131.476C94.1797 141.017 72.9881 140.672 57.2586 130.577C50.1371 126.083 44.191 119.722 40.0772 112.289C38.5906 109.489 40.25 105.583 43.2922 104.753Z"
                                  fill="black" />
                              </svg>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h4>Very Good</h4>
                              <p>Details</p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="169"
                                height="169"
                                viewbox="0 0 169 169"
                                fill="none">
                                <path
                                  d="M82.3565 0.494141H86.6087C99.0194 0.839844 111.326 3.88203 122.389 9.55156C139.363 18.125 153.226 32.61 161.073 49.9297C165.671 60.0242 168.125 71.0176 168.506 82.0801V86.6088C168.125 100.229 164.461 113.746 157.72 125.57C151.635 136.39 143.131 145.828 133.002 152.984C123.703 159.587 113.09 164.288 101.923 166.639C96.8761 167.745 91.7597 168.264 86.6087 168.471H82.3911C67.1802 168.056 52.1075 163.528 39.3165 155.231C21.0634 143.615 7.54639 124.705 2.67197 103.617C1.3583 98.0516 0.666895 92.3129 0.459473 86.6088V82.0801C0.908887 68.1482 4.78076 54.3547 11.7985 42.3242C19.7151 28.8072 31.3999 17.4682 45.2972 10.1738C56.7054 4.12402 69.4964 0.874414 82.3565 0.494141ZM80.6626 11.1072C63.3429 11.9369 46.438 19.2658 33.889 31.2617C24.4858 40.1809 17.5026 51.6236 13.9073 64.0689C10.6923 75.1314 10.1737 86.9545 12.3171 98.2936C14.4605 109.529 19.3003 120.246 26.2835 129.303C32.9556 137.98 41.5981 145.171 51.3815 150.114C66.3159 157.754 83.9122 159.932 100.264 156.303C112.364 153.675 123.772 147.833 133.037 139.64C142.751 131.101 150.149 119.969 154.228 107.697C159.31 92.5549 159.206 75.7191 153.986 60.6119C147.522 41.6328 132.967 25.6959 114.714 17.5027C104.101 12.6629 92.3128 10.485 80.6626 11.1072Z"
                                  fill="black" />
                                <path
                                  d="M47.8899 53.4904C52.4878 52.4879 57.5005 55.0461 59.4364 59.3328C61.3032 63.2047 60.4735 68.1482 57.4313 71.1559C54.1126 74.682 48.2356 75.3389 44.2255 72.6078C40.4919 70.257 38.5905 65.3826 39.7659 61.1305C40.7684 57.3277 44.0526 54.251 47.8899 53.4904Z"
                                  fill="black" />
                                <path
                                  d="M116.823 53.5596C121.836 52.3496 127.402 55.4609 128.992 60.3699C130.755 65.0715 128.473 70.8102 123.979 73.0918C119.796 75.408 114.161 74.3363 111.119 70.6719C108.734 67.9408 107.939 63.9652 109.079 60.5428C110.186 57.0512 113.228 54.3201 116.823 53.5596Z"
                                  fill="black" />
                                <path
                                  d="M43.8795 102.304C46.092 101.889 48.4428 103.064 49.4799 105.069C54.1469 113.09 61.6486 119.416 70.4295 122.527C79.6943 125.881 90.1691 125.777 99.3649 122.251C107.8 119.036 114.991 112.848 119.519 105.069C120.764 102.649 123.944 101.509 126.399 102.719C129.061 103.859 130.271 107.351 128.853 109.875C124.981 116.754 119.485 122.666 112.916 127.056C96.7375 137.946 74.2668 138.326 57.673 128.059C50.4133 123.634 44.3289 117.307 40.1459 109.909C38.452 106.936 40.4916 102.788 43.8795 102.304Z"
                                  fill="black" />
                              </svg>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h4>Good</h4>
                              <p>Details</p>
                            </div>
                          </div>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="169"
                                height="169"
                                viewbox="0 0 169 169"
                                fill="none">
                                <path
                                  d="M82.3221 0.494141H86.6779C99.1232 0.874414 111.534 3.9166 122.596 9.65527C139.467 18.2287 153.26 32.6791 161.073 49.9643C165.671 60.0242 168.126 70.983 168.506 82.0455V86.7125C168.091 100.299 164.461 113.816 157.72 125.639C151.705 136.321 143.339 145.655 133.382 152.811C124.083 159.518 113.401 164.288 102.2 166.674C97.0836 167.814 91.898 168.333 86.6779 168.54H82.3221C69.2199 168.16 56.2215 164.738 44.675 158.48C34.857 153.157 26.1107 145.862 19.093 137.185C10.7615 126.814 4.88457 114.472 2.22266 101.439C1.22012 96.5996 0.701563 91.6561 0.494141 86.7125V82.0455C0.736133 77.1711 1.22012 72.2967 2.22266 67.526C4.74629 55.2189 10.1047 43.4996 17.7793 33.5434C25.1428 23.9328 34.5805 15.8779 45.3318 10.243C56.6709 4.15859 69.4619 0.874414 82.3221 0.494141ZM80.6281 11.1072C74.924 11.4184 69.2545 12.3518 63.7924 13.9766C48.132 18.5398 34.1656 28.5307 24.6934 41.8057C17.7447 51.4508 13.216 62.859 11.6258 74.6475C10.1738 85.5025 11.1418 96.7033 14.5297 107.144C17.6064 116.616 22.6191 125.431 29.2221 132.933C39.1437 144.307 52.6953 152.534 67.3877 155.991C82.9789 159.76 99.8147 158.204 114.472 151.601C126.468 146.243 136.943 137.565 144.514 126.849C152.915 115.026 157.685 100.644 157.962 86.1594C158.411 69.3928 152.811 52.5916 142.474 39.4203C135.007 29.8443 125.155 22.1352 114.058 17.2262C103.583 12.5938 92.0363 10.5195 80.6281 11.1072Z"
                                  fill="black" />
                                <path
                                  d="M47.9246 53.4904C52.2804 52.557 57.0166 54.7695 59.1254 58.676C61.1996 62.2713 60.7847 67.0765 58.192 70.2916C55.53 73.7832 50.5519 75.2351 46.4381 73.6795C42.1513 72.193 39.1437 67.6988 39.4894 63.1701C39.6623 58.5377 43.3267 54.3547 47.9246 53.4904Z"
                                  fill="black" />
                                <path
                                  d="M116.823 53.5596C121.905 52.3497 127.505 55.5647 129.027 60.5774C130.651 65.2444 128.37 70.8448 123.979 73.0918C119.9 75.3735 114.369 74.4055 111.292 70.8793C108.768 68.1483 107.904 64.069 109.08 60.5428C110.22 57.0512 113.263 54.2856 116.823 53.5596Z"
                                  fill="black" />
                                <path
                                  d="M50.8286 109.633C58.9871 109.494 67.1457 109.633 75.3043 109.563C89.409 109.563 103.514 109.563 117.618 109.563C120.211 109.563 122.493 111.776 122.7 114.369C122.942 116.547 121.594 118.725 119.623 119.623C118.414 120.211 117.031 120.073 115.717 120.073C94.3871 120.073 73.0227 120.073 51.6928 120.073C48.9272 120.177 46.369 117.791 46.3344 115.026C46.127 112.398 48.2358 109.909 50.8286 109.633Z"
                                  fill="black" />
                              </svg>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h4>Fair</h4>
                              <p>Details</p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--  vehicle-condition-->

                <!-- Equipment -->
                <div class="equipment">
                  <h3>Equipment</h3>
                  <div class="row g-2">
                    <div class="col-md-4">
                      <div class="equipment-check">
                        <label class="check">
                          Power Windows
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="check">
                          Cruse Control
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="check">
                          Power Windows
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="check">
                          Cruse Control
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="equipment-check">
                        <label class="check">
                          Power Mirrors
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="check">
                          Power Seats
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="check">
                          Power Mirrors
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="check">
                          Power Seats
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="equipment-check">
                        <label class="check">
                          Power Locks
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="check">
                          Leather
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="check">
                          Power Locks
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="check">
                          Leather
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Equipment -->
              </div>
              <!-- overly-form -->
            </div>
            <!-- midlebox -->

            <div class="btns">
              <input
                type="button"
                name="previous"
                class="previous action-button-previous"
                value="Back" />
              <input
                type="button"
                name="next"
                class="next action-button"
                value="Next" />
            </div>
          </fieldset>
          <!-- step2 -->

          <!-- step3 -->
          <fieldset>
            <div class="buyonline-head">
              <div class="row">
                <div class="col-5">
                  <div class="carprice">
                    <div class="media">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <a href="#">
                            <img
                              class="lazy img-fluid"
                              src="assets/images/placeholder.png"
                              data-srcset="assets/images/BMW-M2-1.png"
                              alt="car name" />
                          </a>
                        </div>
                        <div class="ms-3">
                          <p>Price</p>
                          <h5>$28,830</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-7">
                  <!-- progressbar -->
                  <ul class="ppp">
                    <li>
                      <div class="steps">
                        <h3><span>03/8 </span> Payment</h3>
                      </div>
                    </li>
                    <li>
                      <div class="closes">
                        <img
                          class="img-fluid"
                          src="assets/images/close.png"
                          alt="close" />
                      </div>
                    </li>
                  </ul>
                  <!-- progressbar -->
                </div>
              </div>
            </div>

            <!-- midlebox -->
            <div class="midlebox">
              <!-- overly-form -->
              <div class="overly-form buyon">
                <!-- payment-option -->
                <div class="payment-option">
                  <div class="row">
                    <div class="col-md-9">
                      <h2>Some Monthly Payment Options For You</h2>
                    </div>
                    <div class="col-md-3"></div>
                    <div class="col-12">
                      <hr />
                    </div>
                  </div>
                </div>
                <!-- payment-option -->

                <h3>Credit Score</h3>

                <div class="row g-3">
                  <div class="col-md-12">
                    <div class="form-floating">
                      <select
                        class="form-select"
                        id="Excellent"
                        aria-label="Floating label select example">
                        <option selected>Excellent (720+)</option>
                        <option value="1">2019</option>
                        <option value="2">2018</option>
                        <option value="3">2017</option>
                      </select>
                      <label for="Excellent">Excellent</label>
                    </div>
                  </div>
                </div>

                <!--  vehicle-condition-->
                <div class="row">
                  <div class="vehicle-condition downpayment">
                    <br />
                    <h3>Select Down Payment</h3>
                    <ul>
                      <li>
                        <a class="active" href="#">
                          <h4>$2,000</h4>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h4>$3,000</h4>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <h4>$4,000</h4>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--  vehicle-condition-->
                <hr />

                <!-- Finance -->
                <div class="finance-box">
                  <h3>
                    <img
                      class="img-fluid"
                      src="assets/images/money.png"
                      alt="" />
                    Finance
                  </h3>
                  <ul>
                    <li class="active">
                      <img
                        class="img-fluid"
                        src="assets/images/usbank.png"
                        alt="" />
                      <h5>$1,230.00 <sub>/mo</sub></h5>
                      <div class="rates">
                        <p>
                          48 <br />
                          Months
                        </p>
                        <p>
                          4.99% <br />
                          APR
                        </p>
                      </div>
                    </li>
                    <li>
                      <img
                        class="img-fluid"
                        src="assets/images/fargo.png"
                        alt="" />
                      <h5>$1,005.20 <sub>/mo</sub></h5>
                      <div class="rates">
                        <p>
                          60 <br />
                          Months
                        </p>
                        <p>
                          5.99% <br />
                          APR
                        </p>
                      </div>
                    </li>
                    <li>
                      <img
                        class="img-fluid"
                        src="assets/images/volvo.png"
                        alt="" />
                      <h5>$868,57 <sub>/mo</sub></h5>
                      <div class="rates">
                        <p>
                          72 <br />
                          Months
                        </p>
                        <p>
                          4.99% <br />
                          APR
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- Finance -->

                <!-- Finance -->
                <div class="finance-box lease">
                  <h3>
                    <img
                      class="img-fluid"
                      src="assets/images/lease.png"
                      alt="lease" />
                    Lease
                  </h3>
                  <ul>
                    <li class="active">
                      <img
                        class="img-fluid"
                        src="assets/images/usbank.png"
                        alt="usbank" />
                      <h5>$1,230.00 <sub>/mo</sub></h5>
                      <div class="rates">
                        <p>
                          48 <br />
                          Months
                        </p>
                        <p>
                          4.99% <br />
                          APR
                        </p>
                      </div>
                    </li>
                    <li>
                      <img
                        class="img-fluid"
                        src="assets/images/fargo.png"
                        alt="fargo" />
                      <h5>$1,005.20 <sub>/mo</sub></h5>
                      <div class="rates">
                        <p>
                          60 <br />
                          Months
                        </p>
                        <p>
                          5.99% <br />
                          APR
                        </p>
                      </div>
                    </li>
                    <li>
                      <img
                        class="img-fluid"
                        src="assets/images/volvo.png"
                        alt="volvo" />
                      <h5>$868,57 <sub>/mo</sub></h5>
                      <div class="rates">
                        <p>
                          72 <br />
                          Months
                        </p>
                        <p>
                          4.99% <br />
                          APR
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- Finance -->

                <!-- cash-box -->
                <div class="cash-box">
                  <h3>
                    <img
                      class="img-fluid"
                      src="assets/images/cash.png"
                      alt="cash" />
                    Cash
                  </h3>
                  <div class="cashed">
                    <h3>$1,230.00</h3>
                  </div>
                </div>
                <!-- cash-box -->
              </div>
              <!-- overly-form -->
            </div>
            <!-- midlebox -->

            <div class="btns">
              <input
                type="button"
                name="previous"
                class="previous action-button-previous"
                value="Back" />
              <input
                type="button"
                name="next"
                class="next action-button"
                value="Next" />
            </div>
          </fieldset>
          <!-- step3 -->

          <!-- step4 -->
          <fieldset>
            <div class="skip">
              <input
                type="button"
                name="next"
                class="next action-button"
                value="Skip" />
            </div>
            <div class="buyonline-head">
              <div class="row">
                <div class="col-5">
                  <div class="carprice">
                    <div class="media">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <a href="#">
                            <img
                              class="lazy img-fluid"
                              src="assets/images/placeholder.png"
                              data-srcset="assets/images/BMW-M2-1.png"
                              alt="car name" />
                          </a>
                        </div>
                        <div class="ms-3">
                          <p>Price</p>
                          <h5>$28,830</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-7">
                  <!-- progressbar -->
                  <ul class="ppp">
                    <li>
                      <div class="steps">
                        <h3><span>04/8 </span> Rebates</h3>
                      </div>
                    </li>
                    <li>
                      <div class="closes">
                        <img
                          class="img-fluid"
                          src="assets/images/close.png"
                          alt="close" />
                      </div>
                    </li>
                  </ul>
                  <!-- progressbar -->
                </div>
              </div>
            </div>

            <!-- midlebox -->
            <div class="midlebox">
              <!-- overly-form -->
              <div class="overly-form buyon">
                <!-- payment-option -->
                <div class="payment-option">
                  <div class="row">
                    <div class="col-md-9">
                      <h2>Some Rebates Available For You</h2>
                    </div>
                    <div class="col-md-3"></div>
                    <div class="col-12">
                      <hr />
                    </div>
                  </div>
                </div>
                <!-- payment-option -->

                <div class="price2">
                  <p>Total Rebates Applied</p>
                  <h4>$5000.00</h4>
                </div>

                <!-- Finance -->
                <div class="finance-box rebates">
                  <ul>
                    <li class="active">
                      <div class="row">
                        <div class="col-md-9">
                          <h5>LFS Lease Cash</h5>
                          <p>Valid upto 04/05/2022</p>
                          <a href="#">View Details</a>
                        </div>
                        <div class="col-md-3">
                          <h2>$5000.00</h2>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="row">
                        <div class="col-md-9">
                          <h5>Collegue Graduate Rebate Program</h5>
                          <p>Valid upto 04/05/2022</p>
                          <a href="#">View Details</a>
                        </div>
                        <div class="col-md-3">
                          <h2>$750.00</h2>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="row">
                        <div class="col-md-9">
                          <h5>Military Reward Program</h5>
                          <p>Valid upto 04/05/2022</p>
                          <a href="#">View Details</a>
                        </div>
                        <div class="col-md-3">
                          <h2>$2000.00</h2>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- Finance -->
              </div>
              <!-- overly-form -->
            </div>
            <!-- midlebox -->

            <div class="btns">
              <input
                type="button"
                name="previous"
                class="previous action-button-previous"
                value="Back" />
              <input
                type="button"
                name="next"
                class="next action-button"
                value="Next" />
            </div>
          </fieldset>
          <!-- step4 -->

          <!-- step5 -->
          <fieldset>
            <div class="skip">
              <input
                type="button"
                name="next"
                class="next action-button"
                value="Skip" />
            </div>
            <div class="buyonline-head">
              <div class="row">
                <div class="col-5">
                  <div class="carprice">
                    <div class="media">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <a href="#">
                            <img
                              class="lazy img-fluid"
                              src="assets/images/placeholder.png"
                              data-srcset="assets/images/BMW-M2-1.png"
                              alt="car name" />
                          </a>
                        </div>
                        <div class="ms-3">
                          <p>Price</p>
                          <h5>$28,830</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-7">
                  <!-- progressbar -->
                  <ul class="ppp">
                    <li>
                      <div class="steps">
                        <h3><span>05/8 </span> Accessories</h3>
                      </div>
                    </li>
                    <li>
                      <div class="closes">
                        <img
                          class="img-fluid"
                          src="assets/images/close.png"
                          alt="close" />
                      </div>
                    </li>
                  </ul>
                  <!-- progressbar -->
                </div>
              </div>
            </div>

            <!-- midlebox -->
            <div class="midlebox">
              <!-- overly-form -->
              <div class="overly-form buyon">
                <!-- payment-option -->
                <div class="payment-option">
                  <div class="row">
                    <div class="col-md-9">
                      <h2>Some Accessories Available For You</h2>
                    </div>
                    <div class="col-md-3"></div>
                    <div class="col-12">
                      <hr />
                    </div>
                  </div>
                </div>
                <!-- payment-option -->

                <div class="price2">
                  <p>Total Cost of Selected Accessoriess</p>
                  <h4>$114.00</h4>
                </div>

                <!-- accessories -->
                <div class="accessories">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="accessories-box active">
                        <div class="top-price">
                          <h4>$114.00</h4>
                        </div>
                        <div class="accessories-img">
                          <a href="#">
                            <img
                              class="lazy img-fluid"
                              src="assets/images/placeholder.png"
                              data-srcset="assets/images/CargoNet_2_1200x1200.png"
                              alt="Cargo" />
                          </a>
                        </div>
                        <div class="accessories-con">
                          <h4>Cargo Net</h4>
                          <a href="#">View Details</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="accessories-box">
                        <div class="top-price">
                          <h4>$114.00</h4>
                        </div>
                        <div class="accessories-img">
                          <a href="#">
                            <img
                              class="lazy img-fluid"
                              src="assets/images/placeholder.png"
                              data-srcset="assets/images/s-l640.png"
                              alt="Cargo" />
                          </a>
                        </div>
                        <div class="accessories-con">
                          <h4>Cargo Net</h4>
                          <a href="#">View Details</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="accessories-box">
                        <div class="top-price">
                          <h4>$114.00</h4>
                        </div>
                        <div class="accessories-img">
                          <a href="#">
                            <img
                              class="lazy img-fluid"
                              src="assets/images/placeholder.png"
                              data-srcset="assets/images/trunkcargohook_f551sal100_18leg_eed5_101.png"
                              alt="Cargo" />
                          </a>
                        </div>
                        <div class="accessories-con">
                          <h4>Cargo Net</h4>
                          <a href="#">View Details</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="accessories-box">
                        <div class="top-price">
                          <h4>$114.00</h4>
                        </div>
                        <div class="accessories-img">
                          <a href="#">
                            <img
                              class="lazy img-fluid"
                              src="assets/images/placeholder.png"
                              data-srcset="assets/images/IS-300h-F-Sport-wheel.png"
                              alt="Cargo" />
                          </a>
                        </div>
                        <div class="accessories-con">
                          <h4>Cargo Net</h4>
                          <a href="#">View Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- accessories -->
              </div>
              <!-- overly-form -->
            </div>
            <!-- midlebox -->

            <div class="btns">
              <input
                type="button"
                name="previous"
                class="previous action-button-previous"
                value="Back" />
              <input
                type="button"
                name="next"
                class="next action-button"
                value="Next" />
            </div>
          </fieldset>
          <!-- step5 -->

          <!-- step6 -->
          <fieldset>
            <div class="skip">
              <input
                type="button"
                name="next"
                class="next action-button"
                value="Skip" />
            </div>
            <div class="buyonline-head">
              <div class="row">
                <div class="col-5">
                  <div class="carprice">
                    <div class="media">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <a href="#">
                            <img
                              class="lazy img-fluid"
                              src="assets/images/placeholder.png"
                              data-srcset="assets/images/BMW-M2-1.png"
                              alt="car name" />
                          </a>
                        </div>
                        <div class="ms-3">
                          <p>Price</p>
                          <h5>$28,830</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-7">
                  <!-- progressbar -->
                  <ul class="ppp">
                    <li>
                      <div class="steps">
                        <h3><span>06/8 </span> Protection</h3>
                      </div>
                    </li>
                    <li>
                      <div class="closes">
                        <img
                          class="img-fluid"
                          src="assets/images/close.png"
                          alt="close" />
                      </div>
                    </li>
                  </ul>
                  <!-- progressbar -->
                </div>
              </div>
            </div>

            <!-- midlebox -->
            <div class="midlebox">
              <!-- overly-form -->
              <div class="overly-form buyon">
                <!-- payment-option -->
                <div class="payment-option">
                  <div class="row">
                    <div class="col-md-9">
                      <h2>Some Protection Available For You</h2>
                    </div>
                    <div class="col-md-3"></div>
                    <div class="col-12">
                      <hr />
                    </div>
                  </div>
                </div>
                <!-- payment-option -->

                <div class="price2">
                  <p>Total Cost of Selected Accessories</p>
                  <h4>$212.00</h4>
                </div>

                <!-- accessories -->
                <div class="accessories">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="accessories-box active">
                        <div class="top-price">
                          <h4>$114.00</h4>
                        </div>
                        <div class="accessories-img">
                          <a href="#">
                            <img
                              class="lazy img-fluid"
                              src="assets/images/placeholder.png"
                              data-srcset="assets/images/car-maintenance-606ab2f8ab000.png"
                              alt="accessories" />
                          </a>
                        </div>
                        <div class="accessories-con">
                          <h4>EFG Maintenace</h4>
                          <div class="row g-3">
                            <div class="col-md-6">
                              <div class="form-floating">
                                <select
                                  class="form-select"
                                  id="Term"
                                  aria-label="Floating label select example">
                                  <option selected>12mo</option>
                                  <option value="1">2019</option>
                                  <option value="2">2018</option>
                                  <option value="3">2017</option>
                                </select>
                                <label for="Term">Term</label>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-floating">
                                <select
                                  class="form-select"
                                  id="Mileage"
                                  aria-label="Floating label select example">
                                  <option selected>15000mi</option>
                                  <option value="1">2019</option>
                                  <option value="2">2018</option>
                                  <option value="3">2017</option>
                                </select>
                                <label for="Mileage">Mileage</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="accessories-box">
                        <div class="top-price">
                          <h4>$114.00</h4>
                        </div>
                        <div class="accessories-img">
                          <a href="#">
                            <img
                              class="lazy img-fluid"
                              src="assets/images/placeholder.png"
                              data-srcset="assets/images/car-maintenance-606ab2f8ab000.png"
                              alt="accessories" />
                          </a>
                        </div>
                        <div class="accessories-con">
                          <h4>Excessive Wear and use</h4>
                          <div class="row g-3">
                            <div class="col-md-6">
                              <div class="form-floating">
                                <select
                                  class="form-select"
                                  id="Term1"
                                  aria-label="Floating label select example">
                                  <option selected>12mo</option>
                                  <option value="1">2019</option>
                                  <option value="2">2018</option>
                                  <option value="3">2017</option>
                                </select>
                                <label for="Term1">Term</label>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-floating">
                                <select
                                  class="form-select"
                                  id="Mileage1"
                                  aria-label="Floating label select example">
                                  <option selected>15000mi</option>
                                  <option value="1">2019</option>
                                  <option value="2">2018</option>
                                  <option value="3">2017</option>
                                </select>
                                <label for="Mileage1">Mileage</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="accessories-box">
                        <div class="top-price">
                          <h4>$114.00</h4>
                        </div>
                        <div class="accessories-img">
                          <a href="#">
                            <img
                              class="lazy img-fluid"
                              src="assets/images/placeholder.png"
                              data-srcset="assets/images/car-maintenance-606ab2f8ab000.png"
                              alt="accessories" />
                          </a>
                        </div>
                        <div class="accessories-con">
                          <h4>Excessive Wear and use</h4>
                          <div class="row g-3">
                            <div class="col-md-6">
                              <div class="form-floating">
                                <select
                                  class="form-select"
                                  id="Term2"
                                  aria-label="Floating label select example">
                                  <option selected>12mo</option>
                                  <option value="1">2019</option>
                                  <option value="2">2018</option>
                                  <option value="3">2017</option>
                                </select>
                                <label for="Term2">Term</label>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-floating">
                                <select
                                  class="form-select"
                                  id="Mileage2"
                                  aria-label="Floating label select example">
                                  <option selected>15000mi</option>
                                  <option value="1">2019</option>
                                  <option value="2">2018</option>
                                  <option value="3">2017</option>
                                </select>
                                <label for="Mileage2">Mileage</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="accessories-box">
                        <div class="top-price">
                          <h4>$114.00</h4>
                        </div>
                        <div class="accessories-img">
                          <a href="#">
                            <img
                              class="lazy img-fluid"
                              src="assets/images/placeholder.png"
                              data-srcset="assets/images/car-maintenance-606ab2f8ab000.png"
                              alt="accessories" />
                          </a>
                        </div>
                        <div class="accessories-con">
                          <h4>Excessive Wear and use</h4>
                          <div class="row g-3">
                            <div class="col-md-6">
                              <div class="form-floating">
                                <select
                                  class="form-select"
                                  id="Term3"
                                  aria-label="Floating label select example">
                                  <option selected>12mo</option>
                                  <option value="1">2019</option>
                                  <option value="2">2018</option>
                                  <option value="3">2017</option>
                                </select>
                                <label for="Term3">Term</label>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-floating">
                                <select
                                  class="form-select"
                                  id="Mileage3"
                                  aria-label="Floating label select example">
                                  <option selected>15000mi</option>
                                  <option value="1">2019</option>
                                  <option value="2">2018</option>
                                  <option value="3">2017</option>
                                </select>
                                <label for="Mileage3">Mileage</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- accessories -->
              </div>
              <!-- overly-form -->
            </div>
            <!-- midlebox -->

            <div class="btns">
              <input
                type="button"
                name="previous"
                class="previous action-button-previous"
                value="Back" />
              <input
                type="button"
                name="next"
                class="next action-button"
                value="Next" />
            </div>
          </fieldset>
          <!-- step6 -->

          <!-- step7 -->
          <fieldset>
            <div class="buyonline-head">
              <div class="row">
                <div class="col-5">
                  <div class="carprice">
                    <div class="media">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <a href="#">
                            <img
                              class="lazy img-fluid"
                              src="assets/images/placeholder.png"
                              data-srcset="assets/images/BMW-M2-1.png"
                              alt="accessories" />
                          </a>
                        </div>
                        <div class="ms-3">
                          <p>Price</p>
                          <h5>$28,830</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-7">
                  <!-- progressbar -->
                  <ul class="ppp">
                    <li>
                      <div class="steps">
                        <h3><span>07/8 </span> Checkout</h3>
                      </div>
                    </li>
                    <li>
                      <div class="closes">
                        <img
                          class="img-fluid"
                          src="assets/images/close.png"
                          alt="close" />
                      </div>
                    </li>
                  </ul>
                  <!-- progressbar -->
                </div>
              </div>
            </div>

            <!-- midlebox -->
            <div class="midlebox">
              <!-- Lease-table -->
              <div class="lease-table">
                <h3>Lease</h3>
                <div class="row">
                  <div class="col-md-7">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>MSRP</td>
                          <td>$102,365.00</td>
                        </tr>
                        <tr>
                          <td>Selling Price</td>
                          <td>$99,117,96</td>
                        </tr>
                        <tr>
                          <td>Trade-in</td>
                          <td>$0.00</td>
                        </tr>
                        <tr>
                          <td>Rebates</td>
                          <td>$0.00</td>
                        </tr>
                        <tr>
                          <td>Deal Type</td>
                          <td>Lease</td>
                        </tr>
                        <tr>
                          <td>Term</td>
                          <td>48</td>
                        </tr>
                        <tr>
                          <td>Mileage</td>
                          <td>7500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="col-md-5">
                    <div class="checkout-total">
                      <h2>$985.20</h2>
                      <p>Estimated Monthly Payment</p>
                      <div class="rates">
                        <p>48 Months</p>
                        <p>4.99% APR</p>
                      </div>
                      <h5>$2000.00 Cash Down</h5>
                      <h4><span> $28,830 </span> Selling Price</h4>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Lease-table -->

              <!-- lease-accordion -->
              <div class="lease-accordion">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne">
                        Price Breakdown
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne">
                      <div class="accordion-body">
                        <!-- lease-table2 -->
                        <div class="lease-table table2">
                          <table class="table table-striped table-hover">
                            <tbody>
                              <tr>
                                <td>Selling Price</td>
                                <td>$99,117,96</td>
                              </tr>
                              <tr>
                                <td>Tax</td>
                                <td>$1,224.00</td>
                              </tr>
                              <tr>
                                <td>Accessories</td>
                                <td>$875.00</td>
                              </tr>
                              <tr>
                                <td>Protect</td>
                                <td>$142.00</td>
                              </tr>
                              <tr>
                                <td>Doc. Fee</td>
                                <td>$53.00</td>
                              </tr>
                              <tr>
                                <td>Title Fee</td>
                                <td>$37.00</td>
                              </tr>
                              <tr>
                                <td>Registration</td>
                                <td>$15.00</td>
                              </tr>
                              <tr>
                                <td>Electric Filling</td>
                                <td>$5.00</td>
                              </tr>
                              <tr>
                                <td>Local Used Fund</td>
                                <td>$5.00</td>
                              </tr>
                              <tr>
                                <td>Tire Tax</td>
                                <td>$5.00</td>
                              </tr>
                              <tr>
                                <td>Acquisition Fee</td>
                                <td>$795.00</td>
                              </tr>
                              <tr>
                                <td>Total Fee</td>
                                <td>$1051.00</td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td>Total</td>
                                <td>$66,542.88</td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        <!-- lease-table2 -->
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo">
                        Payment
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingTwo">
                      <div class="accordion-body">
                        <!-- lease-table2 -->
                        <div class="lease-table table2">
                          <table class="table table-striped table-hover">
                            <tbody>
                              <tr>
                                <td>Selling Price</td>
                                <td>$99,117,96</td>
                              </tr>
                              <tr>
                                <td>Rebates</td>
                                <td>$0.00</td>
                              </tr>
                              <tr>
                                <td>Trade Allow</td>
                                <td>$0.00</td>
                              </tr>
                              <tr>
                                <td>Trade Payoff</td>
                                <td>$0.00</td>
                              </tr>
                              <tr>
                                <td>Cash Down</td>
                                <td>$2,000.00</td>
                              </tr>
                              <tr>
                                <td>First Due Date</td>
                                <td>10/02/2022</td>
                              </tr>
                              <tr>
                                <td>Due On Delivery</td>
                                <td>$2,516.96</td>
                              </tr>
                              <tr>
                                <td>Total Payments</td>
                                <td>48</td>
                              </tr>
                              <tr>
                                <td>Total Capcost</td>
                                <td>$101,301.46</td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td>Monthly</td>
                                <td>$1,386.31</td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        <!-- lease-table2 -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- lease-accordion -->
            </div>
            <!-- midlebox -->

            <div class="btns">
              <input
                type="button"
                name="previous"
                class="previous action-button-previous"
                value="Back" />
              <input
                type="button"
                name="next"
                class="next action-button"
                value="Next" />
            </div>
          </fieldset>
          <!-- step7 -->

          <!-- step8 -->
          <fieldset>
            <div class="buyonline-head">
              <div class="row">
                <div class="col-5">
                  <div class="carprice">
                    <div class="media">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <a href="#">
                            <img
                              class="lazy img-fluid"
                              src="assets/images/placeholder.png"
                              data-srcset="assets/images/BMW-M2-1.png"
                              alt="accessories" />
                          </a>
                        </div>
                        <div class="ms-3">
                          <p>Price</p>
                          <h5>$28,830</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-7">
                  <!-- progressbar -->
                  <ul class="ppp">
                    <li>
                      <div class="steps">
                        <h3><span>08/8 </span> Customer Info</h3>
                      </div>
                    </li>
                    <li>
                      <div class="closes">
                        <img
                          class="img-fluid"
                          src="assets/images/close.png"
                          alt="close" />
                      </div>
                    </li>
                  </ul>
                  <!-- progressbar -->
                </div>
              </div>
            </div>

            <!-- midlebox -->
            <div class="midlebox">
              <!-- overly-form -->
              <div class="overly-form buyon informa">
                <h3>Applicant Information</h3>
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="FullName"
                        placeholder="Full Name" />
                      <label for="FullName">Full Name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Phone"
                        placeholder="Phone" />
                      <label for="Phone">Phone</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="Email2"
                        placeholder="Email" />
                      <label for="Email2">Email</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="Re-enter"
                        placeholder="Re-enter" />
                      <label for="Re-enter">Re-enter email</label>
                    </div>
                  </div>
                </div>

                <h3>Address</h3>

                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Address"
                        placeholder="Street Address" />
                      <label for="Address">Street Address</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="State"
                        placeholder="State" />
                      <label for="State">State</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="City2"
                        placeholder="City" />
                      <label for="City2">City</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="ZIP-code"
                        placeholder="ZIP coder" />
                      <label for="ZIP-code">ZIP code</label>
                    </div>
                  </div>
                </div>

                <h3>Residance Infromation</h3>

                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <select
                        class="form-select"
                        id="Living"
                        aria-label="Floating label select example">
                        <option selected>Please Select</option>
                        <option value="1">2019</option>
                        <option value="2">2018</option>
                        <option value="3">2017</option>
                      </select>
                      <label for="Living">Select Current Living</label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Rent"
                        placeholder="Rent/Mortgage Amount" />
                      <label for="Rent">Rent/Mortgage Amount</label>
                    </div>
                  </div>
                </div>

                <h3>How Long at Current Address?</h3>

                <div class="row g-3">
                  <div class="col-md-3">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Years"
                        placeholder="Years" />
                      <label for="Years">Years</label>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Month"
                        placeholder="Month" />
                      <label for="Month">Month</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Home/Cell"
                        placeholder="Home/Cell Phone Number" />
                      <label for="Home/Cell">Home/Cell Phone Number</label>
                    </div>
                  </div>
                </div>

                <h3>Personal Information</h3>

                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="Email11"
                        placeholder="Email" />
                      <label for="Email11">Email</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Social"
                        placeholder="Social Security Number" />
                      <label for="Social">Social Security Number</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="date"
                        class="form-control"
                        id="Date-Of-Birth" />
                      <label for="Date-Of-Birth">Date Of Birth</label>
                    </div>
                  </div>
                </div>

                <h3>How Long at Current Address?</h3>

                <div class="row g-3">
                  <div class="col-md-3">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Years2"
                        placeholder="Years" />
                      <label for="Years2">Years</label>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Month2"
                        placeholder="Month" />
                      <label for="Month2">Month</label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Employer"
                        placeholder="Employer Phone Number" />
                      <label for="Employer">Employer Phone Number</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Income"
                        placeholder="Monthly Income" />
                      <label for="Income">Monthly Income</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="Other"
                        placeholder="Other Income" />
                      <label for="Other">Other Income</label>
                    </div>
                  </div>
                </div>

                <div class="desclimer">
                  <h5>Our Commitment To Privacy</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis nulla rem optio molestiae minima, officiis
                    dicta itaque facere dignissimos quasi alias obcaecati nobis,
                    maiores eius magnam modi quae enim amet?
                  </p>
                </div>

                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="equipment-check agree">
                      <label class="check">
                        I Agree to The Terms & Conditions
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="E-Signature">
                      <h4>E-Signature</h4>
                    </div>
                  </div>
                </div>
              </div>
              <!-- overly-form -->
            </div>
            <!-- midlebox -->

            <div class="btns">
              <input
                type="button"
                name="previous"
                class="previous action-button-previous"
                value="Back" />
              <input
                type="button"
                name="next"
                class="next action-button barX"
                value="Submit" />
            </div>
          </fieldset>
          <!-- step8 -->

          <!-- step9 -->
          <fieldset>
            <div class="buyonline-head">
              <div class="closes last-x">
                <img
                  class="img-fluid"
                  src="assets/images/close.png"
                  alt="close" />
              </div>
            </div>

            <!-- midlebox -->
            <div class="midlebox thanks">
              <div class="thank-you">
                <img
                  class="lazy img-fluid"
                  src="assets/images/placeholder.png"
                  data-srcset="assets/images/CarNetWork-logo.svg"
                  alt="CarNetWork" />
                <h2>Thank You!</h2>
                <p>
                  Thank you for your interest. Our sales concierage will get in
                  touch with you soon.
                </p>
              </div>
            </div>
            <!-- midlebox -->
          </fieldset>
          <!-- step8 -->
        </form>
      </div>
      <!-- multistep -->
    </div>
    <!-- buyonline-modal -->

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
                      <input type="radio" name="radio" />
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

    <!-- header-area -->
    <header class="header-area fixed-top default-header">
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
                                font-family="Roboto, sans-serif "
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

    <!-- deatails-header -->
    <section class="details-header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-7 col-lg-8">
            <div class="header-title">
              <h1>Used 2020 BMW M2 Coupe 2D in Orange, CA</h1>
              <p>MSRP $30,590</p>
            </div>
          </div>
          <div class="col-md-5 col-lg-4">
            <div class="header-btns">
              <ul>
                <li>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#callUS"
                    ><img src="assets/images/call.svg" alt="call" /> Call</a
                  >
                </li>
                <li>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#textUS"
                    ><img src="assets/images/detail.svg" alt="Text" /> Text</a
                  >
                </li>
                <li><a class="makeoffer" href="#">Make an offer</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- deatails-header -->

    <!-- cardetails-area -->
    <section class="cardetails-area margin-top">
      <div class="containers">
        <div class="row">
          <!-- details-left -->
          <div class="col-md-7 col-lg-8">
            <!-- details-slidder -->
            <div class="details-slider">
              <div class="slider slider-for">
                <a
                  class="magnific"
                  href="assets/images/car6.png"
                  title="slider1"
                  ><img data-lazy="assets/images/car6.png" alt="Image Alt"
                /></a>
                <a
                  class="magnific"
                  href="assets/images/car5.png"
                  title="slider2"
                  ><img data-lazy="assets/images/car5.png" alt="Image Alt"
                /></a>
                <a
                  class="magnific"
                  href="assets/images/car5.png"
                  title="slider3"
                  ><img data-lazy="assets/images/car5.png" alt="Image Alt"
                /></a>
                <a
                  class="magnific"
                  href="assets/images/car4.png"
                  title="slider4"
                  ><img data-lazy="assets/images/car4.png" alt="Image Alt"
                /></a>
                <a
                  class="magnific"
                  href="assets/images/car3.png"
                  title="slider5"
                  ><img data-lazy="assets/images/car3.png" alt="Image Alt"
                /></a>
                <a
                  class="magnific"
                  href="assets/images/car2.png"
                  title="slider6"
                  ><img data-lazy="assets/images/car2.png" alt="Image Alt"
                /></a>
                <a
                  class="magnific"
                  href="assets/images/car11.png"
                  title="slider7"
                  ><img data-lazy="assets/images/car11.png" alt="Image Alt"
                /></a>
              </div>

              <div class="condition desktop-view">
                <ul>
                  <li><a class="exteriors active" href="#">Exterior</a></li>
                  <li><a href="#" class="interiors">Interior</a></li>
                </ul>
              </div>

              <div class="slider slider-nav">
                <img
                  class="img-fluid"
                  rel="group1"
                  data-lazy="assets/images/car6.png"
                  alt="Image Alt" />

                <img
                  class="img-fluid"
                  rel="group1"
                  data-lazy="assets/images/car5.png"
                  alt="Image Alt" />

                <img
                  class="img-fluid"
                  rel="group1"
                  data-lazy="assets/images/car4.png"
                  alt="Image Alt" />

                <img
                  class="img-fluid"
                  rel="group1"
                  data-lazy="assets/images/car3.png"
                  alt="Image Alt" />

                <img
                  class="img-fluid"
                  rel="group1"
                  data-lazy="assets/images/car2.png"
                  alt="Image Alt" />

                <img
                  class="img-fluid"
                  rel="group1"
                  data-lazy="assets/images/car11.png"
                  alt="Image Alt" />
              </div>
            </div>
            <!-- details-slidder -->

            <!-- mobile-view -->
            <div class="cartitle-area mobile-view">
              <div class="card card-result">
                <div class="card-body">
                  <div class="title-breadcrumb">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Used</a></li>
                        <li class="breadcrumb-item active" aria-current="page">
                          Car
                        </li>
                      </ol>
                    </nav>
                  </div>

                  <h2 class="card-title">
                    Used 2020 BMW M2 Coupe 2D in Orange, CA
                  </h2>
                  <p class="card-text">30k mi</p>

                  <div class="price">
                    <h2>$28,830 <span> $118/month</span></h2>
                    <p>MSRP $30,590</p>
                    <div class="loves">
                      <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                  </div>

                  <div class="contact-btn">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#callUS"
                      ><img src="assets/images/call.png" alt="call" />Call</a
                    >
                    <a href="#" data-bs-toggle="modal" data-bs-target="#textUS"
                      ><img src="assets/images/text.png" alt="Text" />Text</a
                    >
                  </div>

                  <hr />

                  <!-- overly-form -->
                  <div class="overly-form">
                    <h4>Submit An Offer</h4>
                    <form>
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
                          id="Phone1"
                          placeholder="Phone" />
                        <label for="Phone1">Phone</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          type="email"
                          class="form-control"
                          id="Email"
                          placeholder="Email" />
                        <label for="Email">Email</label>
                      </div>

                      <button type="submit" class="offer">Submit</button>
                      <a href="#" class="offer2">Buy Online</a>
                      <p class="disclimer">
                        Please Consider Submitting A Reasonable Offer For The
                        Dealership To Consider
                      </p>
                    </form>
                  </div>
                  <!-- overly-form -->
                </div>

                <hr />
              </div>

              <!-- value-trade -->
              <div class="value-trade">
                <div class="row">
                  <div class="col-6">
                    <div class="trade d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/trade3.svg"
                          alt="trade3" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <p>Get Approved</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="trade d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/trade2.svg"
                          alt="trade2" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <p>Value Your Trade</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- value-trade -->

              <!-- Vehicle Details  -->
              <div class="vehicle-details">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="Vehicle-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Vehicle"
                      type="button"
                      role="tab"
                      aria-controls="Vehicle"
                      aria-selected="true">
                      Vehicle Details
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="Features-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Features"
                      type="button"
                      role="tab"
                      aria-controls="Features"
                      aria-selected="false">
                      Features
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="Description-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Description"
                      type="button"
                      role="tab"
                      aria-controls="Description"
                      aria-selected="false">
                      Description
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="Vehicle"
                    role="tabpanel"
                    aria-labelledby="Vehicle-tab">
                    <!-- vehicles-slider -->
                    <div class="detailsvehicles">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td>Stock</td>
                            <td>#447720</td>
                          </tr>
                          <tr>
                            <td>VIN</td>
                            <td>4T1K61AK XMU526823</td>
                          </tr>
                          <tr>
                            <td>Miles</td>
                            <td>8- Speed Automatic</td>
                          </tr>
                          <tr>
                            <td>Highway MPG</td>
                            <td>38 MPG</td>
                          </tr>
                          <tr>
                            <td>City MPG</td>
                            <td>27 MPG</td>
                          </tr>
                          <tr>
                            <td>Engine</td>
                            <td>2.5L I4 DOHC 16V Gasoline</td>
                          </tr>
                          <tr>
                            <td>Drivetrain</td>
                            <td>FWD</td>
                          </tr>
                          <tr>
                            <td>Interior</td>
                            <td>Black</td>
                          </tr>
                          <tr>
                            <td>Exterior</td>
                            <td>Gray</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- vehicles-slider -->
                  </div>
                  <div
                    class="tab-pane fade"
                    id="Features"
                    role="tabpanel"
                    aria-labelledby="Features-tab">
                    <!-- vehicles-slider -->
                    <div class="detailsvehicles">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga omnis quisquam cupiditate quod repellendus mollitia
                        ipsa explicabo suscipit quidem accusamus placeat
                        tempora, hic, eum architecto iste commodi labore minima
                        quasi?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga omnis quisquam cupiditate quod repellendus mollitia
                        ipsa explicabo suscipit quidem accusamus placeat
                        tempora, hic, eum architecto iste commodi labore minima
                        quasi?
                      </p>
                    </div>
                    <!-- vehicles-slider -->
                  </div>
                  <div
                    class="tab-pane fade"
                    id="Description"
                    role="tabpanel"
                    aria-labelledby="Description-tab">
                    <!-- vehicles-slider -->
                    <div class="detailsvehicles">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt, cupiditate illo? Tempora tempore fugiat vitae
                        omnis suscipit officia quam, iste, maiores molestias
                        impedit dolorem deleniti pariatur autem, exercitationem
                        obcaecati sunt.
                      </p>
                    </div>
                    <!-- vehicles-slider -->
                  </div>
                </div>
              </div>
              <!-- Vehicle Details  -->
            </div>

            <!-- mobile-view -->

            <!-- inner-images -->
            <!--                     <div class="inner-images desktop-view">
                        <div class="row g-2">
                            <div class="col-md-6 col-lg-4">
                                <img class="img-fluid" src="assets/images/body1.png" alt="..">
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <img class="img-fluid" src="assets/images/body2.png" alt="..">
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <img class="img-fluid" src="assets/images/body3.png" alt="..">
                            </div>

                            <div class="col-12">
                                <div class="text-center">
                                    <a class="see-all" href="#">See All Images</a>
                                </div>
                            </div>
                        </div>
                    </div> -->
            <!-- inner-images -->

            <!-- cardetails -->
            <div class="cerdetails">
              <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="info-box">
                    <img
                      class="lazy img-fluid"
                      src="assets/images/placeholder.png"
                      data-srcset="assets/images/002-download-speed.png"
                      alt="Mileage" />
                    <hr />
                    <h6>Mileage</h6>
                    <p>30,957</p>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="info-box">
                    <img
                      class="lazy img-fluid"
                      src="assets/images/placeholder.png"
                      data-srcset="assets/images/006-file.png"
                      alt="Stock" />
                    <hr />
                    <h6>Stock</h6>
                    <p>0786</p>
                  </div>
                </div>

                <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="info-box">
                    <img
                      class="lazy img-fluid"
                      src="assets/images/placeholder.png"
                      data-srcset="assets/images/001-manual-transmission.png"
                      alt="Transmission" />
                    <hr />
                    <h6>Transmission</h6>
                    <p>Automatic</p>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="info-box">
                    <img
                      class="lazy img-fluid"
                      src="assets/images/placeholder.png"
                      data-srcset="assets/images/003-car-chassis.png"
                      alt="Drivetrain" />
                    <hr />
                    <h6>Drivetrain</h6>
                    <p>Front-Wheel Drive</p>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="info-box">
                    <img
                      class="lazy img-fluid"
                      src="assets/images/placeholder.png"
                      data-srcset="assets/images/007-gas-station.png"
                      alt="Fuel Type" />
                    <hr />
                    <h6>Fuel Type</h6>
                    <p>Gasoline</p>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="info-box">
                    <img
                      class="lazy img-fluid"
                      src="assets/images/placeholder.png"
                      data-srcset="assets/images/008-car-engine.png"
                      alt="Engine" />
                    <hr />
                    <h6>Engine</h6>
                    <p>208 hp 2L I4</p>
                  </div>
                </div>

                <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="info-box">
                    <img
                      class="lazy img-fluid"
                      src="assets/images/placeholder.png"
                      data-srcset="assets/images/005-seat.png"
                      alt="Interior" />
                    <hr />
                    <h6>Interior</h6>
                    <p>Ash</p>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="info-box">
                    <img
                      class="lazy img-fluid"
                      src="assets/images/placeholder.png"
                      data-srcset="assets/images/car1.png"
                      alt="Exterior" />
                    <hr />
                    <h6>Exterior</h6>
                    <p>Greenish Blue</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- cardetails -->

            <!-- car-history -->
            <div class="car-history">
              <div class="row">
                <div class="col-12">
                  <div class="title">
                    <h3>History</h3>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="mymedia d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="lazy img-fluid"
                        src="assets/images/placeholder.png"
                        data-srcset="assets/images/h1.svg"
                        alt="Overall" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5>Overall Check</h5>
                      <p>0 Issues reported</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="mymedia d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="lazy img-fluid"
                        src="assets/images/placeholder.png"
                        data-srcset="assets/images/h2.svg"
                        alt="Accident" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5>Accident Check</h5>
                      <p>0 Issues reported</p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4">
                  <div class="mymedia d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="lazy img-fluid"
                        src="assets/images/placeholder.png"
                        data-srcset="assets/images/h3.svg"
                        alt="Owner" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5>Owner</h5>
                      <p>Single owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- car-history -->

            <hr />

            <!-- Inspected -->
            <div class="Inspected">
              <div class="row">
                <div class="col-12">
                  <div class="title">
                    <h3>Inspected & Guaranteed</h3>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4">
                  <div class="mymedia d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="lazy img-fluid"
                        src="assets/images/placeholder.png"
                        data-srcset="assets/images/check-mark-button.svg"
                        alt="Stationary" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p>Stationary road test</p>
                    </div>
                  </div>
                  <div class="mymedia d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="lazy img-fluid"
                        src="assets/images/placeholder.png"
                        data-srcset="assets/images/check-mark-button.svg"
                        alt="Body" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p>Body</p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4">
                  <div class="mymedia d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="lazy img-fluid"
                        src="assets/images/placeholder.png"
                        data-srcset="assets/images/check-mark-button.svg"
                        alt="Driving" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p>Driving road test</p>
                    </div>
                  </div>
                  <div class="mymedia d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="lazy img-fluid"
                        src="assets/images/placeholder.png"
                        data-srcset="assets/images/check-mark-button.svg"
                        alt="Oil" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p>Oil level, Battery, etc</p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4">
                  <div class="mymedia d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="lazy img-fluid"
                        src="assets/images/placeholder.png"
                        data-srcset="assets/images/check-mark-button.svg"
                        alt="Brakes" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p>Brakes & wheels</p>
                    </div>
                  </div>
                  <div class="mymedia d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="lazy img-fluid"
                        src="assets/images/placeholder.png"
                        data-srcset="assets/images/check-mark-button.svg"
                        alt="Suspension" />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p>Suspension and underbody</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Inspected -->
          </div>
          <!-- details-left -->

          <!-- details-right -->
          <div class="col-md-5 col-lg-4">
            <div class="cartitle-area desktop-view">
              <div class="card card-result">
                <div class="card-body">
                  <div class="title-breadcrumb">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Used</a></li>
                        <li class="breadcrumb-item active" aria-current="page">
                          Car
                        </li>
                      </ol>
                    </nav>
                  </div>

                  <h2 class="card-title">
                    Used 2020 BMW M2 Coupe 2D in Orange, CA
                  </h2>
                  <p class="card-text">30k mi</p>

                  <div class="price">
                    <h2>$28,830 <span> $118/month</span></h2>
                    <p>MSRP $30,590</p>
                    <div class="loves">
                      <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                  </div>

                  <div class="contact-btn">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#callUS"
                      ><img src="assets/images/call.png" alt="call" />Call</a
                    >
                    <a href="#" data-bs-toggle="modal" data-bs-target="#textUS"
                      ><img src="assets/images/text.png" alt="text" />Text</a
                    >
                  </div>

                  <hr />

                  <!-- overly-form -->
                  <div class="overly-form">
                    <h4>Submit An Offer</h4>
                    <form>
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
                          id="Email21"
                          placeholder="Email" />
                        <label for="Email21">Email</label>
                      </div>

                      <button type="submit" class="offer">Submit</button>
                      <a href="#" class="offer2">Buy Online</a>
                      <p class="disclimer">
                        Please Consider Submitting A Reasonable Offer For The
                        Dealership To Consider
                      </p>
                    </form>
                  </div>
                  <!-- overly-form -->
                </div>

                <hr />
              </div>

              <!-- value-trade -->
              <div class="value-trade desktop-view">
                <div class="row">
                  <div class="col-6">
                    <div class="trade d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/trade3.svg"
                          alt="trade3" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <p>Get Approved</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="trade d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="lazy img-fluid"
                          src="assets/images/placeholder.png"
                          data-srcset="assets/images/trade2.svg"
                          alt="trade2" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <p>Value Your Trade</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- value-trade -->

              <!-- Vehicle Details  -->
              <div class="vehicle-details">
                <ul class="nav nav-tabs" id="myTab1" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="Vehicle1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Vehicle1"
                      type="button"
                      role="tab"
                      aria-controls="Vehicle1"
                      aria-selected="true">
                      Vehicle Details
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="Features1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Features1"
                      type="button"
                      role="tab"
                      aria-controls="Features1"
                      aria-selected="false">
                      Features
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="Description1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Description1"
                      type="button"
                      role="tab"
                      aria-controls="Description1"
                      aria-selected="false">
                      Description
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent1">
                  <div
                    class="tab-pane fade show active"
                    id="Vehicle1"
                    role="tabpanel"
                    aria-labelledby="Vehicle1-tab">
                    <!-- vehicles-slider -->
                    <div class="detailsvehicles">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td>Stock</td>
                            <td>#447720</td>
                          </tr>
                          <tr>
                            <td>VIN</td>
                            <td>4T1K61AK XMU526823</td>
                          </tr>
                          <tr>
                            <td>Miles</td>
                            <td>8- Speed Automatic</td>
                          </tr>
                          <tr>
                            <td>Highway MPG</td>
                            <td>38 MPG</td>
                          </tr>
                          <tr>
                            <td>City MPG</td>
                            <td>27 MPG</td>
                          </tr>
                          <tr>
                            <td>Engine</td>
                            <td>2.5L I4 DOHC 16V Gasoline</td>
                          </tr>
                          <tr>
                            <td>Drivetrain</td>
                            <td>FWD</td>
                          </tr>
                          <tr>
                            <td>Interior</td>
                            <td>Black</td>
                          </tr>
                          <tr>
                            <td>Exterior</td>
                            <td>Gray</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- vehicles-slider -->
                  </div>
                  <div
                    class="tab-pane fade"
                    id="Features1"
                    role="tabpanel"
                    aria-labelledby="Features1-tab">
                    <!-- vehicles-slider -->
                    <div class="detailsvehicles">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga omnis quisquam cupiditate quod repellendus mollitia
                        ipsa explicabo suscipit quidem accusamus placeat
                        tempora, hic, eum architecto iste commodi labore minima
                        quasi?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga omnis quisquam cupiditate quod repellendus mollitia
                        ipsa explicabo suscipit quidem accusamus placeat
                        tempora, hic, eum architecto iste commodi labore minima
                        quasi?
                      </p>
                    </div>
                    <!-- vehicles-slider -->
                  </div>
                  <div
                    class="tab-pane fade"
                    id="Description1"
                    role="tabpanel"
                    aria-labelledby="Description1-tab">
                    <!-- vehicles-slider -->
                    <div class="detailsvehicles">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt, cupiditate illo? Tempora tempore fugiat vitae
                        omnis suscipit officia quam, iste, maiores molestias
                        impedit dolorem deleniti pariatur autem, exercitationem
                        obcaecati sunt.
                      </p>
                    </div>
                    <!-- vehicles-slider -->
                  </div>
                </div>
              </div>
              <!-- Vehicle Details  -->
            </div>
          </div>
          <!-- details-right -->
        </div>
      </div>
    </section>
    <!-- cardetails-area -->

    <!-- similer-cars -->
    <section class="similer-cars">
      <div class="containers">
        <div class="row">
          <div class="col-12">
            <div class="title">
              <h3>Similar Cars You Might Like</h3>
            </div>
          </div>

          <div class="details-card">
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
                    <a href="#" data-bs-toggle="modal" data-bs-target="#callUS"
                      ><img src="assets/images/call.svg" alt="Call" />Call</a
                    >
                    <a href="#" data-bs-toggle="modal" data-bs-target="#textUS"
                      ><img src="assets/images/text.svg" alt="Text" />Text</a
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
                            id="Amount38"
                            placeholder="Amount" />
                          <label for="Amount38">Your Offer Amount</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="Full38"
                            placeholder="Full Name" />
                          <label for="Full38">Full Name</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="Phone38"
                            placeholder="Phone" />
                          <label for="Phone38">Phone</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control"
                            id="Email38"
                            placeholder="Email" />
                          <label for="Email38">Email</label>
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
                        Please Consider Submitting A Reasonable Offer For The
                        Dealership To Consider
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
                    <a href="#" data-bs-toggle="modal" data-bs-target="#callUS"
                      ><img src="assets/images/call.svg" alt="Call" />Call</a
                    >
                    <a href="#" data-bs-toggle="modal" data-bs-target="#textUS"
                      ><img src="assets/images/text.svg" alt="Text" />Text</a
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
                            id="Amount381"
                            placeholder="Amount" />
                          <label for="Amount381">Your Offer Amount</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="Full381"
                            placeholder="Full Name" />
                          <label for="Full381">Full Name</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="Phone381"
                            placeholder="Phone" />
                          <label for="Phone381">Phone</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control"
                            id="Email381"
                            placeholder="Email" />
                          <label for="Email381">Email</label>
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
                        Please Consider Submitting A Reasonable Offer For The
                        Dealership To Consider
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
                    <a href="#" data-bs-toggle="modal" data-bs-target="#callUS"
                      ><img src="assets/images/call.svg" alt="Call" />Call</a
                    >
                    <a href="#" data-bs-toggle="modal" data-bs-target="#textUS"
                      ><img src="assets/images/text.svg" alt="Text" />Text</a
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
                            id="Amount39"
                            placeholder="Amount" />
                          <label for="Amount39">Your Offer Amount</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="Full40"
                            placeholder="Full Name" />
                          <label for="Full40">Full Name</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="Phone41"
                            placeholder="Phone" />
                          <label for="Phone41">Phone</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control"
                            id="Email42"
                            placeholder="Email" />
                          <label for="Email42">Email</label>
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
                        Please Consider Submitting A Reasonable Offer For The
                        Dealership To Consider
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
                    <a href="#" data-bs-toggle="modal" data-bs-target="#callUS"
                      ><img src="assets/images/call.svg" alt="Call" />Call</a
                    >
                    <a href="#" data-bs-toggle="modal" data-bs-target="#textUS"
                      ><img src="assets/images/text.svg" alt="Text" />Text</a
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
                            id="Amount43"
                            placeholder="Amount" />
                          <label for="Amount43">Your Offer Amount</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="Full44"
                            placeholder="Full Name" />
                          <label for="Full44">Full Name</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="Phone45"
                            placeholder="Phone" />
                          <label for="Phone45">Phone</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control"
                            id="Email46"
                            placeholder="Email" />
                          <label for="Email46">Email</label>
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
                        Please Consider Submitting A Reasonable Offer For The
                        Dealership To Consider
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
                    <a href="#" data-bs-toggle="modal" data-bs-target="#callUS"
                      ><img src="assets/images/call.svg" alt="Call" />Call</a
                    >
                    <a href="#" data-bs-toggle="modal" data-bs-target="#textUS"
                      ><img src="assets/images/text.svg" alt="Text" />Text</a
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
                            id="Amount432"
                            placeholder="Amount" />
                          <label for="Amount432">Your Offer Amount</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="Full443"
                            placeholder="Full Name" />
                          <label for="Full443">Full Name</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="Phone454"
                            placeholder="Phone" />
                          <label for="Phone454">Phone</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control"
                            id="Email465"
                            placeholder="Email" />
                          <label for="Email465">Email</label>
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
                        Please Consider Submitting A Reasonable Offer For The
                        Dealership To Consider
                      </p>
                    </div>
                  </div>
                  <!-- overly-form -->
                </div>
              </div>
            </div>
            <!-- single-result -->
          </div>

          <div class="col-12">
            <div class="text-center">
              <a class="see-all" href="#">See All Images</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- similer-cars -->

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
