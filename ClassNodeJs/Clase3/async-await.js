const arrayStudents = [
  {
    id: 1,
    names: "Cris",
  },
  {
    id: 2,
    names: "Damian",
  },
  {
    id: 3,
    names: "Gabo",
  },
];

const arrayCourses = [
  {
    idStudent: 1,
    program: "Desarrollo Web",
  },
  {
    idStudent: 2,
    program: "Desarrollo de Videojuegos",
  },
];

const getStudent = (id) => {
  return new Promise((resolve, reject) => {
    const estudiambre = arrayStudents.find((st) => st.id == id)?.names;
    // operador ternario
    estudiambre
      ? resolve(estudiambre)
      : reject(`No existe el estudiambre con el Id ${id}`);
  });
};

const getCourse = (id) => {
  return new Promise((resolve, reject) => {
    const asignatura = arrayCourses.find((cou) => cou.idCourse == id)?.program;
    // operador ternario
    asignatura
      ? resolve(asignatura)
      : reject(`No hay ningún curso para el estudiambre con el Id ${id}`);
  });
};


const getInfoStudent = async () => {
    setTimeout(() => {
        console.log("Me ejecutaron 2 segundos depues!!!")
    }, 2000);
    console.log("Algo despues del TimeOut")
}

getInfoStudent().then(() => {
    console.log("Finish")
})