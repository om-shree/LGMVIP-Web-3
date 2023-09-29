import './card.css';

function Card({students}){
    
    return(
        <div>
            {
                students.length >=1 ?
                <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        students.map((student, index) => (
                            <tr key={index}>
                                <td>
                                    <p><strong>{student.name}</strong></p>
                                    <p>{student.gender}</p>
                                    <p>{student.email}</p>
                                    <a href={student.website}>{student.website}</a>
                                    <p>
                                        {
                                            student.skills.join(", ")
                                        }
                                    </p>
                                </td>
                                <td>
                                    <img src={student.link} alt={student.name} />
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                   
            </table>
            </div>
            :
            null
            }
            </div>
            )
        }

        export default Card;