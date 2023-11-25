   function calcularIdade() {
    // Obtendo a data de nascimento da pessoa
    const anoNascimento = prompt("Informe o ano de nascimento:");
    const mesNascimento = prompt("Informe o mês de nascimento (1-12):");
    const diaNascimento = prompt("Informe o dia de nascimento:");

    // Obtendo a data atual
    const anoAtual = prompt("Informe o ano atual:");
    const mesAtual = prompt("Informe o mês atual (1-12):");
    const diaAtual = prompt("Informe o dia atual:");
    const horaAtual = prompt("Informe a hora atual:");
    const minutoAtual = prompt("Informe o minuto atual:");

    // Calculando a idade em anos
    let idadeAnos = anoAtual - anoNascimento;
    
    // Verificando se o aniversário já ocorreu no ano atual
    if (mesAtual < mesNascimento || (mesAtual == mesNascimento && diaAtual < diaNascimento)) {
        idadeAnos--;
    }

    // Calculando a idade em meses, dias, horas e minutos
    const idadeMeses = idadeAnos * 12 + parseInt(mesAtual) - parseInt(mesNascimento);
    const idadeDias = (anoAtual - anoNascimento) * 365 + (mesAtual - mesNascimento) * 30 + (diaAtual - diaNascimento);
    const idadeHoras = idadeDias * 24 + parseInt(horaAtual);
    const idadeMinutos = idadeHoras * 60 + parseInt(minutoAtual);

    // Exibindo os resultados
    console.log("Idade em anos: " + idadeAnos + " anos");
    console.log("Idade em meses: " + idadeMeses + " meses");
    console.log("Idade em dias: " + idadeDias + " dias");
    console.log("Idade em horas: " + idadeHoras + " horas");
    console.log("Idade em minutos: " + idadeMinutos + " minutos");
}

// Chamando a função para calcular a idade
calcularIdade();