const wrapper = document.queryselector( ".wrapper" );
const question = document.queryselector( ".question" );
const gif = document.queryselector( ".gif" );
const yesBtn = document.queryselector( ".yes-Btn" );
const noBtn = document.queryselector( ".no-Btn" );

yesBtn.addEventListener("click", ( ) => {
    question.innerHTML = "AI LOP YU TUUU !!!";
    "gif.src = https://media.tenor.com/sC6u3UcjXV8AAAAC/cat-i-love-you.gif";

});

noBtn.addEventListener("mouseover", () => {
   const noBtnRect = noBtn.getBoundingClientRect();
   const maxX = window.innerWidth - noBtnRect.width;
   const maxY = window.innerHeight - noBtnRect.height;

   const randomX = Math.Floor(Math.random() * maxX);
   const randomY = Math.floor(Math.random() * maxY);

   noBtn.syle.left = randomX + "px";
   noBtn.style.top = randomY + "px";

});