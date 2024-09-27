conversion_factor = 0.6214
print(f"{'KPH':<10}{'MPH':<10}")
for kph in range(60, 131, 10):
    mph = kph * conversion_factor
    print(f"{kph:<10}{mph:<10.1f}")