# Troubleshooting Guide

## Common Issues and Solutions

### "npm not found" Error
**Problem**: Terminal says "npm: command not found"
**Solution**: 
1. Install Node.js from [nodejs.org](https://nodejs.org)
2. Download the "LTS" version (big green button)
3. Run the installer
4. Restart Cursor and try again

### Can't Find the Terminal
**Problem**: You don't see a terminal at the bottom of Cursor
**Solution**:
1. **Method 1**: Press `Cmd + J` (Mac) or `Ctrl + J` (Windows/Linux)
2. **Method 2**: Go to the top menu → Terminal → New Terminal
3. **Method 3**: Look for a "Terminal" tab at the bottom edge of the window
4. **Method 4**: Right-click in the bottom area and select "Terminal"
5. The terminal should appear at the bottom of your Cursor window

### Terminal Won't Accept Commands
**Problem**: You can see the terminal but can't type in it
**Solution**:
1. Click inside the terminal area to make sure it's active
2. Look for a blinking cursor (|) - this means you can type
3. If you see a `$` symbol, that's where you type commands
4. Make sure you're not in a different panel (click the terminal area)

### "Port 3000 is already in use" Error
**Problem**: Terminal shows "Something is already running on port 3000"
**Solution**:
1. Press `Ctrl + C` in the terminal to stop the current process
2. Run `npm start` again
3. Or close other applications that might be using port 3000

### "Module not found" Errors
**Problem**: Red error messages about missing modules
**Solution**:
1. Make sure you're in the correct folder in Cursor
2. Run `npm install` in the terminal
3. Wait for installation to complete
4. Run `npm start` again

### Chart Not Showing Up
**Problem**: Browser opens but chart is blank or missing
**Solution**:
1. Check the browser console for errors (right-click → Inspect → Console)
2. Make sure all files are saved in Cursor
3. Try refreshing the browser page
4. Check that the terminal shows "Compiled successfully!"

### Changes Not Appearing
**Problem**: You make changes but don't see them in the browser
**Solution**:
1. **Save the file**: Press `Cmd + S` (Mac) or `Ctrl + S` (Windows/Linux) - **Cursor doesn't autosave by default!**
2. The browser should automatically refresh after saving
3. If not, manually refresh the browser page
4. Check the terminal for any error messages
5. Make sure you're editing the correct file

### "Syntax Error" Messages
**Problem**: Red error messages about syntax
**Solution**:
1. Make sure you're editing the correct file
2. Check that you didn't accidentally delete any brackets or semicolons
3. Try copying the original code again
4. Save the file and check if the error disappears

### Browser Won't Open Automatically
**Problem**: Terminal says "Local: http://localhost:3000" but browser doesn't open
**Solution**:
1. Manually open your web browser
2. Go to `http://localhost:3000`
3. The chart should appear

### "Permission Denied" Error
**Problem**: Terminal shows permission errors
**Solution**:
1. Make sure you have write permissions to the folder
2. Try running the terminal as administrator (Windows) or with sudo (Mac/Linux)
3. Check that the folder isn't read-only

## Still Having Problems?

1. **Check the terminal output** - Look for any red error messages
2. **Make sure you saved your changes** - Press `Cmd + S` (Mac) or `Ctrl + S` (Windows/Linux)
3. **Check the browser console** - Right-click on the page → Inspect → Console
4. **Restart everything**:
   - Close Cursor
   - Close the terminal
   - Reopen Cursor
   - Run `npm install` again
   - Run `npm start` again

## Getting Help

If you're still stuck:
1. Take a screenshot of the error message
2. Note what step you were on when the error occurred
3. Check that you followed all the setup steps exactly

## Success Checklist

Your project is working correctly when:
- Terminal shows "Compiled successfully!"
- Browser opens to `http://localhost:3000`
- You see the temperature chart with purple bars
- You can hover over the chart and see tooltips
- You can click on chart segments
- Changes you make in Cursor appear in the browser

**If all these are working, congratulations! You've successfully set up your data visualization project!** 