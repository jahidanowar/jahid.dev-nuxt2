<template>
  <footer class="pt-16 pb-8 border-t dark:border-gray-600 mb-12 sm:mb-0">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-10 gap-10">
      <div class="col-span-1 md:col-span-4">
        <logo class="h-16" />
        <p class="my-4">
          I’m Jahid Anowar, a Full Stack Web Developer, Programming for the last
          5 years and have built 150+ human-centered websites and apps for
          businesses.
        </p>
        <social-buttons> </social-buttons>
      </div>
      <div class="col-span-1 md:col-span-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 class="font-medium text-lg">Quick Links</h3>
            <ul class="mt-4">
              <li><nuxt-link to="/">Home</nuxt-link></li>
              <li><nuxt-link to="/service/">Service</nuxt-link></li>
              <li><nuxt-link to="/portfolio/">Portfolio</nuxt-link></li>
              <li><nuxt-link to="/blog/">Blog</nuxt-link></li>
              <li><nuxt-link to="/contact/">Contact</nuxt-link></li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium text-lg">Connect</h3>
            <p class="text-sm mt-4">
              Be the first to know when are the new digital products coming out.
              Expect only 1 or 2 emails a month. I promise, I won’t spam you.
            </p>
            <form
              id="mc-embedded-subscribe-form"
              action="https://dev.us8.list-manage.com/subscribe/post?u=2df9d9dee856197c9cb3e0fac&amp;id=ac2908ee1e"
              method="post"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <input
                id="email"
                class="mt-3 form-control"
                type="email"
                name="EMAIL"
                placeholder="Enter your email"
              />
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px" aria-hidden="true">
                <input
                  type="text"
                  name="b_2df9d9dee856197c9cb3e0fac_ac2908ee1e"
                  tabindex="-1"
                  value=""
                />
              </div>
              <button class="btn w-full btn-primary mt-3">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-6">
      <hr class="mt-10 mb-6 dark:border-gray-600" />
      <div class="text-center">
        &copy; 2020-2022 No Rights Reserved 🤣
        <br />
        <nuxt-link to="/">Jahid Anowar</nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from './atoms/Logo.vue'
import SocialButtons from './SocialButtons.vue'
export default {
  name: 'PageFooter',
  components: { SocialButtons, Logo }
}
</script>

<style>
.footer-border {
  border-top: 1px solid #edf2f7;
}
</style>
