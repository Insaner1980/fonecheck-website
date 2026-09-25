---
title: "Android camera not working: what to check before a repair"
description: "Name the point where the camera fails first. A black preview, a dead shutter, a photo that won't save and a blurry image lead to different checks."
category: Camera
published: 2026-09-22
updated: 2026-09-24
order: 3
illustration: phone
---

Before changing settings, name the point where the camera fails. A black preview, a shutter that does nothing, a photo that will not save and an image that saves but looks blurry do not lead to the same checks.

Do not run these tests on a wet or physically damaged phone. With cracked camera glass, enclosure damage or suspected liquid damage, stop using the phone and ask the manufacturer for advice. Google's [Pixel 11 safety guidance](https://support.google.com/pixelphone/answer/17033799?hl=en) warns against using damaged devices and charging when moisture is present.

## If Camera will not open or the preview is black

For the affected app, open Settings > Apps > the app > Permissions and check Camera. Allow access while using that trusted app, where offered. [Google's permission instructions](https://support.google.com/android/answer/9431959?hl=en) describe this route, with labels and choices that vary by phone.

On supported devices running Android 12 or later, Camera access in Quick Settings or the privacy settings is a separate phone-wide control. Android's [privacy documentation](https://developer.android.com/training/permissions/explaining-access) explains that turning it off gives apps a blank feed even when the individual app permission is allowed.

End any video call or recording and close other apps that are using the camera. Android documents [camera-in-use and resource-limit errors](https://developer.android.com/reference/android/hardware/camera2/CameraAccessException), so active camera sessions are worth clearing before you move toward repair.

A temperature warning changes the plan. Stop reopening Camera, disconnect power if connected, move the phone out of the heat and let it cool. [Google's Pixel heat guidance](https://support.google.com/pixelphone/answer/3333708?hl=en) notes that thermal protection can disable the camera or flash.

## Follow one photo all the way to the saved file

Once access is available, restart the phone and open its usual Camera app. Select the main rear camera in Photo mode, photograph a stationary subject in good light, then open the saved image. If the front camera is offered, repeat there.

If the problem first appeared in another trusted app, close Camera and try the equivalent task in that app with similar lighting, subject and camera direction. Match the task to the original symptom. A successful still image tells you little about a video-only failure, so compare video when video is what failed.

| What you observe | Sensible next check |
|---|---|
| The usual Camera works but another app cannot show a preview | Check that app's camera access, settings and updates. |
| A comparable front or rear camera task fails in both apps | Continue with the software checks below, then request an assessment if it persists. |
| Preview works but the image cannot be saved or reopened | Keep the error and check storage as well as the app. |

Apps can expose different camera choices. Android's [CameraManager documentation](https://developer.android.com/reference/android/hardware/camera2/CameraManager) describes physical cameras that may be accessible only through a combined logical camera. A missing lens option should therefore stay in the report as an app or camera-choice observation, not as the name of a failed physical lens. Matching zoom labels across two apps do not guarantee that both used the same physical camera.

If saving is the problem, check free space in the phone's storage settings. [Google's storage guide](https://support.google.com/android/answer/7431795?hl=en) explains available-space and cleanup options. Remove only files you no longer need or have safely backed up, keep any images that document the camera problem, then repeat the same capture.

## If the photo saves but looks wrong

For blur, [gently wipe the external camera glass with a soft, clean cloth](https://support.google.com/pixelcamera/answer/6306624?hl=en). If a user-added camera cover is fitted, compare without it only when the manufacturer allows removal and it comes off safely. Do not pry or heat it off.

Use the normal view and move farther from a very close subject. [Samsung's image-quality guidance](https://www.samsung.com/africa_en/support/mobile-devices/fix-samsung-galaxy-blurry-poor-photo-and-video-quality/) identifies shooting distance and lens protectors as factors that can affect focus. The same guide describes bands caused by indoor lighting. If bands appear under one lamp, compare in daylight without pointing the camera toward the sun.

Keep the saved examples. If the fault comes and goes, [record the conditions and each attempt](/guides/document-an-intermittent-android-problem/) alongside them. A pair of images taken under clearly described conditions is more useful than relying on memory of how the picture looked earlier.

## Make software changes in a traceable order

Check for an official camera-app update and a system update, repeating the failing action after each change. For Pixels, [Google's camera troubleshooting](https://support.google.com/pixelcamera/answer/6306624?hl=en) also recommends clearing the Camera app's cache.

For Pixel Camera, press and hold the icon, open App info, then Storage & cache > Clear cache. On another brand, use the manufacturer's instructions for its Camera app.

**Clear cache is not Clear storage or Clear data.** The [Android storage guide](https://support.google.com/android/answer/7431795?hl=en) distinguishes temporary cache files from stored app data. Do not substitute the data-clearing option, and do not jump from a camera symptom straight to a factory reset.

Safe mode can help when downloaded software may be interfering. Follow your manufacturer's instructions and compare a task the built-in Camera can perform there. [Google's safe mode guide](https://support.google.com/android/answer/7665064) warns that some Home screen widgets may be removed, so take a screenshot first if needed. If the task is unavailable in safe mode, leave that comparison inconclusive. If the camera task works only there, downloaded apps are worth investigating next. Restart normally afterward and restore privacy settings changed only for testing.

On supported Galaxy devices, [Samsung Members Phone diagnostics](https://www.samsung.com/us/support/answer/ANS10003632/) may also offer a Camera check. The first run can begin a full scan, which Samsung says can be stopped so an individual test can be selected. Keep that outcome with the other samples.

## When the evidence is enough for repair support

If the same camera task keeps failing after the relevant access, restart and update checks, especially in more than one app, ask the manufacturer or a repair provider for an assessment. A diagnostic that passes does not erase a separate task that still fails.

Before service or any agreed reset, [verify your backup](/guides/protect-your-data-before-an-android-repair/) while the phone is safe to use. A [factory reset erases phone data](https://support.google.com/android/answer/6088915), and [some apps cannot restore all their data and settings](https://support.google.com/android/answer/2819582?hl=en). Store useful camera samples somewhere other than the phone being assessed.

Bring the exact failing action with you: the app, camera choice, mode, error and a saved example when one exists. A preceding drop, liquid exposure, update or repair belongs in that history without being treated as proof of the cause.
