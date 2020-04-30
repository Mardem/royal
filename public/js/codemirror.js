function editor(id) {
    CodeMirror.fromTextArea(document.querySelector("#" + id), {
        lineNumbers: true,
        mode:  "javascript",
        theme: "material"
    });
}
