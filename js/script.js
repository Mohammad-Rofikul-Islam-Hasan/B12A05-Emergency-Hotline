// Call Button Functionality
document
  .getElementById("service-cards")
  .addEventListener("click", function (e) {
    let coin = Number(document.getElementById("coin").innerText);

    if (coin >= 20) {
      if (e.target.className.includes("call-btn")) {
        coin = coin - 20;
        document.getElementById("coin").innerText = coin;

        const cardButton = e.target;
        const serviceName =
          cardButton.parentNode.parentNode.children[1].innerText;
        const serviceTitle =
          cardButton.parentNode.parentNode.children[2].innerText;
        const serviceNumber =
          cardButton.parentNode.parentNode.children[3].innerText;
        alert(`📞 Calling ${serviceNumber}... for ${serviceTitle}.`);
        const historyCart = document.getElementById("history-cart");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
      <div class="flex cart-item justify-between p-5 bg-slate-100 my-5 rounded-xl">
              <div>
              <h5 class="font-semibold">${serviceName}</h5>
              <p class="">${serviceNumber}</p>
            </div>
            <div>${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}</div>
            </div>
      `;
        historyCart.appendChild(newHistory);
      }
    } else {
      alert("❌ Opps!!! You don't have enough coin.");
    }

    let heart = Number(document.getElementById("heart").innerText);

    if (e.target.className.includes("heart-btn")) {
      heart = heart + 1;
      document.getElementById("heart").innerText = heart;
    }
       
  let copy = Number(document.getElementById("copy").innerText);

    if (e.target.className.includes("copy-btn")) {
      copy = copy + 1;
      document.getElementById("copy").innerText = copy;
    }
  });

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-cart").innerHTML = "";
});
