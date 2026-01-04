# ⏱️ Time Converter

Need to convert hours and minutes into seconds? This simple web app does it fast. It’s a good example of how to use JavaScript for DOM updates, events, and basic math.

## ✨ Features

- **Dual Unit Conversion:** Add up hours and minutes, get the total in seconds.
- **Input Validation:** Forgot to fill in hours or minutes? The app lets you know right away.
- **Dynamic Styling:** Results get a fresh look—only when your input is valid.
- **Responsive Background:** A full-screen background image makes the UI pop.
- **Mathematical Accuracy:** Uses standard conversion (1 hour = 3600s, 1 minute = 60s) for spot-on results.

## 🛠️ Built With

- **HTML5:** Lays out the inputs, labels, and where you see the answer.
- **CSS3:** Handles the background, fonts (Google Fonts), and result box style.
- **Bootstrap 4:** Quick, responsive layouts and easy spacing.
- **Vanilla JavaScript:** Grabs your values, does the math, and shows errors if needed.

## 🚀 How It Works

Everything happens when you hit "Convert to seconds":

1. **Grab Inputs:** The script pulls your entries from the hours and minutes fields.
2. **Check Inputs:** 
   - No hours? You’ll see "Please Enter The Valid Number of Hours."
   - No minutes? "Please Enter The Valid Number of Minutes."
3. **Calculate:** 
   - Turns hours into seconds.
   - Turns minutes into seconds.
   - Adds them for the total.
4. **Show Result:** Clears old errors and pops the answer into a styled box.

## 📂 Project Structure

- `Time Converter.html`: The main layout—the inputs and buttons live here.
- `Time Converter.css`: All the visual stuff—background image, button styles, the look of the results.
- `Time Converter.js`: Handles the math and all the DOM work.
