/* 用 promise 方式封装 request 请求方法 */
const request = data => {
    // 抽离公共路径
    const baseUrl ="https://api.zbztb.cn/api/public/v1/";

    // 发送请求前先显示加载框
    wx.showLoading({
      title: '加载中',
      mask: false
    })

  return new Promise((resove,reject) => {
      //  发送请求 
          wx.request({
            // 解构所有数据
            ...data,
            url: baseUrl+data.url,
            success: res => {
              // console.log(res);
              const { message } = res.data;
              // 成功的回调
              resove(message)
            },
            fail: err => {
              // 失败的回调
              reject(err);
            },
            complete: res => {
              // 请求完成时隐藏加载框
              wx.hideLoading();
            }
          })        
  })
}

// 导出封装的request 方法
module.exports = {
  request
}