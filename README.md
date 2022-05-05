<h1>CRUD application</h1>

<div>
  <h3>Sobre o projeto</h3>
  <p>Um projeto que consiste em um CRUD de usuários, com as opções de visualizar os usuários em tabela, buscar um usuário por email, buscar usuários por nome, adicionar um novo usuário, deletar um usuário e atualizar um usuário.</p>
</div>
<div>
  <h2>Tecnologias utilizadas:</h2>
  <ul>
    <li>React</li>
    <li>Typescript</li>
    <li>Prisma ORM</li>
    <li>Express</li>
    <li>PostgreSQL</li>
    <li>Bootstrap</li>
  </ul>
</div>
<div>
  <h2>Utilização</h2>
  <p>Para utilizar o projeto, é necessário ter instalado o PostgreSQL e terminal shell. Primeiro, é necessário clonar o projeto:</p>
  <p><code>git clone git@github.com:leonardo-siepierski/users-crud.git</code></p>
  <p>Depois disso, criar um arquivo .env, como no .env.example, substituindo os seguintes valores:</p>
  <p>DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"</p>
  <ul>
    <li>USER: seu usuário do PostgreSQL</li>
    <li>PASSWORD: sua senha do PostgreSQL</li>
    <li>HOST: nome do host (localhost)</li>
    <li>PORT: a porta utilizada no PostgreSQL (5432 por padrão)</li>
    <li>DATABASE: nome do banco de dados a ser criado</li>
    <li>SCHEMA: tabela do banco de dados a ser criada</li>
  </ul>
  <p>Em seguida, deve-se instalar as dependências e inicializar o servidor backend:</p>
  <p><code>cd backend && npm install</code></p>
  <p><code>npm start</code></p>
  <p>Após iniciar o backend, é possível manipular os dados do banco através do terminal ou do navegador:</p>
  <p><code>cd .. && npm install</code></p>
  <p><code>npm start</code></p>
