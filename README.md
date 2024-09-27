# Webcam Access Web App Using Flask and OpenCV
## Project Overview
This project is a simple web application built using Python, Flask, OpenCV, HTML, CSS, and JavaScript. The app accesses your laptop's webcam, streams the video, and displays it on the screen. It also includes interactivity through JavaScript, such as toggling the webcam view and hover effects.

## Features
* Webcam Video Streaming: Real-time video feed from your laptop's webcam.
* Interactive Toggle: Hide and show the webcam feed with a button click.
* Dynamic UI: Attractive design using CSS, with hover animations for a better user experience.
* Responsive Design: The layout adjusts well to different screen sizes.
* Real-Time Video Processing: The app captures video frames using OpenCV, encodes them in JPEG format, and sends them to the client using Flask.
## Technologies Used
* Python: The core language for building the web app.
* Flask: A lightweight web framework for handling HTTP requests and serving the app.
* OpenCV (cv2): Used to access and process the webcam stream.
* HTML & CSS: For structuring and styling the web page.
* JavaScript: For adding interactivity (toggle button and hover effects).
## Project Files
### 1. app.py (Python File)
* This file contains the main application logic using Flask and OpenCV.
* It initializes the Flask app, accesses the webcam, processes the video frames, and streams them to the client.
* **Routes:**
  * /: Serves the homepage with the video player.
  * /video: Provides the video feed by streaming frames in real-time.
### 2. index.html (HTML File)
* The structure of the web page is defined here, including:
  * Title, video display, toggle button, and footer.
  * Video is fetched dynamically from the /video route using the <img> tag.
### 3. styles.css (CSS File)
* Contains styles for the layout and design of the web page.
* Adds hover effects, shadow animations, and responsiveness.
### 4. script.js (JavaScript File)
* Handles interactivity:
  * Toggle the webcam feed's visibility.
* Adds animations to the page container on hover.
## How to Run the Project
### Prerequisites
* Python 3.x installed on your machine.
* Flask and OpenCV Python packages. Install them using pip:
  
  `pip install flask opencv-python`
### Steps to Run
1. Clone the repository or download the project files.
2. Navigate to the project directory.
3. Run the Flask application:

   `python webcamProject.py`
4. Open your web browser and go to `http://127.0.0.1:5000/`.
5. You will see the webcam feed on the screen with the option to toggle its visibility.
## Future Enhancements
1. Add a screenshot feature to capture frames from the webcam.
2. Implement filters (like grayscale or sepia) on the video stream.
3. Add a recording feature to save video clips.
