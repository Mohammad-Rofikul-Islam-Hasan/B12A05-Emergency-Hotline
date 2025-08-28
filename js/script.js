document
  .getElementById("service-cards")
  .addEventListener("click", function (e) {
    let coin = Number(document.getElementById("coin").innerText);

    if (coin >= 20 && coin <= 100) {
      coin = coin - 20;
      document.getElementById("coin").innerText = coin;

      if (e.target.className.includes("call-btn")) {
        const cardButton = e.target;
        const serviceName =
          cardButton.parentNode.parentNode.children[1].innerText;
        const serviceNumber =
          cardButton.parentNode.parentNode.children[3].innerText;
        alert(`📞 Calling ${serviceNumber}... for ${serviceName}.`);
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
    }
    else{
      alert("❌ Opps!!! You don't have enough coin.")
    }
  });

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-cart").innerHTML = "";
});
