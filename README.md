
# ChefGPT 🍽️ – AI-Powered Recipe Generator

ChefGPT is a simple React application that allows users to generate recipes based on ingredients they have on hand. It uses the Hugging Face API to fetch AI-generated recipes, making it a fun and educational tool for exploring food and React development.

---

## 🚀 Features

- ✅ Add ingredients one by one
- ✅ Dynamic ingredient list display
- ✅ "Get Recipe" button appears after 4+ ingredients
- ✅ Fetches recipe from Hugging Face API
- ✅ Displays the full recipe with ingredients and instructions

---

## 🧠 Technologies Used

- **React** – Frontend framework
- **Hugging Face Inference API** – For AI-generated recipe content
- **JavaScript (ES6+)**
- **CSS/Styling** – Basic styling for UI layout

---

## 🧪 Sample Working Flow

1. User types an ingredient into the input field.
2. Clicks **"Add Ingredient"** to include it in the list.
3. The ingredient is added to a visible list on the screen.
4. Once **4 or more ingredients** are added, the **"Get Recipe"** button becomes active.
5. Clicking **"Get Recipe"** sends a request to the Hugging Face API.
6. A complete AI-generated recipe is returned and displayed on the page.

---

## 📦 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chef-gpt.git
   cd chef-gpt
2. Install dependencies:
  ```
  npm install
  ```

3. Add your Hugging Face API key to a .env file:
  ```env
REACT_APP_HF_API_KEY=your_api_key_here
  ```
4. Start the development server:
  ```bash
  npm run dev
  ```
## What I Learned
State management in React using useState

Conditional rendering (e.g., enabling/disabling the "Get Recipe" button)

Handling form events and user input

Fetching data from external APIs (Hugging Face)

Component-based UI design
