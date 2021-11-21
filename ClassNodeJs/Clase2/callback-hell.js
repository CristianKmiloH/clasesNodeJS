const students = [
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
    names: "Master",
  }
];

const courses = [
  {
    idCourse: 1,
    program: "Desarrollo Web",
  },
  {
    idCourse: 2,
    program: "Desarrollo de Videojuegos",
  }
];

const getStudent = (id, retornoo) => {
  const findStudent = students.find((std) => std.id == id)?.names
  if (findStudent) {
    retornoo(null, findStudent)
  } else {
    retornoo("No existe el estudiante")
  }
};

// getStudent(2, (err, findStudent) => {
//     if(err){
//         console.log("Error!!!")
//         console.log(err)
//     }
//     else{
//         console.log(findStudent)
//     }
// });


const getCourse = (id, retornoo) => {
    const findCourse = courses.find((cour) => cour.idCourse == id)?.program
    if(findCourse) {
        retornoo(null, findCourse)
    } else{
        retornoo("No existe el curso")
    }
}

// getCourse(1, (err, findCourse) => {
//     if(err){
//         console.log("Error!!!")
//         console.log(err)
//     }
//     else{
//         console.log(findCourse)
//     }
// });


const id = 4

getStudent(id, (err, student) => {
    if(err){
        console.error("Error! No existe el estudiante")
    } else{
        getCourse(id, (err, courses) => {
            if(err){
                console.error("Error, el estudiante: " + student + " no está registrado en ningun curso")
            } else{
                console.log("El estudiante: " + student + " está inscrito en el curso: " + courses)
            }
        })
    }
})