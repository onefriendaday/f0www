<template>
  <div>
    <section class="section">
      <div class="text-container" v-if="story.content.component">
        <div>
          DEBUG:
          {{ story.content }}
        </div>
        <h1>{{ story.content.title }}</h1>
        <p class="intro">{{ story.content.intro }}</p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'State of the ÐApps — About'
      }
    },
    data () {
      return {
        story: { content: {} }
      }
    },
    mounted () {
      this.$storyblok.init()
      this.$storyblok.on('change', () => {
        location.reload(true)
      })
      this.$storyblok.on('published', () => {
        location.reload(true)
      })

      this.$store.dispatch('setSiteSection', '')
    },
    asyncData (context) {
      // Check if we are in the editor mode
      let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

      // Load the JSON from the API
      return context.app.$storyapi.get('cdn/stories/home', {
        version: version
      }).then((res) => {
        return res.data
      }).catch((res) => {
        context.error({ statusCode: res.response.status, message: res.response.data })
      })
    }
  }
</script>
