# asu-design-system
## [ASU Design System](https://unity.web.asu.edu) implementation for [ASU Salesforce Enterprise](https://github.com/ASU/asu-salesforce-metadata)

### Prerequisites
1. [Install Homebrew](https://brew.sh/)
2. Install npm:
`brew install node`

### Steps to install
1. Fork the repository
2. Create the directory for npm and clone the repository:  
`sudo mkdir -p /usr/local/lib/node_modules`  
`cd /usr/local/lib/node_modules`  
`git clone https://github.com/<username>/asu-design-system.git @asu-design-system`  
`cd @asu-design-system`  
`git remote add mgilardi https://github.com/mgilardi/asu-design-system.git`  
3. Follow the [README setup instructions](https://github.com/ASU/asu-unity-stack) for the ASU Design System

### Steps to update
1. Update your fork:  
`cd /usr/local/lib/node_modules/@asu-design-system`  
`git pull mgilardi main`  
`git push origin main`  
2. Update @asu-design-system and push to your fork:  
`sudo npm -g install @asu-design-system/components-library@dev`  
`sudo npm -g install @asu-design-system/bootstrap4-theme@dev`  
`sudo npm -g install @asu-design-system/design-tokens@dev`  
`git add .`  
`git commit -m "Updating ASU Design System from source"`  
`git push origin main`  
2. Submit a pull request into mgilardi/asu-design-system
