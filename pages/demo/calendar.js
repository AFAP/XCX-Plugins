// pages/demo/calendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weekdays: ['周日', '一', '二', '三', '四', '五', '六'],
    daysStyle: [{
      id: '2019-07-30',
      style: 'background: #67C23A;color: #666; border-radius: 30px;'
    }, {
      id: '2019-08-10',
      style: 'background: #E6A23C;color: #ff0000;'
    }, {
      id: '2019-08-18',
      style: 'background: #F56C6C;color: #FFF000;'
    }, {
      id: '2019-08-30',
      style: 'background: #0A2355;color: #fff; border-radius: 30px;'
    }]
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onDayClick: function(event) {
    console.log(event.detail)
    wx.showToast({
      title: '日期被点击，具体信息请看Console信息',
      icon: 'none'
    })
  },
  onMonthChange: function (event) {
    console.log(event.detail)
    wx.showToast({
      title: '月份变换，具体信息请看Console信息',
      icon: 'none'
    })
  }
})