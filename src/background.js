// eslint-disable-next-line no-undef
chrome.contextMenus.create({
  title: "Text Formatting",
  contexts: ["all"],
  onclick: (val) => {
    const selectedText = val.selectionText;
    const isEditable = val.editable;

    console.log("selectedText", selectedText);
    console.log("isEditable", isEditable);

    if (selectedText) {
      sendMsgToContentScript({
        code: 1,
        isEditable,
        message: selectedText,
      });
    }
  },
});

function sendMsgToContentScript(data) {
  // eslint-disable-next-line no-undef
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // eslint-disable-next-line no-undef
    chrome.tabs.sendMessage(tabs[0].id, data);
  });
}

// function addSpaceBetweenChineseAndEnglish(text) {
//   // 使用正则表达式进行匹配和替换
//   var modifiedText = text.replace(/([\u4e00-\u9fa5])([a-zA-Z1-9])/g, '$1 $2');
//   modifiedText = modifiedText.replace(/([a-zA-Z1-9])([\u4e00-\u9fa5])/g, '$1 $2');

//   return modifiedText;
// }
