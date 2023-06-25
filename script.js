const input = document.querySelector(".shpargalka-head-input");
const parent = document.querySelector(".shpargalka-body");
const data = [
  {
    id: 1,
    title:
      "Windows Form App – ում պատրաստել հաշվիչ (տարրական գործողության կատարելու, ստորակետով թվեր ընդունելու, նիշ առ նիշ ջնջելու հնարավորությամբ)",
    description: `from tkinter import *

    def draw_keys():
        symbols = [["C", "/", "*"],
                   ["7", "8", "9"],
                   ["4", "5", "6"],
                   ["1", "2", "3"]]
    
        for r in range(4):
            for c in range(3):
                btn = Button(app, width=4, he
    
    
    ight=2, font='Arial 20 bold', fg='black', text=symbols[r][c],
                             command=lambda r=r, c=c: toggle_keys(symbols[r][c]))
                btn.grid(row=r + 2, column=c, pady=2, padx=2)
    
        zero = Button(app, width=9, height=2, font='Arial 20 bold', fg='black', text="0", command=lambda: toggle_keys("0"))
        zero.grid(row=6, column=0, columnspan=2, pady=2, padx=2)
        dot = Button(app, width=4, height=2, font='Arial 20 bold', fg='black', text=".", command=lambda: toggle_keys("."))
        dot.grid(row=6, column=2, pady=2, padx=2)
    
        minus = Button(app, width=4, height=2, font='Arial 20 bold', fg='black', text="-", command=lambda: toggle_keys("-"))
        minus.grid(row=2, column=4, pady=2, padx=2)
        add = Button(app, width=4, height=5, font='Arial 20 bold', fg='black', text="+", command=lambda: toggle_keys("+"))
        add.grid(row=3, rowspan=2, column=4, pady=2, padx=2)
    
        enter = Button(app, width=4, height=5, font='Arial 20 bold', fg='black', text="=", command=lambda: toggle_keys("="))
        enter.grid(row=5, rowspan=2, column=4, pady=2, padx=2)
        clearAll = Button(app, width=19, height=2, font='Arial 20 bold', fg='black', text="Clear All", command=lambda: toggle_keys("A"))
        clearAll.grid(row=1, columnspan=5, pady=2, padx=2)
    
    
    def draw_calculator():
        global display
        display = Label(app, width=19, height=2, font='Arial 20 bold', bg="lightgray", fg='black')
        display.grid(row=0, columnspan=5, padx=2, pady=2)
        draw_keys()
    
    
    def toggle_keys(key):
        global display
    
        signs = ["+", "-", "*", "/", "."]
        result = display["text"]
        length = len(result)
        previous = result[length - 1] if length > 0 else {}
    
        if key in signs and length == 0:
            return
        if key == "A":
            result = ""
        elif key == "=":
            try:
                result = str(eval(result))
            except SyntaxError:
                result = result
        elif key == "C":
            result = result[0: length - 1]
        elif previous in signs and key in signs:
            result = result[0: length - 1] + key
        else:
            result += key
    
        display["text"] = result
    
    
    # Main App
    
    app = Tk()
    app.resizable(0, 0)
    app.title("Calculator")
    app.config(pady=5, padx=5)
    
    display = None
    draw_calculator()
    
    app.mainloop()
    
    `,
  },
  {
    id: 2,
    title: "Windows Form App – ում պատրաստել զարթութիչ օգտագործելով Timer",
    description: `from tkinter import *
    import datetime
    import time
    import winsound
    from threading import *
    
    root = Tk()
    root.geometry("400x200")
    
    def Threading():
        t1 = Thread(target=alarm)
        t1.start()
    
    def alarm():
        while True:
            set_alarm_time = f"{hour.get()}:{minute.get()}:{second.get()}"
            time.sleep(1)
            current_time = datetime.datetime.now().strftime("%H:%M:%S")
            print(current_time, set_alarm_time)
    
            if current_time == set_alarm_time:
                print("Time to Wake up")
                winsound.PlaySound("sound.wav", winsound.SND_ASYNC)
                break
    
    
    Label(root, text="Alarm Clock", font=("Helvetica 20 bold"), fg="red").pack(pady=10)
    Label(root, text="Set Time", font=("Helvetica 15 bold")).pack()
    
    frame = Frame(root)
    frame.pack()
    
    hour = StringVar(root)
    hours = ('00', '01', '02', '03', '04', '05', '06', '07',
             '08', '09', '10', '11', '12', '13', '14', '15',
             '16', '17', '18', '19', '20', '21', '22', '23', '24'
             )
    hour.set(hours[0])
    
    hrs = OptionMenu(frame, hour, *hours)
    hrs.pack(side=LEFT)
    
    minute = StringVar(root)
    minutes = ('00', '01', '02', '03', '04', '05', '06', '07',
               '08', '09', '10', '11', '12', '13', '14', '15',
               '16', '17', '18', '19', '20', '21', '22', '23',
               '24', '25', '26', '27', '28', '29', '30', '31',
               '32', '33', '34', '35', '36', '37', '38', '39',
               '40', '41', '42', '43', '44', '45', '46', '47',
               '48', '49', '50', '51', '52', '53', '54', '55',
               '56', '57', '58', '59', '60')
    minute.set(minutes[0])
    
    mins = OptionMenu(frame, minute, *minutes)
    mins.pack(side=LEFT)
    
    second = StringVar(root)
    seconds = ('00', '01', '02', '03', '04', '05', '06', '07',
               '08', '09', '10', '11', '12', '13', '14', '15',
               '16', '17', '18', '19', '20', '21', '22', '23',
               '24', '25', '26', '27', '28', '29', '30', '31',
               '32', '33', '34', '35', '36', '37', '38', '39',
               '40', '41', '42', '43', '44', '45', '46', '47',
               '48', '49', '50', '51', '52', '53', '54', '55',
               '56', '57', '58', '59', '60')
    second.set(seconds[0])
    
    secs = OptionMenu(frame, second, *seconds)
    secs.pack(side=LEFT)
    
    Button(root, text="Set Alarm", font=("Helvetica 15"), command=Threading).pack(pady=20)
    
    root.mainloop()
    `,
  },
  {
    id: 3,
    title:
      "Windows Form App – ում պատրաստել Registration Form առանց բազային կցվելու հնարավորության:",
    description: `from tkinter import *
    from tkinter import messagebox
    
    def register():
        name = nameEntry.get()
        sname = snameEntry.get()
        group = groupEntry.get()
        
        if name and sname and group:
            messagebox.showinfo("Registration Successful", "Thank you for registering!")
        else:
            messagebox.showerror("Error", "Please fill in all the fields.")
    
    app = Tk()
    app.resizable(0, 0)
    app.config(padx=5, pady=5)
    
    # Input field
    
    nameLabel = Label(app, text="Name", padx = 5, pady = 10, font="Arial 14 bold")
    snameLabel = Label(app, text="Surname", padx = 5, pady = 5, font="Arial 14 bold")
    groupLabel = Label(app, text="Group", padx = 5, pady = 5, font="Arial 14 bold")
    
    
    nameLabel.grid(column=1, row=1, padx=10, pady=10)
    snameLabel.grid(column=1, row=2, padx=10, pady=10)
    groupLabel.grid(column=1, row=3, padx=10, pady=10)
    
    nameEntry = Entry(app, bg='lightgray', font="Arial 14", width=10, fg="black")
    snameEntry = Entry(app, bg='lightgray', font="Arial 14", width=10, fg="black")
    groupEntry = Entry(app, bg='lightgray', font="Arial 14", width=10, fg="black")
    
    
    nameEntry.grid(column = 2, row = 1, padx=10, pady=10)
    snameEntry.grid(column = 2, row = 2, padx=10, pady=10)
    groupEntry.grid(column = 2, row = 3, padx=10, pady=10)
    
    startBtn = Button(app, text="Start", width=20, height=2, bg="lightgreen", font="Arial 12", command=register)
    
    startBtn.grid(column=1, columnspan=2, row=5, padx=10, pady=10)
    
    
    app.mainloop()
    `,
  },
  {
    id: 4,
    title:
      "Windows Form App – ում պատրաստել Registration Form բազային կցվելու հնարավորությամբ։",
    description: `from tkinter import *
    from tkinter import messagebox
    
    def register():
        name = nameEntry.get()
        sname = snameEntry.get()
        group = groupEntry.get()
        
        if name and sname and group:
            messagebox.showinfo("Registration Successful", "Thank you for registering!")
        else:
            messagebox.showerror("Error", "Please fill in all the fields.")
    
    app = Tk()
    app.resizable(0, 0)
    app.config(padx=5, pady=5)
    
    # Input field
    
    nameLabel = Label(app, text="Name", padx = 5, pady = 10, font="Arial 14 bold")
    snameLabel = Label(app, text="Surname", padx = 5, pady = 5, font="Arial 14 bold")
    groupLabel = Label(app, text="Group", padx = 5, pady = 5, font="Arial 14 bold")
    
    
    nameLabel.grid(column=1, row=1, padx=10, pady=10)
    snameLabel.grid(column=1, row=2, padx=10, pady=10)
    groupLabel.grid(column=1, row=3, padx=10, pady=10)
    
    nameEntry = Entry(app, bg='lightgray', font="Arial 14", width=10, fg="black")
    snameEntry = Entry(app, bg='lightgray', font="Arial 14", width=10, fg="black")
    groupEntry = Entry(app, bg='lightgray', font="Arial 14", width=10, fg="black")
    
    
    nameEntry.grid(column = 2, row = 1, padx=10, pady=10)
    snameEntry.grid(column = 2, row = 2, padx=10, pady=10)
    groupEntry.grid(column = 2, row = 3, padx=10, pady=10)
    
    startBtn = Button(app, text="Start", width=20, height=2, bg="lightgreen", font="Arial 12", command=register)
    
    startBtn.grid(column=1, columnspan=2, row=5, padx=10, pady=10)
    
    
    app.mainloop()
    `,
  },
  {
    id: 5,
    title: "Windows Form App – ում պատրաստել X & O խաղը",
    description: `import tkinter.messagebox
    from tkinter import *
    
    
    def end(event):
        app.destroy()
    
    
    def help(event):
        tkinter.messagebox.showinfo("About game",
                                    "F1 - Info \n" +
                                    "F12 - New Game \n" +
                                    "Esc - Exit game \n" +
                                    "Author - Arthur Mirzoyan \n" +
                                    "Group number - 019 \n"
                                    )
    
    
    def showInfo(winner):
        if winner == '':
            tkinter.messagebox.showinfo("Results", "It's a tie.")
        elif winner == 'X':
            tkinter.messagebox.showinfo("Results", "X is the winner.")
        else:
            tkinter.messagebox.showinfo("Results", "O is the winner.")
    
    
    def generateBoard(event):
        global board
        global symbol
        board = []
        symbol = 'X'
        for i in range(0, 3):
            for j in range(0, 3):
                btn = Button(app, width=10, height=5, font='Arial 20 bold', fg='white',
                             command=lambda i=i, j=j: onClick(i, j))
                btn.grid(row=i, column=j)
                board.append(btn)
    
    
    def checkWin():
        global winVariants
        winner = ''
        for i in range(0, 8):
            variant = winVariants[i]
            if board[variant[0]]['text'] == board[variant[1]]['text'] == board[variant[2]]['text'] == 'O':
                winner = '0'
                break
            elif board[variant[0]]['text'] == board[variant[1]]['text'] == board[variant[2]]['text'] == 'X':
                winner = 'X'
                break
        return winner
    
    
    def onClick(i, j):
        global symbol
        btn = board[i * 3 + j]
        if btn['text'] == '':
            btn['text'] = symbol
            btn['bg'] = 'red' if symbol == 'X' else 'lightblue'
            symbol = 'O' if symbol == 'X' else 'X'
    
            winner = checkWin()
            if (winner == '' and not freeSpaceLeft()) or winner != '':
                showInfo(winner)
    
    
    def freeSpaceLeft():
        for i in range(0, 9):
            if board[i]['text'] == '':
                return True
        return False
    
    
    winVariants = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    board = []
    symbol = 'X'
    
    # App
    app = Tk()
    app.resizable(0, 0)
    app.title('Tic-Tac-Toe')
    
    # Start
    generateBoard(0)
    
    # Functional Buttons
    app.bind("<Escape>", end)
    app.bind("<F1>", help)
    app.bind("<F12>", generateBoard)
    
    app.mainloop()
    `,
  },
  {
    id: 6,
    title:
      "Windows Form App – ում պատրաստել որև  է  ֆորմայից  ինֆորմացիան  print անելու ծրագիր",
    description: `# Import Required Library
    from tkinter import *
    import win32api
    from tkinter import filedialog
    
    # Create Tkinter Object
    root = Tk()
    
    # Set Title and geometry
    root.title('Print Hard Copies')
    root.geometry("200x200")
    
    
    # Print File Function
    def print_file():
        # Ask for file (Which you want to print)
        file_to_print = filedialog.askopenfilename(
            initialdir="/", title="Select file",
            filetypes=(("Text files", "*.txt"), ("all files", "*.*")))
    
        if file_to_print:
            # Print Hard Copy of File
            win32api.ShellExecute(0, "print", file_to_print, None, ".", 0)
    
    
    # Make Button
    Button(root, text="Print FIle", command=print_file).pack()
    
    # Execute Tkinter
    root.mainloop()
    `,
  },
  {
    id: 7,
    title: "Windows Form App – ում պատրաստել ստեղնաշար",
    description: `from tkinter import *
    import pyautogui
    
    root = Tk()
    
    e = Entry(root, width=200, border=7)
    e.grid(row=0, column=0, columnspan=15, padx=20, pady=20)
    
    def Button_click(alfabet):
        # e.delete(0, END)
        current = e.get()
        e.delete(0, END)
        e.insert(0, str(current) + str(alfabet))

        wave = Button(root, text='~', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
        Button_1 = Button(root, text='1', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
Button_2 = Button(root, text='2', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
Button_3 = Button(root, text='3', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
Button_4 = Button(root, text='4', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
Button_5 = Button(root, text='5', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
Button_6 = Button(root, text='6', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
Button_7 = Button(root, text='7', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
Button_8 = Button(root, text='8', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
Button_9 = Button(root, text='9', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
Button_0 = Button(root, text='0', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
Minus = Button(root, text='-', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
Button_is_equal= Button(root, text='=', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
Button_Backspace = Button(root, text='Backspace', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')

Tab_Button = Button(root, text='Tab  ', padx=55, pady=19, font=("Courier", 14), background='black', foreground='white')

Q = Button(root, text='Q', padx=20, pady=10, font=("Courier", 22),command=lambda: Button_click('Q'), background='black', foreground='white')
W = Button(root, text='W', padx=20, pady=10, font=("Courier", 22),command=lambda: Button_click('W'), background='black', foreground='white')
E = Button(root, text='E', padx=20, pady=10, font=("Courier", 22),command=lambda: Button_click('E'), background='black', foreground='white')
R = Button(root, text='R', padx=20, pady=10, font=("Courier", 22),command=lambda: Button_click('R'), background='black', foreground='white')
T = Button(root, text='T', padx=20, pady=10, font=("Courier", 22),command=lambda: Button_click('T'), background='black', foreground='white')
Y = Button(root, text='Y', padx=20, pady=10, font=("Courier", 22),command=lambda: Button_click('Y'), background='black', foreground='white')
U = Button(root, text='U', padx=20, pady=10, font=("Courier", 22),command=lambda: Button_click('U'), background='black', foreground='white')
I = Button(root, text='I', padx=20, pady=10, font=("Courier", 22),command=lambda: Button_click('I'), background='black', foreground='white')
O = Button(root, text='O', padx=20, pady=10, font=("Courier", 22),command=lambda: Button_click('O'), background='black', foreground='white')
P = Button(root, text='P', padx=20, pady=10, font=("Courier", 22),command=lambda: Button_click('P'), background='black', foreground='white')

right_bracket = Button(root, text='[', padx=20, pady=10, font=("Courier", 22),command=lambda: Button_click('['), background='black', foreground='white')

OR_line = Button(root, text='|', padx=88, pady=10, font=("Courier", 22),command=lambda: Button_click('|'), background='black', foreground='white')

left_bracket = Button(root, text=']', padx=20, pady=10, font=("Courier", 22),command=lambda: Button_click(']'), background='black', foreground='white')


Capslock = Button(root, text='Capslock', padx=34, pady=18, font=("Courier", 15), background='black', foreground='white')

A = Button(root, text='A', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
S = Button(root, text='S', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
D = Button(root, text='D', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
F = Button(root, text='F', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
G = Button(root, text='G', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
H = Button(root, text='H', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
J = Button(root, text='J', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
K = Button(root, text='K', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
L = Button(root, text='L', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')

colum = Button(root, text=';', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
coma_dot = Button(root, text='"', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')

Enter = Button(root, text='Enter', padx=71, pady=18, font=("Courier", 15), background='black', foreground='white')

Shift = Button(root, text='', padx=50, pady=18, font=("Courier", 15), background='black', foreground='white')
Shift2 = Button(root, text='Shift  ', padx=80, pady=18, font=("Courier", 15), background='black', foreground='white')


Z = Button(root, text='Z', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
X = Button(root, text='X', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
C = Button(root, text='C', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
V = Button(root, text='V', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
B = Button(root, text='B', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
N = Button(root, text='N', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
M = Button(root, text='M', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
coma = Button(root, text=',', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')
dot = Button(root, text='.', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')

Shift_2 = Button(root, text='Shift  ', padx=100, pady=18, font=("Courier", 15), background='black', foreground='white')
or_slash = Button(root, text='/', padx=20, pady=10, font=("Courier", 22), background='black', foreground='white')

Control = Button(root, text='Ctrl  ', padx=20, pady=8, font=("Courier", 24), background='black', foreground='white')

windows = Button(root, text='Win', padx=20, pady=12, font=("Courier", 22), background='black', foreground='white', command=lambda: pyautogui.press('win'))

Alt = Button(root, text=' Alt', padx=20, pady=12, font=("Courier", 22), background='black', foreground='white')

Space = Button(root, text='        Space          ', padx=20, pady=12, font=("Courier", 22), background='black', foreground='white')

AltGr = Button(root, text='AltGr', padx=20, pady=12, font=("Courier", 22), background='black', foreground='white')

windows_2 = Button(root, text='Win ', padx=18, pady=12, font=("Courier", 22), background='black', foreground='white', command=lambda: pyautogui.press('win'))

Ctrl_2 = Button(root, text='     Ctrl', padx=20, pady=12, font=("Courier", 22), background='black', foreground='white')


Fn = Button(root, text=' Fn ', padx=20, pady=12, font=("Courier", 22), background='black', foreground='white')

if A:
    print("A")

Button_1.grid(row=2, column=1)
Button_2.grid(row=2, column=2)
Button_3.grid(row=2, column=3)
Button_4.grid(row=2, column=4)
Button_5.grid(row=2, column=5)
Button_6.grid(row=2, column=6)
Button_7.grid(row=2, column=7)
Button_8.grid(row=2, column=8)
Button_9.grid(row=2, column=9)
Button_0.grid(row=2, column=10)
Minus.grid(row=2, column=11)
Button_is_equal.grid(row=2, column=12)
Button_Backspace.grid(row=2, column=13)

wave.grid(row=2, column=0)
Tab_Button.grid(row=3, column=0, columnspan=2)
#
Q.grid(row=3, column=1, columnspan=2)
W.grid(row=3, column=2, columnspan=2)
E.grid(row=3, column=3, columnspan=2)
R.grid(row=3, column=4, columnspan=2)
T.grid(row=3, column=5, columnspan=2)
Y.grid(row=3, column=6, columnspan=2)
U.grid(row=3, column=7, columnspan=2)
I.grid(row=3, column=8, columnspan=2)
O.grid(row=3, column=9, columnspan=2)
P.grid(row=3, column=10, columnspan=2)

right_bracket.grid(row=3, column=11, columnspan=2)
left_bracket.grid(row=3, column=10, columnspan=4)

OR_line.grid(row=3, column=13, columnspan=8)

Capslock.grid(row=4, columnspan=2)

A.grid(row=4, column=2)
S.grid(row=4, column=3)
D.grid(row=4, column=4)
F.grid(row=4, column=5)
G.grid(row=4, column=6)
H.grid(row=4, column=7)
J.grid(row=4, column=8)
K.grid(row=4, column=9)
L.grid(row=4, column=10)
colum.grid(row=4, column=11)
coma_dot.grid(row=4, column=12)
#
Enter.grid(row=4, column=13)


Shift.grid(row=5, column=0, columnspan=2)
Shift2.grid(row=5, column=0, columnspan=3)


Z.grid(row=5, column=2, columnspan=2)
X.grid(row=5, column=3, columnspan=2)
C.grid(row=5, column=4, columnspan=2)
V.grid(row=5, column=5, columnspan=2)
B.grid(row=5, column=6, columnspan=2)
N.grid(row=5, column=7, columnspan=2)
M.grid(row=5, column=8, columnspan=2)
coma.grid(row=5, column=9, columnspan=2)
dot.grid(row=5, column=10, columnspan=2)

Shift_2.grid(row=5, column=12, columnspan=2)
or_slash.grid(row=5, column=11, columnspan=2)

Control.grid(row=6, column=0, columnspan=2)

windows.grid(row=6, column=1, columnspan=2)

Alt.grid(row=6, column=1, columnspan=5)

Space.grid(row=6, column=1, columnspan=12)

AltGr.grid(row=6, column=5, columnspan=14)

windows_2.grid(row=6, column=8, columnspan=18)

Fn.grid(row=6, column=11, columnspan=22)

Ctrl_2.grid(row=6, column=13, columnspan=3)

root.mainloop()


    `,
  },
  {
    id: 8,
    title:
      "Windows Form App – ում պատրաստել մուտքի ռեգիստրացիոն պատուհան, գրանցվելու հնարավությամբ",
    description: `from tkinter import *
    from tkinter import messagebox
    
    def register():
        name = nameEntry.get()
        sname = snameEntry.get()
        group = groupEntry.get()
        
        if name and sname and group:
            messagebox.showinfo("Registration Successful", "Thank you for registering!")
        else:
            messagebox.showerror("Error", "Please fill in all the fields.")
    
    app = Tk()
    app.resizable(0, 0)
    app.config(padx=5, pady=5)
    
    # Input field
    
    nameLabel = Label(app, text="Name", padx = 5, pady = 10, font="Arial 14 bold")
    snameLabel = Label(app, text="Surname", padx = 5, pady = 5, font="Arial 14 bold")
    groupLabel = Label(app, text="Group", padx = 5, pady = 5, font="Arial 14 bold")
    
    
    nameLabel.grid(column=1, row=1, padx=10, pady=10)
    snameLabel.grid(column=1, row=2, padx=10, pady=10)
    groupLabel.grid(column=1, row=3, padx=10, pady=10)
    
    nameEntry = Entry(app, bg='lightgray', font="Arial 14", width=10, fg="black")
    snameEntry = Entry(app, bg='lightgray', font="Arial 14", width=10, fg="black")
    groupEntry = Entry(app, bg='lightgray', font="Arial 14", width=10, fg="black")
    
    
    nameEntry.grid(column = 2, row = 1, padx=10, pady=10)
    snameEntry.grid(column = 2, row = 2, padx=10, pady=10)
    groupEntry.grid(column = 2, row = 3, padx=10, pady=10)
    
    startBtn = Button(app, text="Start", width=20, height=2, bg="lightgreen", font="Arial 12", command=register)
    
    startBtn.grid(column=1, columnspan=2, row=5, padx=10, pady=10)
    
    
    app.mainloop()
    `,
  },
  {
    id: 10,
    title:
      "Windows Form App – ում պատրաստել որև է ֆորմայից ինֆորմացիան print – անելու ծրագիր։",
    description: `# Import Required Library
      from tkinter import *
      import win32api
      from tkinter import filedialog
      
      # Create Tkinter Object
      root = Tk()
      
      # Set Title and geometry
      root.title('Print Hard Copies')
      root.geometry("200x200")
      
      
      # Print File Function
      def print_file():
          # Ask for file (Which you want to print)
          file_to_print = filedialog.askopenfilename(
              initialdir="/", title="Select file",
              filetypes=(("Text files", "*.txt"), ("all files", "*.*")))
      
          if file_to_print:
              # Print Hard Copy of File
              win32api.ShellExecute(0, "print", file_to_print, None, ".", 0)
      
      
      # Make Button
      Button(root, text="Print FIle", command=print_file).pack()
      
      # Execute Tkinter
      root.mainloop()
      `,
  },
  {
    id: 11,
    title:
      "Windows Form App – ում պատրաստել ծրագիր, որը տրված 10 – ական տիվը կդարցնի երկուական",
    description: `import tkinter.messagebox
    from tkinter import *
    
    
    def decimal_to_binary(decimal):
        if decimal == 0:
            return "0"
    
        result = ""
        while decimal != 0:
            result += str(decimal % 2)
            decimal = decimal // 2
    
        return result[::-1]
    
    
    def convert():
        global inputBox, binaryLabel
    
        try:
            decimal = int(inputBox.get())
            binaryLabel["text"] = decimal_to_binary(decimal)
        except ValueError:
            tkinter.messagebox.showwarning("Attention", "Please check Your input.")
    
    
    app = Tk()
    app.title("Decimal To Binary")
    app.config(padx=15, pady=15)
    app.resizable(0, 0)
    
    decimalLabel = Label(app, text="Decimal", font="Arial 16")
    decimalLabel.grid(row=0, column=0, padx=15, pady=15)
    
    inputBox = Entry(app, font="Arial 16 bold")
    inputBox.grid(row=0, column=1, padx=15, pady=15)
    
    runBtn = Button(app, text="Convert", command=convert, font="Arial 16")
    runBtn.grid(row=1, column=0)
    
    binaryLabel = Label(app, font="Arial 16")
    binaryLabel.grid(row=1, column=1, padx=15, pady=15)
    
    app.mainloop()
    `,
  },
];

function draw(data) {
  data.forEach(({ title, description, id }) => {
    parent.innerHTML += `<div class="shpargalka-body-item">
        <h2>${title}</h2>
        <pre>${description}</pre>
    </div>`;
  });
}
function clearContent() {
  parent.innerHTML = "";
}

function search(value) {
  console.log(value);
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );
  clearContent();
  if (filteredData.length === 0) {
    parent.innerHTML = `<h1> ՉԿԱ, ԼԱՎ ՉԵՍ ՄԱՆ ԳԱԼԻ </h1>`;
  } else {
    draw(filteredData);
  }
}

input.addEventListener("input", () => {
  if (input.value.trim()) {
    search(input.value);
  } else {
    clearContent();
    parent.innerHTML = `<h1> Search your shpargalka </h1>`;
  }
});
