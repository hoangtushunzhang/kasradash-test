# Kasradash Web React Test 

## How to Run the Project

1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   cd <folder-name>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open the Application**:
   Open your browser and navigate to `http://localhost:3000`.

## Assumptions and Shortcuts

- **Mock Data**: The project uses static mock data for the dashboard metrics. In a real-world scenario, this would be replaced with actual API calls.
- **Dark Mode**: The dark mode toggle is implemented using CSS classes. For a production environment, consider using a more robust theming solution.
- **Form Validation**: The form validation is handled using Zod, which is a simple and effective way to validate form inputs. However, for more complex forms, consider using a form library like Formik or React Hook Form.

## Tech and Pattern Choices

- **React/Next.js**: Chosen for its simplicity and ease of use in building single-page applications. Next.js provides server-side rendering capabilities, which can improve performance and SEO.
- **Shadcn UI**: Used for its pre-built components that are easy to customize and integrate into the project.
- **Zustand**: Selected for state management due to its simplicity and minimal boilerplate compared to other state management libraries like Redux.
- **Tailwind CSS**: Utilized for styling due to its utility-first approach, which allows for rapid UI development and easy customization.





