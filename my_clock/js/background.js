chrome.contextMenus.create({
    'type':'normal',
    'title':'hello',
    'id':'cn',
    'onclick':myfuntion
});
function myfuntion(info, tab){
    alert('hello')
}

// 监听扩展程序安装和更新事件
chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === 'install' || details.reason === 'update') {
      // 跳转到指定网页
      chrome.tabs.update({
        url: "https://www.xiaohongshu.com/explore"
      });
    }
  });