temperature = float(input("Enter the current temperature: "))
while temperature > 102.5:
    print("Temperature is too high! Turning down the thermostat...")
    print("Waiting for 5 minutes...")
    temperature = float(input("Enter the new temperature: "))

print("Temperature is acceptable. Technician can check again in 15 minutes.") 