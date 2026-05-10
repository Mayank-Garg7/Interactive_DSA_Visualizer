def linear_search_steps(arr, target):
    steps = []

    for i in range(len(arr)):
        steps.append({
            "array": arr.copy(),
            "comparing": [i],
            "found": False,
            "step": i + 1,
            "description": f"Step {i+1}: Checking index {i} value {arr[i]}"
        })

        if arr[i] == target:
            steps.append({
                "array": arr.copy(),
                "comparing": [i],
                "found": True,
                "step": i + 1,
                "description": f"Found {target} at index {i}"
            })
            return steps

    steps.append({
        "array": arr.copy(),
        "comparing": [],
        "found": False,
        "step": len(arr),
        "description": f"{target} not found in array"
    })

    return steps


def binary_search_steps(arr, target):
    steps = []

    low = 0
    high = len(arr) - 1
    step = 0

    while low <= high:
        step += 1
        mid = (low + high) // 2

        steps.append({
            "array": arr.copy(),
            "comparing": [low, mid, high],
            "found": False,
            "step": step,
            "description": f"Step {step}: low={low}, mid={mid}, high={high}, checking {arr[mid]}"
        })

        if arr[mid] == target:
            steps.append({
                "array": arr.copy(),
                "comparing": [mid],
                "found": True,
                "step": step,
                "description": f"Found {target} at index {mid}"
            })
            return steps

        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    steps.append({
        "array": arr.copy(),
        "comparing": [],
        "found": False,
        "step": step,
        "description": f"{target} not found"
    })

    return steps