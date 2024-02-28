# Practices

## Setup the project
- Set the current directory as the workspace: `code ./ -r`
- Install dependencies: `npm i`
- Run the development server: `npm start`
- Open the product editor page in the browser: http://localhost:4200/customers/edit/2

## Tasks
- Open [customer-edit.component.html](src/app/page/customer-edit/customer-edit.component.html)
- Add a template reference variable for the form:
  - name: customerForm
  - value: ngForm
- Add validation for the name, email, address andip_address fields in the form
- All of them have to be required and have a minimum length of 3
- If a field is invalid, a small element with the text-danger class has to be displayed with an error message of your choice
- Disable the submit button when the form is invalid


## Testing
- `npm test`

## Further helps

### Setting up a template reference variable for a form
```html
<form #userForm="ngForm">...</form>
```

### Setting up the pattern and the required validations for a field
```html
<input [(ngModel)]="user.name" name="name" required pattern=".{3,}"/>
```

### Adding a small element with an error message
```html
@if (userForm.controls['name'].invalid) {
  <small class="form-text text-danger">3 letters min</small>
}
```

### Disabling the submit button when the form is invalid
```html
<button type="submit" [disabled]="userForm.invalid">Submit</button>
```
