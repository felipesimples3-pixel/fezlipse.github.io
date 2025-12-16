function adicionar() {
  let texto = document.getElementById("tarefa").value;
  if (texto === "") return;

  let li = document.createElement("li");
  li.textContent = texto;

  li.onclick = function () {
    li.remove();
  };

  document.getElementById("lista").appendChild(li);
  document.getElementById("tarefa").value = "";
}
