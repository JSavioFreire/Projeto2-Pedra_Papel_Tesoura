let play = document.querySelectorAll('.player img');//as imgs
let imgEnemy = document.querySelectorAll('.enemy img')//as img inimigas
const resultado = document.querySelector('#resultado');//local do resultado
const placarNum = document.querySelector('#placarNum');//local do placar

let quantVit = 0;       //ve quantidade de vitorias
let quantEmp = 0;       //ve quantidade de empates
let quantDer = 0;       //ve quantidade de derrotas


let enemy = ()=>{
    return Math.floor(Math.random()*3);     //math.random faz um numero aleatorio de 0 ate o numero que eu quiser, aqui no caso, esse numero é 3. Mas faz um float, entao coloco o math.floor para ser um numero inteiro.
        }



play.forEach((el,index) => {
    play[index].addEventListener('click',()=>{

        for(i = 0; i < play.length; i++){           //reseta escolhidos anteriormente
            play[i].classList.remove('escolhido');
            imgEnemy[i].classList.remove('escolhido');
        }
        play[index].classList.add('escolhido');     //marca o escolhido


        
        let playEnemy = enemy();        //transformando o resultado de uma funcao em uma variavel
        

            //quando jogo pedra

        if(index == 0 ){
            if(playEnemy == 0){
                imgEnemy[0].classList.add('escolhido'); 
                quantEmp +=1;
                resultado.innerHTML = `
                <h1>Empate!</h1>
                `
                placarNum.innerHTML = `
                    <h3>${quantVit}</h3>
                    <h3>${quantEmp}</h3>
                    <h3>${quantDer}</h3>
                `
               
            }else if(playEnemy == 1){
                imgEnemy[1].classList.add('escolhido');
                quantDer +=1;
                resultado.innerHTML = `
                <h1>Derrota!</h1>
                `
                placarNum.innerHTML = `
                    <h3>${quantVit}</h3>
                    <h3>${quantEmp}</h3>
                    <h3>${quantDer}</h3>
                `
                
            }else if(playEnemy == 2){
                imgEnemy[2].classList.add('escolhido');
                quantVit +=1;
                resultado.innerHTML = `
                <h1>Vitória!</h1>
                `
                placarNum.innerHTML = `
                    <h3>${quantVit}</h3>
                    <h3>${quantEmp}</h3>
                    <h3>${quantDer}</h3>
                `
                
            }
        }





            //quando jogo papel

        else if(index == 1 ){
            if(playEnemy == 0){
                imgEnemy[0].classList.add('escolhido'); 
                quantVit +=1;
                resultado.innerHTML = `
                <h1>Vitória!</h1>
                `
                placarNum.innerHTML = `
                    <h3>${quantVit}</h3>
                    <h3>${quantEmp}</h3>
                    <h3>${quantDer}</h3>
                `
               
            }else if(playEnemy == 1){
                imgEnemy[1].classList.add('escolhido');
                quantEmp +=1;
                resultado.innerHTML = `
                <h1>Empate!</h1>
                `
                placarNum.innerHTML = `
                    <h3>${quantVit}</h3>
                    <h3>${quantEmp}</h3>
                    <h3>${quantDer}</h3>
                `
                
            }else if(playEnemy == 2){
                imgEnemy[2].classList.add('escolhido');
                quantDer +=1;
                resultado.innerHTML = `
                <h1>Derrota!</h1>
                `
                placarNum.innerHTML = `
                    <h3>${quantVit}</h3>
                    <h3>${quantEmp}</h3>
                    <h3>${quantDer}</h3>
                `   
            } 
        }








            //quando jogo tesoura

        else if(index == 2){
            if(playEnemy == 0){
                imgEnemy[0].classList.add('escolhido'); 
                quantDer +=1;
                resultado.innerHTML = `
                <h1>Derrota!</h1>
                `
                placarNum.innerHTML = `
                    <h3>${quantVit}</h3>
                    <h3>${quantEmp}</h3>
                    <h3>${quantDer}</h3>
                `
               
            }else if(playEnemy == 1){
                imgEnemy[1].classList.add('escolhido');
                quantVit +=1;
                resultado.innerHTML = `
                <h1>Vitória!</h1>
                `
                placarNum.innerHTML = `
                    <h3>${quantVit}</h3>
                    <h3>${quantEmp}</h3>
                    <h3>${quantDer}</h3>
                `
                
            }else if(playEnemy == 2){
                imgEnemy[2].classList.add('escolhido');
                quantEmp +=1;
                resultado.innerHTML = `
                <h1>Empate!</h1>
                `
                placarNum.innerHTML = `
                    <h3>${quantVit}</h3>
                    <h3>${quantEmp}</h3>
                    <h3>${quantDer}</h3>
                `
                
            } 
        }
    })
})