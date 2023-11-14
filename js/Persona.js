var num = 0;
class Persona{


    constructor(id, nombre, email, password, rol){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }

    creaObjeto(){
        const idH = document.getElementById("cc").value;
        persona.id = idH;

        const nombreH = document.getElementById("nombres").value;
        persona.nombre = nombreH;

        const emailH = document.getElementById("email").value;
        persona.email = emailH;

        const psdH = document.getElementById("pwd").value;
        persona.password = psdH;

        const rolesH = document.getElementById("rol").value;
        persona.rol = rolesH;
        

        persona.leaObjeto();
    }

    leaObjeto(){
        
        document.getElementById("tableDatos").innerHTML +=
        "<tr><td>"+ num++ + "</td><td>" + persona.id + "</td><td>" + persona.nombre + "</td><td>" + persona.email + "</td><td>" + persona.roles + "</td></tr>";
    }
}