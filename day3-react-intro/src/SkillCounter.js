function SkillCounter(props) {
  return (
    <div className="skill-counter">
      <div className="skill-header">
        <span className="skill-icon">{props.icon}</span>
        <h4>{props.skillName}</h4>
      </div>
      
      <div className="skill-level">
        <div className="level-bar">
          <div 
            className="level-fill" 
            style={{
              width: `${props.level}%`,
              backgroundColor: props.color
            }}
          ></div>
        </div>
        <span className="level-text">{props.level}% Mastered</span>
      </div>
      
      <div className="skill-description">
        <p>{props.description}</p>
        <small>Days practicing: {props.daysPracticing}</small>
      </div>
      
      {/* Conditional rendering based on props */}
      {props.level >= 75 && (
        <div className="mastery-badge">
          🏆 Expert Level!
        </div>
      )}
      
      {props.level >= 50 && props.level < 75 && (
        <div className="intermediate-badge">
          🚀 Intermediate
        </div>
      )}
      
      {props.level < 50 && (
        <div className="beginner-badge">
          🌱 Learning
        </div>
      )}
    </div>
  );
}

export default SkillCounter;