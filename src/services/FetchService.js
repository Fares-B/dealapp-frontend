const urlApi = "http://localhost:3001/";

export const get = async (path) => {
    console.log(urlApi+path)
    let res = await fetch(urlApi + path, {credentials: "include"});
    let data = await res.json();
    return data;
}

export const post = (path, body) => fetch(urlApi + path, {
    method: "POST",
    body: JSON.stringify(body),
    headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    credentials: "include"
}).then(res => res.text()).then(res => res);

// export const drop = path => fetch(path, { method: 'DELETE' }).then(res => res.text()).then(data => data);
