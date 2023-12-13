let val = document.getElementById("checkbox")

function abrirSacola() {
    if (val.checked == true) {
        val.checked = false
    } else {
        val.checked = true
    }
}