```mermaid
sequenceDiagram
    participant browser
    participant server

    browser-->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML Document (without notes list)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: SPA JavaScript file
    deactivate server
    Note over browser,server: On this step initian page loading is done. spa.js start

    browser-->>server: GET /exampleapp/data.json
    activate server
    server-->>browser: JSON Response with notes 
    deactivate server
    Note right of browser: On this step spa.js build and embed HTML with notes to initial page

```