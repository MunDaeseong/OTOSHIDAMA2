const CORRECT = "0817";
const giftURL = "https://gift.starbucks.co.jp/"; // 本物に差し替え

function check() {
  const v = document.getElementById("password").value.trim();
  if (v === CORRECT) {
    document.getElementById("gate").classList.add("hidden");
    document.getElementById("card").classList.remove("hidden");
  } else {
    alert("ちがうみたい…");
  }
}

// HTMLが読み込まれてから実行
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("giftBtn").onclick = () => {
    window.location.href = giftURL;
  };
});
