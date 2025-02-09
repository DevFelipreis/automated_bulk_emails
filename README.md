# Envio Automatizado de E-mails em Massa

Este projeto é uma ferramenta para envio automatizado de e-mails em massa, criada para facilitar o processo de envio de propostas de trabalho e comunicação com clientes em potencial. O objetivo é personalizar e-mails para vários destinatários e enviá-los automaticamente de forma eficiente.

## Funcionalidades

- **Envio em Massa**: Permite enviar e-mails personalizados para múltiplos destinatários de forma automatizada.
- **Personalização de E-mails**: O conteúdo dos e-mails pode ser personalizado com o nome do destinatário e outras informações dinâmicas.
- **Integração com Serviço de E-mail**: Integração com serviços de envio de e-mail como **SMTP** ou **Mailgun**.
- **Modelo de Proposta de Trabalho**: Os e-mails enviados contêm uma proposta de trabalho personalizada para cada cliente potencial.
- **Relatório de Envio**: Geração de um relatório com status de envio (sucesso ou falha) para acompanhamento.

## Tecnologias Usadas

- **Node.js**: Ambiente de execução para rodar o script de envio de e-mails.
- **Nodemailer**: Biblioteca para envio de e-mails via SMTP.
- **dotenv**: Para gerenciar variáveis de ambiente, como credenciais de e-mail.
- **Express.js** (opcional): Para criar uma interface web para o envio de e-mails.
- **MongoDB** (opcional): Para armazenar e-mails e status de envio.

## Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

- **Node.js**: Versão 14.x ou superior.
- **Nodemailer**: Para enviar os e-mails.
- **Conta em um serviço de e-mail**: Como Gmail, SendGrid, ou outro que permita o envio via SMTP.

## Como Usar

1. Clone o repositório:

   ```bash
   git clone git@github.com:DevFelipreis/mailing.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd mailing
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` para armazenar as credenciais do seu serviço de e-mail. Exemplo para Gmail:

   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=seu-email@gmail.com
   SMTP_PASS=sua-senha
   ```

5. Configure o arquivo `config.js` com as informações de destinatários e conteúdo do e-mail. Exemplo:

   ```javascript
   const emails = [
       { nome: 'Cliente 1', email: 'cliente1@email.com' },
       { nome: 'Cliente 2', email: 'cliente2@email.com' },
       // Adicione mais destinatários aqui
   ];

   module.exports = { emails };
   ```

6. Execute o script de envio de e-mails:

   ```bash
   npm run dev
   ```

7. O sistema enviará os e-mails para os destinatários e gerará um relatório sobre o status de cada envio.

## Como Funciona

- O script `sendEmails.js` usa a biblioteca **Nodemailer** para enviar e-mails.
- Cada e-mail enviado é personalizado com o nome do destinatário.
- A personalização é feita dinamicamente para garantir que cada e-mail seja único.
- O relatório gerado no final contém os status de envio, informando se o e-mail foi enviado com sucesso ou se ocorreu algum erro.

---

## Contribuições

Se você gostaria de contribuir com o projeto, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b nova-funcionalidade`).
3. Faça suas alterações e commit (`git commit -am 'Adicionando nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin nova-funcionalidade`).
5. Crie um Pull Request.

## Licença

Este projeto é licenciado sob a GNU GENERAL PUBLIC LICENSE. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

- **Nome**: Luiz Felipe Reis
- **E-mail**: [lfreis.contato@gmail.com](mailto:lfreis.contato@gmail.com)
- **Portfólio**: [Behance](https://www.behance.net/lfreis)


### Explicação do `README.md`:

- **Objetivo**: A introdução descreve o propósito do projeto, que é o envio automatizado de e-mails personalizados.
- **Tecnologias Usadas**: A seção lista as ferramentas e bibliotecas utilizadas no projeto.
- **Pré-requisitos**: Informações sobre as dependências e configurações iniciais necessárias para rodar o projeto.
- **Como Usar**: Passo a passo de como configurar e rodar o projeto no seu ambiente local.
- **Contribuições**: Instruções de como outras pessoas podem contribuir com o projeto.
- **Licença**: O projeto é licenciado sob a licença MIT, que é bastante permissiva.
- **Contato**: Informações de contato caso alguém queira entrar em contato com você sobre o projeto.
