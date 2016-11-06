declare var module: any;
document.querySelector("h1").textContent = `hello world!!!`;
if (module.hot) {
  module.hot.accept();
}
