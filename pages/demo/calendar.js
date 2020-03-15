Page({
  data: {
    daysStyle: [{
      id: '2020-01-30',
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
    daysDesc: [{}],
    selectedDate: '2019-12-02',
    beginDate: '2019-12-10',
    endDate: '2019-12-22',
    showMoreMonths: true,
    showMoreDays: true
  },
  onReady: function(options) {
    console.log('页面-onReady')
    this.calendar = this.selectComponent("#calendar");
  },
  onLoad: function(options) {
    console.log('页面-onLoad')
  },
  onShow: function(options) {
    console.log('页面-onShow')
    // this.setData({
    //   selectedDate: '2020-01-12',
    //   dotDays: ["2020-01-01", "2020-01-11"],
    //   daysStyle: [{
    //     id: '2020-01-20',
    //     style: 'color: #F00;'
    //   }, {
    //     id: '2020-01-21',
    //     style: 'background: #0A2355;color: #fff; border-radius: 30px;'
    //   }]
    // })
  },
  onDayClick: function(event) {
    console.log(event.detail)
    wx.showToast({
      title: '日期被点击，具体信息请看Console信息',
      icon: 'none'
    })
  },
  onRangeComplete: function(event) {
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
      beginDate: '2020-03-22',
      endDate: '2020-03-24'
    })
    // this.setData({
    //   selectedDate: '2020-03-12',
    //   dotDays: ["2020-03-01", "2020-03-03"],
    //   daysDesc: [{
    //     id: "2020-03-02",
    //     desc: "好天气",
    //     style: 'color: #FF0000; '
    //   },{
    //     id: "2020-03-22",
    //     desc: "有事",
    //     style: 'color: #aaa; '
    //   }],
    //   daysStyle: [{
    //     id: '2020-03-20',
    //     style: 'color: #F00;'
    //   }, {
    //     id: '2020-03-21',
    //     style: 'background: #0A2355;color: #fff; border-radius: 30px;'
    //   }]
    // })
  }
})