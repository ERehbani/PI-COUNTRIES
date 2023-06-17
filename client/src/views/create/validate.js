const validate = (form) => {

    let errors = {};

    if (!form.name) { //Valida stado de los campos
        errors.name = "El nombre no puede estar vacío";
    }
    
    if (form.name.length < 4 || form.name.length > 25) {
        errors.name = "El nombre debe tener entre 4 y 25 caracteres"
    }

    if (!/[a-zA-Z]/i.test(form.name)) {
        errors.name = "El nombre solo debe tener letras"
    }

    if (form.difficulty > 5 || form.difficulty < 1) { //Valida stado de los campos
        errors.difficulty = "La dificultad no puede ser menor que 1 y mayor que 5";
    }

    if (!/^[0-9]+$/.test(form.difficulty)) {
        errors.difficulty = "La dificultad solo debe contener numeros"
    }

    if (!form.duration) { //Valida stado de los campos
        errors.duration = "La duracion no puede estar vacía";
    }

    if (!/^(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9]$/.test(form.duration)) {
        errors.duration = `La duracion debe estar en formato: "HH:MM:SS"`
    }

    if (!form.season) { //Valida stado de los campos
        errors.season = "La estacion no puede estar vacía";
    }

    if (form.countryId.length > 0) { //Valida stado de los campos
        errors.countryId = "";
    }else if (form.countryId.length > 5){
        errors.countryId = "No deben ser mas de 5 países"
    } else {
        errors.countryId = 'Este campo no puede estar vacío'
    }

    

    return errors; //Cambia stado de los errores al terminar todas las validaciones
};

export default validate;