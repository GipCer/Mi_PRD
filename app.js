// Cargar datos guardados
window.onload = function () {
    document.getElementById("area1").value = localStorage.getItem("area1") || "";
    document.getElementById("area2").value = localStorage.getItem("area2") || "";
    document.getElementById("area3").value = localStorage.getItem("area3") || "";
};

function evaluar() {
    let a1 = document.getElementById("area1").value.trim();
    let a2 = document.getElementById("area2").value.trim();
    let a3 = document.getElementById("area3").value.trim();

    // Guardar en LocalStorage
    localStorage.setItem("area1", a1);
    localStorage.setItem("area2", a2);
    localStorage.setItem("area3", a3);

    let resultado = "";

    if (a1 !== "") {
        resultado = "APROBÓ por Área 1";
    } else if (a2 !== "") {
        resultado = "APROBÓ por Área 2";
    } else if (a3 !== "") {
        resultado = "APROBÓ por Área 3";
    } else {
        resultado = "❌ No cumple ninguna área";
    }

    document.getElementById("resultado").innerText = resultado;
}
