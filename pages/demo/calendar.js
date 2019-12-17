Page({
  data: {
    daysStyle: [{
      id: '2019-12-30',
      style: 'background: #67C23A;color: #666; border-radius: 30px;'
    }, {
      id: '2019-12-10',
      style: 'background: #E6A23C;color: #ff0000;'
    }, {
      id: '2019-12-18',
      style: 'background: #F56C6C;color: #FFF000;'
    }, {
      id: '2019-12-30',
      style: 'background: #0A2355;color: #fff; border-radius: 30px;'
    }],
    dotDays: ['2019-12-20'],
    selectedDate:'2019-12-02',
    beginDate:'2019-12-10',
    endDate:'2019-12-22'
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
  onRangeComplete: function (event) {
    console.log(event.detail)
     
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
      selectedDate: '2019-12-12'
      // ,
      // dotDays: ["2019-12-01", "2019-12-11"],
      // daysStyle: [{
      //   id: '2019-12-20',
      //   style: 'color: #F00;'
      // }, {
      //   id: '2019-12-21',
      //     style: 'background: #0A2355;color: #fff; border-radius: 30px;'
      // }]
    })
  }
})