import { selectAll } from "@/app/api/student";

const StudentPage = async () => {
  const students = await selectAll();
  const viewStudents = students.map((student) => {
    return (
      <div>
        <span>{student.st_num}</span>
        <span>{student.st_name}</span>
      </div>
    );
  });
  return <>{viewStudents}</>;
};
export default StudentPage;
