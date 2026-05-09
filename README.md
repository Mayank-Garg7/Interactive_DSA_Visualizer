# 🧠 DSA Visualizer – Algorithm Learning Lab

A full-stack interactive **Data Structures & Algorithms visualizer** that helps users understand how sorting algorithms work step-by-step using real-time animations.

Built using:
- ⚛️ React (Vite + Tailwind CSS)
- 🚀 FastAPI (Python backend)
- 📊 Algorithm step-engine (custom implementation)

---

## ✨ Features

### 🎯 Core Features
- Step-by-step visualization of sorting algorithms
- Bubble Sort, Merge Sort, Quick Sort support
- Real-time animation of comparisons and swaps
- Step counter + progress tracking
- Algorithm selector (dropdown)

### 🎮 Controls System
- ▶️ Play / ⏸ Pause animation
- 🎚 Speed control slider
- 🔄 Step-by-step navigation
- 🚀 Start sorting button

### 📊 Educational Features
- Current operation display (comparison/swapping)
- Step counter (e.g., Step 5 of 24)
- Visual highlighting of active elements
- Big-O friendly structure (for teaching)

---

## 🏗️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)

### Backend
- FastAPI
- Python 3
- Custom sorting algorithm engine

---

## 📁 Project Structure

```

visualizer-frontend/
├── src/
│   ├── components/
│   │   ├── Visualizer.jsx
│   │   ├── Controls.jsx
│   │   ├── Bar.jsx
│   │   ├── StatsPanel.jsx
│   │   └── ActionDisplay.jsx
│   └── pages/

visualizer_backend/
├── app/
│   ├── api/routes/
│   │   └── sorting.py
│   └── algorithms/
│       ├── sorting.py
│       ├── merge_sort.py
│       └── quick_sort.py

````

---

## 🚀 How to Run the Project

### 1️⃣ Backend (FastAPI)

```bash
cd visualizer_backend
python -m venv venv
venv\Scripts\activate   # (Windows)
# source venv/bin/activate (Mac/Linux)

pip install fastapi uvicorn
uvicorn app.main:app --reload
````

Backend runs at:

```
http://127.0.0.1:8000
```

---

### 2️⃣ Frontend (React)

```bash
cd visualizer-frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

| Algorithm   | Endpoint       |
| ----------- | -------------- |
| Bubble Sort | `/sort/bubble` |
| Merge Sort  | `/sort/merge`  |
| Quick Sort  | `/sort/quick`  |

---

## 🧠 Learning Outcomes

This project demonstrates:

* Algorithm visualization techniques
* Step-based state management
* Full-stack API integration
* React component architecture
* Real-time UI updates
* Educational UX design for DSA concepts

---

## 📸 UI Preview

> Add screenshots here (recommended for GitHub)

---

## 🔥 Future Improvements

* Pathfinding visualizer (Dijkstra, BFS, DFS)
* Array generator (random + custom input)
* Sound effects for swaps
* Comparison counter (Big-O visualization)
* Export animation as GIF/video

---

## 👨‍💻 Author

[Mayank Garg](https://www.github.com/mayank-garg7)
Built by a Python + Frontend Developer focused on:

* DSA teaching tools
* Full-stack development
* Interactive learning systems

---

## ⭐ If you like this project

Give it a star ⭐ and feel free to fork it!

---

# 🐳 docker-compose.yml 

```yaml
version: "3.9"

services:

  backend:
    build: ./visualizer_backend
    ports:
      - "8000:8000"
    volumes:
      - ./visualizer_backend:/app
    command: uvicorn app.main:app --host 0.0.0.0 --reload

  frontend:
    build: ./visualizer-frontend
    ports:
      - "5173:5173"
    volumes:
      - ./visualizer-frontend:/app
    command: npm run dev
````

