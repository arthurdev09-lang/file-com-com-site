// ===== ALTERE SOMENTE ESTA ÁREA COM OS DADOS REAIS =====
const CONFIG = {
  anotaAi: "https://SEU-LINK-DO-ANOTA-AI-AQUI.com",
  instagram: "https://instagram.com/SEU_USUARIO",
  endereco: "Rua Exemplo, 123 — Centro, Sua Cidade - SP",
  googleMaps: "https://www.google.com/maps"
};

const pratos = [
  {nome:"Picanha na Brasa", categoria:"CARNES", descricao:"Carne selecionada, acompanhamentos da casa e muito sabor.", preco:"R$ 69,90", imagem:"assets/images/prato-01.jpg"},
  {nome:"Prato Brasileiro", categoria:"DA CASA", descricao:"Arroz, feijão, carne, acompanhamentos e aquele tempero brasileiro.", preco:"R$ 34,90", imagem:"assets/images/prato-02.jpg"},
  {nome:"Costela Especial", categoria:"CARNES", descricao:"Costela macia, preparada com cuidado e acompanhamentos selecionados.", preco:"R$ 59,90", imagem:"assets/images/prato-03.jpg"},
  {nome:"Parmegiana da Casa", categoria:"CLÁSSICOS", descricao:"Filé empanado, molho da casa, queijo e acompanhamentos.", preco:"R$ 42,90", imagem:"assets/images/prato-04.jpg"},
  {nome:"Contra-filé Acebolado", categoria:"CARNES", descricao:"Contra-filé no ponto com cebola dourada e acompanhamentos.", preco:"R$ 47,90", imagem:"assets/images/prato-05.jpg"},
  {nome:"Executivo Brasileiro", categoria:"ALMOÇO", descricao:"Uma opção completa e saborosa para o seu almoço.", preco:"R$ 29,90", imagem:"assets/images/prato-06.jpg"}
];

const cards = document.querySelector('#menuCards');
cards.innerHTML = pratos.map((p,i)=>`<article class="card"><div class="card-img" style="background-image:url('${p.imagem}')"></div><div class="card-body"><span class="card-tag">${p.categoria}</span><h3>${p.nome}</h3><p>${p.descricao}</p><div class="price"><strong>${p.preco}</strong><a class="js-order" href="#">PEDIR →</a></div></div></article>`).join('');

document.querySelectorAll('.js-order').forEach(a=>{a.href=CONFIG.anotaAi;a.target='_blank';a.rel='noopener'});
document.querySelector('#instagramLink').href=CONFIG.instagram;
document.querySelector('#mapsLink').href=CONFIG.googleMaps;
document.querySelector('#address').textContent=CONFIG.endereco;
document.querySelector('#year').textContent=new Date().getFullYear();

const toggle=document.querySelector('.menu-toggle'), menu=document.querySelector('.menu');
toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
