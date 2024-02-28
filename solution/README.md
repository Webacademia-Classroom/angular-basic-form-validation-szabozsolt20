# Practices

## Setup the project
- Set the current directory as the workspace: `code ./ -r`
- Install dependencies: `npm i`
- Run the development server: `npm start`
- Open the product editor page in the browser: http://localhost:4200/customers/edit/2

## Tasks
- Open [customer.service.ts](src/app/service/customer.service.ts) 
- Add new method:
  - name: update
  - parameters: customer: Customer
  - return type: Observable<Customer>
  - body: return this.http.patch<Customer>(`${this.apiUrl}/${customer.id}`, customer);
- Add a new method:
  - name: create
  - parameters: customer: Customer
  - return type: Observable<Customer>
  - returns an HTTP POST request with the customer as the body to the apiUrl
- Add a new method:
  - name: remove
  - parameters: customer: Customer
  - return type: Observable<Customer>
  - it returns an HTTP DELETE request to the apiUrl with the id of the customer

- Open [customer-edit.component.ts](src/app/page/customer-edit/customer-edit.component.ts)
- Inject the Router
- Add a new method:
  - name: onSubmit
  - parameters: customer: Customer
  - it calls the update method of the customer service with the customer 
  and navigates back to the customer list

- Open [customer-edit.component.html](src/app/page/customer-edit/customer-edit.component.html)
- Add a new event binding for the onSubmit method of the form
- Add a new hidden input field for the customer id and bind it with the id of the customer
- Add a new submit button to save the form at the end of the form


## Testing
- `npm test`
- Testing individually: `npm run test:01`, `npm run test:02`

## Further helps

### Creating a new service method to update an entity
```typescript
update(user: User): Observable<User> {
  return this.http.patch<User>(`${this.apiUrl}/${user.id}`, user);
}
```

### Creating a method for handling the Angular ngSubmit event
```typescript
onSubmit(user: User) {
  this.userService.update(user).subscribe(
    () => this.router.navigate(['/users']),
  );
}
```

### Creating an event-binding for the ngSubmit event
```html
<form (ngSubmit)="onSubmit(user)">...</form>
```
