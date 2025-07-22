import React from "react";
import BarStackHorizontal from "./components/BarStackHorizontal";

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1 className="app-title">Interactive Data Visualization</h1>
        <p className="app-subtitle">
          A design-focused approach to creating beautiful, functional charts
          with code
        </p>
      </div>

      <div className="instructions">
        <h3>What You're Looking At</h3>
        <p>
          This is a horizontal stacked bar chart demonstrating modern data
          visualization design patterns. It shows temperature data for three
          cities over time, with each bar representing a date and colored
          segments showing temperatures for each city. This example showcases
          clean typography, thoughtful spacing, and smooth interactions.
        </p>

        <h3>Design Features to Explore</h3>
        <ul>
          <li>
            <strong>Hover states</strong> with smooth transitions and detailed
            information
          </li>
          <li>
            <strong>Color system</strong> with consistent palette and
            accessibility considerations
          </li>
          <li>
            <strong>Typography hierarchy</strong> with proper font weights and
            spacing
          </li>
          <li>
            <strong>Responsive layout</strong> that adapts to different screen
            sizes
          </li>
        </ul>

        <h3>Understanding the Visualization</h3>
        <ul>
          <li>
            The <strong>horizontal axis</strong> shows temperature values with
            clean tick marks
          </li>
          <li>
            The <strong>vertical axis</strong> displays dates with readable
            formatting
          </li>
          <li>
            Each <strong>colored segment</strong> represents data with
            consistent visual encoding
          </li>
          <li>
            The <strong>legend</strong> provides clear color-to-data mapping
          </li>
        </ul>
      </div>

      <div className="chart-container">
        <BarStackHorizontal width={800} height={400} events={true} />
      </div>

      <div className="instructions">
        <h3>Ready to Design with Code?</h3>
        <p>
          Now that you can see the chart working, you can start implementing your design ideas!
          Here are some design-focused customizations you can try:
        </p>
        <ul>
          <li>
            <strong>Update the color palette</strong> to match your brand guidelines or design system
          </li>
          <li>
            <strong>Improve typography</strong> by adjusting font weights, sizes, and spacing
          </li>
          <li>
            <strong>Enhance interactions</strong> with smooth animations and micro-interactions
          </li>
          <li>
            <strong>Create responsive layouts</strong> that work beautifully on all devices
          </li>
        </ul>
        <p>
          <strong>Design Tip:</strong> Use the Cursor Chat tab to describe your design vision in natural language, 
          and watch as your ideas come to life in code!
        </p>
      </div>
    </div>
  );
}

export default App;
