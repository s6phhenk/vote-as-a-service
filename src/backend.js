const BACKEND_URL = 'http://localhost:3000';

// Funktion für die lesenden Serverzugriffe GET
export async function fetchJson (path, options) {
    // url ist zusammengesetzt aus der URL + dem jeweiligen Pfad 
    const url = `${BACKEND_URL}${path}`;

    const response = await fetch(url, options);
    // Falls der HTTP Status nicht 200(ok) entpsricht, wird ein error geworfen
    if (!response.ok) {
        throw new Error(`response not OK: ${response.status}`);
    } return await response.json();
}

// Funktion für die schreibenden Serverzugriffe POST
export async function sendJson (method, path, payload = {}) {
    const url = `${BACKEND_URL}${path}`;

    // Die Funktion konvertiert das mit dem Parameter payload 
    // übergebene Objekt in einen JSON-String und setzt sie als Body 
    // für die Serveranfrage 
    // 2 Header werden gesetzt für den Serverzugriff
    const response = await fetch (url, {
        method: method,
        body: JSON.stringify(payload),
        headers: {
            Accept: "applications/json",
            "Content-Type": "applications/json"
        }
    });
    if(!response.ok) {
        throw new Error (`Response not ok: ${response.status}`)
    }
}
