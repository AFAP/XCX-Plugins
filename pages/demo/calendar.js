Page({
  data: {
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
    }],
    dotDays: ['2019-11-20']
  },
  onLoad: function(options) {

  },
  onDayClick: function(event) {
    console.log(event.detail)
    wx.showToast({
      title: '日期被点击，具体信息请看Console信息',
      icon: 'none'
    })
  },
  onMonthChange: function(event) {
    console.log(event.detail)
    wx.showToast({
      title: '月份变换，具体信息请看Console信息',
      icon: 'none'
    })
  },
  addDot: function() {
    this.setData({
      dotDays: ["2019-11-01", "2019-11-11"],
      daysStyle: [{
        id: '2019-11-20',
        style: 'color: #F00;'
      }, {
        id: '2019-11-21',
        style: 'color: #F00;'
      }]
    })
  }
})