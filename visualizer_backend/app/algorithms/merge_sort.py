def merge_sort_steps(arr):
    steps = []
    temp = arr.copy()

    def merge_sort(a, l, r):
        if l >= r:
            return

        mid = (l + r) // 2
        merge_sort(a, l, mid)
        merge_sort(a, mid + 1, r)
        merge(a, l, mid, r)

    def merge(a, l, mid, r):
        left = a[l:mid + 1]
        right = a[mid + 1:r + 1]

        i = j = 0
        k = l

        while i < len(left) and j < len(right):

            steps.append({
                "array": a.copy(),
                "comparing": [k],
                "swapping": False,
                "description": f"Comparing {left[i]} and {right[j]}"
            })

            if left[i] <= right[j]:
                a[k] = left[i]
                i += 1
            else:
                a[k] = right[j]
                j += 1

            steps.append({
                "array": a.copy(),
                "comparing": [k],
                "swapping": True,
                "description": "Merging step"
            })

            k += 1

        while i < len(left):
            a[k] = left[i]
            i += 1
            k += 1

        while j < len(right):
            a[k] = right[j]
            j += 1
            k += 1

        steps.append({
            "array": a.copy(),
            "comparing": [],
            "swapping": False,
            "description": "Merge complete"
        })

    merge_sort(temp, 0, len(temp) - 1)
    return steps