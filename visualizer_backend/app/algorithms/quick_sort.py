def quick_sort_steps(arr):
    steps = []
    temp = arr.copy()

    def partition(a, low, high):
        pivot = a[high]
        i = low - 1

        for j in range(low, high):

            steps.append({
                "array": a.copy(),
                "comparing": [j, high],
                "swapping": False,
                "description": f"Comparing {a[j]} with pivot {pivot}"
            })

            if a[j] < pivot:
                i += 1
                a[i], a[j] = a[j], a[i]

                steps.append({
                    "array": a.copy(),
                    "comparing": [i, j],
                    "swapping": True,
                    "description": "Swapping elements"
                })

        a[i + 1], a[high] = a[high], a[i + 1]

        steps.append({
            "array": a.copy(),
            "comparing": [i + 1, high],
            "swapping": True,
            "description": "Placing pivot in correct position"
        })

        return i + 1

    def quick_sort(a, low, high):
        if low < high:
            pi = partition(a, low, high)
            quick_sort(a, low, pi - 1)
            quick_sort(a, pi + 1, high)

    quick_sort(temp, 0, len(temp) - 1)
    return steps