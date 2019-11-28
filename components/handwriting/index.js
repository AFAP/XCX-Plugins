let tempPath = [];
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  /**
   * 组件的初始数据
   */
  data: {
    showCanvas: false,
    colorBlocks: ['#FF0000', '#FF4081', '#FFA000', '#FFEB3B', '#00BCD4', '#2196F3', '#9E9E9E', '#000000'],
    showPalette: false,
    showBrush: false,
    color: '#000000',
    strokeWidth: 6,
    windowWidth: 0,
    windowHeight: 0,
    canvasWidth: wx.getSystemInfoSync().windowWidth,
    canvasHeidht: wx.getSystemInfoSync().windowHeight - 46,
    toolBarHeight: 46,
    ctx: null,
    timeStamp: -1000,
    paths: [], // 路径二维数组
    tempFilePath: ''
  },
  lifetimes: {
    created: function() {
      // console.log('handwriting ----> created')
      const res = wx.getSystemInfoSync() 
      let canvasWidth = res.windowWidth;
      let canvasHeidht = res.windowHeight - this.data.toolBarHeight;
      // console.log(`设置画板:canvasWidth->${canvasWidth},canvasHeidht->${canvasHeidht}`)
      this.setData({
        canvasWidth,
        canvasHeidht
      })
    },
    attached: function() {
      // console.log('handwriting ----> attached')
    },
    ready: function() {
      // console.log('handwriting ----> ready')
      let ctx = wx.createCanvasContext('canvas-handwriting', this);
      ctx.setFillStyle('#fff')
      ctx.fillRect(0, 0, 1000, 1000)
      ctx.setLineWidth(this.data.strokeWidth)
      ctx.draw()
      this.setData({
        ctx
      })
    },
    detached: function() {
      // console.log('handwriting ----> detached')
    },
  },
  pageLifetimes: {
    show: function() {
      // console.log('handwriting ----> show')
    },
    hide: function() {
      // console.log('handwriting ----> hide')
    },
    resize: function(size) {
      // console.log('handwriting ----> resize')
    }
  },
  methods: {
    showPalette: function() {
      this.setData({
        showBrush: false,
        showPalette: !this.data.showPalette
      })
    },
    showBrush: function() {
      this.setData({
        showPalette: false,
        showBrush: !this.data.showBrush
      })
    },
    changeColor: function(event) {
      let color = event.currentTarget.dataset.color;
      this.setData({
        showPalette: false,
        color
      })
      let ctx = this.data.ctx;
      ctx.setStrokeStyle(color)
    },
    onBrushChange: function(event) {
      // let strokeWidth = event.detail.value;
      let strokeWidth = event.currentTarget.dataset.width;
      this.setData({
        showBrush: false,
        strokeWidth
      })
      let ctx = this.data.ctx;
      ctx.setLineWidth(strokeWidth)
    },
    onEdit: function() {
      this.setData({
        showCanvas: true
      })
    },
    clearHandWriting: function() {
      this.setData({
        tempFilePath: '',
        timeStamp: -1000,
        paths: []
      })
      let ctx = this.data.ctx;
      console.log(ctx)
      ctx.clearRect(0, 0, 1000, 1000);
      ctx.setFillStyle('#fff')
      ctx.setLineWidth(this.data.strokeWidth)
      ctx.fillRect(0, 0, 1000, 1000)
      ctx.draw();
    },
    finishDraw: function() {
      console.log('finishDraw ----> ')
      let _this = this;
      wx.canvasToTempFilePath({
        canvasId: 'canvas-handwriting',
        fileType: 'jpg',
        quality: 1.0,
        success(res) {
          // console.log(res)
          _this.setData({
            showCanvas: false,
            tempFilePath: res.tempFilePath
          })
          _this.triggerEvent('OnComplete', res.tempFilePath);
        },
        fail(res) {
          console.error(res)
        }
      }, this)
    },
    isPaused: function() {
      return this.data.showBrush || this.data.showPalette;
    },
    onTouchStart: function(event) {
      // console.log('onTouchStart ----> ', event)
      if (this.isPaused()) {
        console.log('onTouchstart ----> 处于设置状态')
        return
      }
      let point = {
        x: event.touches[0].x,
        y: event.touches[0].y
      };
      tempPath = [point];
    },
    onTouchEnd: function(event) {
      // console.log('onTouchEnd ----> ', event)
      let paths = this.data.paths;
      paths.push(tempPath);
      tempPath = [];
      // 利用临时数组来记录轨迹，最后保留，解决频繁setData导致性能急剧下降的问题
      this.setData({
        paths
      })
    },
    onTouchmove: function(event) {
      // console.log('onTouchmove ----> ', event)
      if (this.isPaused()) {
        console.log('onTouchstart ----> 处于设置状态')
        return
      }
      // let timeStamp = this.data.timeStamp;
      // let gap = event.timeStamp - timeStamp;
      // if (gap < 20) {
      //   console.log('渲染太快，舍弃');
      //   return;
      // } 
      let point = {
        x: event.touches[0].x,
        y: event.touches[0].y
      };
      tempPath.push(point)
      let ctx = this.data.ctx;
      ctx.moveTo(tempPath[tempPath.length - 2].x, tempPath[tempPath.length - 2].y)
      ctx.setLineCap('round')
      // ctx.setLineJoin('round')
      ctx.lineTo(point.x, point.y)
      ctx.stroke()
      ctx.draw(true )
    },
    onError: function(event) {
      console.error('onError ----> ', event)
    },
  }
})