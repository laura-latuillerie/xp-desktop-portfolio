// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

window.onload = function () {
  document.getElementById("loading").style.display = "none";
};

new TypeIt(".typing-effect", {
  strings: "",
  speed: 120,
  loop: true,
})
  .type("Hello !", { delay: 100 })
  .delete(18, { delay: 800 })
  .type("私はローラです", { delay: 100 })
  .delete(7, { delay: 800 })
  .type("I'm Laura", { delay: 100 })
  .delete(8, { delay: 800 })
  .go();