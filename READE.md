# Tópicos Importantes para estudos

- Qual a linguagem de programação utilizada na disciplina? (javascript)

- O que é o Node? 
(É um tradutor que faz o JavaScript ser entendido pelo computador.
Sem Node: o JavaScript só roda no navegador.
Com Node: o JavaScript roda direto no computador (como se fosse Python ou Java).)

--------------------------------------------------------

- O que é o npm? 
( Node Package Manager- É uma loja de aplicativos, onde você baixa códigos prontos.)

--------------------------------------------------------

- O que é React? (é uma biblioteca JavaScript para construir interfaces de usuário, o React organiza o front-end em peças de Lego que se encaixam.)

--------------------------------------------------------

- O que é Fremework e qual a diferença para uma biblioteca? (Biblioteca (React) → você chama ela. Você decide como e quando usar.
Framework (Express, Next.js) → ela chama você. Você segue as regras dela, ela controla o fluxo da aplicação.
Resumo: Biblioteca é uma ferramenta. Framework é um sistema completo com regras.)

--------------------------------------------------------

- O que é o React Native?
 (É o React para celular. Cria apps nativos (iOS/Android) usando JavaScript e React, sem precisar aprender Swift ou Kotlin.
Resumo: React para web vira site. React Native vira aplicativo de celular.)

--------------------------------------------------------

- O que é o Expo?
(É um conjunto de ferramentas que facilita a vida com React Native. Permite testar o app direto no celular sem instalar Android Studio/Xcode, e já vem com várias coisas prontas (câmera, GPS, notificações).
Resumo: React Native puro é mais manual. Expo é o "já vem pronto" 
para começar mais rápido.)

--------------------------------------------------------

- Como criar styles no React Native?
StyleSheet.create() - Método recomendado
Esta é a forma correta de criar estilos no React Native. Você cria um objeto com as regras de estilo e o método otimiza esses estilos para melhor performance. Além disso, oferece validação de erros durante o desenvolvimento.

--------------------------------------------------------

- O estilo CSS in JS no React Native é igual ao CSS Web? Tenho todas as propriedades?
Não é igual. O React Native usa um sistema de estilos inspirado no CSS, mas com diferenças importantes:

Diferenças principais:

Não existe herança de estilos como no CSS web

Não suporta pseudo-classes como hover, active

Não suporta animações CSS, apenas animações nativas

Não utiliza unidades como px, em, rem - apenas números e porcentagem

Não suporta seletores complexos, apenas estilos por componente

--------------------------------------------------------

- Em quais pacotes encontro um componente de Imagem? Qual melhor para usarmos atualmente?
Existem duas opções principais:

Image do React Native
É o componente nativo da biblioteca principal. Funciona bem, mas tem limitações como menos opções de cache e performance inferior para imagens remotas.

Expo Image do pacote expo-image
É a melhor opção atualmente. Oferece vantagens como cache automático, carregamento otimizado, suporte a placeholders, transições suaves e melhor performance. É recomendado para projetos novos, especialmente se você já usa Expo.

--------------------------------------------------------

- O que são propriedades de componentes?
Propriedades, ou props, são dados que você passa para um componente personalizar seu comportamento e aparência.

Funcionam como parâmetros de uma função. O componente pai passa informações para o componente filho através das props, e o componente filho usa essas informações para se renderizar.

Exemplos práticos:

Um componente Botão pode receber uma prop cor para definir sua cor de fundo

Um componente Texto pode receber uma prop tamanho para definir o tamanho da fonte

Um componente Card pode receber props como nome, email e telefone para exibir dados diferentes

As props são somente leitura, ou seja, o componente filho não pode modificar as props que recebe.

--------------------------------------------------------

- Extra

- Revisão de variáveis e objetos - desestruturação de objetos
Desestruturação é uma sintaxe que permite extrair valores de objetos de forma mais direta e organizada.

Sem desestruturação:
Para acessar dados de um objeto, você precisava fazer:
const nome = usuario.nome
const email = usuario.email
const idade = usuario.idade

Com desestruturação:
Você pode fazer tudo em uma linha:
const { nome, email, idade } = usuario

Isso cria automaticamente variáveis com os mesmos nomes das propriedades do objeto.

Uso comum em componentes:
Quando um componente recebe props, a desestruturação é frequentemente usada para extrair os valores diretamente:

function CardUser({ nome, email, telefone }) {
return ( ... )
}

Isso é equivalente a:
function CardUser(props) {
const nome = props.nome
const email = props.email
const telefone = props.telefone
return ( ... )
}

A desestruturação torna o código mais limpo, reduz repetição e facilita a leitura.

--------------------------------------------------------

## Comandos Uteis 

instalação 

npx npx create-expo-app@latest
### Expo