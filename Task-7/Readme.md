
# Command-1 : Initialize a Git repository
cd path/to/your/project  # Navigate to your project folder
git init  # Initializes a new Git repository

# Command-2 : Add a remote repository (GitHub)
git remote add origin https://github.com/Filename # Connects local repo to GitHub

# Command-3 : Add files and commit changes
git add .  # Stages all changes

# Command-4 : Commit with a message
git commit -m "Initial commit"  # Creates a commit with a message

# Optional : Rename the branch (if needed) // if you have issue at pushing the files 
git branch -M main  # Renames the current branch to main

# Command-5 : Push code to GitHub
git push -u origin main  # Pushes code to the remote repository

