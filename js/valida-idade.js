export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity("Você deve ser maior de 18 anos para se cadastrar.");
    } else {
        campo.setCustomValidity("");
    }
};

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual > dataMais18;
};