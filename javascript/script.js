function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, ""); // Remove qualquer caractere que não seja dígito
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
}

function formatDate(date) {
    date = date.replace(/\D/g, ""); // Remove qualquer caractere que não seja dígito
    date = date.replace(/(\d{2})(\d)/, "$1/$2");
    date = date.replace(/(\d{2})(\d{1,4})$/, "$1/$2");
    return date;
}

window.onload = function() {
    document.getElementById("icpf").addEventListener("input", function() {
        this.value = formatCPF(this.value);
    });

    document.getElementById("idtnasc").addEventListener("input", function() {
        this.value = formatDate(this.value);
    });

    document.getElementById("inumero").addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, ""); // Permite apenas números
    });
}
