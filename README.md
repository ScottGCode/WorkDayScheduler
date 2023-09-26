# Work Day Scheduler

## Description

I wanted to create a simple way to plan out my work day using a daily planner to create a schedule. This will help manage time effectively. I wanted to display the current date and time at the top of the page to improve the user expereince. A typical work day is 8 hours (9am-5pm) so I created 8 time blocks. I made the time blocks dynamically color coded based on the time of day to indicate wether the event is in the past, present, or future. When a user clicks on a time block they can enter an event and that event will be saved and displayed when the page is refreshed using localStorage. During this project I learned and practiced BootStrap and jQuery and learned they are helpful tools to dynamically altering and creating html elements and css classes. I used dayjs to work with current date and time.

## Installation

- Deployed application link: https://scottgcode.github.io/WorkDayScheduler/
- GitHub link: https://github.com/ScottGCode/WorkDayScheduler

This application will install and operate directly in your browser. Simply deploy the link above. Please click on the github link to view the code. Open index.html to view the HTML. Open styles.css to view the CSS. Open the script.js file to view the JavaScript used for this application.

## Usage

Click the link above to view the deployed application. It will open the webpage up in your broswer then you will be able to view all the time blocks for the work day. You can enter data into a timeblock of your choice. When you are finished you can click on the save icon which is located on the right side of each timeblock to save your data entry. This will save your data using localStorage and make it available to you even if you navigate away from the web page. You will notice the timeblocks are color coded to reflect the current time of day which is displayed in the header using dayjs.

![Work Day Scheduler Screenshot](/assets/images/Screenshot%202023-09-22%20at%201.07.38%20PM.png)

## Credits

University of Utah Coding Bootcamp Instructors and Teaching Assistants. W3 Schools. MDN Web Docs. jQuery documentation. Bootstrap documentation. Youtube Tutorials.

jQuery tutorial:

- https://www.youtube.com/playlist?list=PL0eyrZgxdwhy7byLHsVkuhtRV_IpoJU7n

## License

MIT License

Copyright (c) [2023] [ScottRutherford]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
