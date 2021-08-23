Page({
  data: {
    language: 'ZH',
    daysStyle: [{
      id: '2020-04-30',
      style: 'background: #67C23A;color: #666; border-radius: 30px;'
    }, {
      id: '2019-04-10',
      style: 'background: #E6A23C;color: #ff0000;'
    }, {
      id: '2019-04-18',
      style: 'background: #F56C6C;color: #FFF000;'
    }],
    dotDays: ['2021-08-20'],
    daysDesc: [{ id: '2021-08-20', desc: "" }],
    minDate: '2020-03-03',
    maxDate: '2021-08-26',
    disableDays: ['2021-08-22'],
    selectedDate: '2020-04-22',
    beginDate: '2020-04-01',
    endDate: '2020-04-12',
    showMoreMonths: true,
    showMoreDays: true
  },
  onReady: function (options) {
    console.log('页面-onReady')
    this.calendar = this.selectComponent("#calendar");
  },
  onLoad: function (options) {
    console.log('页面-onLoad')
  },
  onShow: function (options) {
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
  onDayClick: function (event) {
    console.log(event.detail)
    wx.showToast({
      title: '日期被点击，具体信息请看Console信息',
      icon: 'none'
    })
  },
  onRangeComplete: function (event) {
    console.log(event.detail)

  },
  onMonthChange: function (event) {
    console.log(event.detail)
    wx.showToast({
      title: '月份变换，具体信息请看Console信息',
      icon: 'none'
    })
  },
  addDot: function () {
    this.setData({
      // beginDate: '2020-06-17',
      // endDate: '2020-06-18',
      minDate: '2020-06-19',
      maxDate: '2022-07-24'
    })
    this.setData({
      // selectedDate: '2020-06-12',
      // dotDays: ["2020-06-01", "2020-06-03"],
      daysDesc: [{
        id: "2021-08-02",
        desc: "好天气",
        style: 'color: #FF0000; '
      }, {
        id: "2021-08-22",
        desc: "订满",
        style: 'color: #aaa; '
      },
      {
        id: "2021-08-23",
        desc: "可订",
        style: 'color: blue; '
      }],
      daysStyle: [{
        id: '2020-06-20',
        style: 'color: #F00;'
      },
        //  {
        //   id: '2020-06-21',
        //   style: 'background: #0A2355;color: #fff; border-radius: 30px;'
        // }
      ],
      disableDays: ['2021-08-08']
    })
  }
})