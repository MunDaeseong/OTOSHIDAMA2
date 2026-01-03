const giftURL = "https://gift.starbucks.co.jp/"; // 本物に差し替え

// HTMLが読み込まれてから実行
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("giftBtn").onclick = () => {
    window.location.href = giftURL;
  };
});
