function ProjectCard(props) {
  // Function to determine difficulty color
  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'beginner': return '#4ade80';
      case 'intermediate': return '#fbbf24';
      case 'advanced': return '#f87171';
      default: return '#6b7280';
    }
  };

  return (
    <div className="project-card-component">
      <div className="project-status">
        <span className={`status-badge ${props.isCompleted ? 'completed' : 'in-progress'}`}>
          {props.isCompleted ? '✅ Completed' : '🚧 In Progress'}
        </span>
        <span 
          className="difficulty-badge"
          style={{ backgroundColor: getDifficultyColor(props.difficulty) }}
        >
          {props.difficulty}
        </span>
      </div>
      
      <h4 className="project-title">{props.title}</h4>
      
      <div className="project-details">
        <p><strong>Day:</strong> {props.day}</p>
        <p><strong>Technologies:</strong> {props.technologies.join(', ')}</p>
        <p><strong>Description:</strong> {props.description}</p>
      </div>
      
      {/* Conditional content based on completion */}
      {props.isCompleted ? (
        <div className="completed-section">
          <p>🎉 <strong>What I have learned:</strong> {props.whatLearned}</p>
          <button 
            className="view-project-btn"
            onClick={() => alert(`Opening ${props.title}! (This would open your project)`)}
          >
            View Project 🚀
          </button>
        </div>
      ) : (
        <div className="in-progress-section">
          <p>🎯 <strong>Goal:</strong> {props.goal}</p>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${props.progress}%` }}
            ></div>
          </div>
          <small>{props.progress}% Complete</small>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;