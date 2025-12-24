const correctPassword = "0817";

document.getElementById("enterBtn").addEventListener("click", () => {
  const input = document.getElementById("password").value;
  if (input === correctPassword) {
    document.getElementById("gate").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
  } else {
    alert("合言葉が違うみたい…");
  }
});

document.getElementById("giftBtn").addEventListener("click", () => {
  const ok = confirm("お年玉、開ける？");
  if (ok) {
    // ★ここをスタバeGiftのURLに変更
    window.location.href = "https://gift.starbucks.co.jp/";
  }
});