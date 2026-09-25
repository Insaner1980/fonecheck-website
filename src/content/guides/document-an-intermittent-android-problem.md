---
title: "How to document an intermittent problem on an Android phone"
description: "An intermittent problem can disappear before anyone else sees it. A short record of what you were doing and what happened gives support a pattern."
category: Troubleshooting
published: 2026-09-22
updated: 2026-09-24
order: 4
illustration: report
---

An intermittent problem can disappear before anyone else sees it. That does not make the earlier failure useless. A short record of what you were doing, what happened and what the next attempt did can give support a pattern to work with even when there is no perfect video of the fault.

Do not keep using or charging a phone with battery swelling, leaking, an unusual odor or excessive heat just to gather more evidence. The [U.S. Fire Administration identifies these as stop-use signs](https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/batteries/). Ask for safety advice instead of trying to reproduce the problem.

## Start with one incident, not a diagnosis

Write down what you observed rather than naming the part you think failed. “The preview stayed black” preserves the event. “The camera sensor failed” adds a cause that the event itself did not establish. If the symptom is a black camera preview, the [camera checks](/guides/android-camera-not-working/) can help you describe a repeatable task.

An illustrative entry, not a real test result, could look like this:

```text
Date: 6 September 2026, 18:42 local time (UTC+03:00).
Action: Opened Camera from the Home screen, rear camera selected.
Expected: A moving preview.
Observed: Black preview for about 10 seconds. No error message.
Conditions: Indoors, unplugged, no accessories connected.
Next attempt: Closed and reopened Camera. Preview worked.
Evidence: clip-01.mp4, black preview visible from 00:04.
```

A note app, paper or another device is enough. Add the exact error text when there is one, what happened next and conditions that may help recreate the situation, such as charging, connected accessories, network state or waking from sleep. Mark estimated durations as approximate. If the record will be sent to someone in another time zone, include yours.

Keep the phone model, Android version, build number and affected app version at the top. [Google's Android version instructions](https://support.google.com/android/answer/7680439?hl=en) use Settings > About phone > Android version, although labels vary. Copy the actual values instead of writing “latest software.” If a version later changes, add the new value with a date and keep the earlier one.

Recent updates, drops and repairs are useful history. Record them as events rather than conclusions about what caused the problem. Android's [bug-report guidance](https://source.android.com/docs/setup/contribute/report-bugs) asks for reproduction steps, and an intermittent report should make clear that those steps do not fail every time.

## Save whatever the failure leaves behind

A screenshot can preserve an error message. A short screen recording can show the sequence before an app freezes or closes. [Google's capture instructions](https://support.google.com/android/answer/9075928?hl=en) explain Screen record in Quick Settings where supported. Capture the relevant action and outcome rather than a long stretch of unrelated activity.

Some failures need another camera. For a missed touch, the [touchscreen drawing test](/guides/android-touchscreen-unresponsive-areas/) can show where the gap appears, while video from another device can show your hand and the display together. For an audio dropout, keep the affected sound file when one exists. A playback timer by itself cannot show what was heard.

If screen recording was already running, note that too. The recording may change timing or behavior, and an incident that happened without recording still belongs in the history.

### If support asks for logs

Diagnostic logs contain different information from your notes, screenshots or clips. Send them only through an official support channel you intend to use. Google's [bug-report explanation](https://www.google.com/android/beta/feedback) warns that generated reports can contain personal information logged by the device or apps, so a full diagnostic archive should not be posted publicly.

On supported Galaxy devices, [Samsung's US instructions](https://www.samsung.com/us/support/troubleshoot/TSG10003603/) begin by holding the Samsung Members icon and choosing Error reports. Select the category, describe the event and choose Send system log data only when you intend to include it. Use your device's instructions if that shortcut is absent.

For that Samsung log process, timing matters. [Samsung's Gulf guidance](https://www.samsung.com/ae/support/apps-services/how-to-raise-an-error-report-through-the-samsung-members-app/) says to submit within five minutes of the problem and keep Members open while the logs are generated. That five-minute instruction belongs to this specific Samsung workflow, not to Android logs in general. A written incident record can still be useful later.

## Working attempts belong in the record too

When it is safe to repeat the action, keep the setup similar and change one relevant condition at a time. Do not disconnect an accessibility aid you need or reconnect damaged equipment to force another failure.

A follow-up note might say: “Two black previews in six openings, then none in three openings after a restart.” Those numbers describe the attempts you made. They do not predict whether the problem will return, and a later success does not retroactively repair the earlier event.

If the fault refuses to reappear, record its last occurrence and what it interrupted in normal use. There is no need to keep provoking an intermittent problem just to create a more dramatic example.

## Turn the notes into a short handoff

A useful support report can stay compact. Give the device and software versions, the failing action, the observed result, any repeat pattern and the most relevant attachment. Point to the useful moment in a longer clip. Separate what you saw yourself from estimates or secondhand information.

Check attachments for private messages, notifications, faces, account details and background conversation. Keep originals privately and redact a separate copy when needed, noting any edit that could affect interpretation. Share a device identifier only through a verified private support channel when it is required.

Before repair or an agreed reset, [prepare your data for the handover](/guides/protect-your-data-before-an-android-repair/): copy the notes and samples somewhere other than the affected phone while it is safe to use, then open the copies. A [factory reset erases phone data](https://support.google.com/android/answer/6088915), and [not every app restores everything](https://support.google.com/android/answer/2819582).

The goal is a timeline someone else can follow: what happened, under which conditions, what worked afterward and what is still unresolved.
