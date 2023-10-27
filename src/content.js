import { businessJudgment } from "./common/util";

console.info("【格式化插件】Text formatting init.");

const business = businessJudgment();
const selection = window.getSelection();

console.info("【格式化插件】当前插件宿主：", business);

// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener(function (request) {
  console.log("request", request);

  // 接收到 background 传递的替换信息
  if (request.code === 1) {
    // eslint-disable-next-line no-undef
    var replacedText = pangu.spacing(request.message); // 要替换的文本
    console.log("【格式化插件】替换前文本：", request.message);
    console.log("【格式化插件】替换后文本：", replacedText);

    if (replacedText && request.isEditable) {
      switch (true) {
        case business === "GoogleExcel" || business === "Shimo":
          googleExcelreplaceSelectedText(replacedText);
          return;
        default:
          break;
      }
      console.log("【格式化插件】通用框逻辑");
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

function googleExcelreplaceSelectedText(newText) {
  if (window.getSelection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const newTextNode = document.createTextNode(newText);
    range.deleteContents();
    range.insertNode(newTextNode);
    selection.removeAllRanges();
    selection.addRange(range);
  } else if (document.selection && document.selection.type != "Control") {
    document.selection.createRange().text = newText;
  }
}

// console.info("Text formatting end.");
