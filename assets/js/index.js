import { API_URL } from "./formApiConfig.js";

document.querySelector("form").addEventListener("submit", async (e) =>
{
    e.preventDefault();

    const form = document.querySelector("form");

    let dataForm = new FormData(form);

    dataForm.append("ticket_time", new Date().toString());

    await fetch(API_URL, {

        method:"POST",
        body: dataForm,
    });

    form.classList.add("animation");

    alert("Su consulta fue enviada con éxito.");

    //window.location.href = API_URL;

})