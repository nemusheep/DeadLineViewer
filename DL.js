document.addEventListener("DOMContentLoaded", () => {
    const DL1 = new Date('2025-07-09');
    const now = new Date();

    const remainedTime1 = DL1 - now;
    const remainedDay1 = Math.ceil(remainedTime1 / (1000 * 60 * 60 * 24));

    document.getElementById("DL1").textContent = `${remainedDay1}`;
});