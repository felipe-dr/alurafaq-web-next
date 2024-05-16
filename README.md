<p align="center">
  <img src="https://github.com/felipe-dr/assets/blob/main/alura/escola-front-end.png?raw=true" alt="Alura cursos: front-end" />
  <hr>
  <h1 align="center">Alura FAQ</h1>
  <p align="center">Projeto desenvolvido durante o curso: <strong>Next.js: Trabalhando com um CMS</strong>.</p>
</p>

<p align="center">
  <img src="https://img.shields.io/github/repo-size/felipe-dr/alurafaq-web-next?style=for-the-badge&color=4e5acf" alt="Repo size" />
  <a aria-label="Last Commit" href="https://github.com/felipe-dr/alurafaq-web-next/commits/main">
    <img src="https://img.shields.io/github/last-commit/felipe-dr/alurafaq-web-next?style=for-the-badge&color=4e5acf" alt="Last commit on GitHub" />
  </a>
  <img src="https://img.shields.io/badge/license-MIT-4e5acf?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/status-concluído-brightgreen?style=for-the-badge" alt="Status" />
</p>

<p align="center">
  <a target="_blank" href="https://nextjs.org/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=blue&label=Next&message=JS&logo=Next.js" alt="Next.js" />
  </a>
  <a target="_blank" href="https://reactjs.org/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=blue&label=React&message=JS&logo=React" alt="React.js" />
  </a>
  <a target="_blank" href="https://styled-components.com/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=db748e&label=Styled Components&message=STYLE&logo=styled-components" alt="Styled components" />
  </a>
  <a target="_blank" href="https://www.datocms.com/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=Dato&message=CMS&logo=datocms" alt="DatoCMS" />
  </a>
</p>

## Índice

<ol>
  <li><a href="#📑-sobre">Sobre</a></li>
  <li><a href="#⚙️-funcionalidades">Funcionalidades</a></li>
  <li><a href="#🚀-como-executar">Como executar</a></li>
  <li><a href="#🛠️-tecnologias">Tecnologias</a></li>
  <li><a href="#🦸-autor">Autor</a></li>
  <li><a href="#📝-licença">Licença</a></li>
</ol>

## 📑 Sobre

O Alura FAQ é um projeto que inicialmente continha apenas conteúdos estáticos (dados fixos no código) e que foi integrado com o DatoCMS, afim de serem gerenciados e personalizados por meio de uma interface administrativa.

## ⚙️ Funcionalidades

- [x] Usuário administrador da plataforma CMS, poderá customizar informações globais e específicas de cada página, tais como:

  - [x] Hero da página inicial
    - Título
    - Descrição
    - Botão de CTA
  - [x] Página FAQ
    - Título
    - Descrição
    - Criar novos itens de FAQ
    - Criar conteúdo interno de cada item de FAQ
  - [x] Footer
    - Texto de direitos

  ![Alura FAQ - DatoCMS](./assets/images/alurafaq-datocms.png)

- [x] Visitante poderá acessar a página de FAQ e encontrar as principais perguntas e respostas de um determinado assunto que foi cadastrado na plataforma de CMS, visualizando o conteúdo interno de cada item.

  ![Alura FAQ - Home](./assets/images/alurafaq-home.png)

  ![Alura FAQ - FAQ](./assets/images/alurafaq-faq.png)

  ![Alura FAQ - FAQ Item](./assets/images/alurafaq-faq-item.png)

## 🚀 Como executar

### Pré-requisitos

É necessário que se tenha um projeto criado no [DatoCMS](https://www.datocms.com/) com o seu respectivo `token`, para ser possível integrá-lo ao projeto, assim como os `schemas` de entradas já pré-definidos para o consumo no projeto.

> [!IMPORTANT] Importante
> No procedimento abaixo, é fornecido um `token` de um projeto criado no DatoCMS, assim como os `schemas` e dados já cadastrados.

#### Executar o projeto localmente

1. Clone o repositório

```bash
git clone git@github.com:felipe-dr/alurafaq-web-next.git
```

2. Acesse a pasta do projeto no seu terminal / cmd

```bash
cd alurafaq-web-next
```

3. Instale as dependências

- Utilizando `pnpm`

```bash
pnpm install
```

- Utilizando `npm`

```bash
npm install
```

- Utilizando `yarn`

```bash
yarn install
```

4. DatoCMS

- Navegue até o arquivo `.env.example` na raíz do projeto
- Copie a chave e o valor `DATO_TOKEN`
- Crie um arquivo chamado `.env` na pasta raíz do projeto e cole a chave copiada anteriormente

5. Execute a aplicação em modo de desenvolvimento

- Utilizando `pnpm`

```bash
pnpm dev
```

- Utilizando `npm`

```bash
npm run dev
```

- Utilizando `yarn`

```bash
yarn dev
```

6. A aplicação estará disponível na porta: `3000`

```bash
http://localhost:3000
```

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Styled components](https://styled-components.com/)
- [DatoCMS](https://www.datocms.com/)

> Veja o arquivo [package.json](./package.json) na íntegra.

## 🦸 Autor

<a href="https://github.com/felipe-dr">
  <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/62888625?s=96&v=4" width="100px;" alt="Avatar do autor" />
  <br />
  <sub><strong>Felipe DR</strong></sub>
</a>

Analista desenvolvedor

[![Gmail badge](https://img.shields.io/badge/-felipe.corp7@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:felipe.corp7@gmail.com)](mailto:felipe.corp7@gmail.com)

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).
