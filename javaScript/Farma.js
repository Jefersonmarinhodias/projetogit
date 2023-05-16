const aroma=document.querySelector("#aroma")
 const opcaoAroma=document.querySelector(".opcao-aroma")

 aroma.addEventListener("mouseover", clicararoma)

 function clicararoma(){ 

  opcaoAroma.style.display="flex"
  opcaoAroma.style.flexDirection="column"


  aroma.addEventListener("mouseout", ()=>{
    opcaoAroma.style.display="none"
  } )

 }

  
 const aromaterapia=document.querySelector("#aromaterapia")
 const opcaoAromaterapia=document.querySelector(".opcao-aromaterapia")

 aromaterapia.addEventListener("mouseover", passaromouseterapia)

 function passaromouseterapia(){ 

  opcaoAromaterapia.style.display="flex"
  opcaoAromaterapia.style.flexDirection="column"


  aromaterapia.addEventListener("mouseout", ()=>{
    opcaoAromaterapia.style.display="none"
  } )

 }

 const banhocorpo=document.querySelector("#manho-corpo")
 const opcaoBanhocorpo=document.querySelector(".opcao-banhocorpo")

 banhocorpo.addEventListener("mouseover", passarmousobanhocorpo)

 function passarmousobanhocorpo(){ 
  opcaoBanhocorpo.style.display="flex"
  opcaoBanhocorpo.style.flexDirection="column"


  banhocorpo.addEventListener("mouseout", ()=>{
    opcaoBanhocorpo.style.display="none"
  } )
}

const porproduto=document.querySelector("#porproduto")
const opcaoporproduto=document.querySelector(".porproduto")

porproduto.addEventListener("mouseover", passarmousoporproduto)

function passarmousoporproduto(){ 
 opcaoporproduto.style.display="flex"
 opcaoporproduto.style.flexDirection="column"


 porproduto.addEventListener("mouseout", ()=>{
   opcaoporproduto.style.display="none"
 } )
}


