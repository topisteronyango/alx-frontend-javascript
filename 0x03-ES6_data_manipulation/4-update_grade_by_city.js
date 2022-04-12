export default function updateStudentGradeByCity(
    getListStudents,
    city,
    newGrades,
  ) {
    return getListStudents
      .filter((student) => student.location === city)
      .map((student) => {
        const newGrade = newGrades.find((s) => s.studentId === student.id);
        return {
          ...student,
          grade: newGrade ? newGrade.grade : 'N/A',
        };
      });
  }