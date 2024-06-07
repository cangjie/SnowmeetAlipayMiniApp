App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    my.getAuthCode({
      scopes: 'auth_base',
      success: res =>{
        console.info(res)
      }
    });
    
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});