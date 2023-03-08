# Built-In / Inherent Events
These are events that are tied/a part of elements within our HTML
- Forms
- Buttons
- a / Anchor

# Forms
- ```<form>``` groups input fields together
- ```onsubmit``` will gather data within the input field and pass it on
- Methods:
    - Types: (CRUD)
        - POST (Create)
        - GET (Read)
        - PUT (Update)
        - DELETE (Delete)
    - Part of HTTP structure in how we pass data (Will learn about in Unit 5 & 6)
- When a form is submitted, it automatically refreshes our browser.
        
## Some Attributes
- ```for``` helps tie labels with the input fields
- ```autocomplete``` allows us to show previous inputs that we might have had in past forms. Governs and depends on the browsers autocomplete feature.
- ```type``` notes what type of data to expect/we will receive
- ```name``` associates the name of the input (helps the label knw what input it is attached to)
- ```placeholder``` is a way for us to write a note to users as to what might be input/written into the input field. Helper/guide text.
- ```value``` is what is held within the input when submitted
    - This gets populated when a user types into it/interacts with it.

## Steps for DOM Manipulation
- **Create** the element.
- **Assign** any values to properties.
  - Provide text, class names, id names, etc.
- **Append** to a parent element.

*Note:* If an element already exists, we might only need to *assign* (reassignment) it a new value to update it.
