console.info("Text formatting init.");

// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener(function (request) {
  console.log("request", request);

  // 接收到 background 传递的替换信息
  if (request.code === 1) {
    // eslint-disable-next-line no-undef
    var replacedText = pangu.spacing(request.message); // 要替换的文本
    console.log("替换前文本：", request.message);
    console.log("替换后文本：", replacedText);

    if (replacedText && request.isEditable) {
      replaceSelectedText(replacedText);
    }
  }
});

// eslint-disable-next-line no-unused-vars
function getSelectedText() {
  // 获取当前活动的输入框
  var inputElement = document.activeElement;
  var selectedText = "";

  if (inputElement.tagName === "INPUT" || inputElement.tagName === "TEXTAREA") {
    selectedText = inputElement.value.substring(
      inputElement.selectionStart,
      inputElement.selectionEnd,
    );
  }

  return selectedText;
}

// 替换选中的文本片段
function replaceSelectedText(replacement) {
  // 获取当前活动的输入框
  var inputElement = document.activeElement;

  if (inputElement.tagName === "INPUT" || inputElement.tagName === "TEXTAREA") {
    var start = inputElement.selectionStart;
    var end = inputElement.selectionEnd;

    var newValue =
      inputElement.value.substring(0, start) +
      replacement +
      inputElement.value.substring(end);
    inputElement.value = newValue;

    // 重新设置光标位置
    var newCursorPosition = start + replacement.length;
    inputElement.setSelectionRange(newCursorPosition, newCursorPosition);
  }
}

console.info("Text formatting end.");
