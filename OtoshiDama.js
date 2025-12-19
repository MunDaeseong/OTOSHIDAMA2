document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("giftBtn");
  
    if (!btn) {
      console.error("giftBtn not found");
      return;
    }
  
    btn.addEventListener("click", function () {
      console.log("button clicked");
      window.location.href =
        "https://gift.starbucks.co.jp/c/1766TGSpz2mxhEMSXDO1lW7rv3nOHJAk";
    });
  });