export const state = () => ({
  posts: []
})

export const mutations = {
  updatePosts(state, payload) {
    state.posts = payload
  }
}
/* eslint-disable */
export const actions = {
  async fetchPosts(context) {
    if (context.state.posts.length) return
    try {
      let posts = await this.$axios.get('/posts?page=1&per_page=20&_embed=1').then(response => response.data)
      posts = posts.filter(el => el.status === "publish").map(({ id, slug, title, excerpt, date, _embedded }) => ({
        id,
        slug,
        title,
        excerpt,
        date,
        categories: _embedded['wp:term']['0'].filter(el => el.taxonomy === 'category').map(({ name, slug }) => ({ name, slug })),
        image: _embedded['wp:featuredmedia']['0'].source_url,
      }))
      context.commit('updatePosts', posts)
    } catch (error) {
      console.log(error)
    }
  }
}
