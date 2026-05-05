.PHONY: help install login serve emulate deploy deploy-preview clean

PROJECT := tiemi-fujiwara

# ─────────────────────────────────────────────
help:
	@echo ""
	@echo "  Tiemi Fujiwara Portfolio — Firebase Hosting"
	@echo ""
	@echo "  Comandos disponíveis:"
	@echo ""
	@echo "    make install          Instala dependências (firebase-tools via npm)"
	@echo "    make login            Autentica no Firebase CLI"
	@echo "    make serve            Inicia servidor local sem emulador"
	@echo "    make emulate          Inicia emulador Firebase Hosting (porta 5000)"
	@echo "    make deploy           Publica o site em produção"
	@echo "    make deploy-preview   Publica em canal de preview (7 dias)"
	@echo "    make clean            Remove node_modules"
	@echo ""

# ─────────────────────────────────────────────
install:
	@echo "→ Instalando dependências..."
	npm install
	@echo "✓ firebase-tools instalado em ./node_modules/.bin/firebase"

login:
	@echo "→ Autenticando no Firebase..."
	npx firebase login

serve:
	@echo "→ Servindo em http://localhost:5000"
	npx firebase serve --only hosting --project $(PROJECT)

emulate:
	@echo "→ Iniciando emulador Firebase Hosting em http://localhost:5000"
	npx firebase emulators:start --only hosting --project $(PROJECT)

deploy:
	@echo "→ Publicando no Firebase Hosting (projeto: $(PROJECT))..."
	npx firebase deploy --only hosting --project $(PROJECT)
	@echo "✓ Deploy concluído: https://$(PROJECT).web.app"

deploy-preview:
	@echo "→ Criando canal de preview (expira em 7 dias)..."
	npx firebase hosting:channel:deploy preview --expires 7d --project $(PROJECT)

clean:
	@echo "→ Removendo node_modules..."
	rm -rf node_modules
	@echo "✓ Limpo."
