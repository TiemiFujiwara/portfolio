/**
 * Backend do portfolio - Cloud Functions (Firebase)
 *
 * O que esse arquivo faz:
 *  - Expoe uma funcao HTTP chamada "receberContato"
 *  - Recebe os dados do formulario de contato (nome, assunto, email, mensagem)
 *  - Valida os campos
 *  - Faz console.log (que aparece nos logs do Cloud Functions)
 *  - Devolve uma resposta JSON pro frontend
 *
 * Como o frontend chama isso?
 *  - Via fetch() em POST para a rota /api/contato
 *  - O firebase.json faz o "rewrite" dessa rota para esta function
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

exports.receberContato = onRequest(
  { region: "us-central1", cors: true },
  (req, res) => {
    // Apenas POST e aceito
    if (req.method !== "POST") {
      logger.warn("Metodo nao permitido:", req.method);
      return res.status(405).json({
        ok: false,
        erro: "Use POST para enviar o formulario."
      });
    }

    const { nome, assunto, email, mensagem } = req.body || {};

    // Validacao simples
    if (!nome || !assunto || !email || !mensagem) {
      logger.warn("Campos faltando:", req.body);
      return res.status(400).json({
        ok: false,
        erro: "Todos os campos sao obrigatorios."
      });
    }

    // ESSE console.log aparece nos logs do Cloud Functions
    // (firebase functions:log  OU  Console do Firebase > Functions > Logs)
    logger.info("Novo contato recebido:", {
      nome,
      assunto,
      email,
      mensagem,
      recebidoEm: new Date().toISOString()
    });

    // Tambem da pra usar console.log direto - aparece nos mesmos logs
    console.log(`[CONTATO] ${nome} <${email}> - ${assunto}`);

    return res.status(200).json({
      ok: true,
      mensagem: "Contato recebido com sucesso!"
    });
  }
);
