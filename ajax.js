const url = "https://jsonplaceholder.typicode.com/todos/1"; //endpoint
const output = document.getElementById("output");
const status = document.getElementById("status");
function setLoading(on) {
    status.innerHTml = on
        ? 'carregando <span class="spinner" aria-hidden="true"></span>'
        : "";
}
// ---exemplo com fetch (promises / async) ---
document
    .getElementById("btn-fetch")
    .addEventListener("click", async () => {
        output.textContent = "";
        setLoading(true);
        try {
            //fetch retorna uma promise que resolve para response

            const res = await fetch(url, { method: "GET" });
            if (!res.ok) throw new Error("status HTTP: " + res.status);
            const data = await res.json(); // parse json automaticamente
            output.textContent = JSON.stringify(data, null, 2);
        } catch (err) {
            output.textContent = "error " + err.message;
            output.classList.add("error");
        } finally {
            setLoading(false);
        }
    });

