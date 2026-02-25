```mermaid
sequenceDiagram
    participant browser
    participant server
    participant data.json

    browser-->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML Document
    deactivate server
    Note over browser,server: Page render is in example_diagram file.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/note_new
    activate server
    Note right of browser: POST request with Form Data with text from input
    
    server-->>data.json: Write new line from request body to to data.json
    data.json-->>server: Response
    server-->>browser: 302 redirect to https://studies.cs.helsinki.fi/exampleapp/notes
    deactivate server
    Note left of server: Return redirect from new_note to notes, rerender notes page

    browser-->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML Document
    deactivate server
    Note over browser,server: Page rerender after redirect
```