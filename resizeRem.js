
//rem单位配合js 自适应各分辨率手机
// 注意 必须在head 中加载此文件  若在body后加载 刷新页面则会出现元素单位值改变的现象

function infinite() {
    var htmlWidth = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth)
    if (htmlWidth <= 320) {
        document.getElementsByTagName("html")[0].setAttribute("style", "font-size:20px;");
    } else {
        document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + (20 / 320 * htmlWidth).toFixed() + "px");
    }
}
window.addEventListener('resize', function() { infinite(); }, false);
infinite();
