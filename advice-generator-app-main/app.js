const diceBtn = document.getElementById("diceBtn");

diceBtn.addEventListener("click", () => {
  console.log("Button clicked.");

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    document.getElementById("advice").innerHTML = `Advice #${data.slip.id}`;
    document.getElementById("quote").innerHTML = `"${data.slip.advice}"`;
  };

  fetchAdvice();
});
