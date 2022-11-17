<script lang="ts" setup>
const posts = ref([]);
</script>

<template>
  <main class="blog">
    <SectionHero
      heading="Website Design, and Full Stack Development Articles."
      leading="Get Website Design, Development , Laravel, Vue and WordPress Related Articles, Tips , Web Hosting deals coupons and more."
      image="/img/full-stack-blog.png"
    ></SectionHero>
    <div class="section">
      <div class="container mx-auto">
        <div class="flex flex-row flex-wrap">
          <div class="w-full">
            <div v-if="posts" class="flex flex-wrap">
              <post-card
                v-for="(post, i) in posts"
                :key="i"
                class="w-full md:w-1/3"
                :post="post"
              />
            </div>
          </div>
          <!-- <div class="w-full md:w-1/4">SIdebar</div> -->
        </div>
      </div>
    </div>
  </main>
</template>
