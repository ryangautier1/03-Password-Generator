# 03-Password-Generator

Application that generates a random password based on user-selected criteria

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Functionality

```
Upon the generate password button being clicked, a window will pop up prompting the
user for the number of characters they would like in their password. If the user inputs
a number that is not between 8 and 128, or if the user inputs characters other than 
numbers, the application will notify the user that their input was not valid and ask 
them to try again. If the user hits cancel at this stage, the application will end. After receiving a valid input, the application will ask the user what types of characters they
would like to include in their password. If the user does not make at least one selection,
they will be prompted to make their selections again. After receiving valid user input, the
randomly generated password is displayed on the screen.
```

## Screenshot

![Screenshot of website](https://github.com/ryangautier1/03-Password-Generator/blob/master/Screenshot.png?raw=true)

The html and css files for this application were provided by to me by Trilogy Education Services
