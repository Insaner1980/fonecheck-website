---
title: "Battery health says good on Android: what does it mean?"
description: "Good is a status category, not a percentage of original capacity. It also does not tell you how long the next charge will last."
category: Battery
published: 2026-09-22
updated: 2026-09-24
order: 5
illustration: battery
---

If an app is showing Android's standard battery-health field, **Good** is a status category. It is not a percentage of original capacity, and it does not tell you how long the next charge will last.

Android's [BatteryManager reference](https://developer.android.com/reference/android/os/BatteryManager#EXTRA_HEALTH) lists Good alongside categories such as overheat, cold and unknown. Those labels do not contain a wear percentage that can be converted into remaining capacity. Unknown means the status is unresolved.

Before interpreting the label, check which app or settings screen produced it. A manufacturer's own battery assessment may use different information and different labels.

## Does Good mean the battery is safe to keep using?

No software label should override physical warning signs. Stop using and charging a phone with battery swelling, leaking, an unusual odor or excessive heat, regardless of what the screen reports. The [U.S. Fire Administration identifies these as stop-use signs](https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/batteries/). Ask for safety advice instead of continuing to test the battery.

## Is the percentage beside the battery icon a health percentage?

No. That number is the current charge level. Android documents [battery level separately from charging state](https://developer.android.com/training/monitoring-device-state/battery-monitoring), and charging an older battery to 100% does not restore capacity lost through aging.

Remaining capacity is a separate estimate: how much charge the battery can hold compared with when it was new. [Google's Pixel battery-health explanation](https://support.google.com/pixelphone/answer/15738128?hl=en) uses that comparison for its capacity estimate.

For example, a phone could show 50% charge and 90% estimated remaining capacity at the same time. Those figures are illustrative. One describes how much charge is left now, while the other compares the battery's capacity with its earlier state. Neither is a direct percentage of the phone's original daily runtime because [the phone's activity also affects battery use](https://support.google.com/android/answer/7664692?hl=en).

## Why can the manufacturer's result look different?

The labels may be describing a different battery assessment.

On Pixel 8a and later, [Google documents Battery health](https://support.google.com/pixelphone/answer/15738128?hl=en) under Settings > Battery, with a separate Battery capacity entry. It is not available on Pixel Tablet. Google's Normal and Reduced labels relate to estimated remaining capacity. Reduced means below 80%, at which point Google advises considering replacement. That 80% threshold belongs to Google's Pixel battery-health system, not to Android's Good category.

For Galaxy phones, [Samsung's UK instructions](https://www.samsung.com/uk/support/mobile-devices/how-to-check-the-battery-status-on-your-samsung-galaxy-phone/) describe Normal, Weak and Bad in Samsung Members. Normal means the assessment reports no battery issue. Weak warns that efficiency may have decreased, while Bad describes substantially worse battery life and advises seeking help. The page does not define those labels as capacity percentages or apply Google's 80% threshold to them.

When two screens use different labels, read the explanation attached to each one. If the phone does not provide a capacity percentage, leave that value unavailable rather than estimating it from a status word.

## Why can runtime get worse while the label stays Good?

A shorter time between charges can come from reduced capacity, heavier power use or a combination of both. The Android Good category does not separate those possibilities. [Google's Android battery guidance](https://support.google.com/android/answer/7664692?hl=en) covers display settings, app activity and heat as factors that affect battery use.

Start with the phone's battery-usage screen. On Pixel, [Google's drain instructions](https://support.google.com/pixelphone/answer/6090599?hl=en) use Settings > Battery > Battery usage, with View by apps for the breakdown. Look at the period that concerned you before changing settings.

Compare periods with reasonably similar use. Note the starting charge, what the phone was doing and any software or charging changes. That gives you a record of the runtime problem without pretending to measure remaining capacity.

There is no need to drain the phone from full to empty to investigate the label. [Google says full-to-zero cycles are not needed to teach the phone its capacity](https://support.google.com/android/answer/7664692?hl=en).

## When is an assessment worth asking for?

Repeated unexpected shutdowns or a substantial, recurring loss of usable runtime deserve attention even when a status label looks reassuring. [Samsung's battery guidance](https://www.samsung.com/us/support/galaxy-battery/about-battery/) identifies those symptoms as reasons for a battery check. If shutdowns are intermittent, [note the circumstances of each one](/guides/document-an-intermittent-android-problem/).

Keep the exact label, where it appeared and a short description of the symptom that prompted you to look. The label and the day-to-day behavior answer different parts of the battery question, so report both. If an assessment leads to service, [check your backup before repair](/guides/protect-your-data-before-an-android-repair/).
