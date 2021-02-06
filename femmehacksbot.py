def main():
    print("Hi there! Feel free to talk to me about any of these things:")
    print("1. Seeking help or connecting with teachers virtually")
    print("2. Staying engaged and motivated during virtual classes")
    print("3. Excessive screen time")
    print("4. Anything else you would like to talk about")
    print("5. Quit")
    print(" ")
    again = "yes"
    while again == "yes":
        print(" ")
        s = int(input("What are you having trouble with? "))
        if s == 1:
            print(" ")
            print('''Building new relationships online and reaching out to your teachers can definitely be
                    hard. Be sure to take advantage of any office hours your teachers may be offering.
                    Emailing is also an effective way to get to know your teachers, if you feel more
                    comfortable with nonverbal communication.

                    Participation in class, as well, can be a
                    great opportunity to interact with your teacher and show them that you are focused.
                    If you're having trouble asking for help in class, remember that other students may
                    also have the same question that you have! However, staying behind after class to
                    check in with your teacher individually is also valid.

                    Remember that you are not alone,and it is likely that your peers are experiencing similar struggles.''')
            print(" ")
            again = input("Is there anything else you'd like to talk about? (yes/no) ")              
        if s == 2:
            print(" ")
            print('''Virtual school is a very new and different experience, and it is okay if you are
                    struggling with that change! Staying focused in classes and meeting assignment
                    deadlines is much more difficult to manage now that your entire academic experience
                    revolves around your computer, and it is understandable if you are having trouble with
                    this.

                    You may find it helpful to remove any distractions from your workspace, such as a
                    cell phone. Making use of a planner or a calendar to keep track of assignments is also a
                    great way to hold yourself accountable! Keep in mind that you are not alone in this
                    experience and that your peers are all adjusting to a new form of learning.

                    Lack of motivation to learn is very valid given our current situation.''')
            print(" ")
            s = input("Is there anything else you'd like to talk about? (yes/no) ")
        if s == 3:
            print(" ")
            print('''It is completely understandable that you are having trouble adjusting to the increased
                    amount of screen time. It can be exhausting and straining for your eyes, and millions of
                    teenagers nationwide are feeling the same thing.

                    Although it is difficult to regulate
                    your screen time, it can be helpful to do assignments by hand when possible and to take
                    screen breaks between classes to rest your eyes.

                    Please remember to take care of yourself as needed, and to remember that
                    you are not alone in this struggle.''')
            print(" ")
            s = input("Is there anything else you'd like to talk about? (yes/no) ")
        if s == 4:
            print(" ")
            input("Feel free to use this space to vent about anything at all that is on your mind! ")
            print(" ")
            print("Thanks for sharing:) Feel free to check out the resources page for more support!")
            print(" ")
            again = input("Is there anything else you'd like to talk about? (yes/no) ")              
        if s == 5:
            again = "no"

main()


