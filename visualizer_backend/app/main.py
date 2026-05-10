from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import sorting

app = FastAPI(title="Visual Algorithm Lab")

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(sorting.router, prefix="/sort", tags=["Sorting"])