# Custom Modal Aura Component
This is a custom Aura modal component that allows you to dynamically generate a modal in salesforce, it supports simple text modals like messages, and even form modals that take in input and need a way to 
record all the values of inputs.

### Helper Function

The helper function `createModal` in the helper folder simplifies the creation of modals. It takes three parameters:

```javascript
helper.createModal(title, bodyMeta, footerMeta)

title: A string containing the title of the modal.
bodyMeta: An array of objects describing the components to be included in the modal body.
footerMeta: An array of objects describing the buttons to be included in the modal footer.
```
The body meta object looks like so:
```javascript
componentName: The name of the component (e.g., "c:yourCustomComponent" or "lightning:input").
componentAttributes: Attributes of the component (e.g., {"attributeName": value, ...}).
size: An integer from 1 to 12 describing the size of one component on the modal body.
valueFieldName: The field name of the value if the component accepts input. (Default: "value")
Example bodyMeta object:
{
  componentName: "c:yourCustomComponent",
  componentAttributes: { attribute1: "value1", attribute2: "value2" },
  size: 6,
  valueFieldName: "fieldName"
}
```
The footer meta object looks like so:
```javascript
footerMeta: An array of objects describing the buttons to be included in the modal footer.
label: The label for the button.
onClick: The callback function to be executed when the button is clicked. It receives two arguments: modal and values.
Example footerMeta object:
{
  label: "Some Label",
  onClick: function(modal, values) {
    // Do stuff to modal or values
  }
}
```
