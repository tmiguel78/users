/*
Datos que necesito: name, age (GENERAR ALEATORIA), username, img, phone, email, company, address
    - address tendrá estos datos como valor: 
    usuario.address.street, usuario.address.suite, usuario.address.city

Crearé un card usuario, y dentro tendrá otro div para datos personales porque éste div tiene un borde.

Sacar fel fetch:
- name: data[indice].name
- username: data[indice].username
- phone: data[indice].phone
- email: data[indice].email
- company: data[indice].company.name
- address (street: data[indice].address.street
            suite: data[indice].address.suite
            city: data[indice].address.city
- img (usaré la variable img para sumar 1 en cada imagen)

Habrá que iterar sobre el array data del json.

Para practicar el deconstructing, habrá que sacar las variable de los objetos (name, username...) 
con la fórmula aprendida.

*/

const dataArea = document.getElementById('listaUsuarios');
let photo = 0;

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    if(!response.ok) {
        throw new Error (`La solicitud no fue exitosa: ${response.status}`);
    }
    return response.json();
})
.then((data) => {
    for (let i = 0; i < 10; i++) {
        photo ++;    
        let age = Math.floor(Math.random() * 20 + 20); // Edad aleatoria entre 20 y 40 años.
        // Deconstructing variables
        const {name, username, phone, email} = data[i];
        const {city, street, suite} = data[i].address;
        const nameCompany = data[i].company.name;
        // Plantilla de cada tarjeta
        let template = `
            <li>
                <div id="mainContainer">
                    <div id="dataContainer">
                        <p><strong>Nombre:</strong> ${name}</p>
                        <p><strong>Edad:</strong> ${age}</p>
                        <p><strong>Username:</strong> ${username}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Email:</strong> ${email}</p>
                    </div>
                    <div><img src="./assets/img/${photo}.jpeg"/>
                    </div>
                    <div>
                    <p><strong>Compañía:</strong> ${nameCompany}</p>
                    <p><strong>Dirección:</strong> ${street}, ${suite}</p>
                    <p>${city}</p>
                    </div>
                </div>
            </li>
            `;

        dataArea.innerHTML += template;
        }
    })
    .catch((err) => console.log(err));
    