function apagarTema() {
    document.cookie = "tema=; max-age=0; path=/; SameSite=Lax";   // ✅ CORRETO
    document.getElementById("demo-tema-resultado").innerHTML =
        "Cookie tema apagado";
}

function gravarTemaParaApagar() {
    var valor = document.getElementById("demo-tema-apagar").value;
    document.cookie = "tema=" + encodeURIComponent(valor) + "; max-age=3600; path=/";
    document.getElementById("demo-tema-resultado").innerHTML =
        "Cookie tema=" + valor + " gravado";
}