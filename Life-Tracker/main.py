def date():
  print("")
  date = input("what date is it?: ")
  f=open("dates.txt", "w")
  f.write(str(date))
  f.close()

def time():
  time = input("what time is it?: ")
  f=open("time.txt", "w")
  f.write(str(time))
  f.close()

def meals():
  print("We recommend eating 3 meals each day and want to check in on you")
  meals = input("How many meals have you had today so far?: ")  
  print("")
  meals = int(meals)
  if meals < 3:
    print("Try to eat another meal today! We will be back to check in on you.")
  if meals == 3:
    print("That's great! You've had the suggested about of meals each day. Maintain healthy eating habits, stay hydrated and eat snacks if you want.")
  if meals == 4:
    print("You are pretty close to the suggested amount of meals a day! Stay hydrated and maintain good eating habits.")
  if meals > 4:
    print("You are a bit over the suggested 3 meals a day. That is okay though, we're here for you. Check out our resources for maintaining healthy eating habits. Stay hydrated and we will check in again soon!")
  f = open("meals.txt", "w")
  f.write(str(meals))
  f.close() 

def water():
  print("")
  print("We recommend drinking at least 8 glasses of water a day!")
  glasses = input("How many glasses have you drank today so far?: ")  
  print("")
  glasses = int(glasses)
  if glasses < 8:
    print("Try to drink more! We will be back to make sure you are hydrated.")
  f = open("water.txt", "w")
  f.write(str(glasses))
  f.close()  

def outside():
  print("")
  print("It is very important to get outside and get vitamin D from the sun!")
  haveyou = input("Have you gone outside yet today? (answer yes or no): ")
  haveyou = haveyou.lower()
  print("")

  if haveyou == "no":
    print("You should go outside, even if just for a few minutes. It can help clear your head and stretch your legs!")
  else:
    print("Great job! If you have time you, you should go out again")

  f = open("outdoor.txt", "w")
  f.write(str(haveyou))
  f.close()

def summary():
  f = open("dates.txt", "r")
  dateslist = f.read()
  print("dates: ", dateslist)
  f.close()

  f2= open("time.txt", "r")
  timelist = f2.read()
  print("times: ", timelist)
  f2.close()

  f3 = open("water.txt", "r")
  waterlist = f3.read()
  print("glasses of water drank: ", waterlist)
  f3.close()

  f5 = open("meals.txt", "r")
  mealslist = f5.read()
  print("meals eaten: ", mealslist)
  f5.close()

  f4 = open("outdoor.txt")
  outdoorlist = f4.read()
  print("gone outside? ", outdoorlist)
  f4.close()

  return dateslist, timelist, waterlist, outdoorlist

def main():
  print("We know tracking your health during virtual school can be hard. But don't worry, we're here to help!")
  date()
  time()
  print()
  meals()
  water()
  outside()
  print("~~~")
  print("Here is your daily summary:")
  print("")
  dlist, tlist, wlist, olist=summary()
  print("")
  print("Don't forget to take care of your body and mind in these difficult times.")
  print("Be sure to check out our additional resources to maintain healthy habits and to learn more about mental health!")
main()