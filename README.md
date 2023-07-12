# Landing Page (NextJs) - Processo Seletivo J. Pster

Olá, sejam bem-vindos! Neste repositório foi construída uma Landing Page utilizando `React (com Next.js)` para o front-end e `Express` para o back-end. 

## Stack utilizada

<table width="320px" align="center">
  <tbody>
    <tr valign="top">
      <td width="80px" align="center">
        <span><strong>Node.js</strong></span><br>
        <img height="32" src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png">
      </td>
      <td width="80px" align="center">
        <span><strong>Express</strong></span><br>
        <img height="32" src="https://user-images.githubusercontent.com/98132078/200321834-cc7ba953-4bb0-47f3-b0bb-f679cc7f6d80.png">
      </td>
      <td width="80px" align="center">
        <span><strong>NextJs</strong></span><br>
        <img height="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg">
      </td>
    </tr>
  </tbody>
</table>

## Instalando as dependências locais do Back-End
<details>
    <summary>Clique para expandir</summary>

  ### É necessário ter o NodeJs na versão >=16 instalado em sua máquina!

  #### PRIMEIRO Abra o seu Terminal em alguma pasta no seu sistema operacional.
- Clone o projeto

```bash
  git clone git@github.com:edmcorrea/landing-page-nextjs.git
```

- Entre primeiro no diretório Back-End do projeto

```bash
  cd backend
```

- Instale as dependências

```bash
  npm install
```

  #### Mantenha esse Terminal backend ativo, ele será utilizado posteriormente.

</details>

## Variáveis de Ambiente
<details>
    <summary>Clique para expandir</summary>

### Obs.: É necessário possuir uma conta no SendGrid!

- Dentro da sua conta no <strong>SendGrid</strong> crie um <strong>Sender Verification</strong> acessando: <strong>Settings > Sender Authentication > Single Sender Verification</strong> e insira as informações solicitadas corretamente.

- Ainda dentro da sua conta <strong>SendGrid</strong> crie uma <strong>API Keys</strong> acessando: <strong>Settings > API Key > Create API Key</strong> e insira as informações solicitadas corretamente.

- Após criada a API Key, copie a chave e guarde, pois será utilizada na etapa seguinte.

- Dentro do diretório backend, renomeie o arquivo <strong>.env.example</strong> para <strong>.env</strong> e insira a chave copiada anteriormente em <strong>SENDGRID_API_KEY</strong>. Além disso, insira o email informado da etapa <strong>Sender Verification</strong> em <strong>FROM_EMAIL</strong>.


- Exemplo de arquivo `.env` a ser utilizado:

```bash
APP_PORT=3001
SENDGRID_API_KEY=[INSIRA_AQUI_SUA_API_KEY_DO_SENDGRID]
FROM_EMAIL=[INSIRA_AQUI_SEU_EMAIL_UTILIZADO_NO_SENDGRID]
```
</details>

## Instalando as dependências locais do Front-End
<details>
    <summary>Clique para expandir</summary>

- Execute a aplicação Back-end no Terminal que manteve aberto.

```bash
  npm run dev
```

- Em um novo Terminal, entre no diretório Front-End

```bash
  cd howhow-project
```

- Instale as dependências

```bash
  npm install
```

- Execute a aplicação Front-end

```bash
  npm run dev
```
</details>


## Uso 

Inicializado o servidor (terminal Back-End), a aplicação estará rodando no seguinte caminho: `http://127.0.0.1:3001` ou `http://localhost:3001` e a rota existente é apenas a `/contact`, responsável pela mensageria da aplicação.
Por sua vez, a aplicação Front-End estará rodando no caminho: `http://127.0.0.1:3000` ou `http://localhost:3000`, desse modo, podendo ser também navegada.
O servidor Back-End em execução é responsável pela utilização do `Formulário de Contato` presente no final da página Front-End (`http://localhost:3000`). Nele, assim que um usuário insere os dados solicitados, o servidor é responsável por encaminhar essa mensagem para o e-mail cadastrado no site do `SendGrid`.

## Desafios 

ÈM CONSTRUÇÃO

## Sugestões para futuras implementações 

ÈM CONSTRUÇÃO
    
## Documentação

- [Express](https://expressjs.com/pt-br/)
- [Next.Js](https://nextjs.org/docs/getting-started/installation)

## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de edm.correa@hotmail.com
