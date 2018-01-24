Page({
  data: {
    list: [],
    user: {}
  },
  onLoad: function (options) {
    var id = options.id || '177018'
    var that = this
    wx.request({
      url: 'https://www.tinywan.com/api/wechat/userPlayLists',
      success: function (res) {
        console.log('res == ' + res.data.playlist.songCount);
        that.setData({
          list: res.data.playlist.item,
          user: 'tinywan'
        });
        wx.setNavigationBarTitle({
          title: res.data.playlist.item[0].name
        })
      }
    });
  }
});