import Vue from 'vue'
import store from 'store/index'

function tweetFromStatus (status) {

  return {
    id: status.id_str,
    author: {
      image_url: status.user.profile_image_url,
      name: status.user.name,
      screen_name: status.user.screen_name
    },
    created_at: status.created_at,
    content: status.text
  }
}

export function getTweetsFromAPI () {
  return new Promise( (resolve, reject) => {
    let hashtag = store.state.hashtag
    let max_id = store.state.max_id || ''
    Vue.http.get("https://raw.githubusercontent.com/bvsbharat/VR-slide/gh-pages/static/timelineData.json")
    .then((response) => {
      let min = max_id === '' ? 5 : 1

      

      response.body = JSON.parse(response.body);
console.log(response.body)
      if(response.body.length) {
        store.dispatch('setTweetsMaxId', '2')
         response.body.forEach((status) => {
          //TODO (Victor) : gérer les différents types de tweets (médias différents, image, vidéo)
          //TODO (Victor) : faire une factory qui crée un type selon son type de média
          //let tweet = tweetFromStatus(status)
          store.dispatch('addTweet', status)
        })
        resolve()
      } else {
        // console.log('Sorry but your hashtag seems to be not very famous')
        reject({error: -1})
      }

    }, (response) => {
      // console.log('error: ', response)
      reject(response)
    })
  })
}
