---
title: "Android microphone not working: how to narrow down the problem"
description: "Separate recording problems from call problems first. A phone that cannot record your voice needs a different check from one that fails only on calls."
category: Sound
published: 2026-09-22
updated: 2026-09-24
order: 2
illustration: phone
---

Start by separating recording problems from call problems. A phone that cannot capture your voice in a local recording needs a different first check from one that records clearly but leaves the person on a call hearing nothing.

Use these checks only with a dry, undamaged phone. If it has just been in water, stop testing and follow the manufacturer's instructions. [Google's Pixel water-damage guidance](https://support.google.com/pixelphone/answer/7533279?hl=en) starts with switching off the phone, drying the exterior and letting it dry at room temperature.

## Record the same phrase in two places

Find a quiet room and use a recorder already on the phone. If there is no recorder, make the Camera video sample and leave the voice-note comparison incomplete.

For built-in recording, turn Bluetooth off and unplug wired or USB audio accessories. Android's [audio-input documentation](https://developer.android.com/media/platform/sharing-audio-input) explains that an external microphone can become the active input. If you rely on an assistive device, keep it connected and note that the built-in input has not been isolated.

1. Record a short sentence at your normal speaking level, then stop and save the file.
2. Close the recorder. Make a short video in the usual Camera app and say the same sentence from a similar distance, keeping your fingers clear of the phone's openings.
3. Play both files and listen for missing speech, muffling, distortion or interruptions.

[Google uses this recorder-and-video comparison for Pixels](https://support.google.com/pixelphone/answer/14748050?hl=en). It gives you two recording tasks to compare. It is not a universal test of particular top or bottom microphones, and Android defines [different audio sources and processing for recording and voice communication](https://developer.android.com/reference/android/media/MediaRecorder.AudioSource).

Before deciding that a file is silent, check the player's mute control and [media volume](https://support.google.com/android/answer/9082609?hl=en). Play another file that you know contains speech. If playback itself is uncertain, listen to the test file through working headphones or on another device. Clear speech there shifts the next check toward playback rather than recording.

## If both recordings contain no speech

Check the affected app's microphone permission first. Open Settings > Apps > the app > Permissions > Microphone and allow access while using that trusted app, where offered. [Google's permission instructions](https://support.google.com/android/answer/9431959) describe this route, although labels vary. Record a new sample after changing the permission. The old file will not gain audio retroactively.

On supported phones running Android 12 or later, also look at Microphone access in Quick Settings or the privacy settings. This phone-wide control is separate from an individual app permission. Android's [privacy documentation](https://developer.android.com/training/permissions/explaining-access) explains that disabling it can leave an app recording silent audio even while its timer continues.

End active calls or meetings and stop other recordings before trying again. Android can [silence one app while another captures audio](https://developer.android.com/media/platform/sharing-audio-input). Leave accessibility services you rely on running.

If access is allowed and no competing session remains, restart the phone and make the same sample again. Preserve the exact outcome. A recording that never starts and a file that saves with no speech are different problems.

## If recordings are clear but calls or one app fail

Check the mute control inside the call or meeting and repeat without a headset when practical. [Google's call troubleshooting](https://support.google.com/pixelphone/answer/14748050?hl=en) includes mute, Bluetooth, app permissions and updates. Raising [call volume](https://support.google.com/android/answer/9082609?hl=en) changes what you hear through the phone; it does not control whether the other person receives your voice.

A browser call has an extra permission layer. In Chrome, open Settings > Site settings > Microphone and check whether the meeting website is blocked. [Chrome's microphone instructions](https://support.google.com/chrome/answer/2693767?co=GENIE.Platform%3DAndroid&hl=en) cover this separately from Android's permission for Chrome. Managed work or school settings may require an administrator.

For a live comparison, ask someone to tell you when they can hear you while you switch between handset and speakerphone. Do not use an emergency number for testing. Note which mode works, but avoid assigning that result to a particular physical microphone. Android's [voice-communication source](https://developer.android.com/reference/android/media/MediaRecorder.AudioSource#VOICE_COMMUNICATION) can use processing such as echo cancellation or automatic level adjustment where supported.

If the failure belongs to one app while local samples remain clear, check that app's audio settings and updates before changing phone-wide settings. For ordinary carrier calls, take the selected audio route and connection details into account as well.

## If speech is muffled or cuts out

Repeat the same sentence in the same room at a similar distance. Remove the case if it comes off safely, and check your model's microphone locations so fingers or accessories are not covering them. Do not assume every small opening is a microphone.

For surface dirt, switch off and unplug the phone, then gently wipe the exterior with a soft, dry, lint-free cloth. Do not put a pin, brush or cleaner into an opening, and do not use compressed air. [Samsung's cleaning guidance](https://www.samsung.com/us/support/answer/ANS10003416/) supports gentle exterior cleaning and advises against compressed air.

Make a new sample after each change. If a dropout occurs at the same point when the file is replayed through another working output, keep that file and [note when the failure happened](/guides/document-an-intermittent-android-problem/). Small tonal differences between recording apps are not enough to identify a fault by themselves.

Safe mode is an optional comparison if downloaded software is a realistic suspect. Follow your manufacturer's instructions and use a recording task that is available there. [Google's safe mode guide](https://support.google.com/android/answer/7665064) notes that some Home screen widgets may be removed, so preserve the layout first if that matters. If you cannot run an equivalent recording task, the comparison is inconclusive. If the same recording works only in safe mode, investigate downloaded apps next while keeping the earlier symptom in your notes. Restart normally afterward.

## Decide when the phone needs an assessment

A recording problem that keeps returning after the access, routing and restart checks is a reasonable point to ask the manufacturer or a repair service for an assessment. Ask sooner after a drop or liquid exposure.

On supported Galaxy devices, the Mic check in [Samsung Members Phone diagnostics](https://www.samsung.com/us/support/answer/ANS10003632/) can add another result. Samsung's US instructions use Discover > Diagnostics > Phone diagnostics, with access also from Support. Follow the prompts on your device, and record an unavailable or unfinished test as such. A recurring recording problem still matters even if that diagnostic passes.

Before repair, [prepare and check your backup](/guides/protect-your-data-before-an-android-repair/) while the phone is safe to use; [some apps cannot restore all their data](https://support.google.com/android/answer/2819582?hl=en). Restore any temporary Bluetooth or privacy changes when testing is finished.

If possible, keep one clear sample and one faulty sample made with the same short phrase. That pair often explains the problem more clearly than a long description of how the microphone sounded.
