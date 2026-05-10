def bubble_sort_steps(arr):
    steps = []
    n = len(arr)
    temp_arr = list(arr)

    step_count = 0

    for i in range(n):
        for j in range(0, n - i - 1):

            # Compare step
            step_count += 1
            steps.append({
                "array": temp_arr.copy(),
                "comparing": [j, j + 1],
                "swapping": False,
                "step": step_count,
                "description": f"Step {step_count}: Comparing {temp_arr[j]} and {temp_arr[j+1]}"
            })

            if temp_arr[j] > temp_arr[j + 1]:
                temp_arr[j], temp_arr[j + 1] = temp_arr[j + 1], temp_arr[j]

                # Swap step
                step_count += 1
                steps.append({
                    "array": temp_arr.copy(),
                    "comparing": [j, j + 1],
                    "swapping": True,
                    "step": step_count,
                    "description": f"Step {step_count}: Swapping {temp_arr[j]} and {temp_arr[j+1]}"
                })

    return steps