# Tiemi Fujiwara — Portfolio

Site portfolio pessoal hospedado no **Firebase Hosting**.

- **URL de produção:** https://tiemi-fujiwara.web.app
- **Firebase project ID:** `tiemi-fujiwara`

---

## Arquitetura

```
portfolio/
├── index.html              # Página única (Single Page)
├── assets/
│   ├── css/                # Estilos (Bootstrap, Owl Carousel, custom)
│   ├── js/                 # Scripts (jQuery, Owl Carousel, animações)
│   ├── img/                # Imagens do portfólio
│   └── themify-icons/      # Biblioteca de ícones SVG/CSS
├── firebase.json           # Configuração do Firebase Hosting
├── .firebaserc             # Vínculo com o projeto Firebase
├── package.json            # Dependências de desenvolvimento (firebase-tools)
└── Makefile                # Atalhos de build e deploy
```

**Stack:**
- HTML5 estático — sem framework, sem bundler, sem etapa de build
- Bootstrap 3 para grid e componentes
- jQuery + plugins (Owl Carousel, WOW.js, CounterUp, MixItUp)
- Firebase Hosting para CDN e entrega global

> **Atenção:** o arquivo `email.php` não é executado no Firebase Hosting (apenas arquivos estáticos são servidos). Para formulário de contato funcional utilize Firebase Functions ou um serviço externo (Formspree, EmailJS etc.).

---

## Pré-requisitos

### 1. Node.js

Instale o Node.js LTS (≥ 18) via [nvm](https://github.com/nvm-sh/nvm) (recomendado) ou pelo [site oficial](https://nodejs.org):

```bash
# via nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
nvm install --lts
nvm use --lts
node -v   # v22.x.x
npm -v    # 10.x.x
```

### 2. Firebase CLI

A CLI é instalada como dependência local do projeto (não requer instalação global):

```bash
make install
# ou manualmente:
npm install
```

Para verificar a versão instalada:

```bash
npx firebase --version
```

### 3. Conta e projeto Firebase

1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
2. Certifique-se de ter acesso ao projeto `tiemi-fujiwara`
3. Autentique o CLI com sua conta Google:

```bash
make login
# ou:
npx firebase login
```

---

## Instalação

```bash
# Clone o repositório (se ainda não o fez)
git clone <url-do-repo>
cd portfolio

# Instale as dependências de desenvolvimento
make install
```

---

## Desenvolvimento local

### Servidor simples (sem emulador)

```bash
make serve
# acesse http://localhost:5000
```

### Emulador Firebase Hosting

Replica o comportamento exato do ambiente de produção, incluindo cabeçalhos HTTP configurados em `firebase.json`:

```bash
make emulate
# acesse http://localhost:5000
```

---

## Deploy

### Produção

```bash
make deploy
```

O site ficará disponível em:
- https://tiemi-fujiwara.web.app
- https://tiemi-fujiwara.firebaseapp.com

### Preview channel (testes antes de ir para produção)

Cria uma URL temporária que expira em 7 dias, útil para revisão:

```bash
make deploy-preview
```

---

## Referência dos comandos Make

| Comando | Descrição |
|---|---|
| `make install` | Instala `firebase-tools` via npm |
| `make login` | Autentica no Firebase CLI |
| `make serve` | Servidor local na porta 5000 |
| `make emulate` | Emulador Firebase Hosting na porta 5000 |
| `make deploy` | Publica em produção |
| `make deploy-preview` | Publica em canal de preview (7 dias) |
| `make clean` | Remove `node_modules` |

---

## Configuração do Firebase Hosting (`firebase.json`)

| Campo | Valor | Descrição |
|---|---|---|
| `public` | `.` | Raiz do projeto como diretório público |
| `ignore` | `firebase.json`, `Makefile`, `package.json`, `email.php` | Arquivos não publicados |
| Cache JS/CSS/imagens | `max-age=31536000` | Cache imutável de 1 ano |
| Cache HTML | `no-cache` | HTML sempre revalidado |
| `rewrites **` | `index.html` | Todas as rotas apontam para a SPA |
