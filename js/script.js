const start_btn = document.querySelector(".start-button button");
const info_card = document.querySelector(".info-card");
const exit_btn = document.querySelector(".info-card-footer .footer-button-exit");
const cont_btn = document.querySelector(".info-card-footer .footer-button-cont");
const quiz_card = document.querySelector(".quiz-card");
const next_btn = document.querySelector(".quiz-card-footer .footer-button");
const result_card = document.querySelector(".quiz-result-card");
const replay_btn = document.querySelector(".quiz-result-footer .footer-button-replay");
const quit_btn = document.querySelector(".quiz-result-footer .footer-button-quit");


start_btn.onclick = ()=>{
  info_card.classList.add("activeState");  //show info card
  start_btn.classList.add("inactiveState"); //hide start button
}

exit_btn.onclick = ()=>{
  info_card.classList.remove("activeState");  
  start_btn.classList.remove("inactiveState");
}

cont_btn.onclick = ()=>{
  quiz_card.classList.add("activeState");  //show info card
  info_card.classList.add("inactiveState"); //hide start button
}

next_btn.onclick = ()=>{
  result_card.classList.add("activeState");  //show result card
  quiz_card.classList.remove("activeState"); //hide quiz card
}



