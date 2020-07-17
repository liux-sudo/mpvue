<template>
  <div class="movies">
    <div class="movies_content" v-for="(item,index) in movieList" :key="index">
      <img class="cover" src="/static/images/default.jpeg" alt="">
      <div>
        <p>{{item.data.title}}</p>
        <p>类型：{{item.data.category}}</p>
        <p>描述：{{item.data.descriptionEditor}}</p>
      </div>
      <p class="num">9.0</p>
    </div>
  </div>
</template>

<script>
  // const movieUrl = 'http://t.yushu.im/v2/movie/top250'
  const movieUrl = 'https://api.apiopen.top/videoRecommend?id=127398'
  export default {
    data() {
      return {
        movieList: []
      }
    },
    beforeMount() {
      this.$fly.get(movieUrl)
        .then(res => {
          const data = res.data
          if (data.code === 200) {
            this.movieList = data.result
          } else {
            wx.showToast({
              title: res.message,
              icon: 'error',
              duration: 2000
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
</script>

<style>
  .movies_content {
    width: 100%;
    height: 180rpx;
    box-sizing: border-box;
    padding: 15rpx 20rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1rpx solid #eee;
  }

  .cover {
    width: 150rpx;
    height: 150rpx;
    margin-right: 15rpx;
  }

  .movies_content>div {
    width: 70%;
    height: 150rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .movies_content>div p:nth-child(1),.movies_content>div p {
    font-size: 32rpx;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .movies_content>div p:nth-child(2),
  .movies_content>div p:nth-child(3) {
    font-size: 30rpx;
  }

  .num {
    margin-left: 15rpx;
    align-self: flex-start;
    color: red;
    font-size: 36rpx;
    font-weight: bold;
  }
</style>
