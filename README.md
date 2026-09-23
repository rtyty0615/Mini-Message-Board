# Mini-Message-Board

## A lightweight full-stack message board application built with Node.js, Express, and EJS following the MVC (Model-View-Controller) architecture.

## Features

Message Feed (/): Displays all submitted messages with usernames, timestamps, and detail links.

New Message Form (/new): Dedicated page allowing users to post new messages.

Dynamic Message Details (/message/:id): Route-parameterized detail view for individual messages by ID.

In-Memory Store: Shared data layer with auto-incrementing IDs and lookup helpers.

Modular MVC Architecture: Strict separation between routes, controllers, models, and views.

## Tech Stack

Runtime: Node.js

Framework: Express.js

View Engine: EJS

Architecture: MVC (Model-View-Controller)

## Project Structure

```text
Mini-Message-Board/
├── controllers/
│   └── messageController.js      # Request handlers and business logic
├── errors/
│   └── CustomNotFoundError.js   # Custom 404 Error class
├── models/
│   └── messages.js               # In-memory message store and data helpers
├── routes/
│   ├── indexRouter.js            # Main message list route
│   ├── newRouter.js              # Form display and submission route
│   └── messageRouter.js          # Individual message lookup route
├── views/
│   ├── index.ejs                 # Feed template with message listing
│   ├── new.ejs                   # Form template for new messages
│   ├── message.ejs               # Single message detail template
│   └── navbar.ejs                # Reusable navigation partial
├── public/
│   └── styles.css                # Static styles
├── app.js                        # Server entry point and middleware configuration
└── package.json
```
