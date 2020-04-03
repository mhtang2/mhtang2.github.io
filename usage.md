# **Very important** usage information

# Packet formatting
- **This must be correct, or the program may not work**
- Packet formatting using PACE 2019 format or HFT check examplepacket.pdf
- Ensure to include author of questions in < angled brackets > after each tossup and bonus. 
	- Even if there is no author, including a pair of empty brackets <> is recommended. 
- If you choose to include category data, add them in this format {Category, Subcategory} or {Category} after the < author data >

- Add question number followed by a period and a space before each tossup and bonus. 
	- e.g. "1. This author of..."
- Add "[10]" before each bonus part, and add "ANSWER: " before each answer to a bonus part.
- Make sure there are only two sections, with the tossup section preceding the bonus.

- During data processing, player names and team names must be consistent over rounds and packets, otherwise they will be treated as different players/teams 
	- e.g. "matty t" in round 1 will be counted as a different player than "matty tang" from round 2. 
- It's a good idea for moderators to agree on a naming convention (first name last initial?). To make it less error prone, the program will automatically ignore letter-casing and non-alphanumeric characters 
	- e.g. "UNI...lab_ a" will automatically register as the same team as "Uni Lab A".
	- alternatively, distribute the teams.txt files to all moderators so this isn't an issue

# Program files
**lisence.bin**, **config.ini**, and **teams.txt** need to be kept in the same folder as the program

# Configuration
**lisence.bin** links the program to _your_ computer. **Don't lose or edit it!** or your program will require another key

**config.ini** decides the point values of Powers, Correct buzzes, and Negs. It has three lines:
```
power=15
correct=10
neg=-5
```
Feel free to change the numbers but do not reorder the lines.

**teams.txt** is included so team data does not have to be retyped every round. Each line has comma separated data for one team:
```
teamName, player1, player2, player3
teamName2, player1, player2, player3
Uni Lab A, Dylan, Etha, Jonathan
```
You can share this file between moderators to make it easier