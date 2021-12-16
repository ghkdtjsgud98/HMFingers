"use strict";

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#reg_btn");

registerBtn.addEventListener("click", register);

function register() {
  const req = {
    id: id.value,
    psword: psword.value,
    confirmPsword: confirmPsword.value,
  };
  console.log(req);
  // 회원인증
  if (!id.value) return alert("아이디를 입력해주세요.");
  if (req.psword != req.confirmPsword)
    return alert("비밀번호가 일치하지 않습니다.");

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    });
}
