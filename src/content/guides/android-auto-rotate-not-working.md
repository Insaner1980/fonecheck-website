---
title: "Auto-rotate is on, but the Android screen won't turn"
description: "Start with a screen you know can rotate. The Home screen and portrait-only apps can stay upright even when auto-rotate works everywhere else."
category: Sensors
published: 2026-09-22
updated: 2026-09-24
order: 9
illustration: phone
---

Start with a screen you already know can rotate. The Home screen and portrait-only apps can stay upright even when rotation works elsewhere, so either one can send the investigation in the wrong direction.

[Samsung's rotation guidance](https://www.samsung.com/us/support/troubleshoot/TSG10002023/) distinguishes apps that support both orientations from those that do not.

## Read the orientation control before changing it

On a Galaxy, the Quick Settings tile changes its label with its state. **Portrait** and **Landscape** are orientation locks. **Auto rotate** allows supported screens to follow the phone's position. If the tile shows a lock state, tap it to enable rotation, following [Samsung's control guide](https://www.samsung.com/us/support/answer/ANS10001977/). If taps on that part of the screen also fail in other apps, [test the touch area separately](/guides/android-touchscreen-unresponsive-areas/).

On other phones, search Settings for "auto-rotate." Google's [Android accessibility instructions](https://support.google.com/accessibility/android/answer/6006961?hl=en) place the setting under Display & touch, although the manufacturer's menu may differ.

An orientation lock can be intentional. Google advises TalkBack users to keep auto-rotate off because rotation can interrupt spoken feedback. If you rely on TalkBack or another accessibility aid, do not disable something you need just to make this comparison.

## Try the same movement in two apps

With Auto rotate enabled and an undamaged phone:

1. Open a screen that supports portrait and landscape. Use one you have seen rotate before, or check the app's help if you are unsure.
2. Hold the phone upright, then turn it sideways while keeping your fingers off the display. Samsung includes this no-touch condition in its troubleshooting procedure.
3. Turn the phone upright again and repeat in a second app screen that also supports rotation.

The comparison is simply upright versus sideways. Many screens do not rotate fully upside down, as Samsung notes, so that position is not needed here.

If the second app rotates and the first does not, focus on the first app's display settings, help and updates. Google's [app troubleshooting](https://support.google.com/android/answer/2668665?hl=en) likewise directs app-specific problems toward the developer when other apps work normally.

If neither app rotates, restart the phone using its normal restart method, check for an official system update and repeat the same two-app comparison. Keeping the test screens unchanged makes it easier to tell whether anything improved. If rotation fails only sometimes, [record both failed and working attempts](/guides/document-an-intermittent-android-problem/).

## If only the Home screen stays upright

Galaxy Home screen rotation has a separate setting. Samsung's control guide explains that the Home screen does not rotate by default and points to Home screen settings for landscape use. Check that option when apps rotate normally but the Home screen does not.

Do not apply that Galaxy path to every launcher or manufacturer. Use the settings for the Home screen you use.

If supported app screens still refuse to rotate after the setting, restart and update checks, describe the two apps and what each one did when asking the manufacturer for help. If rotation already works in the screens you need and the only remaining exception is designed to stay upright, there is nothing else to correct in this test.
