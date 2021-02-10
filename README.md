# asu-design-system

## Steps to install
1. Fork the repository
2. Run the following in Terminal:  
`mkdir -p /usr/local/lib/node_modules`  
`cd /usr/local/lib/node_modules`  
`git clone https://github.com/<username>/asu-design-system.git @asu-design-system`  
3. Follow the README setup instructions for the ASU Design System: https://github.com/ASU/asu-unity-stack

## Steps to update
1. Run the following in Terminal:  
`npm -g install @asu-design-system/components-library@dev`  
`npm -g install @asu-design-system/bootstrap4-theme@dev`  
`npm -g install @asu-design-system/design-tokens@dev`  
`cd /usr/local/lib/node_modules/@asu-design-system`  
`git add .`  
`git commit -m "Updating ASU Design System from source"`  
`git push origin main`  
2. Submit a pull request into mgilardi/asu-design-system
