import { useState } from 'react';

function LiveInput() {
  // Multiple state variables
  const [text, setText] = useState('');
  const [color, setColor] = useState('#3b82f6');
  const [fontSize, setFontSize] = useState(16);
  const [isUppercase, setIsUppercase] = useState(false);

  // Derived state (calculated from other state)
  const characterCount = text.length;
  const wordCount = text.trim() ? text.trim().split(' ').length : 0;
  const displayText = isUppercase ? text.toUpperCase() : text;

  return (
    <div className="live-input">
      <h3>✨ Live Text Editor with State</h3>
      
      {/* Text input */}
      <div className="input-section">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something and watch it update in real-time..."
          className="live-textarea"
          rows="3"
        />
      </div>

      {/* Style controls */}
      <div className="style-controls">
        <div className="control-group">
          <label>Color: </label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <div className="control-group">
          <label>Font Size: {fontSize}px</label>
          <input
            type="range"
            min="12"
            max="48"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          />
        </div>

        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={isUppercase}
              onChange={(e) => setIsUppercase(e.target.checked)}
            />
            UPPERCASE
          </label>
        </div>
      </div>

      {/* Live preview */}
      <div className="live-preview">
        <h4>Live Preview:</h4>
        <div 
          className="preview-text"
          style={{
            color: color,
            fontSize: `${fontSize}px`,
            transition: 'all 0.3s ease'
          }}
        >
          {displayText || "Your text will appear here..."}
        </div>
      </div>

      {/* Real-time stats */}
      <div className="text-stats">
        <div className="stat">
          <strong>Characters:</strong> {characterCount}
        </div>
        <div className="stat">
          <strong>Words:</strong> {wordCount}
        </div>
        <div className="stat">
          <strong>Reading Time:</strong> {Math.ceil(wordCount / 200)} min
        </div>
      </div>

      {/* Dynamic feedback */}
      <div className="feedback">
        {characterCount === 0 && <p>🤔 Start typing to see the magic!</p>}
        {characterCount > 0 && characterCount < 10 && <p>🌱 Just getting started...</p>}
        {characterCount >= 10 && characterCount < 50 && <p>📝 Good progress!</p>}
        {characterCount >= 50 && <p>📚 Wow, you're really writing!</p>}
      </div>
    </div>
  );
}

export default LiveInput;