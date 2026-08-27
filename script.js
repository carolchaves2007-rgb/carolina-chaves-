console.log("Portfólio da Carolina carregado com sucesso!");
document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const destino = document.querySelector(this.getAttribute("href"));

            if (destino) {
                event.preventDefault();

                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    const secoes = document.querySelectorAll("section");

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("mostrar");
            }
        });
    }, {
        threshold: 0.15
    });

    secoes.forEach(secao => {
        observador.observe(secao);
    });


    const botaoTopo = document.createElement("button");

    botaoTopo.innerHTML = "↑";
    botaoTopo.classList.add("botao-topo");
    botaoTopo.setAttribute("aria-label", "Voltar ao topo");

    document.body.appendChild(botaoTopo);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            botaoTopo.classList.add("ativo");
        } else {
            botaoTopo.classList.remove("ativo");
        }
    });

    botaoTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    const botaoTema = document.createElement("button");

    botaoTema.innerHTML = "🌙";
    botaoTema.classList.add("botao-tema");
    botaoTema.setAttribute("aria-label", "Alterar tema");

    document.body.appendChild(botaoTema);

    botaoTema.addEventListener("click", () => {
        document.body.classList.toggle("tema-claro");

        if (document.body.classList.contains("tema-claro")) {
            botaoTema.innerHTML = "🌙";
        } else {
            botaoTema.innerHTML = "☀️";
        }
    });


    const formulario = document.querySelector("form");

    if (formulario) {
        formulario.addEventListener("submit", event => {
            event.preventDefault();

            const nome = formulario.querySelector("#nome");
            const email = formulario.querySelector("#email");
            const mensagem = formulario.querySelector("#mensagem");

            if (!nome || !email || !mensagem) {
                return;
            }

            if (
                nome.value.trim() === "" ||
                email.value.trim() === "" ||
                mensagem.value.trim() === ""
            ) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            alert(`Obrigada pela mensagem, ${nome.value}! 💗`);

            formulario.reset();
        });
    }


    const ano = document.querySelector("#ano");

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }


    const titulo = document.querySelector(".hero h1");

    if (titulo) {
        const textoOriginal = titulo.textContent;
        titulo.textContent = "";

        let indice = 0;

        function escrever() {
            if (indice < textoOriginal.length) {
                titulo.textContent += textoOriginal.charAt(indice);
                indice++;

                setTimeout(escrever, 80);
            }
        }

        escrever();
    }


    console.log("Portfólio da Carolina carregado com sucesso! 💗");

});