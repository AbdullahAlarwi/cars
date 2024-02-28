<template>
  <div>
    <!-- loader -->
    <!-- <div class="loader"></div> -->
    <!-- loader -->

    <!-- header-area -->
    <header class="header-area loginheader fixed-top">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- navigation -->
            <div class="navigation">
              <a class="navbar-brand" href="login.html"
                ><img class="img-fluid" src="assets/images/logo.svg" alt="logo"
              /></a>
            </div>
            <!-- navigation -->
          </div>
        </div>
      </div>
    </header>
    <!-- header-area -->

    <!-- login-area -->
    <section class="login-area margin-top">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="login-content">
              <div class="logo">
                <img
                  class="lazy img-fluid"
                  src="assets/images/placeholder.png"
                  data-srcset="assets/images/logo-2.png"
                  alt="logo 2" />
                <h1>Create an account</h1>
              </div>
              <!-- overly-form -->
              <form>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-floating mb-3">
                      <input
                        type="name"
                        class="form-control"
                        id="name"
                        placeholder="Mahabub Talukdar" />
                      <label for="text">Full Name</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="demomail@mail.com" />
                      <label for="email">Email address</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="phone"
                        placeholder="Phone no" />
                      <label for="phone">Phone no</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="ZIP"
                        placeholder="ZIP Code" />
                      <label for="ZIP">ZIP Code</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating mb-3">
                      <input
                        type="password"
                        class="form-control"
                        id="Password"
                        placeholder="password" />
                      <label for="Password">Password</label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating mb-3">
                      <input
                        type="password"
                        class="form-control"
                        id="Password2"
                        placeholder="Confirm password" />
                      <label for="Password2">Confirm password</label>
                    </div>
                  </div>
                </div>

                <button type="submit" class="offer">Register</button>
              </form>

              <p class="or">Or</p>

              <div class="loginwith">
                <ul>
                  <li>
                    <a href="#">
                      <img
                        class="lazy img-fluid"
                        src="assets/images/placeholder.png"
                        data-srcset="assets/images/google.png"
                        alt="google" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        class="lazy img-fluid"
                        src="assets/images/placeholder.png"
                        data-srcset="assets/images/apple.png"
                        alt="apple" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        class="lazy img-fluid"
                        src="assets/images/placeholder.png"
                        data-srcset="assets/images/facebook.png"
                        alt="facebook" />
                    </a>
                  </li>
                </ul>

                <h4>
                  Already have an account? <a href="login.html"> Sign In </a>
                </h4>
              </div>
              <!-- overly-form -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- login-area -->

    <!-- login-footer -->
    <section class="login-footer">
      <div class="container-fluid">
        <div class="row">
          <div class="copy">
            <p>
              By submitting this form, you agree to CarNetWorks’s <br />
              <a href="#"> Terms of Service </a>and
              <a href="#"> Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- login-footer -->
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
