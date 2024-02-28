# Practices

## Setup the project
- Set the current directory as the workspace: `code ./ -r`
- Install dependencies: `npm i`
- Run the development server: `npm start`
- Open the product page in the browser: http://localhost:4200/products
- We will only work on the product page.

## Tasks
- Open [ProductComponent HTML](src/app/page/product/product.component.html)
- Solve all todos in the file.

## Testing
- `npm test`

## Further helps

### The if-else statement
- The below example shows how to create an Angular if-else statement in the template.
- The "@else" statement is optional.
```html
@if (element.active) {
  <button class="btn btn-info">
    info
  </button>
} @else {
  inactive
}
```

### The for loop
- Creating an Angular for loop in the template.
- IMPORTANT! The track expression is mandatory.
```html
<tr>
  @for (item of collection; track $index) {
    <th>{{ item }}</th>
  } 
</tr>
```
