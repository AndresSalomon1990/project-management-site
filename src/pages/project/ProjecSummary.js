import Avatar from '../../components/avatar/Avatar';

export default function ProjecSummary({ project }) {
  return (
    <div className='project-summary'>
      <h2 className='page-title'>{project.name}</h2>
      <p className='due-date'>
        Project due by {project.dueDate.toDate().toDateString()}
      </p>
      <p className='details'>{project.details}</p>
      <h4>The project is assign to:</h4>
      <div className='assigned-users'>
        {project.assignedUsersList.map((user) => (
          <div key={user.id}>
            <Avatar src={user.photoURL} />
          </div>
        ))}
      </div>
    </div>
  );
}
