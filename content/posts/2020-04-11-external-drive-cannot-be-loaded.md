---
path: post/2020-04-11-external-drive-cannot-be-loaded
title: "External Drive Cannot Be Loaded on Mac"
date: 2020-04-11
hero: ../images/white-cat.jpg
tags: ["Mac"]
---

Today my external drive suddenly disconnected with my computer during normal usage. After that, the computer could not read the drive anymore, it showed 'unloaded'. Then I found an article [about this](https://www.jianshu.com/p/56d37a0002d7) and use command lines in terminal to fix it.

So the commands are:

```bash
# step1: show the drive's information, the name
diskutil list

# step2: use this line to mount the driver, the name `/dev/disk2` is found in prev step
sudo diskutil mount /dev/disk2

# step3: if 2nd doesn't works, then try step3 first and try step2 again
sudo fsck_hfs -fy /dev/disk2
```

Please check your drive's status after you tried step2 because after I tried step2 I got some sad info in terminal like: 

```bash
Volume on disk2 failed to mount; if it has a partitioning scheme, use "diskutil mountDisk"
If the volume is damaged, try the "readOnly" option
```

but my drive already showed on desktop.