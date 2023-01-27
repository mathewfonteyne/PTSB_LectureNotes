# The Terminal

The Terminal is how we interact with our computer and it's directories (folders) and files.

It is a CLI: Command Line Interface, a text based interface to the computer.

We can type commands, manipulate files, execute programs, or open documents. More powerful and fast than a GUI.

(GUI is a Graphical User Interface using icons, menus, and windows for us to interact in a visual way.)

<hr />

## Terminal Commands

- Print Working Directory  
    - `pwd` 
    - Shows the name of the current directory, prints the full directory path.
- List Directory
    - `ls` 
    - Shows the content of the current directory, shows all of the folders and/or files at the current directory path.
- Make Directory
    - `mkdir`
    - Creates a new directory, A.K.A. makes a new folder.
- Touch or New Item
    - `touch fileName.fileType`
    - `ni fileName.fileType` 
    - Creates a new file at the current directory path.
- Change Directory
    - `cd` 
    - Moves into a different directory.
    - To move forward: `cd fileOrFolderName` 
    - To move backwards: `cd ..` 
- Clear
    - `clear` or `cls` 
    - Clears the terminal.

 <hr />

## Other Terminal Commands:

- Copy File
    - `cp` 
    - Copies a file, ex: `cp index.html copyIndex.html` 
- Move File
    - `mv` 
    - Moves a file, ex: `mv index.html ./newFolderPath` 
- Help
    - `help` 
    - Provides a lis of commands and/or opens the help menu.
- Remove Here
    - `rm -r` or `rmdir` 
    - Removes files/folders, warning: these cannot be recovered as files, permanently get deleted and not sent to the recycle bin.
    - `rm -r` removes a directory's contents.
    (all/any folders and files it contains)
    - `rmdir` removes an empty directory/folder.

<hr />

### Other Things to Note: 

- In the terminal a file path divides parent and child folders and files with a forward slash: /
- ex: Desktop/PTSB_Jan_2023/Lectures/Unit_1/terminal.md

    - Desktop
        - PTSB_Jan_2023
            - Lectures 
                - Unit_1
                    - terminal.md
- Using the tap key can help us finish a folder or file name we are typing out.

- We do need to type file/folder names exactly.

- How to stop the terminal from running:
    - Use `ctrl+c` or `cmd+c` and enter/return
    - stops the terminal from running something and/or exits what's running/ a menu appears in the terminal as `^C`

- On Mac `sudo` may need to be used before commands where we need to elevate from User to Admin privileges.
    - A password field will appear and your user password needs to be entered.