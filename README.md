# class_refresh

A chrome extension that automatically refreshes a class page on 
MyUCLA and notifies you if an enrollment spot has been opened.

You can install this extension manually on your own by downloading
the source files and loading them into the chrome extensions page.
I don't currently plan on publishing this extension to the Chrome
Web Store because I don't want go through the hassle of trying to
figure out the publishing process and paying a signup fee.

### How Install and Use this Extension

##### Part 1: Loading the Extension onto Chrome 

1. Download the class_refresh.zip from [release v1.0](https://github.com/hanstxu/class_refresh/releases).

2. Unzip class_refresh.zip in a directory where you want to save
the extension.

3. Open up Google Chrome and go to your extensions page:
```
chrome://extensions/
```

4. Make sure that the **Developer mode** checkbox is checked at 
the upper right corner.

  ![Developer mode checkbox screenshot](https://raw.githubusercontent.com/hanstxu/class_refresh/master/screenshots/Part1Step4.PNG)


5. Click **Load unpacked extension...** and select the directory
that contains your extension (i.e. *class_refresh*).

  ![Load extension screenshot](https://raw.githubusercontent.com/hanstxu/class_refresh/master/screenshots/Part1Step5.PNG)
  
  ![Extension loaded screenshot](https://raw.githubusercontent.com/hanstxu/class_refresh/master/screenshots/Part1Finished.PNG)

##### Part 2: Using the Extension

1. Log in to your [MyUCLA](http://my.ucla.edu/) account.

2. Go to your class webpage. One way to find classes is through
the **Finding a Class and Enroll** feature of MyUCLA. You'll know
when you reach the class webpage when the URL begins with:
```
https://sa.ucla.edu/ro/ClassSearch/Results/ClassDetail...
```

  ![Find a Class and Enroll screenshot](https://raw.githubusercontent.com/hanstxu/class_refresh/master/screenshots/Part2Step2-1.PNG)
  ![Class webpage screenshot](https://raw.githubusercontent.com/hanstxu/class_refresh/master/screenshots/Part2Step2-2.PNG)

3. Click on the Class Refresh icon in the top right of Chrome to
open a popup.

  ![Extension popup screenshot](https://raw.githubusercontent.com/hanstxu/class_refresh/master/screenshots/Part2Step3.PNG?)

4. Click the **Refresh On** button. As the long as the tab with
the class webpage is still open, the class extension will continue
refreshing the class webpage every 5 seconds and notify you when
the class is open. You can stop this polling by clicking the
**Refresh Off** button.

  ![Notification screenshot](https://raw.githubusercontent.com/hanstxu/class_refresh/master/screenshots/Part2Finished.PNG)