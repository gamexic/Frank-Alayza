// Función para que incluya el contenido de un archivo HTML en otro
function includeHTML() {
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var file = element.getAttribute('include-html');
        if (file) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        element.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        element.innerHTML = "Page not found.";
                    }
                    element.removeAttribute('include-html');
                    includeHTML();
                }
            };
            xhr.open('GET', file, true);
            xhr.send();
            return;
        }
    }
}

// Incluye el contenido de un archivo HTML en otro
document.addEventListener('DOMContentLoaded', function () {
    includeHTML();
});



