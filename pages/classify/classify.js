// 在 Page() 入口函数前，导入 request 模块，注意这里的路径
const { request } = require("../../utils/request.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
      catData: [],
      listData: [],
      listIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求分类数据
    this.getClassifyData();
  },
  // 点击列表项事件
  chooseItem(e){
      // console.log(e);
    const {index} = e.currentTarget.dataset;
    this.setData({
      listIndex: index,
      listData: this.data.catData[index].children
    })
  },

  // 请求分类数据
  getClassifyData(){
    const data = { url: "categories"}
    // 调用封装好的request方法
    request(data).then(res => {
      this.setData({
        catData: res,
        listData: res[this.data.listIndex].children
      })
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