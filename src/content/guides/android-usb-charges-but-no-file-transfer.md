---
title: "Android phone charges from a computer but won't transfer files"
description: "Charging only proves that power reaches the phone. File transfer also needs a data-capable cable, the right USB mode and a computer that sees the connection."
category: Connections
published: 2026-09-22
updated: 2026-09-24
order: 7
illustration: phone
---

Charging only proves that power is reaching the phone. File transfer also needs a data-capable cable, the right USB mode and a computer that recognizes the connection. [Google's USB file-transfer guide](https://support.google.com/android/answer/9064445?hl=en) treats those as separate parts of the setup.

Use a computer you trust and choose one small file on the phone that you can easily find again. The computer steps below cover Windows and Chromebook. Other operating systems need their own supported transfer method.

If the connector is wet, burned, corroded or otherwise damaged, stop before reconnecting it. [Google's USB-port safety instructions](https://support.google.com/pixelphone/answer/9280079?hl=en) advise against putting anything into the port and direct owners to support for visible damage.

## Set the USB connection to File Transfer

Follow the sequence in [Google's USB guide](https://support.google.com/android/answer/9064445?hl=en):

1. Unlock the phone and connect it to the computer with a compatible USB cable.
2. Open the phone's USB notification. Google calls it **Charging this device via USB**, although wording varies.
3. Under **Use USB for**, choose **File Transfer**. A Galaxy may call the option **Transferring files / Android Auto**.
4. If the phone asks whether to allow access to its data, approve only the connection you intended to make.

[Samsung's missing-folder instructions](https://www.samsung.com/ae/support/mobile-devices/what-to-do-if-your-samsung-galaxy-phone-folder-does-not-appear-on-pc-connection/) cover the Galaxy permission prompt and transfer setting. Windows can sometimes display the phone's name while its storage remains unavailable, so seeing a device entry is not yet the end of the test.

On Windows, open File Explorer and look for the phone in the navigation pane, as described in [Samsung's USB transfer procedure](https://www.samsung.com/us/support/answer/ANS10001478/). On a Chromebook, use the Files app. Copy one small, non-sensitive file to the computer and leave the original on the phone until you have checked the copy.

One security feature can deliberately produce the same charging-without-data behavior. On supported Pixels with Advanced Protection's [USB Protection](https://support.google.com/android/answer/16778864) enabled, a locked screen blocks new USB data connections while charging can continue. Unlock the phone before connecting. You do not need to disable the protection just to establish a normal unlocked connection.

## If the phone still has no visible folders

Check the USB mode on the phone once more. If the notification never appeared, or File Transfer made no difference, the next useful step is to separate the cable from the computer.

| Comparison | What the result tells you to check next |
|---|---|
| A known data-capable cable works with the same phone and computer | Keep that cable in use and stop treating the phone as the first suspect. |
| The phone transfers files on another trusted computer | Investigate USB recognition, ports and software on the original computer. |
| Another compatible Android phone also fails on the original computer | The computer side deserves attention before changing the affected phone. |
| The affected phone fails with known data cables on more than one trusted computer | Continue with the phone manufacturer's USB troubleshooting or support. |

Google's linked guide includes trying another cable and computer, restarting both devices and checking official phone software updates. Make one change per attempt so the comparison remains understandable.

For a Galaxy that still is not recognized, Samsung's missing-folder guide also points to the appropriate USB driver. Get any required driver through Samsung's official support route for the device rather than a generic driver-download site.

## If copying starts and then fails

A transfer that begins and stops is a narrower problem than a phone that never appears. Keep the exact error and watch whether the whole connection disappears or only one file fails. If the dropouts are irregular, [record what happened in each attempt](/guides/document-an-intermittent-android-problem/).

Try another small file in the same destination. If that copy succeeds, return to the original file and confirm that it opens normally on the phone before trying again. If the connection drops regardless of the file, go back to the cable and computer comparisons above. Do not bend the plug or hold it at an angle to keep contact.

When a copy finishes, open the copied file on the computer. A filename in File Explorer or Files is not enough if the file itself will not open. Use the computer's eject option where offered, wait for transfers to finish before unplugging, and keep the originals on the phone until the files you needed have been checked. If these copies are for a repair, [check the rest of the handover preparation](/guides/protect-your-data-before-an-android-repair/) too.
