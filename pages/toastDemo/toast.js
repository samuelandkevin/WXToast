Page({
  data: { 
    content: "请注意无 AppID 关联下，调用 wx.operateWXData 是受限的, API 的返回是工具的模拟返回,请注意无 AppID 关联下，调用 wx.operateWXData 是受限的, API 的返回是工具的模拟返回"
  },
  // tosat测试
  onLoad: function () {
    // 调用应用实例的方法获取全局数据
    let app = getApp();
    // toast组件实例
    new app.ToastPannel();
  },
  // 触发toast组件
  openToastPannel: function () {
    this.show(this.data.content);
  }
})  