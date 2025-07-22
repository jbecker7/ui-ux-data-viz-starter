# Data Visualization for UI/UX Designers

Welcome! This is a hands-on data visualization project designed specifically for UI/UX designers who want to bring their design skills into the world of interactive data visualization. You'll learn how to create beautiful, functional charts using code - no prior programming experience required!

## Quick Start (5 minutes)

### Super Simple Setup:
1. **Install Node.js**: Go to [nodejs.org](https://nodejs.org) → Download "LTS" → Install
2. **Install Cursor**: Go to [cursor.sh](https://cursor.sh) → Download → Install
3. **Get the project**: Download this project → Extract to Desktop → Open in Cursor
4. **Install dependencies**: Press `Cmd + J` (Mac) or `Ctrl + J` (Windows/Linux) → Type `npm install` → Press Enter
5. **Start the project**: In same terminal → Type `npm start` → Press Enter → Browser opens automatically!

### Make Your First Design Change:
1. **Open Cursor Chat tab** (right side of Cursor)
2. **Type**: "Change the chart colors to match a modern design system - use a blue, teal, and purple palette"
3. **Press Enter** → Watch Cursor implement your design automatically!
4. **See results** in your browser

---

## What You'll Build

This project creates a beautiful horizontal stacked bar chart that demonstrates:
- **Interactive data visualization** with hover states and tooltips
- **Modern design patterns** with clean typography and spacing
- **Responsive layout** that adapts to different screen sizes
- **Accessible design** with proper color contrast and keyboard navigation
- **Smooth animations** and micro-interactions

## Detailed Setup Guide

### Step 1: Install Cursor
1. Go to [cursor.sh](https://cursor.sh)
2. Download and install Cursor for your operating system
3. Open Cursor

### Step 2: Download This Project
1. Click the green "Code" button on this page
2. Select "Download ZIP"
3. Extract the ZIP file to a folder on your computer
4. Open Cursor and select "Open Folder"
5. Navigate to the extracted folder and open it

### Step 3: Install Dependencies
1. **Open the terminal in Cursor**:
   - **Method 1**: Press `Cmd + J` (Mac) or `Ctrl + J` (Windows/Linux)
   - **Method 2**: Go to the top menu → Terminal → New Terminal
   - **Method 3**: Look for a "Terminal" tab at the bottom of the Cursor window
   
   The terminal will appear at the bottom of your Cursor window.

2. **Install the project**: In the terminal, type this command and press Enter:
   ```bash
   npm install
   ```
3. **Wait for completion**: This may take a few minutes. You'll see progress bars and package names scrolling by.

### Step 4: Start the Development Server
1. **In the same terminal** (don't close it), type this command and press Enter:
   ```bash
   npm start
   ```
2. **Wait for the server to start**: You'll see messages like "Compiled successfully!"
3. **Your browser will open automatically** to `http://localhost:3000`
4. **You should see the temperature chart** with interactive features!

## Visual Guide to Cursor's Interface

```
┌─────────────────────────────────────────────────────────────┐
│ Cursor Window                                               │
├─────────────┬─────────────────────────────┬─────────────────┤
│             │                             │                 │
│ File        │        Code Editor          │   Cursor Chat   │
│ Explorer    │                             │   (talk to AI)  │
│             │  // Your code goes here     │                 │
│ 📁 src/     │                             │ "Change colors  │
│ 📁 public/  │                             │  to red"        │
│ 📄 README   │                             │                 │
│             │                             │                 │
├─────────────┴─────────────────────────────┴─────────────────┤
│ Terminal (press Cmd+J or Ctrl+J to open)                   │
│ $ npm install                                               │
│ $ npm start                                                 │
└─────────────────────────────────────────────────────────────┘
```

**Key Areas:**
- **Left**: File explorer - click files to open them
- **Center**: Code editor - where you make changes
- **Bottom**: Terminal - where you run commands (might be hidden)
- **Right**: Cursor Chat - talk to AI to make code changes

## Designing with Code

### How to Use Cursor's AI Chat for Design

#### Step 1: Open the Cursor Chat Tab
- Look for the **Chat** or **Cursor** tab on the right side of your Cursor window
- Click on it to open the AI chat interface
- This is where you'll describe your design vision to Cursor

#### Step 2: Describe Your Design Intentions
Instead of manually editing code, you can describe your design ideas like:
- **"Update the color palette to match our brand guidelines - use primary blue, secondary green, and accent orange"**
- **"Make the chart more spacious with better typography and increased padding"**
- **"Add smooth hover animations with a subtle scale effect"**
- **"Implement a dark mode toggle for the entire chart"**
- **"Create a more accessible design with better color contrast"**

#### Step 3: Cursor Implements Your Design
- Cursor will understand your design requirements
- It will automatically modify the correct files with proper code
- You'll see your design changes appear in the code editor
- **Important**: Press `Cmd + S` (Mac) or `Ctrl + S` (Windows/Linux) to save your changes
- The browser will automatically refresh to show your new design!

### Example Design Conversations with Cursor

**You**: "Update the color palette to use a modern gradient from blue to purple"

**Cursor**: *Automatically updates the color variables and adds gradient effects*

**You**: "Make the chart more spacious with better typography and increased padding"

**Cursor**: *Adjusts margins, font sizes, and spacing throughout the component*

**You**: "Add a subtle animation when hovering over chart segments"

**Cursor**: *Implements smooth hover transitions with scale and opacity effects*

### Manual Editing (Alternative Method)

If you prefer to edit code directly:

#### Step 1: Open a File
- Click on any file in the left panel (like `src/components/BarStackHorizontal.js`)
- The file will open in the center editor panel
- You can now see and edit the code

#### Step 2: Make Your Changes
- Click anywhere in the code to place your cursor
- Type your changes directly
- Cursor will show you syntax highlighting and help with code completion

#### Step 3: Save Your Changes
- **Important**: Press `Cmd + S` (Mac) or `Ctrl + S` (Windows/Linux) to save
- Or go to File → Save in the menu
- **Note**: Cursor has autosave turned off by default, so you must save manually
- The browser will automatically refresh to show your changes!

### Design Customization Examples

#### Using Cursor AI for Design

**To Update the Color Palette:**
1. **Open the Cursor Chat tab** on the right side
2. **Type**: "Update the color palette to use a modern design system with primary blue, secondary teal, and accent coral"
3. **Press Enter** and watch Cursor implement your design system automatically!
4. **Save the file**: Press `Cmd + S` (Mac) or `Ctrl + S` (Windows/Linux)
5. **See the results** in your browser

**To Improve Typography and Spacing:**
1. **In the Cursor Chat tab**, type: "Improve the typography with better font weights, increased line height, and more generous spacing"
2. **Press Enter** and Cursor will update the design system
3. **Save the file**: Press `Cmd + S` (Mac) or `Ctrl + S` (Windows/Linux)
4. **See the changes** immediately in your browser

**To Add Micro-interactions:**
1. **Ask Cursor**: "Add smooth hover animations with subtle scaling and color transitions"
2. **Watch** as Cursor implements the micro-interactions
3. **Save the file**: Press `Cmd + S` (Mac) or `Ctrl + S` (Windows/Linux)
4. **Refresh your browser** to see the new interactions

#### Manual Editing (Alternative)

If you prefer to edit code directly:

**Changing Colors:**
1. **Open the chart file**: Click on `src/components/BarStackHorizontal.js` in the file explorer
2. **Find the color variables**: Look for these lines near the top:
   ```javascript
   const purple1 = '#6c5efb';
   const purple2 = '#c998ff';
   const purple3 = '#a44afe';
   ```
3. **Change the colors**: Replace the color codes with new ones:
   - `#ff0000` = Red
   - `#00ff00` = Green  
   - `#0000ff` = Blue
   - `#ffff00` = Yellow
   - `#ff00ff` = Magenta
   - `#00ffff` = Cyan
   - `#ff6b35` = Orange
   - `#4ecdc4` = Teal
4. **Save the file**: Press `Cmd + S` (Mac) or `Ctrl + S` (Windows/Linux) - **This is required!**
5. **See the changes**: Look at your browser - the chart colors will update instantly!

**Changing Chart Size:**
1. **Open the main app file**: Click on `src/App.js` in the file explorer
2. **Find the chart component**: Look for this line:
   ```javascript
   <BarStackHorizontal width={800} height={400} events={true} />
   ```
3. **Adjust the size**: Change the numbers:
   - `width={1000}` makes it wider
   - `height={500}` makes it taller
   - `width={600}` makes it narrower
   - `height={300}` makes it shorter
4. **Save the file**: Press `Cmd + S` (Mac) or `Ctrl + S` (Windows/Linux) - **This is required!**
5. **See the changes**: The chart will resize immediately!

**Changing Background Color:**
1. **Open the chart file**: Click on `src/components/BarStackHorizontal.js`
2. **Find the background variable**: Look for:
   ```javascript
   export const background = '#eaedff';
   ```
3. **Pick a new color**: Change `#eaedff` to any color you want:
   - `#ffffff` = White
   - `#000000` = Black
   - `#f0f0f0` = Light Gray
   - `#e8f4f8` = Light Blue
4. **Save the file**: Press `Cmd + S` (Mac) or `Ctrl + S` (Windows/Linux) - **This is required!**
5. **See the changes**: The chart background will change!

### Advanced Cursor Features

#### Using Cursor's AI Chat Tab
1. **Open the Chat tab**: Look for the Chat/Cursor tab on the right side
2. **Ask for changes**: "How do I add more cities to the chart?"
3. **Get instant help**: Cursor will suggest code changes and explain them
4. **Ask for implementation**: "Actually, add a new city called 'Chicago' to the chart"
5. **Watch the magic**: Cursor will automatically add the city and update the code!

#### Using Cursor's Quick AI (Alternative)
1. **Ask for help**: Press `Cmd + K` (Mac) or `Ctrl + K` (Windows/Linux)
2. **Type your question**: "How do I add more cities to the chart?"
3. **Get instant help**: Cursor will suggest code changes and explain them

#### Multiple Cursors
- Hold `Cmd` (Mac) or `Ctrl` (Windows/Linux) and click multiple places
- Type once to edit multiple lines simultaneously

#### Find and Replace
- Press `Cmd + F` (Mac) or `Ctrl + F` (Windows/Linux) to find text
- Press `Cmd + H` (Mac) or `Ctrl + H` (Windows/Linux) to find and replace

#### Code Folding
- Click the small arrow next to function names to collapse/expand code sections
- Makes it easier to navigate large files

### Advanced Design Patterns

#### Creating Design Systems
1. **Open the chart file**: `src/components/BarStackHorizontal.js`
2. **Find the design tokens**: Look for color variables, spacing, and typography
3. **Implement your system**: Add consistent design tokens for colors, spacing, and fonts
4. **Apply systematically**: Update all components to use your design system

#### Building Interactive Components
1. **Explore interaction patterns**: Look at hover states, focus states, and animations
2. **Enhance accessibility**: Add keyboard navigation and screen reader support
3. **Create micro-interactions**: Implement smooth transitions and feedback

#### Responsive Design Implementation
1. **Find responsive breakpoints**: Look for media queries and flexible layouts
2. **Test different screen sizes**: Ensure your design works on mobile, tablet, and desktop
3. **Optimize for touch**: Add touch-friendly interactions for mobile devices

### Pro Tips for Using Cursor

1. **Use the terminal**: Press `Cmd + J` (Mac) or `Ctrl + J` (Windows/Linux) to open/close the terminal
2. **Split the editor**: Drag files to create side-by-side editing
3. **Use the file explorer**: Right-click files for more options
4. **Check the status bar**: Shows file type, line numbers, and other info
5. **Use keyboard shortcuts**: Learn common shortcuts to work faster

### What to Do If Something Goes Wrong

1. **Check the terminal**: Look for red error messages
2. **Make sure you saved**: Press `Cmd + S` (Mac) or `Ctrl + S` (Windows/Linux) - Cursor doesn't autosave!
3. **Undo changes**: Press `Cmd + Z` (Mac) or `Ctrl + Z` (Windows/Linux)
4. **Revert to original**: Copy the original code back
5. **Restart the server**: Press `Ctrl + C` in terminal, then `npm start`
6. **Check the browser console**: Right-click → Inspect → Console for errors

### You're Ready to Code!

Now you know how to:
- Open and edit files in Cursor
- Make changes to colors, sizes, and data
- Save files and see changes instantly
- Use Cursor's helpful features
- Troubleshoot common issues

**Start experimenting! Try changing the colors, then the size, then add your own customizations. The more you play around, the more you'll learn!**

## How to Interact with the Chart

- **Hover** over any colored segment to see temperature details
- **Click** on segments to see data information
- The **legend** at the top shows which color represents which city
- The chart automatically updates when you make changes in Cursor

## Project Structure

```
data-viz-sdk/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/
│   │   └── BarStackHorizontal.js  # The main chart component
│   ├── App.js              # Main app component
│   ├── index.js            # Entry point
│   └── index.css           # Styles
├── package.json            # Project dependencies
└── README.md              # This file
```

## Troubleshooting

### "npm not found" error
- You need to install Node.js first
- Go to [nodejs.org](https://nodejs.org) and download the LTS version
- Install it, then restart Cursor and try again

### "Port 3000 is already in use" error
- Close other applications that might be using port 3000
- Or press `Ctrl + C` in the terminal and run `npm start` again

### Chart not showing up
- Make sure you saved all files after making changes
- Check the browser console for errors (right-click → Inspect → Console)
- Try refreshing the browser page

### Changes not appearing
- Make sure you saved the file (`Cmd + S` or `Ctrl + S`)
- The browser should automatically refresh
- If not, manually refresh the browser page

## Expanding Your Design Skills

Once you're comfortable with this project, you can:

1. **Create custom design systems** with consistent tokens and components
2. **Build interactive prototypes** with advanced animations and micro-interactions
3. **Implement accessibility features** like keyboard navigation and screen reader support
4. **Design responsive layouts** that work across all device sizes
5. **Integrate with design tools** like Figma tokens and design systems

## Need Help?

- Check the browser console for error messages
- Make sure all files are saved
- Try restarting the development server (`Ctrl + C` then `npm start`)
- The chart should work immediately after following the setup steps

## You're Ready to Design with Code!

You now have a working data visualization project that you can customize with your design expertise! Try implementing your design ideas through code, and see how your visual concepts come to life in real-time. This is the foundation for bringing your design skills into the world of interactive data visualization.