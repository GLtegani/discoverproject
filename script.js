function toggleMode() {
  // Ao fazer isso eu chamo a tag html do meu documento, interferindo nela.
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "/assets/avatar-light-real.png")
    img.setAttribute(
      "alt",
      "Foto de Gabriel de perto, apenas o rosto dele, olhando para outro lado."
    )
  } else {
    img.setAttribute("src", "./assets/avatarreal.png")
    img.setAttribute(
      "alt",
      "Foto de Gabriel segurando um celular, de camisa preta, sorrindo com o fundo de seu quarto."
    )
  }
}
