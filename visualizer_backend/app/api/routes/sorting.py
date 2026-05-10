from fastapi import APIRouter
from app.algorithms.sorting import bubble_sort_steps
from app.algorithms.merge_sort import merge_sort_steps
from app.algorithms.quick_sort import quick_sort_steps

router = APIRouter()

@router.post("/bubble")
def bubble(data: dict):
    return {"steps": bubble_sort_steps(data["array"])}

@router.post("/merge")
def merge(data: dict):
    return {"steps": merge_sort_steps(data["array"])}

@router.post("/quick")
def quick(data: dict):
    return {"steps": quick_sort_steps(data["array"])}