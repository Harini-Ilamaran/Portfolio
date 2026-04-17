var sideMenu = document.getElementById("sideMenu");

function openMenu(){
    sideMenu.style.right= "0";
}
function closeMenu(){
    sideMenu.style.right= "-200px";
}

const scriptURL = "https://script.google.com/macros/s/AKfycbxP5PLXeOlkVUMu3vAUffjF4HUr-ouD_VkGXVWvecRClN9gDly7TmGVdV2hrGJbMMgh/exec";
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    msg.innerHTML = "Message sent successfully!";
    form.reset();

    setTimeout(() => {
      msg.innerHTML = "";
    }, 1000);
  })
  .catch(error => {
    msg.innerHTML = "Failed to send message!";
  });
});
  