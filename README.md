# asu-design-system
## [ASU Design System](https://unity.web.asu.edu) implementation for [ASU Salesforce Enterprise](https://github.com/ASU/asu-salesforce-metadata)

### Prerequisites
1. [Install Homebrew](https://brew.sh/)
2. Install npm:
`brew install node`

### Steps to install
1. Fork the repository
2. Create the directory for npm and clone the repository:  
```
# Use sudo on any commands that complain about permissions
mkdir -p /usr/local/lib/node_modules    # Skip this step if npm is already installed  
cd /usr/local/lib/node_modules  
git clone https://github.com/<username>/asu-design-system.git @asu-design-system  
cd @asu-design-system  
git remote add mgilardi https://github.com/mgilardi/asu-design-system.git
```
3. Follow the [README setup instructions](https://github.com/ASU/asu-unity-stack) for the ASU Design System

### Steps to update
1. Update your fork:  
```
cd /usr/local/lib/node_modules/@asu-design-system  
sudo git pull mgilardi main  
sudo git push origin main  
```
2. Update @asu-design-system and push to your fork:  
```
sudo npm -g install @asu-design-system/components-library@dev  
sudo npm -g install @asu-design-system/bootstrap4-theme@dev  
sudo npm -g install @asu-design-system/design-tokens@dev  
sudo git add .  
sudo git commit -m "Updating ASU Design System from source"  
sudo git push origin main  
```
2. Submit a pull request into mgilardi/asu-design-system
