export const categories = [
  { name: 'Device', group: 'inside', short: 'Model, Android version and specifications.', detail: 'Get to know the hardware and software behind your phone: its model, Android version and available specifications.', free: true },
  { name: 'Performance', group: 'inside', short: 'CPU, graphics and memory, with short performance tests.', detail: 'Explore CPU, graphics and memory information, with short, bounded performance checks.' },
  { name: 'SIM & mobile network', group: 'signals', short: 'SIM, carrier and mobile network details.', detail: 'See the SIM, carrier and mobile network information your device makes available.' },
  { name: 'Display', group: 'hands', short: 'Pixel colour checks and a touch grid.', detail: 'Inspect screen information, look for pixel issues with guided colour checks, and check touch response on a grid.', free: true },
  { name: 'Audio', group: 'hands', short: 'Speaker playback and a microphone recording.', detail: 'Listen to the speaker and record and play back a microphone sample. Confirm what you actually hear.' },
  { name: 'Camera', group: 'hands', short: 'Live preview and a test photo.', detail: 'Explore camera information, open a preview and take a test photo using supported camera features.' },
  { name: 'Sensors', group: 'signals', short: 'Live sensor readings and guided checks.', detail: 'Explore available sensors, their readings and guided checks for supported functions.', free: true },
  { name: 'Connectivity', group: 'signals', short: 'Wi-Fi, Bluetooth, NFC and GPS. Not a speed test.', detail: 'Check available Wi-Fi, Bluetooth, NFC, GPS and mobile connectivity information. This is not an internet speed test.' },
  { name: 'Battery', group: 'inside', short: 'Charge level, charging state and temperature.', detail: 'See charge level, charging state, temperature and other battery information provided by Android.', free: true },
  { name: 'Thermal', group: 'inside', short: 'Thermal status and battery temperature.', detail: 'Review the thermal status and battery temperature available on your device.' },
  { name: 'Storage', group: 'inside', short: 'Storage details and an optional speed test.', detail: 'Explore storage information and optionally test read and write speed in the app’s own cache.' },
  { name: 'Vibration', group: 'hands', short: 'A guided vibration you confirm by feel.', detail: 'Check vibration support and confirm whether you can feel the guided vibration test.' },
  { name: 'Volume buttons', group: 'hands', short: 'Press each button and see it register.', detail: 'Press your phone’s volume buttons to check that they respond. The power button is not tested.' },
  { name: 'Biometrics', group: 'signals', short: 'Biometric support and the system unlock prompt.', detail: 'Check Android-reported biometric support and try the system authentication prompt.' },
];

export const faqs = [
  ['When can I download fonecheck?', 'fonecheck is planned for Google Play in fall 2026. It is not available to download yet, and an exact release date has not been announced.'],
  ['Which phones will it support?', 'fonecheck is designed for Android phones running Android 8.0 or later. Available information and tests depend on the phone’s hardware, Android version and permissions.'],
  ['What will be free?', 'Device, Display, Battery and Sensors are planned to be available without a time limit. The full version is a one-time in-app purchase with no subscription: €6.99 in the euro area, with regional prices in other countries.'],
  ['Is Full Check completely automatic?', 'No. Full Check brings automatic observations and guided hands-on checks together. Some steps ask you to listen, look, touch or confirm what happened. Full Check is part of the planned paid version.'],
  ['Does a passing report guarantee a fault-free phone?', 'No. A report describes the observations saved during that check. A score and test coverage describe different things. Unavailable or untested hardware is not automatically a fault, and even full coverage does not certify the entire phone’s condition.'],
  ['Where do my reports go?', 'Diagnostic reports are stored locally on your phone. You choose whether to export and share them. There is no automatic report upload or cloud sync. Exporting a report does not transfer your full report history to another phone.'],
];
