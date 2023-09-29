import { useState } from "react";
import './form.css';
const initialStudent = {
    name: "",
    email: "",
    website: "",
    link: "",
    gender: "",
    skills: []
}

function Form({ students, setStudents }) {
    const [student, setStudent] = useState(initialStudent);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            if (checked) {
                setStudent(prevState => ({
                    ...prevState,
                    skills: [...prevState.skills, value]
                }));
            } else {
                setStudent(prevState => ({
                    ...prevState,
                    skills: prevState.skills.filter(skill => skill !== value)
                }));
            }
        } else {
            setStudent(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStudents([...students, student]);
        setStudent(initialStudent);
    };

    return (
        <form onSubmit={handleSubmit}>
            Name: <input type="text" name="name" value={student.name} onChange={handleChange} />
            Email: <input type="text" name="email" value={student.email} onChange={handleChange} />
            Website: <input type="text" name="website" value={student.website} onChange={handleChange} />
            Image link: <input type="text" name="link" value={student.link} onChange={handleChange} />
            <div>
                Gender:
                <input type="radio" name="gender" value="male" onChange={handleChange} checked={student.gender === "male"} /> Male
                <input type="radio" name="gender" value="female" onChange={handleChange} checked={student.gender === "female"} /> Female
            </div>
            <div>
                Skills:
                <input type="checkbox" value="Java" onChange={handleChange} checked={student.skills.includes("Java")} /> Java
                <input type="checkbox" value="HTML" onChange={handleChange} checked={student.skills.includes("HTML")} /> HTML
                <input type="checkbox" value="CSS" onChange={handleChange} checked={student.skills.includes("CSS")} /> CSS
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
