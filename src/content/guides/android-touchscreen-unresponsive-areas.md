---
title: "How to test an Android touchscreen for unresponsive areas"
description: "A missed touch is hard to judge on its own. A simple drawing test shows whether the gap keeps appearing in the same part of the screen."
category: Screen
published: 2026-09-22
updated: 2026-09-24
order: 1
illustration: phone
---

A missed touch is hard to judge on its own. A gap that keeps appearing in the same physical part of the screen is much more useful, and a simple drawing test can help you map where it happens.

If the glass is cracked or the display is lifting away from the frame, stop using the phone and seek repair advice. Do not press on the damaged area to see whether the response improves. Google's [Pixel 11 series safety guide](https://support.google.com/pixelphone/answer/17033799?hl=en) warns against using a physically damaged device.

With an undamaged phone, unplug it and gently wipe the screen with a soft, dry cloth. Use bare, dry fingers. Moisture, accessories and charging equipment can affect touch response, as [Samsung's touchscreen guidance](https://www.samsung.com/us/support/troubleshoot/TSG10001974/) explains. If the problem seems connected to charging, note that condition, but do not reconnect damaged charging equipment just to reproduce it.

## Map the area with a drawing app

Open a blank page in a drawing or note-taking app you already trust. It needs to accept finger drawing, not only a stylus. Make a short mark in a part of the screen that normally works so you know the app is drawing rather than scrolling or selecting.

1. Draw a slow horizontal line across the available canvas without lifting your finger. Use light contact rather than extra pressure.
2. Move down slightly and draw another line. Continue in closely spaced rows through the area where touches have been going missing.
3. If a gap appears, save the pattern. On a fresh page, draw vertical strokes through the same area.
4. Cross the suspect spot in both directions, then try starting a short stroke inside it instead of only passing through.
5. Note where a line stops, whether it resumes beyond the gap and whether neighboring strokes look normal.

The pattern records how that app handled your touch. Android's [touch-event documentation](https://developer.android.com/reference/kotlin/android/view/MotionEvent) explains that events can be changed or dropped inside an app before reaching a screen element, so repeat a break before treating it as a stable pattern.

These steps assume single-finger drawing. [TalkBack uses touch gestures differently](https://support.google.com/accessibility/android/answer/6151827?hl=en), so a gesture that reads an item aloud instead of drawing does not test the area you intended. Keep any accessibility aid you rely on enabled. If your setup does not allow the drawing gesture, leave this check incomplete rather than changing an essential accessibility setting.

If you do not have a suitable drawing app, Google's [screen troubleshooting instructions](https://support.google.com/android/answer/7666942?hl=en) offer a narrower comparison. Drag slowly from the upper-left corner toward the lower-right without lifting your finger, taking about ten seconds, and watch the notification shade. If it releases while your finger is still down, repeat the movement and see whether it happens in the same place. This follows one path across the screen, not the whole surface.

## See whether the location stays fixed

If the drawing app supports rotation, turn the phone and repeat the pattern. Keep track of where the gap sits on the phone itself, not where it appears on the page after the layout changes. A problem that stays in the same physical location is a different observation from one that follows a particular button or control in the app.

Edges need a little care. With gesture navigation, [Android can use side swipes for Back and bottom-edge gestures for Home or app switching](https://developer.android.com/develop/ui/views/touch-and-input/gestures/gesturenav). Start slightly inside the canvas and move toward the edge. If system navigation takes over, that strip has not been tested. Areas hidden under a toolbar or outside the drawing surface remain untested too.

Next, [restart the phone](https://support.google.com/android/answer/7666942?hl=en) and repeat the same pattern in the same app. Then try another suitable drawing app. If the gap appears only in the first app, its input behavior and updates are worth checking. If it returns in both, you have a more specific symptom to show support without needing to guess which internal part is responsible.

A removable case is another useful comparison if it comes off safely. A user-added screen protector can affect touch behavior too, but remove one only when the manufacturer's instructions allow it and removal is safe. Leave factory display layers in place. For Galaxy foldables, [Samsung advises against removing the main screen protector yourself](https://www.samsung.com/us/support/answer/ANS10001589/) and directs replacement work to an authorized service center.

Change one condition at a time. If the problem does not appear during a later attempt, [record that working attempt alongside the earlier failure](/guides/document-an-intermittent-android-problem/) instead of replacing the history with an all-clear.

## Save a pattern someone else can understand

Keep the drawing with the phone model, app, orientation, charging state and any case or protector changes. A screenshot preserves the pattern itself. A short video from another device can show your finger continuing through an area where the line breaks. Use a blank page so private notes do not appear in the recording.

On supported Galaxy devices, a Touch screen check in [Samsung Members diagnostics](https://www.samsung.com/us/support/troubleshoot/TSG10001974/) can add another observation. Follow the prompts available on your model and keep that result beside the drawing rather than treating one result as a replacement for the other.

If the same physical location continues to miss touches, the saved pattern and the conditions around it are enough to give the manufacturer or a repair provider a useful starting point. If the phone is going in for service, [protect your data before the handover](/guides/protect-your-data-before-an-android-repair/).

An illustrative note, not a result from a tested phone, could read:

> With the phone upright and unplugged, horizontal strokes break in a narrow band above the charging port. Vertical strokes stop in the same band. The behavior repeats after a restart in two drawing apps. The case is off; the screen protector is still fitted.
