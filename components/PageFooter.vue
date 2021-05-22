<template>
  <footer class="bg-white pt-16 pb-8 footer-border">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-10 gap-10">
      <div class="col-span-1 md:col-span-4">
        <img
          src="~/assets/img/jahid-anowar-logo.svg"
          alt="Jahid Logo"
          class="h-16"
        />
        <p class="text-gray-600 mt-4">
          I’m Jahid Anowar, a Full Stack Web Developer, Programming for the last
          5 years and have built 137+ human-centered websites and apps for
          businesses.
        </p>
        <div class="flex mt-3">
          <a
            href="https://twitter.com/@jahidDev"
            class="p-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg"
            ><svg
              viewBox="0 0 24 24"
              6
              xmlns="http://www.w3.org/2000/svg"
              class="h-4"
              fill="currentColor"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              /></svg
          ></a>
          <a
            href="https://www.linkedin.com/in/jahidanowar/"
            target="_blank"
            class="
              p-3
              bg-gray-100
              hover:bg-gray-200
              text-gray-800
              rounded-lg
              ml-2
            "
            ><svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4"
              fill="currentColor"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              /></svg
          ></a>
          <a
            href="https://facebook.com/jahid500k"
            class="
              p-3
              bg-gray-100
              hover:bg-gray-200
              text-gray-800
              rounded-lg
              ml-2
            "
            ><svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"
              /></svg
          ></a>
          <a
            href="https://www.youtube.com/channel/UCeLvns7Gwo_aq18-GKT-yww"
            class="
              p-3
              bg-gray-100
              hover:bg-gray-200
              text-gray-800
              rounded-lg
              ml-2
            "
            ><svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4"
              fill="currentColor"
            >
              <path
                d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"
              /></svg
          ></a>
        </div>
      </div>
      <div class="col-span-1 md:col-span-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 class="font-medium text-lg">Quick Links</h3>
            <ul class="text-gray-600 mt-4">
              <li><nuxt-link to="/">Home</nuxt-link></li>
              <li><nuxt-link to="/service">Service</nuxt-link></li>
              <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
              <li><nuxt-link to="/blog">Blog</nuxt-link></li>
              <li><nuxt-link to="/contact">Contact</nuxt-link></li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium text-lg">Connect</h3>
            <p class="text-sm text-gray-600 mt-4">
              Be the first to know when are the new digital products coming out.
              Expect only 1 or 2 emails a month. I promise, I won’t spam you.
            </p>
            <form action="/">
              <input
                id="email"
                class="mt-3 form-control"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <button class="btn w-full btn-secondary mt-3">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-6">
      <hr class="mt-10 mb-6" />
      <div>
        &copy; 2020 All Rights Reserved.
        <nuxt-link to="/">Jahid Anowar</nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
.footer-border {
  border-top: 1px solid #edf2f7;
}
</style>
