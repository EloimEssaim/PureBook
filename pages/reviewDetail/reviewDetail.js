// pages/reviewDetail/reviewDetail.js
const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookInfo:{
      bookTitle: "哥伦比亚的倒影",
      authorName: "木心（1927-2011)"
    },
    reviewInfo:{
      reviewTitle:"顾影的木心",
      reviewUserName:"潇湘夜雨",
      reviewUserAvatar:"../../images/author-1.jpg",
      reviewContent: "记者采访木心，谈及木心名字由来，乃孔子弟子称颂老师的话“夫子木铎有心”。限于识见，我未找到此语的出处，倒是论语中有“天将以夫子为木铎”之语。木心解释“木铎”，系号角之意，不过按朱熹《四书章句集注》所注：“木铎，金口木舌，施政教时所振，以警众者也”，此物该是一个铃铛，使用方法当为摇动而非鼓吹。如果说木心之文鼓吹了什么，的确难见，若说木心是铃铛，摇曳有声，还是贴切的。偶然风过，木心摇曳多姿震出一串铃音，不是钧天广乐的气派，只是一串细碎的颤声，转瞬隐去。初读木心《哥伦比亚的倒影》，文字的特色最为触目。多文言，多僻字，行文古奥。目下杂志、报刊乃至图书内的诸多文章，一味的平淡拖沓，乏味无趣，与传统断裂。失去了中文应有的简洁、明快。木心的文字，乍观之下，有典丽古意，对于久失古典文化浸润的现代国人，自有耳目一新之感。对木心的观感，分歧多在思想，有称其“刻薄”的，亦有赞其有见识、有见地，而对其文字倒是赞誉颇多。一直为木心鼓吹的陈丹青评价道：“可能是我们时代唯一一位完整衔接古典汉语传统与五四传统的写作”，也是针对其文字风格而言。只是细细读罢《哥伦比亚的倒影》，沉心琢磨他的文字，却总觉有点像仿造的古董，譬如仿定窑的瓷器上绘了一座摩天楼，老有什么东西让人如鲠在喉，周身不快。"

    }
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var api = ""
    var params = {

    }
    http.GET(api, params, function (res) {

    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})