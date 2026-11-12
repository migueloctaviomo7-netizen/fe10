function lerCookies() {
    var atual = document.cookie;   // ✅ CORRETO: "cookie" sem "s"
    document.getElementById("demo-ler").innerHTML =
        atual ? "Cookies: " + atual : "(nenhum cookie)";
}

