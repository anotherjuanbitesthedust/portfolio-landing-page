import './App.css';
import GreetingCard from './GreetingCard';
import JSXExamples from './JSXExamples';
import SkillCounter from './SkillCounter';
import ProjectCard from './ProjectCard';
import InteractiveCounter from './InteractiveCounter';
import LiveInput from './LiveInput';
import TodoApp from './TodoApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Day 3: React Introduction</h1>
        <p>Mastering STATE and interactive components!</p>
        
        {/* Greeting Cards */}
        <GreetingCard 
          name="Props Master" 
          skill="Component Communication" 
          experience="Day 3 of 30"
          date={new Date().toDateString()} 
        />
        
        {/* Skill Counters with different props */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <SkillCounter
            icon="🌐"
            skillName="HTML & CSS"
            level={85}
            color="#4ade80"
            description="Semantic markup and responsive styling"
            daysPracticing={3}
          />
          
          <SkillCounter
            icon="⚡"
            skillName="JavaScript"
            level={65}
            color="#fbbf24"
            description="DOM manipulation, ES6+, and async programming"
            daysPracticing={2}
          />
          
          <SkillCounter
            icon="⚛️"
            skillName="React"
            level={25}
            color="#3b82f6"
            description="Components, props, and JSX"
            daysPracticing={1}
          />
        </div>
        
        {/* Project Cards with different completion states */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <ProjectCard
            title="Portfolio Landing Page"
            day="Day 1"
            technologies={['HTML5', 'CSS3', 'Responsive Design']}
            description="Modern portfolio with glassmorphism design"
            difficulty="Beginner"
            isCompleted={true}
            whatLearned="CSS Grid, Flexbox, and modern design principles"
          />
          
          <ProjectCard
            title="JavaScript Calculator"
            day="Day 2"
            technologies={['JavaScript', 'DOM', 'Event Handling']}
            description="Fully functional calculator with keyboard support"
            difficulty="Intermediate"
            isCompleted={true}
            whatLearned="Advanced JavaScript, DOM manipulation, and error handling"
          />
          
          <ProjectCard
            title="React Weather App"
            day="Day 5-7"
            technologies={['React', 'API', 'State Management']}
            description="Real-time weather dashboard with location search"
            difficulty="Intermediate"
            isCompleted={false}
            goal="Learn React hooks, API integration, and state management"
            progress={15}
          />
        </div>

         <GreetingCard 
          name="State Master" 
          skill="useState Hook" 
          experience="Building interactive UIs"
          date={new Date().toDateString()} 
        />

          {/* NEW: Interactive State Components */}
        <InteractiveCounter />
        <LiveInput />
         
          {/* Complete Todo Application */}
        <TodoApp />
        
        {/* JSX Examples */}
        <JSXExamples />
      </header>
    </div>
  );
}

export default App;