# React Interview Test - Frontend Developer

This project was completed as part of the **Frontend Developer Test** for **D-Talk**. The task involved building a dynamic, responsive movie display application with interactive features. Below is a summary of the work completed:

## Features Implemented

1. **Movie Cards Layout**: 
   - Displayed movies in responsive cards with bold titles, categories, and a YouTube-like gauge showing the like/dislike ratio.
   - The layout adjusts to screen size, with cards wrapping onto the next line when necessary.

2. **Interactive Elements**:
   - Added a **Delete Button** to remove individual movie cards.
   - Implemented a **Toggle Like/Dislike Button** to allow users to interact with the movie’s like/dislike status.

3. **Category Filter**:
   - Implemented a dynamic **Multiselect Category Filter**, which fetches categories from the movies.
   - Categories are removed from the filter if all the movies within them are deleted.

4. **Pagination**:
   - Added **Previous/Next Buttons** for pagination and the ability to select the number of movies shown per page (4, 8, or 12).

## Technologies Used

- **Next.js** for the framework, providing server-side rendering and routing.
- **Tailwind CSS** for utility-first styling to ensure a responsive and visually appealing design.
- **ShadCN** for UI components to streamline the design process.
- **Redux** for managing the application state.


## Key Considerations

- **Asynchronous Behavior**: Handled properly in the movie data management.
- **Responsive Design**: Ensured a smooth, mobile-first experience for users.
- **Attention to Detail**: Focused on making the application interactive and polished.

---

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/D-Talk/react-interview.git
   ```

2. Install dependencies:

    ```bash
    npm install
    ```
3. Run the development server:

    ```bash
    npm run dev
    ```
