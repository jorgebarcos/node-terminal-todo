require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


console.clear();

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB()

    if (tareasDB) {

    }

    await pausa()

    do {
        // Imprimir menu
        opt = await inquirerMenu()

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción:')

                tareas.crearTarea(desc)
                break;
            case '2':
                console.log(tareas.listadoArr);
                break;
        }

        // guardarDB(tareas.listadoArr)



        await pausa()
    } while (opt !== '0')
    // pausa()

}


main()