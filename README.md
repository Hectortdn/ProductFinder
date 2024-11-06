# Product Finder

The **Product Finder** is an app that allows users to list, add, edit, and delete products, both for men and women. With a simple and intuitive interface, users can easily manage available items, providing a fast and efficient experience for those who wish to organize and view products from different categories.

### Funcionalidades:
- **Login**: Log in to access restricted functionalities like adding, editing, or deleting products.
- **Logout**: Log out to end the user session and prevent further administrative actions.
- **List Products**: View all available products, both male and female.
- **Add Products**: Add new products to the product list.
- **Edit Products**: Update the information of existing products, such as name, description, price, and discount.
- **Delete Products**: Remove products from the list when they are no longer needed.
- **View Product Details**: View detailed information about a product, including:
  - Name
  - Description
  - Price
  - Discount applied


## Get started

1. Install dependencies

   ```bash
   npm install
   ```
   or
     ```bash
   yarn install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

3. Fix dependencies if necessary

   ```bash
    npx expo install --fix
   ```
   
## Credenciais de Acesso

   - **username**: emilys
   - **password**: emilyspass

## Technologies Used

   This project was developed using the following technologies and libraries:

   - **Expo**: Was used to develop and run the app with React Native, providing agility and cross-platform support.
   - **Expo Router**: Was used to manage navigation between screens, with both tab and stack navigation.
   - **React Query (TanStack Query)**: It was responsible for managing API calls, caching data, and optimizing loading.
   - **Axios**: Was used to make HTTP requests to the API, allowing for easy addition, editing, and deletion of products.
   - **Zustand**: Was used for global state management, storing user data and access tokens after login.
   - **React Hook Form**: Was used to efficiently manage and validate the application's forms.
   - **Restyle**: Was used to create the app's theme and custom components, maintaining visual consistency.


  **Obs**: 
  - Restyle was chosen for styling because it offers greater flexibility in creating reusable themes and styles, provides TypeScript support to prevent errors and ensure safer, more reliable code, and helps maintain design consistency throughout the application. Additionally, it allows me to create custom components that automatically follow the defined theme, further simplifying the maintenance and scalability of the project.

  - A custom icon library was developed for the app, allowing only the icons actually used within the application to be loaded. This ensures 100% fidelity to the design layout and helps optimize performance by minimizing unnecessary assets.
