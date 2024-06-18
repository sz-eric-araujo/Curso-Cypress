const locators = {
  LOGIN: {
    USER: '[placeholder="seu@email.com"]',
    PASSWORD: '[placeholder="Senha"]',
    BTN_LOGIN: ".btn",
  },
  MENU: {
    SETTINGS: ".dropdown-toggle",
    CONTAS: '[href="/contas"]',
    RESET: '[href="/reset"]',
  },
  CONTA: {
    NOME: ".form-control",
    BTN_SALVAR: ".btn",
    BTN_ALTERAR: "i.far.fa-edit",
  },
  MOVIMENTACAO: {
    DESCRICAO: "#descricao",
    VALOR: '[placeholder="Valor"]',
    INTERESSADO: "#envolvido",
  },
  MESSAGE: ".toast",
};

export default locators;
