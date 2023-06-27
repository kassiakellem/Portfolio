document.querySelector('.linha-hamburguer-menu').addEventListener('click', function(evento){
    var menu = document.querySelector('.nav-list');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
    var checkbox = document.getElementById('checkbox-menu');
    checkbox.checked = !checkbox.checked
        evento.preventDefault();
  });
// 
window.addEventListener("resize", function(){
  var largura = window.innerWidth
  var menu = document.querySelector('.nav-list');
  var checkbox = document.getElementById('checkbox-menu');
  if(largura>768){
    menu.style.display = 'flex';
  }
  else if(!checkbox.checked) {
    menu.style.display = 'none';
  }
  
})