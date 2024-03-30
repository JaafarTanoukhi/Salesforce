# Custom Modal Aura Component

This is a custom modal Aura component designed to streamline the process of creating modals within Salesforce Lightning Experience. The component comes with a helper function located in the helper folder that simplifies the creation of modals.

## Installation

To use this custom modal Aura component, follow these steps:

1. Clone or download this repository.
2. Deploy the Aura component to your Salesforce org.
3. Utilize the provided helper function to create modals effortlessly.

## Usage

### Helper Function

The helper function `createModal` in the helper folder simplifies the creation of modals. It takes three parameters:

```javascript
helper.createModal(title, bodyMeta, footerMeta)

title: A string containing the title of the modal.
bodyMeta: An array of objects describing the components to be included in the modal body.
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
