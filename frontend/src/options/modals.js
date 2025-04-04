export const modals = {
  Customer: {
    label: "Cliente Empresa",
    femaleGender: false,
    maxWidth: "md",
    fieldsSections: [
      { name: "image", label: "Logotipo" },
      { name: "mainInfo", label: "Informações Gerais" },
      { name: "mainContact", label: "Contato Principal" },
      { name: "secondaryInfo", label: "Informações Adicionais" },
    ],
    fields: [
      {
        fieldSection: "mainInfo",
        name: "name",
        label: "Nome",
        type: "string",
        required: true,
      },
      {
        fieldSection: "mainInfo",
        name: "phone",
        label: "Telefone",
        type: "phone",
        required: true,
      },
      {
        fieldSection: "mainInfo",
        name: "cnpj",
        label: "CNPJ",
        type: "idDoc",
        required: true,
      },
      {
        fieldSection: "mainInfo",
        name: "address",
        label: "Endereço",
        type: "string",
        required: true,
      },
      {
        fieldSection: "mainContact",
        name: "mainContactName",
        label: "Nome",
        type: "string",
        required: true,
      },
      {
        fieldSection: "mainContact",
        name: "mainContactPhone",
        label: "Telefone",
        type: "phone",
        required: true,
      },
      {
        fieldSection: "mainContact",
        name: "mainContactEmail",
        label: "E-mail",
        type: "string",
        required: true,
      },
      {
        fieldSection: "mainContact",
        name: "mainContactPosition",
        label: "Cargo",
        type: "select",
        options: ["Proprietário", "Sócio", "Gerente", "Colaborador"],
        required: false,
      },
      {
        fieldSection: "secondaryInfo",
        name: "website",
        label: "Website",
        type: "string",
        required: false,
      },
      {
        fieldSection: "secondaryInfo",
        name: "segment",
        label: "Ramo de Atividade",
        type: "string",
        required: false,
      },
      {
        fieldSection: "secondaryInfo",
        name: "employees",
        label: "Nº de Empregados",
        type: "select",
        options: [
          "1 à 5",
          "6 à 15",
          "16 à 50",
          "51 à 100",
          "+100",
          "+1000",
          "+10000",
        ],
        required: false,
      },
      {
        fieldSection: "secondaryInfo",
        name: "companyType",
        label: "Tipo de Empresa",
        type: "select",
        options: [
          "Individual (EI/MEI)",
          "LTDA",
          "EPP / EIRELI",
          "Coop",
          "S/A",
          "ONG",
          "ORG",
        ],
        required: false,
      },
    ],
    model: "Customer",
  },
  Client: {
    label: "Cliente Pessoa Física",
    femaleGender: false,
    maxWidth: "md",
    fieldsSections: [
      { name: "image", label: "Imagem" },
      { name: "mainInfo", label: "Informações Gerais" },
      { name: "secondaryInfo", label: "Informações Adicionais" },
    ],
    fields: [
      {
        fieldSection: "image",
        name: "image",
        type: "image",
        required: false,
      },
      {
        fieldSection: "mainInfo",
        name: "name",
        label: "Nome",
        type: "string",
        required: true,
      },
      {
        fieldSection: "mainInfo",
        name: "cpf",
        label: "CPF",
        type: "idDoc",
        required: true,
      },
      {
        fieldSection: "mainInfo",
        name: "email",
        label: "E-mail",
        type: "string",
        required: true,
      },
      {
        fieldSection: "mainInfo",
        name: "cellphone",
        label: "Telefone",
        type: "phone",
        required: true,
      },
      {
        fieldSection: "secondaryInfo",
        name: "birthdate",
        label: "Data de Nascimento",
        type: "date",
        required: false,
      },
      {
        fieldSection: "secondaryInfo",
        name: "gender",
        label: "Gênero",
        type: "select",
        required: false,
        options: ["Masculino", "Feminino", "Outro", "Não Informar"],
      },
      {
        fieldSection: "secondaryInfo",
        name: "addressHome",
        label: "Endereço Residencial",
        type: "string",
        required: true,
      },
      {
        fieldSection: "secondaryInfo",
        name: "phone",
        label: "Telefone Fixo",
        type: "phone",
        required: false,
      },
    ],
    model: "Client",
  },
  ImportCustomers: {
    endpoint: "/importContacts",
    label: "Importação de Clientes",
    femaleGender: true,
    type: "list",
    options: ["importContacts"],
    model: "DOESNT EXIST YET",
  },
  Job: {
    label: "Job",
    femaleGender: false,
    maxWidth: "md",
    fieldsSections: [
      { name: "mainInfo", label: "Informações Gerais" },
      { name: "description", label: "Descrição" },
      { name: "scheduling", label: "Agendamento" },
      { name: "attachments", label: "Anexos" },
    ],
    fields: [
      {
        fieldSection: "mainInfo",
        name: "customer",
        label: "Cliente",
        type: "allCustomers",
        required: true,
        hasAvatar: true,
      },
      {
        fieldSection: "mainInfo",
        name: "service",
        label: "Serviço",
        type: "services",
        required: true,
        hasAvatar: false,
      },
      {
        fieldSection: "mainInfo",
        name: "title",
        label: "Título",
        type: "string",
        required: true,
      },
      {
        fieldSection: "scheduling",
        name: "scheduledTo",
        label: "Data de Atendimento",
        type: "date",
        required: true,
      },
      {
        fieldSection: "scheduling",
        name: "scheduleTime",
        label: "Selecione um Horário",
        type: "dynamicData",
        dynamicData: "scheduleTime",
        required: false,
        hasAvatar: false,
      },
      {
        fieldSection: "description",
        name: "description",
        label: "",
        type: "fullWidth",
        required: false,
      },
      {
        fieldSection: "attachments",
        name: "attachments",
        label: "",
        type: "attachments",
        options: ["attachments"],
        required: false,
      },
    ],
    model: "Job",
  },
  Sale: {
    label: "Venda",
    femaleGender: true,
    maxWidth: "md",
    fieldsSections: [
      { name: "mainInfo", label: "Informações Gerais" },
      { name: "products", label: "Produtos" },
      { name: "attachments", label: "Anexos" },
    ],
    fields: [
      {
        fieldSection: "mainInfo",
        name: "customer",
        label: "Cliente",
        type: "allCustomers",
        required: true,
        hasAvatar: true,
      },
      {
        fieldSection: "mainInfo",
        name: "deliveryScheduledTo",
        label: "Data de Entrega",
        type: "date",
        required: true,
      },
      {
        fieldSection: "mainInfo",
        name: "deliveryAddress",
        label: "Endereço de Entrega",
        type: "string",
        required: true,
      },
      {
        fieldSection: "products",
        name: "products",
        label: "",
        type: "productList",
        options: [],
        required: false,
      },
      {
        fieldSection: "attachments",
        name: "attachments",
        label: "",
        type: "attachments",
        options: [],
        required: false,
      },
    ],
    model: "Sale",
  },
  Service: {
    label: "Serviço",
    femaleGender: false,
    maxWidth: "md",
    fieldsSections: [
      { name: "mainInfo", label: "Informações Gerais" },
      { name: "serviceInfo", label: "Informações do Serviço" },
      { name: "products", label: "Produtos Utilizados" },
    ],
    fields: [
      {
        fieldSection: "mainInfo",
        name: "name",
        label: "Nome do Serviço",
        type: "string",
        required: true,
      },
      {
        fieldSection: "mainInfo",
        name: "type",
        label: "Tipo de Serviço",
        type: "dynamicData",
        dynamicData: "serviceTypes",
        required: true,
        hasAvatar: false,
      },
      {
        fieldSection: "serviceInfo",
        name: "executionTime",
        label: "Tempo de Execução",
        type: "select",
        options: ["30 min", "1h", "1:30h", "2h", "2:30h", "3h ou mais"],
        required: true,
      },
      {
        fieldSection: "serviceInfo",
        name: "sessions",
        label: "Quantidade de Sessões",
        type: "select",
        options: ["1", "2", "3", "4", "5", "6", "7 ou mais"],
        required: true,
      },
      {
        fieldSection: "serviceInfo",
        name: "price",
        label: "Valor do Serviço",
        type: "currency",
        required: true,
      },
      {
        fieldSection: "products",
        name: "products",
        label: "",
        type: "productList",
        options: ["products"],
        required: true,
      },
    ],
    model: "Service",
  },
  ServicePlan: {
    label: "Plano de Serviços",
    femaleGender: false,
    maxWidth: "custom700px",
    fieldsSections: [
      { name: "mainInfo", label: "Informações Gerais" },
      { name: "servicesList", label: "Serviços" },
    ],
    fields: [
      {
        fieldSection: "mainInfo",
        name: "name",
        label: "Nome do Plano",
        type: "string",
        required: true,
      },
      {
        fieldSection: "mainInfo",
        name: "period",
        label: "Período de Vigência",
        type: "select",
        options: [
          "Semanal",
          "Quinzenal",
          "Mensal",
          "Bimestral",
          "Trimestral",
          "Semestral",
          "Anual",
          "Outro",
        ],
        required: true,
      },
      {
        fieldSection: "mainInfo",
        name: "renewDay",
        label: "Dia de Renovação",
        type: "string",
        required: true,
      },
      {
        fieldSection: "servicesList",
        name: "services",
        label: "",
        type: "servicesList",
        options: [],
        required: false,
      },
    ],
    model: "ServicePlan",
  },
  StockEntry: {
    name: "AddStockEntry",
    model: "StockEntry",
    label: "Entrada de Estoque",
    femaleGender: false,
    maxWidth: "md",
    fieldsSections: [
      { name: "mainInfo", label: "Informações Gerais" },
      { name: "products", label: "Produtos" },
    ],
    fields: [
      {
        fieldSection: "mainInfo",
        name: "purchaseDate",
        label: "Data da Compra",
        type: "date",
        required: true,
      },
      {
        fieldSection: "mainInfo",
        name: "deliveryDate",
        label: "Data da Entrega",
        type: "date",
        required: true,
      },
      {
        fieldSection: "mainInfo",
        name: "stockDate",
        label: "Data de Armazenamento",
        type: "date",
        required: true,
      },
      {
        fieldSection: "products",
        name: "products",
        label: "",
        type: "productList",
        options: [],
        required: false,
      },
    ],
  },
  Product: {
    name: "AddProduct",
    label: "Produto",
    femaleGender: false,
    maxWidth: "md",
    fieldsSections: [
      { name: "mainInfo", label: "Informações Gerais" },
      { name: "fields", label: "Informações do Produto" },
    ],
    fields: [
      {
        fieldSection: "mainInfo",
        name: "type",
        label: "Tipo de Produto",
        type: "dynamicData",
        options: ["baseProducts"],
        required: true,
        hasAvatar: false,
      },
      {
        fieldSection: "mainInfo",
        name: "name",
        label: "Nome do Produto",
        type: "string",
        required: true,
      },
      {
        fieldSection: "mainInfo",
        name: "buyValue",
        label: "Valor de Compra",
        type: "currency",
        required: true,
      },
      {
        fieldSection: "mainInfo",
        name: "sellValue",
        label: "Valor de Venda",
        type: "currency",
        required: true,
      },
      {
        fieldSection: "fields",
        name: "fields",
        label: "",
        type: "fields",
      },
    ],
    model: "Product",
  },
  FinanceIncome: {
    label: "Entrada Financeira",
    femaleGender: false,
    maxWidth: "md",
    fieldsSections: [
      // { name: "mainInfo", label: "Informações Gerais" },
      // { name: "description", label: "Descrição" },
      // { name: "scheduling", label: "Agendamento" },
      // { name: "attachments", label: "Anexos" },
    ],
    fields: [],
    model: "FinanceIncome",
  },
  FinanceOutcome: {
    label: "Encargo Financeiro",
    femaleGender: false,
    maxWidth: "md",
    fieldsSections: [
      // { name: "mainInfo", label: "Informações Gerais" },
      // { name: "description", label: "Descrição" },
      // { name: "scheduling", label: "Agendamento" },
      // { name: "attachments", label: "Anexos" },
    ],
    fields: [],
    model: "FinanceOutcome",
  },
};
