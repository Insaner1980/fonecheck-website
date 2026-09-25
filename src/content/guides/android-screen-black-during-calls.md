---
title: "Android screen goes black during calls: normal behavior or a problem?"
description: "A screen that goes dark at your ear is working as expected. The useful question is whether it returns reliably when the phone leaves your face."
category: Sensors
published: 2026-09-22
updated: 2026-09-24
order: 6
illustration: phone
---

A screen that goes dark while the phone is at your ear and comes back when you move it away is behaving as expected. The useful question is what happens when the phone leaves your face: does the display return reliably, stay black, or go dark even when nothing is near it?

[Samsung's call-screen guidance](https://www.samsung.com/us/support/troubleshoot/TSG10004936/) explains that blanking the display at your ear helps prevent accidental touches. While the screen is dark, notice whether the conversation continues. If the call carries on normally, the phone itself has not necessarily switched off.

## Use one call to watch the whole sequence

Arrange a short call with someone who can end it from their side if you lose access to the controls. Do not use an emergency number for testing.

Use the handset at your ear for this comparison. [Samsung's proximity guidance](https://www.samsung.com/ae/support/mobile-devices/the-proximity-sensor-is-not-working-properly/) says Galaxy proximity behavior differs with speakerphone or Bluetooth audio. That is a Galaxy-specific instruction, not a rule for every Android calling app. If you depend on a hearing device or another accessory, keep using it and note the audio route instead of disconnecting something you need.

1. Begin with the phone away from your face and the call screen visible.
2. Bring it to your ear normally, then move it away without pressing the power button.
3. Repeat once or twice during the same call and note whether the display returns every time, only sometimes or not at all.

If the screen remains dark, let the other person end the call and see what appears afterward. Avoid repeatedly pressing the power button during the call. Android's [Power button ends call setting](https://support.google.com/accessibility/android/answer/6151849?hl=en) can make a wake-up attempt end the call instead.

There is no universal delay in seconds that every phone must meet. What matters here is whether the controls return consistently when the phone is moved away.

If the display also stays black on the lock screen, Home screen or in unrelated apps, treat that as a broader symptom. This call test is only about what happens around a call. If the screen responds inconsistently to touch when it is visible, [test the touch area separately](/guides/android-touchscreen-unresponsive-areas/).

## If the display does not return

Look at the front surface and the area your model uses for proximity sensing. Samsung lists cases, stickers and protective films as possible obstructions and recommends cleaning the front with a soft cloth. Sensor placement varies between models, so covering a guessed corner is not a reliable test.

Remove an obstructing case and repeat the call. Before changing a removable accessory over the sensing area, follow the manufacturer's instructions for that phone. Leave factory display layers in place. [Samsung's foldable care guidance](https://www.samsung.com/us/support/answer/ANS10001589/) advises owners not to remove the main screen protector themselves.

If the next call behaves normally, write down what changed. Keep the earlier failed calls in the record too; the [intermittent-problem guide](/guides/document-an-intermittent-android-problem/) explains how to keep both working and failed attempts.

For a persistent problem, restart the phone using its documented method, check for stable software updates and try the same call again before changing more settings. Samsung includes those steps in its call-screen and proximity guidance.

When only one calling app is affected, compare it with the phone's normal dialer using a similar grip and audio route. A preceding screen repair, protector change or drop is useful history to include when asking for help.

## What a sensor check can add

A manufacturer diagnostic or sensor viewer may offer a separate proximity test. Follow its own positioning instructions. Samsung documents such a test for supported Galaxy devices, although available diagnostics and menu paths vary.

Android's [position-sensor documentation](https://developer.android.com/develop/sensors-and-location/sensors/sensors_position) explains that some proximity sensors report distance while others report only near and far states. A reading that switches between two values can therefore be normal, and no single distance such as five centimeters applies to every phone.

The [Android sensor overview](https://developer.android.com/develop/sensors-and-location/sensors/sensors_overview) also describes device-dependent sensor availability. If a viewer does not expose the sensor in the way you expected, keep that as a separate observation rather than using it to decide what the call screen should do.

When reporting the problem, place the two observations side by side. For example: “The viewer changes between near and far, but the call screen stays black after the phone moves away.” Include whether the call itself continued and which app and audio route were in use.
