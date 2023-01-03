const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
 const lancamento = "21 Jan 2023"
 function countDown(){
    const datalanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (datalanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60)% 24;
    const finalMinutos = Math.floor(segTotal / 60 )% 60;
    const finalSegundos = Math.floor(segTotal)% 60;

    dias.innerHTML = formatotempo(finalDias) + `D`
    horas.innerHTML = formatotempo(finalHoras) + `H`
    minutos.innerHTML = formatotempo(finalMinutos) + `M`
    segundos.innerHTML = formatotempo(finalSegundos) + `S`


 }
 
 function formatotempo(tempo){
   return tempo < 10? `0${tempo}`:tempo;
 }
  
 countDown();
 setInterval(countDown,1000)