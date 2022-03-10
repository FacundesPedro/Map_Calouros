## Bem vindos ao talvez primeiro Open Source de vocês
<ol>
    <li>Fork esse projeto com o seu "git-cliente",nesse caso,Github</li>
    
    
### <li><a href="https://www.google.com/search?q=git" target="_blank">Instale o git no seu Pc Local</a> e clone o projeto</li>
```
        git clone https://github.com/FacundesPedro/Map_Calouros.git 
        // Lembre de ir pro diretório que será criado!
```
### <li>Crie uma branch para que você possa contribuir sem alterar a branch principal </li>
```
        // Pode escolher o nome que quiser  !
        git checkout -b "myBranch" 
```
### <li>Rode o módulo 'openSource.mjs' usando o NodeJS</li>
    Basicamente a classe "MapCalouros" tem algumas funções de um database (ler e escrever), nesse projeto nosso "data-center" é um simples arquivo .json

    A função de vocês é rodar o construtor dessa classe dando seu nome e outras propriedades que podemos usar para construir algo intuitivo no futuro!

    Depois de alterar o objeto "calouro" rode o seguinte comando no terminal para escrever os dados no nosso mega database.
```
        node openSource.mjs 
```
### <li>Dê um push dos seus commits na sua branch  na nuvem!</li>
####   <p>Run this on your terminal: </p>
```
        git add .
        git commit -m "Qualquer mensagem que você quiser"
        git push -u origin "myBranch" 
```
###   <li>Agora o desafio é criar um pull request para mim!!!</li>
    
</ol>
<p>Aqui vai um video para ajudar no desafio!</p>
[Watch the video](https://www.youtube.com/watch?v=Du04jBWrv4A)
