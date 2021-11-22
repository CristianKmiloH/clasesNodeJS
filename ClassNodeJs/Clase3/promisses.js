// Recursividad

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
  }
]

const arrayCourses = [
  {
    idStudent: 1,
    program: "Desarrollo Web",
  },
  {
    idStudent: 2,
    program: "Desarrollo de Videojuegos",
  }
]

const curseNotes = [
  {
    program: "Desarrollo Web",
    idStudent: 1,
    note1: 3,
    note2: 4,
    note3: 5
  }

]


const getStudent = (id) => {
    return new Promise((resolve, reject) => {
        const estudiambre = arrayStudents.find(st => st.id == id)?.names
        // operador ternario
        estudiambre? resolve(estudiambre) : reject(`No existe el estudiambre con el Id ${id}`)
    })
}

const getCourse = (id) => {
  return new Promise((resolve, reject) => {
      const asignatura = arrayCourses.find(cou => cou.idCourse == id)?.program
      // operador ternario
      asignatura? resolve(asignatura) : reject(`No hay ningún curso para el estudiambre con el Id ${id}`)
  })
}

const getCourseNotes = (id, program) => {
  return new Promise((resolve, reject) => {
      const notasEstudiambre = notasEstudiambre.find(notasEst => (notasEst.idStudent == id && notasEst.program == program))
      // operador ternario
      notasEstudiambre? resolve(notasEstudiambre) : reject(`No existen notas en el curso ${program} para el estudiambre con el Id ${id}`)
  })
}

const id = 1

getStudent(id)
  .then(nombreDelEstudiambre => {
    console.log(nombreDelEstudiambre.toUpperCase())
    return getCourse(id)
  })
  .then(loQueEstudia => {
    console.log(loQueEstudia.toUpperCase())
    return getCourseNotes(id, loQueEstudia)
  })
  .then(notas => {
    console.log(notas)
  })
  .catch(err => {
    console.log(err)
  })

// getCourse(id).then(loQueEstudia => {
//   console.log(loQueEstudia.toUpperCase())
// }).catch(er => {
//  console.log(err)
//})


// const getStudent = (id, retornoo) => {
//     const findStudent = students.find((std) => std.id == id)?.names
//     if (findStudent) {
//       retornoo(null, findStudent)
//     } else {
//       retornoo("No existe el estudiante")
//     }
//   }
