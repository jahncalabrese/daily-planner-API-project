# daily-planner-API-project# Work Day Scheduler

## Description

The Work Day Scheduler is a simple calendar application that allows users to save events for each hour of the workday. This application uses HTML, CSS, Bootstrap, jQuery, and Day.js to create a dynamic and interactive user interface. Users can enter events for each hour of the day and save them to local storage, ensuring that their schedule persists even after refreshing the page.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository to your local machine using the following command:

    ```bash
    git clone https://github.com/jahncalabrese/daily-planner-API-project.git
    ```

2. Navigate to the project directory:

    ```bash
    cd work-day-scheduler
    ```

3. Open `index.html` in your preferred web browser.

## Usage

- Open the `index.html` file in your web browser.
- The current date and time are displayed at the top of the page.
- Each hour of the workday (9AM to 5PM) has a corresponding time block.
- Enter your events or tasks in the text area for the appropriate time block.
- Click the save button (with the save icon) next to the text area to save your events to local storage.
- The time blocks are color-coded to indicate whether the time block is in the past, present, or future:
  - Gray for past
  - Red for present
  - Green for future

## Features

- Displays the current date and time.
- Allows users to enter and save events for each hour of the workday.
- Color-coded time blocks to indicate past, present, and future.
- Persisted data using local storage.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
