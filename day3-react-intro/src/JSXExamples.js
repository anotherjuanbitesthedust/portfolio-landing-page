function JSXExamples(){
    //javascript variables (can be anything!)
    const developer = {
        name: "You",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        currentDay: 3,
        totalDays: 30
    };

    const isLearningReact=true;
    const completionPercentage = (developer.currentDay / developer.totalDays * 100).toFixed(1);

    //functions can be used in JSX
    const getMotivation = () => {
        if (completionPercentage < 10) return "Just getting started!";
        if (completionPercentage < 50) return "Making great progress";
        return "Almost There";
    };

    const getRandomEmoji = () => {
    const emojis = ["🔥", "⚡", "🚀", "💪", "🎯", "✨", "🌟"];
    return emojis[Math.floor(Math.random() * emojis.length)];
    };

      return (
    <div className="jsx-examples">
      <h3>🔥 JSX Magic in Action</h3>
      
      {/* JavaScript expressions in JSX */}
      <div className="progress-section">
        <p><strong>Developer:</strong> {developer.name}</p>
        <p><strong>Progress:</strong> Day {developer.currentDay} of {developer.totalDays}</p>
        <p><strong>Completion:</strong> {completionPercentage}%</p>
        <p><strong>Status:</strong> {getMotivation()}</p>
        <p><strong>Random motivation:</strong> {getRandomEmoji()} Keep coding!</p>
      </div>

      {/* Conditional rendering - only shows if true */}
      {isLearningReact && (
        <div className="learning-badge">
          🎯 Currently mastering React components!
        </div>
      )}
      
      {/* Another conditional - based on progress */}
      {completionPercentage > 5 && (
        <div className="achievement-badge">
          🏆 Achievement unlocked: React Beginner!
        </div>
      )}
      
      {/* Rendering arrays/lists */}
      <div className="skills-section">
        <h4>Your Skill Stack:</h4>
        <ul>
          {developer.skills.map((skill, index) => (
            <li key={index} className="skill-item">
              {skill} {index === developer.skills.length - 1 ? "🔥" : "✅"}
            </li>
          ))}
        </ul>
      </div>

      {/* Complex expressions */}
      <div className="stats-section">
        <h4>Live Stats:</h4>
        <p>Current time: {new Date().toLocaleTimeString()}</p>
        <p>Days remaining: {30 - developer.currentDay}</p>
        <p>Progress bar: {"█".repeat(Math.floor(completionPercentage / 5))}{"░".repeat(20 - Math.floor(completionPercentage / 5))} {completionPercentage}%</p>
      </div>
      
      {/* Event handling with inline functions */}
      <div className="interactive-section">
        <h4>Interactive Elements:</h4>
        <button 
          className="jsx-button"
          onClick={() => alert(`Hello ${developer.name}! You're doing great! 🚀`)}
        >
          Get Motivation! 🎉
        </button>
        
        <button 
          className="jsx-button"
          onClick={() => alert(`Random fact: You've completed ${completionPercentage}% of your journey!`)}
        >
          Random Fact 📊
        </button>
        
        <button 
          className="jsx-button"
          onClick={() => window.location.reload()}
        >
          Refresh Stats {getRandomEmoji()}
        </button>
      </div>

      {/* Ternary operators for conditional content */}
      <div className="motivation-section">
        <p>
          {completionPercentage < 15 
            ? "🌱 You're just getting started - every expert was once a beginner!" 
            : completionPercentage < 50 
            ? "🚀 You're building momentum - keep pushing forward!" 
            : "🎯 You're in the home stretch - amazing progress!"}
        </p>
      </div>
    </div>
  );
}

export default JSXExamples;




