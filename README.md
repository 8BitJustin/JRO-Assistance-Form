# Project Title

JRO Assistance Form

## Purpose

This web app was built by myself, to assist both junior and senior level analysts with solving inquiries submitted by employees.

Example: Processor reaches out to analyst for help. Analyst needs Sr. level assistance, and to ensure the Sr. analyst has all the needed information from the start, the analyst uses this form to provide this information.

### Website

Current - https://jroassistanceform.netlify.app/

Previous - http://jroassistanceform.x10host.com/

### How It Works

The form contains 12 fields:

- Nine manual input:
  - Their Role
  - Stage of Loan
  - Ticket #
  - Contacts Name
  - Loan #
  - Est. Closing Date
  - Why is the ...
  - Specific Steps ...
  - My Question ...
- Two dropdowns:
  - Type of Contact
  - Channel
- One 'completion' box

And three buttons:

- Complete - Takes values of all 11 fields, and returns a block of neatly organized text
- Copy to Clipboard - Copies the text within the 'completion' box
- Clear - Does a hard refresh of the page, clearing/resetting all boxes

Once all fields have date input, the **Complete** button is pressed. This button/function takes the values from each field, and reorganizes them in a structured layout that makes it easier to read. This is then placed within the **Completed Request** box.

From here, the **Copy to Clipboard** button is pressed. This will copy the text to your clipboard, and a box will pop up stating the text is copied. This makes it easier to paste the text into a chat box or email for Senior leadership.

Lastly, the **Clear** button can be pressed to clear all fields. This button performs a hard reset of the page to basically reload it.

## Built With

- HTML
- CSS
- JavaScript
- Jquery
- Bootstrap 4
