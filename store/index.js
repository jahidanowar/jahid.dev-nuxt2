export const state = () => ({
  posts: []
})

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  }
}

export const actions = {
  async fetchPosts(context) {
    const posts = await this.$axios.get('/posts')
    context.commit('setPosts', posts.data)
  }
}
