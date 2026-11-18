(function () {
  const PASTA_VIDEOS = "imagens/";

  // Seção "sobre"
  function paragrafos(el, texto) {
    String(texto).split(/\n\s*\n/).forEach(function (par) {
      const p = document.createElement("p");
      p.textContent = par;
      el.appendChild(p);
    });
  }
  paragrafos(document.getElementById("sobre-jogo"), SOBRE.jogo);
  paragrafos(document.getElementById("sobre-proposito"), SOBRE.proposito);
  const ul = document.getElementById("sobre-inspiracoes");
  SOBRE.inspiracoes.forEach(function (nome) {
    const li = document.createElement("li");
    li.textContent = nome;
    ul.appendChild(li);
  });

  // Registros: mais recente (maior número) primeiro
  const lista = REGISTROS.slice().sort(function (a, b) { return b.numero - a.numero; });
  const alvo = document.getElementById("registros");

  lista.forEach(function (r, i) {
    const card = document.createElement("article");
    card.className = "registro";
    const idCorpo = "corpo-" + r.numero;

    const cab = document.createElement("div");
    cab.className = "registro-cab";
    const h = document.createElement("h2");
    h.textContent = "Registro nº " + r.numero + (r.titulo ? " · " + r.titulo : "");
    cab.appendChild(h);
    if (r.data) {
      const d = document.createElement("span");
      d.className = "data";
      d.textContent = r.data;
      cab.appendChild(d);
    }

    const corpo = document.createElement("div");
    corpo.className = "registro-corpo";
    corpo.id = idCorpo;

    const colVideo = document.createElement("div");
    colVideo.className = "col-video";
    if (r.video) {
      const v = document.createElement("video");
      v.controls = true;
      v.preload = "metadata";
      v.src = PASTA_VIDEOS + encodeURIComponent(r.video);
      colVideo.appendChild(v);
    } else {
      colVideo.textContent = "Sem vídeo neste registro.";
    }

    const colTexto = document.createElement("div");
    colTexto.className = "col-texto";
    String(r.texto || "").split(/\n\s*\n/).forEach(function (par) {
      const p = document.createElement("p");
      p.textContent = par;
      colTexto.appendChild(p);
    });

    corpo.appendChild(colVideo);
    corpo.appendChild(colTexto);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-recolher";
    btn.setAttribute("aria-controls", idCorpo);
    const SETA_CIMA = '<svg class="seta" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><polyline points="4,16 12,7 20,16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const SETA_BAIXO = '<svg class="seta" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><polyline points="4,8 12,17 20,8" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    // Começa recolhido por padrão
    card.classList.add("recolhido");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = SETA_BAIXO;
    btn.setAttribute("aria-label", "Expandir registro");

    btn.addEventListener("click", function () {
      const recolhido = card.classList.toggle("recolhido");
      btn.setAttribute("aria-expanded", String(!recolhido));
      btn.setAttribute("aria-label", recolhido ? "Expandir registro" : "Recolher registro");
      btn.innerHTML = recolhido ? SETA_BAIXO : SETA_CIMA;
      if (recolhido) {
        const v = corpo.querySelector("video");
        if (v) v.pause();
      }
    });

    card.appendChild(cab);
    card.appendChild(corpo);
    card.appendChild(btn);
    alvo.appendChild(card);
  });
})();
