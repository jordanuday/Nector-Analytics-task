# Nector-Analytics-task

## Dynamic Tabs - A JavaScript Implementation

This code creates a web interface with a dynamic tab system, allowing you to open multiple tabs within a single browser window. Here's a breakdown of its features and functionalities:

**Features:**

* **Tab Creation:** You can add new tabs by clicking the "+" button or entering a name in the "Enter Tab Name" field and clicking "Search" (which functions as a "Create" button here).
* **Tab Closing:** Each tab has a small "×" button in the corner that allows you to close it.
* **Active Tabs:** Clicking on a tab makes it the active one, displaying its corresponding content in the main view.
* **URL Loading:** You can enter a URL in the "Enter URL" field and click "Search" to load it within the active tab.
* **Initial Active Tab:** By default, the first created tab becomes the active one.

**Functionalities:**

* The code utilizes JavaScript to dynamically create and manage tabs.
* It leverages HTML elements to represent the visual structure of the tabs and content area.
* When a new tab is created, a corresponding iframe element is generated to display the content within that tab.
* Clicking on a tab triggers JavaScript code that activates the tab and its corresponding iframe.
* Closing a tab removes both the visual tab element and its associated iframe.
* The code ensures that at least one tab remains active even when others are closed.

This is a basic implementation that provides a foundation for building a more advanced tabbed browsing experience. You can further customize this code to include features like tab dragging and reordering, tab history, and saving/loading tab sessions.
