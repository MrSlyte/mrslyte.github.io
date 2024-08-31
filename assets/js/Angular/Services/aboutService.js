angular.module("portfolio").service('aboutService', function () {
    //Simulando o retorno de dados de um webservice
    this.sections = [
        {id: 1, nome: "linguagens", section: "Linguagens"},
        {id: 2, nome: "bancoDados", section: "Banco de Dados"},
        {id: 3, nome: "habilidades", section: "Habilidades"}
    ];
    //Simulando o retorno de dados de um webservice
    this.itensSection = [
        {nome: "PHP", porcentagem: 80, section: 1},
        {nome: "C#", porcentagem: 70, section: 1},
        {nome: "Java", porcentagem: 40, section: 1},
        {nome: "HTML", porcentagem: 90, section: 1},
        {nome: "Javascript", porcentagem: 68, section: 1},
        {nome: "CSS", porcentagem: 60, section: 1},
        {nome: "SQL", porcentagem: 80, section: 2},
        {nome: "MySQL", porcentagem: 95, section: 2},
        {nome: "Oracle", porcentagem: 80, section: 2},
        {nome: "Pusher", porcentagem: 40, section: 2},
        {nome: "SQLite", porcentagem: 50, section: 2},
        {nome: "Capacidade de ensinar", porcentagem: 100, section: 3},
        {nome: "Capacidade de aprender rapidamente", porcentagem: 80, section: 3},
        {nome: "Pró-atividade", porcentagem: 100, section: 3},
        {nome: "Paixão pela área de TI", porcentagem: 100, section: 3},
        {nome: "Capacidade de trabalhar sob pressão", porcentagem: 80, section: 3},
        {nome: "Capacidade de inovar", porcentagem: 76, section: 3}
    ];

    this.listaSections = function () {
        return this.sections;
    };
    this.listaItensSection = function(){
        return this.itensSection;
    };
});