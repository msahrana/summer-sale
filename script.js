/* get element & price */
let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");
for (const card of cards) {
  card.addEventListener("click", function () {
    const title = card.querySelector("h3").innerText;
    const priceStr = card.querySelector("span").innerText;
    const price = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );
    const titleContainer = document.querySelector("#title-container");
    const p = document.createElement("p");
    p.innerText = titleCount + ". " + title + " " + priceStr;
    titleContainer.appendChild(p);
    titleCount++;
    totalPrice += price;
    document.querySelector("#total-price").innerText = totalPrice.toFixed(2);
  });
}
/* coupon part */
const btn = document.querySelector("#apply-btn");
btn.addEventListener("click", function () {
  const couponCode = document.querySelector("#input-field").value;
  if (totalPrice >= 200) {
    // discount calculation
    if (couponCode === "SELL200") {
      const discountElement = document.querySelector("#discount-price");
      const discountAmount = totalPrice * 0.2;
      discountElement.innerText = discountAmount.toFixed(2);
      // rest calculation
      const grandTotal = document.querySelector("#grand-total");
      grandTotal.innerText = totalPrice - discountAmount.toFixed(2);
      document.querySelector("#input-field").value = "";
    } else {
      alert("Invalid coupon code");
      document.querySelector("#input-field").value = "";
    }
  } else {
    alert("Please buy $200 or more");
    document.querySelector("#input-field").value = "";
  }
});
